"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./BackToTop.module.css";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    let pendingFrame: number | null = null;

    const updateVisibility = () => {
      pendingFrame = null;
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

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
