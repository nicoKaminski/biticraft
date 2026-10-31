import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const enlacesNavegacion = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Servicios", href: "/servicios" },
  { nombre: "Contacto", href: "/contacto" },
];

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* --- Logo --- */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo BitiCraft"
            width={150}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>

        {/* --- Links de Navegación --- */}
        <div className={styles.enlaces}>
          {enlacesNavegacion.map((enlace) => (
            <Link
              key={enlace.nombre}
              href={enlace.href}
              className={styles.enlace}
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
