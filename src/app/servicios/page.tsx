import Image from "next/image";
import { Boton } from "@/components/ui/Boton";

const productosFisicos = [
  {
    nombre: "Gigantografías",
    img: "https://placehold.co/600x400/FEFOD6/3c3c3b?text=Gigantografias",
  },
  {
    nombre: "Letras 3D",
    img: "https://placehold.co/600x400/c9cddf/3c3c3b?text=Letras+3D",
  },
  {
    nombre: "Toppers para Torta",
    img: "https://placehold.co/600x400/d4e7ce/3c3c3b?text=Toppers",
  },
  {
    nombre: "Piñatas",
    img: "https://placehold.co/600x400/f9cdcc/3c3c3b?text=Piñatas",
  },
  {
    nombre: "Carteles de Bienvenida",
    img: "https://placehold.co/600x400/e7d8e9/3c3c3b?text=Carteles",
  },
  {
    nombre: "Centros de Mesa",
    img: "https://placehold.co/600x400/cde8ec/3c3c3b?text=Centros+de+Mesa",
  },
  {
    nombre: "Kits de Emergencia/Baño",
    img: "https://placehold.co/600x400/FEFOD6/3c3c3b?text=Kits+Emergencia",
  },
  {
    nombre: "Souvenirs",
    img: "https://placehold.co/600x400/c9cddf/3c3c3b?text=Souvenirs",
  },
];

const papeleriaDigital = [
  {
    nombre: "Invitaciones Interactivas",
    img: "https://placehold.co/600x400/d4e7ce/3c3c3b?text=Invitaciones",
  },
  {
    nombre: "Gráfica Editable para Bodas",
    img: "https://placehold.co/600x400/f9cdcc/3c3c3b?text=Grafica+Bodas",
  },
  {
    nombre: "Kits Imprimibles",
    img: "https://placehold.co/600x400/e7d8e9/3c3c3b?text=Kits+Imprimibles",
  },
];

const papeleriaFuncional = [
  {
    nombre: "Agendas Docentes",
    descripcion: "Calendario anual, planner mensual, asistencia.",
    img: "https://placehold.co/600x400/cde8ec/3c3c3b?text=Agendas+Docentes",
  },
];

export default function PaginaServicios() {
  return (
    <div className="bg-white">
      {/* Hero Servicios */}
      <section className="bg-[image:var(--bg-gradient-lila)] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-marca-gris md:text-5xl">
            Nuestros Servicios
          </h1>
          <p className="mt-4 text-xl text-marca-gris max-w-2xl mx-auto">
            Todo lo que necesitas para tu evento, diseñado con amor y
            creatividad.
          </p>
        </div>
      </section>

      {/* Productos Físicos */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-marca-gris mb-8 border-b-4 border-marca-rosa inline-block">
          Productos Físicos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosFisicos.map((producto) => (
            <div
              key={producto.nombre}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="aspect-w-3 aspect-h-2 relative h-48 w-full">
                <Image
                  src={producto.img}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <div className="bg-white p-4 text-center">
                <h3 className="font-semibold text-marca-gris text-lg">
                  {producto.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Papelería Digital */}
      <section className="py-16 bg-[image:var(--bg-gradient-crema)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-marca-gris mb-8 border-b-4 border-marca-verde inline-block">
            Papelería Digital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {papeleriaDigital.map((producto) => (
              <div
                key={producto.nombre}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={producto.img}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
                <h3 className="font-bold text-xl text-marca-gris mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-sm text-gray-600">
                  Soluciones modernas y ecológicas para tu evento.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papelería Funcional */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-marca-gris mb-8 border-b-4 border-marca-celeste inline-block">
          Papelería Funcional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src={papeleriaFuncional[0].img}
              alt={papeleriaFuncional[0].nombre}
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-marca-gris mb-4">
              {papeleriaFuncional[0].nombre}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Organización perfecta para tu año escolar. Incluye:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>Calendario Anual</li>
              <li>Planner Mensual</li>
              <li>Planillas de Asistencia</li>
              <li>Notas y Recordatorios</li>
            </ul>
            <Boton href="/contacto">¡La quiero!</Boton>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center bg-marca-rosa/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-marca-gris mb-6">
            ¿No encontrás lo que buscás?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Recordá que todo es 100% personalizado. ¡Contanos tu idea!
          </p>
          <Boton href="/contacto">Contactar ahora</Boton>
        </div>
      </section>
    </div>
  );
}
