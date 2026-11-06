import Link from "next/link";
import React from "react";
import styles from "./Boton.module.css";

interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  endIcon?: React.ReactNode;
}

export const Boton: React.FC<BotonProps> = ({
  href,
  children,
  className = "",
  variant,
  endIcon,
  ...props
}) => {
  const combinedClassName = [styles.boton, variant && styles[variant], className]
    .filter(Boolean)
    .join(" ");
  const content =
    variant === "primary" ? (
      <>
        <span className={styles.primaryContent}>{children}</span>
        <span
          className={[
            styles.primaryArrow,
            endIcon != null && styles.primaryArrowCustom,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        >
          {endIcon ?? (
            <svg viewBox="0 0 24 24" fill="none" focusable="false">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </>
    ) : variant === "secondary" ? (
      <>
        <span className={styles.secondaryContent}>{children}</span>
        <span className={styles.secondaryArrow} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" focusable="false">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};
