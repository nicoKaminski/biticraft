const seccionSobreMi = {
  titulo: "¿Qué me hace única?",
  parrafo1:
    "En BitiCraft, no solo trabajo en la creación de papelería creativa, sino que también disfruto y me apasiona atender a cada cliente de manera especial y cercana.",
  parrafo2:
    "Tu satisfacción es mi mayor logro, y estoy acá para asesorarte y guiar en el proceso creativo. Los diseños son únicos porque reflejan tu estilo y personalidad.",
};

export const SeccionSobreMi = () => {
  return (
    <section className="bg-marca-crema py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-marca-gris">
            {seccionSobreMi.titulo}
          </h2>
          <p className="mt-6 text-marca-gris">{seccionSobreMi.parrafo1}</p>
          <p className="mt-4 text-marca-gris">{seccionSobreMi.parrafo2}</p>
        </div>
      </div>
    </section>
  );
};
