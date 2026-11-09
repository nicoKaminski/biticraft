import Image from "next/image";
import styles from "./SeccionSobreMi.module.css";

export const SeccionSobreMi = () => {
  return (
    <section className={styles.sobreMi}>
      <div className={styles.container}>
        <div className={styles.contenido}>
          <div className={styles.bloqueTexto}>
            <h2 className={styles.titulo}>¿Quiénes somos?</h2>

            <div className={styles.textosIntro}>
              <p>
                ¡Hola! Somos{" "}
                <span className={styles.marca}>Biticraft</span>. Nos apasiona
                ponerle color y alegría a tus celebraciones.
              </p>

              <p>
                Creamos papelería creativa y productos personalizados para
                eventos, buscando que cada detalle acompañe tu idea y haga que
                cada celebración se sienta realmente tuya.
              </p>

              <p>
                Nuestro diferencial está en la atención cercana y en cada
                detalle: nos encanta escucharte y crear juntos esa idea loca
                que tenés en mente. Ya sea una boda, un cumple de 15, o el
                primer añito de tu bebé, estamos acá para que cada detalle
                cuente.
              </p>
            </div>

            <p className={styles.fraseFinal}>
              ¡Todo es 100% personalizado!
            </p>
          </div>

          <figure className={styles.polaroid}>
            <div className={styles.fotografia}>
              <Image
                src="/home/quienes-somos/quienes-somos.webp"
                alt="Manos trabajando sobre papel rosa en una base de corte, rodeadas de herramientas y materiales de manualidades."
                width={1536}
                height={1024}
                sizes="(min-width: 80rem) 31rem, (min-width: 64rem) 27rem, (min-width: 34.25rem) 29rem, calc(100vw - 5.25rem)"
                className={styles.imagen}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
