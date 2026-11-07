import styles from "./SubrayadoTitulo.module.css";

interface SubrayadoTituloProps {
  align?: "left" | "center";
  compact?: boolean;
}

export function SubrayadoTitulo({
  align = "left",
  compact = false,
}: SubrayadoTituloProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        styles.subrayado,
        align === "center" && styles.centrado,
        compact && styles.compacto,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
