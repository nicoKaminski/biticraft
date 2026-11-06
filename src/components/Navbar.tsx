"use client";

import { House, LayoutGrid, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const enlacesNavegacion = [
  { nombre: "Inicio", href: "/", Icono: House },
  { nombre: "Servicios", href: "/servicios", Icono: LayoutGrid },
  { nombre: "Contacto", href: "/contacto", Icono: Mail },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* --- Logo --- */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.webp"
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
              aria-label={enlace.nombre}
              aria-current={pathname === enlace.href ? "page" : undefined}
            >
              <enlace.Icono
                className={styles.icono}
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className={styles.texto}>{enlace.nombre}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
