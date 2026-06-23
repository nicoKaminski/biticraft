import Link from "next/link";
import React from "react";
import styles from "./Boton.module.css";

interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Boton: React.FC<BotonProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  const combinedClassName = [styles.boton, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
