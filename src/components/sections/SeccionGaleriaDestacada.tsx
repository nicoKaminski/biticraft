import Image from "next/image";
import { Boton } from "@/components/ui/Boton";

export const SeccionGaleriaDestacada = () => {
  const imagenesDestacadas = [
    {
      src: "https://placehold.co/400x400/EED7D7/AF8F8F?text=Letra+3D",
      alt: "Letra 3D decorada para fiesta",
    },
    {
      src: "https://placehold.co/400x400/D7EED7/8FAF8F?text=Topper",
      alt: "Topper de pastel personalizado",
    },
    {
      src: "https://placehold.co/400x400/D7D7EE/8F8FAF?text=Invitacion",
      alt: "Invitación digital animada",
    },
  ];

  return (
    <section className="bg-marca-crema py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-marca-gris mb-8">
          Galería Destacada
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {imagenesDestacadas.map((imagen, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={imagen.src}
                alt={imagen.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                unoptimized={true}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Boton href="/galeria">Ver Galería Completa</Boton>
        </div>
      </div>
    </section>
  );
};
