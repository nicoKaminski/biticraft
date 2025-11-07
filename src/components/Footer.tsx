import Link from "next/link";

const enlacesRedes = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/biticraft/",
  },
  {
    nombre: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5492235904320",
  },
  {
    nombre: "Email",
    href: "mailto:biticraft.contacto@gmail.com",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 mb-4 md:mb-0">
          © {new Date().getFullYear()} BitiCraft. Todos los derechos reservados.
        </div>

        <div className="flex space-x-6">
          {enlacesRedes.map((enlace) => (
            <Link
              key={enlace.nombre}
              href={enlace.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
