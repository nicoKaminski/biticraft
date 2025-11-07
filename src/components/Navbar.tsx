import Image from "next/image";
import Link from "next/link";

const enlacesNavegacion = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Galería", href: "/galeria" },
  { nombre: "Servicios", href: "/servicios" },
  { nombre: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* --- Logo --- */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo BitiCraft"
            width={150}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* --- Links de Navegación --- */}
        <div className="flex space-x-6">
          {enlacesNavegacion.map((enlace) => (
            <Link
              key={enlace.nombre}
              href={enlace.href}
              className="text-marca-gris transition-colors hover:text-marca-rosa"
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
