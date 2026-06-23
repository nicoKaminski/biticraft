import { Boton } from "@/components/ui/Boton";
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
          <div className={styles.tarjeta}>
            <h3 className={styles.tarjetaTitulo}>
              Papelería Creativa
            </h3>
            <p className={styles.tarjetaDescripcion}>
              Diseño y elaboración de piezas{" "}
              <span className={styles.palabraDestacada}>únicas</span> para
              eventos: cumpleaños, bodas, comuniones y más. (Letras 3D, toppers,
              souvenirs).
            </p>
          </div>

          <div className={styles.tarjeta}>
            <h3 className={styles.tarjetaTitulo}>
              Gráfica Digital
            </h3>
            <p className={styles.tarjetaDescripcion}>
              Soluciones{" "}
              <span className={styles.palabraDestacada}>
                prácticas y modernas
              </span>
              . Invitaciones digitales (animadas o estáticas) y kits gráficos
              para compartir o imprimir.
            </p>
          </div>

          <div className={styles.tarjeta}>
            <h3 className={styles.tarjetaTitulo}>
              Papelería Funcional
            </h3>
            <p className={styles.tarjetaDescripcion}>
              Diseños <span className={styles.palabraDestacada}>útiles</span>{" "}
              para el día a día. Agendas docentes, planners mensuales, cuadernos
              personalizados y más.
            </p>
          </div>
        </div>

        <div className={styles.ctaContenedor}>
          <Boton href="/servicios">Ver todos los servicios</Boton>
        </div>
      </div>
    </section>
  );
};
