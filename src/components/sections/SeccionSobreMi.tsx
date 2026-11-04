import styles from "./SeccionSobreMi.module.css";

export const SeccionSobreMi = () => {
  return (
    <section className={styles.sobreMi}>
      <div className={styles.container}>
        <div className={styles.contenido}>
          <div className={styles.columnaIntro}>
            <h2 className={styles.titulo}>
              ¿Quiénes somos?
            </h2>

            <div className={styles.textosIntro}>
              <p>
                ¡Hola! Somos{" "}
                <span className={styles.marcaRosa}>Biticraft</span>.
                Nos apasiona ponerle color y alegría a tus celebraciones.
              </p>

              <p>
                Creamos papelería creativa y productos personalizados para
                eventos, buscando que cada detalle acompañe tu idea y haga que
                cada celebración se sienta realmente tuya.
              </p>
            </div>
          </div>

          <div className={styles.columnaDetalle}>
            <p className={styles.textoPrincipal}>
              Nuestro diferencial está en la{" "}
              <strong>atención cercana y en cada detalle</strong>: nos encanta
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
