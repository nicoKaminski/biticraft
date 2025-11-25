import { Boton } from "@/components/ui/Boton";

export const SeccionServicios = () => {
  return (
    <section className="bg-[image:var(--bg-gradient-rosa-fade)] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[length:var(--text-h2-mobile)] md:text-[length:var(--text-h2)] font-[weight:var(--font-weight-bold)] text-marca-gris">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-marca-gris text-[length:var(--text-body)]">
            Soluciones creativas para cada una de tus necesidades.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-[var(--radius-card-lg)] bg-white p-8 text-center shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-[length:var(--text-h3-mobile)] md:text-[length:var(--text-h3)] font-[weight:var(--font-weight-bold)] text-marca-gris">
              Papelería Creativa
            </h3>
            <p className="mt-2 text-marca-gris text-[length:var(--text-body)]">
              Diseño y elaboración de piezas{" "}
              <span className="text-marca-rosa font-bold">únicas</span> para
              eventos: cumpleaños, bodas, comuniones y más. (Letras 3D, toppers,
              souvenirs).
            </p>
          </div>

          <div className="rounded-[var(--radius-card-lg)] bg-white p-8 text-center shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-[length:var(--text-h3-mobile)] md:text-[length:var(--text-h3)] font-[weight:var(--font-weight-bold)] text-marca-gris">
              Gráfica Digital
            </h3>
            <p className="mt-2 text-marca-gris text-[length:var(--text-body)]">
              Soluciones{" "}
              <span className="text-marca-rosa font-bold">
                prácticas y modernas
              </span>
              . Invitaciones digitales (animadas o estáticas) y kits gráficos
              para compartir o imprimir.
            </p>
          </div>

          <div className="rounded-[var(--radius-card-lg)] bg-white p-8 text-center shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-[length:var(--text-h3-mobile)] md:text-[length:var(--text-h3)] font-[weight:var(--font-weight-bold)] text-marca-gris">
              Papelería Funcional
            </h3>
            <p className="mt-2 text-marca-gris text-[length:var(--text-body)]">
              Diseños <span className="text-marca-rosa font-bold">útiles</span>{" "}
              para el día a día. Agendas docentes, planners mensuales, cuadernos
              personalizados y más.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Boton href="/servicios">Ver todos los servicios</Boton>
        </div>
      </div>
    </section>
  );
};
