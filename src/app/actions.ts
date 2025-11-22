"use server";

type EstadoFormulario = { success: boolean; message: string } | null;

export async function enviarFormularioContacto(
  prevState: EstadoFormulario,
  formData: FormData
) {
  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const tipoEvento = formData.get("tipoEvento");
  const mensaje = formData.get("mensaje");

  // Validación simple
  if (!nombre || !email || !mensaje) {
    return {
      success: false,
      message: "Por favor, completa todos los campos obligatorios.",
    };
  }

  // Simulación de envío de email
  console.log("--- NUEVO MENSAJE DE CONTACTO ---");
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Evento:", tipoEvento);
  console.log("Mensaje:", mensaje);
  console.log("---------------------------------");

  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message:
      "¡Gracias! Hemos recibido tu mensaje. Te responderemos a la brevedad.",
  };
}
