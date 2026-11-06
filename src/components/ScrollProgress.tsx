"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./ScrollProgress.module.css";

export function ScrollProgress() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pendingFrame: number | null = null;

    const updateProgress = () => {
      pendingFrame = null;

      const progressBar = progressRef.current;
      if (!progressBar) return;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.max(0, Math.min(1, window.scrollY / scrollableHeight))
          : 0;

      progressBar.style.visibility = scrollableHeight > 0 ? "visible" : "hidden";
      progressBar.style.transform = `scaleX(${progress})`;
    };

    const scheduleUpdate = () => {
      if (pendingFrame === null) {
        pendingFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver.disconnect();
      if (pendingFrame !== null) {
        window.cancelAnimationFrame(pendingFrame);
      }
    };
  }, [pathname]);

  return <div ref={progressRef} className={styles.progress} aria-hidden="true" />;
}
