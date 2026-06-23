"use server";

import nodemailer from "nodemailer";
import { EVENT_TYPES, EventType } from "./contacto/constants";

type EstadoFormulario = { success: boolean; message: string } | null;

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
  // 1. Lectura segura de FormData
  const nombreRaw = formData.get("nombre");
  const emailRaw = formData.get("email");
  const tipoEventoRaw = formData.get("tipoEvento");
  const mensajeRaw = formData.get("mensaje");
  const honeypotRaw = formData.get("website");

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

  // 9. Honeypot: si contiene un valor, no enviar el correo y devolver respuesta neutral
  if (honeypotRaw !== "") {
    return {
      success: true,
      message: "¡Gracias! Hemos recibido tu mensaje. Te responderemos a la brevedad.",
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

  // 7. Comprobación de variables de entorno
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    console.error("Error de configuración: Faltan variables de entorno GMAIL_USER o GMAIL_PASS.");
    return {
      success: false,
      message: "Hubo un error al enviar tu mensaje. Por favor intenta más tarde o escribinos por WhatsApp.",
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
      message: "¡Gracias! Hemos recibido tu mensaje. Te responderemos a la brevedad.",
    };
  } catch {
    // 8. Manejo de errores seguro
    console.error("Error técnico: Ocurrió un fallo al intentar enviar el correo de contacto.");
    return {
      success: false,
      message: "Hubo un error al enviar tu mensaje. Por favor intenta más tarde o escribinos por WhatsApp.",
    };
  }
}

