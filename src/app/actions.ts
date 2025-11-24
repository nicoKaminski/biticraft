"use server";

import nodemailer from "nodemailer";

type EstadoFormulario = { success: boolean; message: string } | null;

export async function enviarFormularioContacto(
  prevState: EstadoFormulario,
  formData: FormData
) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const tipoEvento = formData.get("tipoEvento") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !email || !mensaje) {
    return {
      success: false,
      message: "Por favor, completa todos los campos obligatorios.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Web Biticraft <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nuevo Mensaje Web: ${tipoEvento || "Consulta General"}`,
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Evento: ${tipoEvento}
        
        Mensaje:
        ${mensaje}
      `,
      html: `
        <h3>Nuevo mensaje desde la web</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Evento:</strong> ${tipoEvento}</p>
        <hr/>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message:
        "¡Gracias! Hemos recibido tu mensaje. Te responderemos a la brevedad.",
    };
  } catch (error) {
    console.error("Error al enviar email:", error);
    return {
      success: false,
      message:
        "Hubo un error al enviar tu mensaje. Por favor intenta más tarde o escribinos por WhatsApp.",
    };
  }
}
