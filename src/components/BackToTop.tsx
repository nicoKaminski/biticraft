"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./BackToTop.module.css";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const visibleRef = useRef(false);
  const footerOffsetRef = useRef(0);

  useEffect(() => {
    let pendingFrame: number | null = null;

    const updateVisibility = () => {
      pendingFrame = null;

      const button = buttonRef.current;
      const footer = document.querySelector("footer");

      if (button && footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const currentBottom = Number.parseFloat(
          window.getComputedStyle(button).bottom,
        );

        if (Number.isFinite(currentBottom)) {
          const baseBottom = currentBottom - footerOffsetRef.current;
          const nextFooterOffset = Math.max(
            0,
            window.innerHeight - footerTop + 8 - baseBottom,
          );

          if (Math.abs(nextFooterOffset - footerOffsetRef.current) > 0.5) {
            button.style.setProperty(
              "--footer-offset",
              `${nextFooterOffset}px`,
            );
            footerOffsetRef.current = nextFooterOffset;
          }
        }
      }

      const nextVisible = window.scrollY > 320;

      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
      }
    };

    const handleScroll = () => {
      if (pendingFrame !== null) return;
      pendingFrame = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (pendingFrame !== null) {
        window.cancelAnimationFrame(pendingFrame);
      }
    };
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="Volver arriba"
      aria-hidden={visible ? "false" : "true"}
      tabIndex={visible ? 0 : -1}
      className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
      onClick={handleClick}
    >
      <ChevronUp
        className={styles.icon}
        size={20}
        strokeWidth={2.25}
        aria-hidden="true"
      />
    </button>
  );
}
