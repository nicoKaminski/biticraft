import Image from "next/image";
import { Boton } from "@/components/ui/Boton";
import styles from "./SeccionGaleriaDestacada.module.css";

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
    <section className={styles.galeria}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          Galería Destacada
        </h2>
        <div className={styles.grilla}>
          {imagenesDestacadas.map((imagen, index) => (
            <div
              key={index}
              className={styles.tarjetaImagen}
            >
              <Image
                src={imagen.src}
                alt={imagen.alt}
                width={400}
                height={400}
                className={styles.imagen}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
        <div className={styles.ctaContenedor}>
          <Boton href="/galeria">Ver Galería Completa</Boton>
        </div>
      </div>
    </section>
  );
};
