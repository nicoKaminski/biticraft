import { Boton } from "@/components/ui/Boton";

const listaDeServicios = [
  {
    nombre: "Papelería Creativa",
    descripcion:
      "Diseño y elaboración de piezas únicas para eventos: cumpleaños, bodas, comuniones y más. (Letras 3D, toppers, souvenirs).",
  },
  {
    nombre: "Gráfica Digital",
    descripcion:
      "Soluciones prácticas y modernas. Invitaciones digitales (animadas o estáticas) y kits gráficos para compartir o imprimir.",
  },
  {
    nombre: "Papelería Funcional",
    descripcion:
      "Diseños útiles para el día a día. Agendas docentes, planners mensuales, cuadernos personalizados y más.",
  },
];

export const SeccionServicios = () => {
  return (
    <section className="bg-[image:var(--bg-gradient-lila)] py-20">
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
          {listaDeServicios.map((servicio) => (
            <div
              key={servicio.nombre}
              className="rounded-[var(--radius-card)] bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-[length:var(--text-h3-mobile)] md:text-[length:var(--text-h3)] font-[weight:var(--font-weight-bold)] text-marca-gris">
                {servicio.nombre}
              </h3>
              <p className="mt-2 text-marca-gris text-[length:var(--text-body)]">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Boton href="/servicios">Ver todos los servicios</Boton>
        </div>
      </div>
    </section>
  );
};
