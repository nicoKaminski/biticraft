"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "./RevelarAlEntrar.module.css";

interface RevelarAlEntrarProps {
  children: ReactNode;
  className?: string;
  retrasado?: boolean;
}

export function RevelarAlEntrar({
  children,
  className,
  retrasado = false,
}: RevelarAlEntrarProps) {
  const ref = useScrollReveal<HTMLDivElement>(
    styles.animable,
    styles.visible,
  );

  return (
    <div
      ref={ref}
      className={[
        styles.revelar,
        retrasado && styles.retrasado,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
