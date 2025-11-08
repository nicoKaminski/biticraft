import { Boton } from "../ui/Boton";

export const SeccionHero = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-marca-gris md:text-5xl">
        Te damos la bienvenida a BitiCraft
      </h1>
      <p className="mt-4 text-lg text-marca-gris">
        Diseños personalizados y papelería creativa para tus eventos.
      </p>
      <div className="mt-8">
        <Boton href="/contacto">¡Quiero cotizar!</Boton>
      </div>
    </section>
  );
};
