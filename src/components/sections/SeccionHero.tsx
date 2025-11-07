export const SeccionHero = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-marca-gris md:text-5xl">
        Te damos la bienvenida a BitiCraft
      </h1>
      <p className="mt-4 text-lg text-marca-gris">
        Diseños personalizados y papelería creativa para tus eventos.
      </p>
      <a
        href="/contacto"
        className="mt-8 inline-block rounded-md bg-marca-rosa px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-marca-lila-oscuro"
      >
        ¡Quiero cotizar!
      </a>
    </section>
  );
};
