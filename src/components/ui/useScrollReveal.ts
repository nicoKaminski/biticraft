"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(
  animableClassName: string,
  visibleClassName: string,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    element.classList.add(animableClassName);

    let frame: number | undefined;
    let observer: IntersectionObserver | undefined;

    const reveal = () => element.classList.add(visibleClassName);

    const bounds = element.getBoundingClientRect();
    const alreadyPassed = bounds.bottom <= 0;
    const initiallyVisible =
      bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0;

    if (alreadyPassed || initiallyVisible) {
      frame = window.requestAnimationFrame(reveal);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            reveal();
            observer?.disconnect();
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
      );

      observer.observe(element);
    }

    return () => {
      observer?.disconnect();
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [animableClassName, visibleClassName]);

  return ref;
}
