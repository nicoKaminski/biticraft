import styles from "./SeccionSobreMi.module.css";

export const SeccionSobreMi = () => {
  return (
    <section className={styles.sobreMi}>
      <div className={styles.container}>
        <div className={styles.contenido}>
          <h2 className={styles.titulo}>
            ¿Quiénes somos?
          </h2>

          <div className={styles.bloqueTexto}>
            <p>
              ¡Hola! Somos{" "}
              <span className={styles.marcaRosa}>Biticraft</span>. Nos
              apasiona ponerle color y alegría a tus celebraciones.
            </p>
            <p>
              Nuestro diferencial es la{" "}
              <strong>atención cercana y divertida</strong>: nos encanta
              escucharte y crear juntos esa idea loca que tenés en mente. Ya sea
              una boda, un cumple de 15, o el primer añito de tu bebé, estamos
              acá para que cada detalle cuente.
            </p>
            <p className={styles.fraseFinal}>
              ¡Todo es 100% personalizado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
