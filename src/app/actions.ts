"use server";

import nodemailer from "nodemailer";
import { EVENT_TYPES, EventType } from "./contacto/constants";

type EstadoFormulario = { success: boolean; message: string } | null;

const MENSAJE_ERROR_ENVIO =
  "Hubo un error al enviar tu mensaje. Por favor intenta más tarde o escribinos por WhatsApp.";
const MENSAJE_EXITO_ENVIO =
  "¡Gracias! Hemos recibido tu mensaje. Te responderemos a la brevedad.";
const CAMPOS_CONTACTO = new Set([
  "nombre",
  "email",
  "tipoEvento",
  "mensaje",
  "website",
  "turnstileToken",
]);
const TURNSTILE_ACTION = "biticraft_contact";
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_TIMEOUT_MS = 8_000;

function esCampoInternoServerAction(name: string): boolean {
  return (
    name === "$ACTION_KEY" ||
    /^\$ACTION_ID_[\w-]+$/.test(name) ||
    /^\$ACTION_REF_[\w-]+$/.test(name) ||
    /^\$ACTION_[\w-]+:[^:]+$/.test(name)
  );
}

function tieneCamposInvalidos(formData: FormData): boolean {
  const encontrados = new Set<string>();

  for (const [name] of formData.entries()) {
    if (esCampoInternoServerAction(name)) {
      continue;
    }

    if (!CAMPOS_CONTACTO.has(name) || encontrados.has(name)) {
      return true;
    }

    encontrados.add(name);
  }

  return false;
}

async function verificarTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const configuredHostnames = process.env.TURNSTILE_ALLOWED_HOSTNAMES;

  if (!secret || !configuredHostnames) {
    return false;
  }

  const hostnameEntries = configuredHostnames.split(",").map((hostname) => hostname.trim());
  if (hostnameEntries.some((hostname) => hostname.length === 0)) {
    return false;
  }

  const allowedHostnames = hostnameEntries.map((hostname) => hostname.toLowerCase());
  const body = new URLSearchParams({ secret, response: token });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TURNSTILE_TIMEOUT_MS);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: controller.signal,
    });

    if (!response.ok) {
      return false;
    }

    const result: unknown = await response.json();
    if (typeof result !== "object" || result === null) {
      return false;
    }

    const verification = result as {
      success?: unknown;
      action?: unknown;
      hostname?: unknown;
    };

    return (
      verification.success === true &&
      verification.action === TURNSTILE_ACTION &&
      typeof verification.hostname === "string" &&
      allowedHostnames.includes(verification.hostname.toLowerCase())
    );
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (match) => {
    switch (match) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return match;
    }
  });
}

export async function enviarFormularioContacto(
  prevState: EstadoFormulario,
  formData: FormData
) {
  if (tieneCamposInvalidos(formData)) {
    return {
      success: false,
      message: "Los datos enviados no tienen un formato válido.",
    };
  }

  // Lectura segura de FormData
  const nombreRaw = formData.get("nombre");
  const emailRaw = formData.get("email");
  const tipoEventoRaw = formData.get("tipoEvento");
  const mensajeRaw = formData.get("mensaje");
  const honeypotRaw = formData.get("website");
  const turnstileTokenRaw = formData.get("turnstileToken");

  if (
    typeof nombreRaw !== "string" ||
    typeof emailRaw !== "string" ||
    typeof tipoEventoRaw !== "string" ||
    typeof mensajeRaw !== "string" ||
    typeof honeypotRaw !== "string"
  ) {
    return {
      success: false,
      message: "Los datos enviados no tienen un formato válido.",
    };
  }

  // Honeypot: si contiene un valor, no enviar el correo y devolver respuesta neutral.
  if (honeypotRaw !== "") {
    return {
      success: true,
      message: MENSAJE_EXITO_ENVIO,
    };
  }

  if (typeof turnstileTokenRaw !== "string") {
    return {
      success: false,
      message: MENSAJE_ERROR_ENVIO,
    };
  }

  // 2. Normalización
  const nombre = nombreRaw.trim();
  const email = emailRaw.trim();
  const tipoEvento = tipoEventoRaw.trim();
  const mensaje = mensajeRaw.trim();

  // 3. Validaciones del servidor
  // Nombre: obligatorio, min 2, max 80
  if (!nombre || nombre.length < 2 || nombre.length > 80) {
    return {
      success: false,
      message: "El nombre es obligatorio y debe tener entre 2 y 80 caracteres.",
    };
  }

  // Email: obligatorio, max 254, formato válido, sin saltos de línea
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.length > 254 || !emailRegex.test(email) || email.includes("\n") || email.includes("\r")) {
    return {
      success: false,
      message: "Por favor, ingresá un correo electrónico válido de hasta 254 caracteres.",
    };
  }

  // Mensaje: obligatorio, min 10, max 3000
  if (!mensaje || mensaje.length < 10 || mensaje.length > 3000) {
    return {
      success: false,
      message: "El mensaje es obligatorio y debe tener entre 10 y 3000 caracteres.",
    };
  }

  // Tipo de evento: opcional, si tiene contenido, debe estar en EVENT_TYPES
  if (tipoEvento !== "" && !EVENT_TYPES.includes(tipoEvento as EventType)) {
    return {
      success: false,
      message: "El tipo de evento seleccionado no es válido.",
    };
  }

  const turnstileToken = turnstileTokenRaw;
  if (
    !turnstileToken.trim() ||
    turnstileToken.length > 2048
  ) {
    return {
      success: false,
      message: MENSAJE_ERROR_ENVIO,
    };
  }

  if (!(await verificarTurnstile(turnstileToken))) {
    return {
      success: false,
      message: MENSAJE_ERROR_ENVIO,
    };
  }

  // Comprobación de variables de entorno del correo.
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    console.error("Error de configuración del envío de correo de contacto.");
    return {
      success: false,
      message: MENSAJE_ERROR_ENVIO,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    // 5. Escape del contenido HTML
    const nombreEscaped = escapeHtml(nombre);
    const emailEscaped = escapeHtml(email);
    const tipoEventoEscaped = escapeHtml(tipoEvento);
    const mensajeEscaped = escapeHtml(mensaje).replace(/\n/g, "<br/>");

    // 6. Protección de headers (replyTo, subject, from, to usan solo variables seguras/validadas/mapeadas)
    const mailOptions = {
      from: `Web Biticraft <${user}>`,
      to: user,
      replyTo: email,
      subject: `Nuevo Mensaje Web: ${tipoEvento || "Consulta General"}`,
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Evento: ${tipoEvento || "Consulta General"}

        Mensaje:
        ${mensaje}
      `,
      html: `
        <h3>Nuevo mensaje desde la web</h3>
        <p><strong>Nombre:</strong> ${nombreEscaped}</p>
        <p><strong>Email:</strong> ${emailEscaped}</p>
        <p><strong>Evento:</strong> ${tipoEventoEscaped || "Consulta General"}</p>
        <hr/>
        <p><strong>Mensaje:</strong></p>
        <p>${mensajeEscaped}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: MENSAJE_EXITO_ENVIO,
    };
  } catch {
    // 8. Manejo de errores seguro
    console.error("Error técnico: Ocurrió un fallo al intentar enviar el correo de contacto.");
    return {
      success: false,
      message: MENSAJE_ERROR_ENVIO,
    };
  }
}

