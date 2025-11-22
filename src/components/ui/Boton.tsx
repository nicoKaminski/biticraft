import Link from "next/link";
import React from "react";
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
  const baseStyles =
    "inline-block rounded-full bg-marca-rosa px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  const combinedClassName = `${baseStyles} ${className}`;
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
