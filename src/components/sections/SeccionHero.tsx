import { Boton } from "../ui/Boton";

export const SeccionHero = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center md:py-32">
      <h1 className="text-5xl font-extrabold text-marca-gris md:text-7xl tracking-tight">
        ¡Celebra con estilo <br className="hidden md:block" /> y{" "}
        <span className="text-marca-rosa">creatividad</span>!
      </h1>
      <p className="mt-6 text-xl text-marca-gris max-w-2xl mx-auto leading-relaxed">
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
