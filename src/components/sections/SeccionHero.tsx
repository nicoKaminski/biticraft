import { Boton } from "../ui/Boton";

export const SeccionHero = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center md:py-32">
      <h1 className="text-[length:var(--text-h1-mobile)] md:text-[length:var(--text-h1)] font-[weight:var(--font-weight-light)] text-marca-gris tracking-tighter leading-[0.9]">
        ¡Celebra con{" "}
        <span className="text-marca-rosa font-[weight:var(--font-weight-medium)]">
          estilo!
        </span>{" "}
        <br className="hidden md:block" /> y{" "}
        <span className="text-marca-rosa font-[weight:var(--font-weight-medium)]">
          creatividad!
        </span>
      </h1>
      <p className="mt-6 text-[length:var(--text-body-lg)] text-marca-gris max-w-2xl mx-auto leading-relaxed">
        En <strong>Biticraft</strong> creamos papelería personalizada para hacer
        de tu evento un momento único. Desde gigantografías hasta souvenirs,
        todo diseñado a tu medida.
      </p>
      <div className="mt-8">
        <Boton href="/contacto">¡Quiero cotizar!</Boton>
      </div>
    </section>
  );
};
