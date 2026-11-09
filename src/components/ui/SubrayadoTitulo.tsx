"use client";

import styles from "./SubrayadoTitulo.module.css";
import { useScrollReveal } from "./useScrollReveal";

interface SubrayadoTituloProps {
  align?: "left" | "center";
  compact?: boolean;
  className?: string;
}

export function SubrayadoTitulo({
  align = "left",
  compact = false,
  className,
}: SubrayadoTituloProps) {
  const ref = useScrollReveal<HTMLSpanElement>(
    styles.animable,
    styles.visible,
  );

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={[
        styles.subrayado,
        align === "center" && styles.centrado,
        compact && styles.compacto,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
