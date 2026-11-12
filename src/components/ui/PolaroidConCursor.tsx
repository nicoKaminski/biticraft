"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

const HOVER_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MAX_TILT_DEGREES = 10;
const FOLLOW_TIME_MS = 115;

type Inclinacion = {
  actualX: number;
  actualY: number;
  objetivoX: number;
  objetivoY: number;
  frameId: number | null;
  ultimoFrame: number;
};

type PolaroidConCursorProps = {
  children: ReactNode;
  className: string;
  inclinacionMaxima?: number;
};

export function PolaroidConCursor({
  children,
  className,
  inclinacionMaxima = MAX_TILT_DEGREES,
}: PolaroidConCursorProps) {
  const inclinacion = useRef<Inclinacion>({
    actualX: 0,
    actualY: 0,
    objetivoX: 0,
    objetivoY: 0,
    frameId: null,
    ultimoFrame: 0,
  });

  useEffect(
    () => () => {
      const frameId = inclinacion.current.frameId;

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    },
    [],
  );

  function animarInclinacion(figura: HTMLElement) {
    const estado = inclinacion.current;

    if (estado.frameId !== null) return;

    function actualizar(timestamp: number) {
      const tiempoTranscurrido = estado.ultimoFrame
        ? timestamp - estado.ultimoFrame
        : 16.67;
      const avance = 1 - Math.exp(-tiempoTranscurrido / FOLLOW_TIME_MS);

      estado.ultimoFrame = timestamp;
      estado.actualX += (estado.objetivoX - estado.actualX) * avance;
      estado.actualY += (estado.objetivoY - estado.actualY) * avance;

      const asentado =
        Math.abs(estado.objetivoX - estado.actualX) < 0.01 &&
        Math.abs(estado.objetivoY - estado.actualY) < 0.01;

      if (asentado) {
        estado.actualX = estado.objetivoX;
        estado.actualY = estado.objetivoY;
      }

      figura.style.setProperty(
        "--inclinacion-x",
        `${estado.actualX.toFixed(3)}deg`,
      );
      figura.style.setProperty(
        "--inclinacion-y",
        `${estado.actualY.toFixed(3)}deg`,
      );

      if (asentado) {
        estado.frameId = null;
        estado.ultimoFrame = 0;

        if (estado.objetivoX === 0 && estado.objetivoY === 0) {
          figura.style.removeProperty("--inclinacion-x");
          figura.style.removeProperty("--inclinacion-y");
        }

        return;
      }

      estado.frameId = window.requestAnimationFrame(actualizar);
    }

    estado.frameId = window.requestAnimationFrame(actualizar);
  }

  function limpiarInclinacion(figura: HTMLElement) {
    const estado = inclinacion.current;

    if (estado.frameId !== null) {
      window.cancelAnimationFrame(estado.frameId);
    }

    estado.actualX = 0;
    estado.actualY = 0;
    estado.objetivoX = 0;
    estado.objetivoY = 0;
    estado.frameId = null;
    estado.ultimoFrame = 0;
    figura.style.removeProperty("--inclinacion-x");
    figura.style.removeProperty("--inclinacion-y");
  }

  function manejarMovimiento(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;

    const admiteHover = window.matchMedia(HOVER_POINTER_QUERY).matches;
    const reduceMovimiento = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (!admiteHover || reduceMovimiento) {
      limpiarInclinacion(event.currentTarget);
      return;
    }

    const rectangulo = event.currentTarget.getBoundingClientRect();
    const posicionX = (event.clientX - rectangulo.left) / rectangulo.width;
    const posicionY = (event.clientY - rectangulo.top) / rectangulo.height;

    inclinacion.current.objetivoX =
      (0.5 - posicionY) * inclinacionMaxima;
    inclinacion.current.objetivoY =
      (posicionX - 0.5) * inclinacionMaxima;

    animarInclinacion(event.currentTarget);
  }

  function volverAlCentro(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;

    const admiteHover = window.matchMedia(HOVER_POINTER_QUERY).matches;
    const reduceMovimiento = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (!admiteHover || reduceMovimiento) {
      limpiarInclinacion(event.currentTarget);
      return;
    }

    inclinacion.current.objetivoX = 0;
    inclinacion.current.objetivoY = 0;
    animarInclinacion(event.currentTarget);
  }

  return (
    <figure
      className={className}
      onPointerCancel={volverAlCentro}
      onPointerLeave={volverAlCentro}
      onPointerMove={manejarMovimiento}
    >
      {children}
    </figure>
  );
}
