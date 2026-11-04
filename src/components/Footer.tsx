import { Instagram, Mail, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.bloquePrincipal}>
          <div className={styles.bloqueMarca}>
            <span className={styles.nombreMarca}>BitiCraft</span>
            <p className={styles.descripcion}>
              El encanto está en los detalles.
            </p>
          </div>

          <div className={styles.bloqueContacto}>
            <span className={styles.etiqueta}>Hablemos</span>
            <div className={styles.iconos}>
              <a
                href="https://www.instagram.com/biticraft/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enlaceIcono}
                aria-label="Instagram de BitiCraft"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5492235904320"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enlaceIcono}
                aria-label="WhatsApp de BitiCraft"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:biticraft.contacto@gmail.com"
                className={styles.enlaceIcono}
                aria-label="Enviar email a BitiCraft"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
