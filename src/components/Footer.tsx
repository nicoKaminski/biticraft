import { Instagram, Mail, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* --- Sección Principal: Logo y Contacto (Horizontal) --- */}
        <div className={styles.bloquePrincipal}>
          {/* Izquierda: Marca */}
          <div className={styles.bloqueMarca}>
            <h2 className={styles.titulo}>
              BitiCraft
            </h2>
            <p className={styles.descripcion}>
              El encanto está en los detalles.
            </p>
          </div>

          {/* Derecha: Hablemos (Iconos en línea) */}
          <div className={styles.bloqueContacto}>
            <span className={styles.etiqueta}>
              Hablemos:
            </span>
            <div className={styles.iconos}>
              <a
                href="https://www.instagram.com/biticraft/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enlaceIcono}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5492235904320"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enlaceIcono}
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="mailto:biticraft.contacto@gmail.com"
                className={styles.enlaceIcono}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* --- Línea Divisoria y Copyright --- */}
        <div className={styles.divisor}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} BitiCraft. Hecho con ♥ en Argentina. |
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
