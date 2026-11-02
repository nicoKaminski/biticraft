import type { Metadata } from "next";
import { Home, Mail } from "lucide-react";
import { Boton } from "@/components/ui/Boton";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <div className={styles.stage}>
        <div className={styles.content}>
          <h1 id="not-found-title" className={styles.errorCode}>
            <span className={styles.errorNumber} aria-hidden="true">
              404
            </span>
            <span className={styles.visuallyHidden}>
              Página no encontrada
            </span>
          </h1>
          <h2 className={styles.message}>
            <span className={styles.messageLine}>
              Ups... esta página se perdió
            </span>{" "}
            <span className={styles.messageLine}>
              entre <em className={styles.emphasis}>papelitos y confeti</em> ♡
            </span>
          </h2>
          <p className={styles.description}>
            Es posible que la página haya cambiado de dirección o ya no exista.
            Te invitamos a volver al sitio y seguir explorando todas nuestras
            ideas, servicios y creaciones.
          </p>
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.dividerLine} />
            <span className={styles.dividerHeart}>♡</span>
            <span className={styles.dividerLine} />
          </div>
          <div className={styles.actions}>
            <Boton
              href="/"
              className={`${styles.action} ${styles.primary}`}
            >
              <span className={styles.actionContent}>
                <Home size={20} aria-hidden="true" focusable="false" />
                <span>Volver al inicio</span>
              </span>
            </Boton>
            <Boton
              href="/contacto"
              className={`${styles.action} ${styles.secondary}`}
            >
              <span className={styles.actionContent}>
                <Mail size={20} aria-hidden="true" focusable="false" />
                <span>Ir a contacto</span>
              </span>
            </Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
