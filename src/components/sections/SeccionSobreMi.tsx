export const SeccionSobreMi = () => {
  return (
    <section className="bg-[image:var(--bg-gradient-violeta)] py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[length:var(--text-h2-mobile)] md:text-[length:var(--text-h2)] font-[weight:var(--font-weight-bold)] text-marca-gris mb-8">
            ¿Quiénes somos?
          </h2>

          <div className="text-[length:var(--text-body-lg)] text-marca-gris leading-relaxed space-y-6">
            <p>
              ¡Hola! Somos{" "}
              <span className="font-bold text-marca-rosa">Biticraft</span>. Nos
              apasiona ponerle color y alegría a tus celebraciones.
            </p>
            <p>
              Nuestro diferencial es la{" "}
              <strong>atención cercana y divertida</strong>: nos encanta
              escucharte y crear juntos esa idea loca que tenés en mente. Ya sea
              una boda, un cumple de 15, o el primer añito de tu bebé, estamos
              acá para que cada detalle cuente.
            </p>
            <p className="mt-4 text-marca-morado-oscuro font-[weight:var(--font-weight-medium)] text-xl">
              ¡Todo es 100% personalizado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
