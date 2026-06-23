import { Boton } from "../ui/Boton";
import styles from "./SeccionHero.module.css";

export const SeccionHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          ¡Celebra con{" "}
          <span className={styles.palabraDestacada}>
            estilo
          </span>{" "}
          <br className={styles.saltoLinea} /> y{" "}
          <span className={styles.palabraDestacada}>
            creatividad!
          </span>
        </h1>

        <p className={styles.descripcion}>
          En <strong>Biticraft</strong> creamos papelería personalizada para
          hacer de tu evento un momento único. Desde gigantografías hasta
          souvenirs, todo diseñado a tu medida.
        </p>

        <div className={styles.ctaContenedor}>
          <Boton href="/contacto">¡Quiero cotizar!</Boton>
        </div>
      </div>
    </section>
  );
};
