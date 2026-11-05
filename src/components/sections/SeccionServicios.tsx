import { Boton } from "@/components/ui/Boton";
import Image from "next/image";
import styles from "./SeccionServicios.module.css";

export const SeccionServicios = () => {
  return (
    <section className={styles.servicios}>
      <div className={styles.container}>
        <div className={styles.encabezado}>
          <h2 className={styles.titulo}>
            Nuestros Servicios
          </h2>
          <p className={styles.subtitulo}>
            Soluciones creativas para cada una de tus necesidades.
          </p>
        </div>

        <div className={styles.grilla}>
          <article className={styles.tarjeta} tabIndex={0}>
            <div className={styles.visual}>
              <div className={styles.imagenContenedor}>
                <Image
                  className={styles.imagen}
                  src="/home/servicios/papeleria-creativa.webp"
                  alt="Papelería creativa para eventos con decoración de zorrito, letra 3D, souvenir y topper"
                  fill
                  sizes="(min-width: 80rem) 21.6rem, (min-width: 64rem) 18.3rem, (min-width: 48rem) 20.9rem, calc(100vw - 3.1rem)"
                />
              </div>
              <div className={styles.panel}>
                <h3 className={styles.tarjetaTitulo}>Papelería Creativa</h3>
                <p className={styles.tarjetaDescripcion}>
                  Diseño y elaboración de piezas{" "}
                  <span className={styles.palabraDestacada}>únicas</span> para
                  eventos: cumpleaños, bodas, comuniones y más. (Letras 3D,
                  toppers, souvenirs).
                </p>
              </div>
            </div>
          </article>

          <article className={styles.tarjeta} tabIndex={0}>
            <div className={styles.visual}>
              <div className={styles.imagenContenedor}>
                <Image
                  className={styles.imagen}
                  src="/home/servicios/grafica-digital.webp"
                  alt="Invitación digital de boda presentada en un celular"
                  fill
                  sizes="(min-width: 80rem) 21.6rem, (min-width: 64rem) 18.3rem, (min-width: 48rem) 20.9rem, calc(100vw - 3.1rem)"
                />
              </div>
              <div className={styles.panel}>
                <h3 className={styles.tarjetaTitulo}>Gráfica Digital</h3>
                <p className={styles.tarjetaDescripcion}>
                  Soluciones{" "}
                  <span className={styles.palabraDestacada}>
                    prácticas y modernas
                  </span>
                  . Invitaciones digitales (animadas o estáticas) y kits
                  gráficos para compartir o imprimir.
                </p>
              </div>
            </div>
          </article>

          <article className={styles.tarjeta} tabIndex={0}>
            <div className={styles.visual}>
              <div className={styles.imagenContenedor}>
                <Image
                  className={styles.imagen}
                  src="/home/servicios/papeleria-funcional.webp"
                  alt="Agenda personalizada en tonos pastel con elementos de escritorio"
                  fill
                  sizes="(min-width: 80rem) 21.6rem, (min-width: 64rem) 18.3rem, (min-width: 48rem) 20.9rem, calc(100vw - 3.1rem)"
                />
              </div>
              <div className={styles.panel}>
                <h3 className={styles.tarjetaTitulo}>Papelería Funcional</h3>
                <p className={styles.tarjetaDescripcion}>
                  Diseños <span className={styles.palabraDestacada}>útiles</span>{" "}
                  para el día a día. Agendas docentes, planners mensuales,
                  cuadernos personalizados y más.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.ctaContenedor}>
          <Boton href="/servicios">Ver todos los servicios</Boton>
        </div>
      </div>
    </section>
  );
};
