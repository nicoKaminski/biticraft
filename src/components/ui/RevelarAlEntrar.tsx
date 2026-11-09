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
  const { ref, armed, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[
        styles.revelar,
        armed && styles.animable,
        visible && styles.visible,
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
