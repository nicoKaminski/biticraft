import { Instagram, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-marca-lila pt-10 pb-6 rounded-t-[var(--radius-container-lg)]">
      <div className="container mx-auto px-8">
        {/* --- Sección Principal: Logo y Contacto (Horizontal) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Izquierda: Marca */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-[weight:var(--font-weight-bold)] text-marca-gris">
              BitiCraft
            </h2>
            <p className="text-marca-gris text-[length:var(--text-body-sm)] mt-1">
              Papelería creativa para momentos mágicos.
            </p>
          </div>

          {/* Derecha: Hablemos (Iconos en línea) */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-[weight:var(--font-weight-bold)] text-marca-gris text-[length:var(--text-body-sm)] uppercase tracking-wider">
              Hablemos:
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/biticraft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marca-gris hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5492235904320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marca-gris hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="mailto:biticraft.contacto@gmail.com"
                className="text-marca-gris hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* --- Línea Divisoria y Copyright --- */}
        <div className="border-t border-marca-gris/20 pt-6 text-center">
          <p className="text-marca-gris text-xs md:text-[length:var(--text-body-sm)]">
            © {new Date().getFullYear()} BitiCraft. Hecho con ♥ en Argentina. |
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
