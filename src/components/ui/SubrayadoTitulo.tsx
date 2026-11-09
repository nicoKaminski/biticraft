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
  const { ref, armed, visible } = useScrollReveal<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={[
        styles.subrayado,
        align === "center" && styles.centrado,
        compact && styles.compacto,
        armed && styles.animable,
        visible && styles.visible,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
