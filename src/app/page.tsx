const seccionSobreMi = {
  titulo: "¿Qué me hace única?",
  parrafo1:
    "En BitiCraft, no solo trabajo en la creación de papelería creativa, sino que también disfruto y me apasiona atender a cada cliente de manera especial y cercana.",
  parrafo2:
    "Tu satisfacción es mi mayor logro, y estoy acá para asesorarte y guiar en el proceso creativo. Los diseños son únicos porque reflejan tu estilo y personalidad.",
};

export default function PaginaInicio() {
  return (
    <>
      {/* --- Sección Hero (Bienvenida) --- */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Te damos la bienvenida a BitiCraft
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Diseños personalizados y papelería creativa para tus eventos.
        </p>
        <a
          href="/contacto"
          className="mt-8 inline-block rounded-md bg-pink-500 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-pink-600"
        >
          ¡Quiero cotizar!
        </a>
      </section>

      {/* --- Sección Sobre Mí --- */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {seccionSobreMi.titulo}
            </h2>
            <p className="mt-6 text-gray-700">{seccionSobreMi.parrafo1}</p>
            <p className="mt-4 text-gray-700">{seccionSobreMi.parrafo2}</p>
          </div>
        </div>
      </section>

      {/* Acá podemos agregar más secciones después (Galería, Servicios, etc.) */}
    </>
  );
}
