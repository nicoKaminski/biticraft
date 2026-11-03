"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroPaperPlaneMotion.module.css";

type RouteKind = "mobile" | "tablet" | "desktop";
type FlightId = "upper" | "lower";

type FlightSettings = {
  id: FlightId;
  travelDuration: number;
  pauseDuration: number;
  startDelay: number;
  dotCount: number;
  maxTrailOpacity: number;
  scale: Record<RouteKind, number>;
  dotRadius: Record<RouteKind, number>;
  trailSpacing: Record<RouteKind, number>;
};

type FlightElements = {
  route: SVGPathElement | null;
  planePosition: SVGGElement | null;
  planeShape: SVGGElement | null;
  dots: Array<SVGCircleElement | null>;
};

const FLIGHTS: FlightSettings[] = [
  {
    id: "upper",
    travelDuration: 11_000,
    pauseDuration: 3_500,
    startDelay: 0,
    dotCount: 16,
    maxTrailOpacity: 0.38,
    scale: { mobile: 0.64, tablet: 0.72, desktop: 1 },
    dotRadius: { mobile: 0.9, tablet: 1.05, desktop: 1.25 },
    trailSpacing: { mobile: 5.8, tablet: 6.5, desktop: 8 },
  },
  {
    id: "lower",
    travelDuration: 12_800,
    pauseDuration: 4_100,
    startDelay: 3_200,
    dotCount: 13,
    maxTrailOpacity: 0.27,
    scale: { mobile: 0.54, tablet: 0.61, desktop: 0.85 },
    dotRadius: { mobile: 0.76, tablet: 0.89, desktop: 1.06 },
    trailSpacing: { mobile: 4.8, tablet: 5.8, desktop: 7 },
  },
];

function createUpperRoute(width: number, height: number, kind: RouteKind) {
  if (kind === "mobile") {
    return [
      `M -32 ${height * 0.2}`,
      `C -12 ${height * 0.14}, ${width * 0.015} ${height * 0.09}, ${width * 0.07} ${height * 0.075}`,
      `C ${width * 0.16} ${height * 0.04}, ${width * 0.26} ${height * 0.035}, ${width * 0.4} ${height * 0.045}`,
      `C ${width * 0.57} ${height * 0.06}, ${width * 0.73} ${height * 0.055}, ${width * 0.85} ${height * 0.04}`,
      `C ${width * 0.93} ${height * 0.03}, ${width * 0.98} ${height * 0.04}, ${width + 32} ${height * 0.055}`,
    ].join(" ");
  }

  if (kind === "tablet") {
    return [
      `M -40 ${height * 0.3}`,
      `C -14 ${height * 0.22}, ${width * 0.01} ${height * 0.12}, ${width * 0.07} ${height * 0.105}`,
      `C ${width * 0.15} ${height * 0.08}, ${width * 0.19} ${height * 0.07}, ${width * 0.3} ${height * 0.055}`,
      `C ${width * 0.43} ${height * 0.035}, ${width * 0.62} ${height * 0.045}, ${width * 0.75} ${height * 0.07}`,
      `C ${width * 0.85} ${height * 0.09}, ${width * 0.95} ${height * 0.11}, ${width + 40} ${height * 0.08}`,
    ].join(" ");
  }

  return [
    `M -48 ${height * 0.66}`,
    `C ${width * 0.01} ${height * 0.6}, ${width * 0.025} ${height * 0.32}, ${width * 0.14} ${height * 0.22}`,
    `C ${width * 0.22} ${height * 0.12}, ${width * 0.25} ${height * 0.09}, ${width * 0.38} ${height * 0.075}`,
    `C ${width * 0.55} ${height * 0.055}, ${width * 0.72} ${height * 0.07}, ${width * 0.83} ${height * 0.095}`,
    `C ${width * 0.91} ${height * 0.12}, ${width * 0.97} ${height * 0.12}, ${width + 48} ${height * 0.08}`,
  ].join(" ");
}

function createLowerRoute(width: number, height: number, kind: RouteKind) {
  if (kind === "mobile") {
    return [
      `M ${width + 34} ${height * 0.72}`,
      `C ${width * 0.93} ${height * 0.72}, ${width * 0.86} ${height * 0.72}, ${width * 0.78} ${height * 0.72}`,
      `C ${width * 0.7} ${height * 0.72}, ${width * 0.64} ${height * 0.7}, ${width * 0.57} ${height * 0.7}`,
      `C ${width * 0.49} ${height * 0.7}, ${width * 0.44} ${height * 0.71}, ${width * 0.36} ${height * 0.72}`,
      `C ${width * 0.27} ${height * 0.73}, ${width * 0.2} ${height * 0.72}, ${width * 0.12} ${height * 0.72}`,
      `C ${width * 0.06} ${height * 0.72}, ${width * 0.015} ${height * 0.73}, -34 ${height * 0.73}`,
    ].join(" ");
  }

  if (kind === "tablet") {
    return [
      `M ${width + 38} ${height * 0.57}`,
      `C ${width * 0.94} ${height * 0.575}, ${width * 0.88} ${height * 0.59}, ${width * 0.8} ${height * 0.59}`,
      `C ${width * 0.72} ${height * 0.59}, ${width * 0.65} ${height * 0.575}, ${width * 0.57} ${height * 0.59}`,
      `C ${width * 0.49} ${height * 0.6}, ${width * 0.44} ${height * 0.64}, ${width * 0.36} ${height * 0.635}`,
      `C ${width * 0.27} ${height * 0.63}, ${width * 0.19} ${height * 0.65}, ${width * 0.12} ${height * 0.655}`,
      `C ${width * 0.05} ${height * 0.66}, ${width * 0.01} ${height * 0.665}, -38 ${height * 0.68}`,
    ].join(" ");
  }

  return [
    `M ${width + 48} ${height * 0.46}`,
    `C ${width * 0.94} ${height * 0.48}, ${width * 0.88} ${height * 0.53}, ${width * 0.79} ${height * 0.52}`,
    `C ${width * 0.68} ${height * 0.51}, ${width * 0.61} ${height * 0.49}, ${width * 0.52} ${height * 0.52}`,
    `C ${width * 0.42} ${height * 0.55}, ${width * 0.36} ${height * 0.61}, ${width * 0.27} ${height * 0.59}`,
    `C ${width * 0.18} ${height * 0.57}, ${width * 0.1} ${height * 0.62}, ${width * 0.06} ${height * 0.66}`,
    `C ${width * 0.02} ${height * 0.68}, -48 ${height * 0.68}, -48 ${height * 0.68}`,
  ].join(" ");
}

function createRoute(width: number, height: number, kind: RouteKind, flightId: FlightId) {
  return flightId === "upper"
    ? createUpperRoute(width, height, kind)
    : createLowerRoute(width, height, kind);
}

const createFlightElements = (): Record<FlightId, FlightElements> => ({
  upper: { route: null, planePosition: null, planeShape: null, dots: [] },
  lower: { route: null, planePosition: null, planeShape: null, dots: [] },
});

export const HeroPaperPlaneMotion = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const flightsRef = useRef(createFlightElements());

  useEffect(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    const elements = flightsRef.current;

    if (!stage || !svg) return;
    if (FLIGHTS.some(({ id }) => {
      const flight = elements[id];
      return !flight.route || !flight.planePosition || !flight.planeShape;
    })) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = reducedMotion.matches;
    let isInViewport = false;
    let isDocumentVisible = document.visibilityState === "visible";
    let isConfigured = false;
    let cycleStart = performance.now();
    let frameId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    const pathLengths: Record<FlightId, number> = { upper: 0, lower: 0 };

    const stopAnimation = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const renderFlight = (settings: FlightSettings, distance: number, trailFade: number) => {
      const flight = elements[settings.id];
      const route = flight.route;
      const planePosition = flight.planePosition;
      const pathLength = pathLengths[settings.id];
      if (!route || !planePosition || pathLength <= 0) return;

      const clampedDistance = Math.max(0, Math.min(pathLength, distance));
      const planePoint = route.getPointAtLength(clampedDistance);
      const tangentPoint = route.getPointAtLength(Math.min(pathLength, clampedDistance + 2));
      const angle =
        Math.atan2(tangentPoint.y - planePoint.y, tangentPoint.x - planePoint.x) *
        (180 / Math.PI);

      planePosition.setAttribute(
        "transform",
        `translate(${planePoint.x.toFixed(2)} ${planePoint.y.toFixed(2)}) rotate(${angle.toFixed(2)})`,
      );

      for (let index = 0; index < settings.dotCount; index += 1) {
        const dot = flight.dots[index];
        if (!dot) continue;

        const dotDistance = clampedDistance -
          (index + 1) * settings.trailSpacing[routeKind];
        if (dotDistance < 0 || trailFade === 0) {
          dot.setAttribute("opacity", "0");
          continue;
        }

        const point = route.getPointAtLength(dotDistance);
        const distanceFade = 1 - (index + 1) / (settings.dotCount + 1);
        const opacity = settings.maxTrailOpacity *
          Math.pow(distanceFade, 1.25) * trailFade;

        dot.setAttribute("cx", point.x.toFixed(2));
        dot.setAttribute("cy", point.y.toFixed(2));
        dot.setAttribute("opacity", opacity.toFixed(3));
      }
    };

    let routeKind: RouteKind = "desktop";

    const updateLayout = () => {
      const { width, height } = stage.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;

      routeKind = width < 480 ? "mobile" : width < 1200 ? "tablet" : "desktop";
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      for (const settings of FLIGHTS) {
        const flight = elements[settings.id];
        if (!flight.route || !flight.planePosition || !flight.planeShape) continue;

        flight.route.setAttribute("d", createRoute(width, height, routeKind, settings.id));
        flight.planeShape.setAttribute("transform", `scale(${settings.scale[routeKind]})`);
        pathLengths[settings.id] = flight.route.getTotalLength();

        for (const dot of flight.dots) {
          dot?.setAttribute("r", String(settings.dotRadius[routeKind]));
        }
      }

      isConfigured = FLIGHTS.every(({ id }) => pathLengths[id] > 0);
      for (const settings of FLIGHTS) renderFlight(settings, 0, 0);
      stage.style.opacity = isReducedMotion ? "0" : "1";
    };

    const animateFrame: FrameRequestCallback = (timestamp) => {
      frameId = null;
      if (!isConfigured || isReducedMotion || !isInViewport || !isDocumentVisible) return;

      for (const settings of FLIGHTS) {
        const elapsed = timestamp - cycleStart - settings.startDelay;
        if (elapsed < 0) {
          renderFlight(settings, 0, 0);
          continue;
        }

        const cycleDuration = settings.travelDuration + settings.pauseDuration;
        const cyclePhase = elapsed % cycleDuration;
        const isTraveling = cyclePhase < settings.travelDuration;
        const rawProgress = isTraveling ? cyclePhase / settings.travelDuration : 1;
        const progress =
          rawProgress < 0.5
            ? 4 * rawProgress * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;
        const distance = pathLengths[settings.id] * progress;
        const trailFade = isTraveling
          ? 1
          : Math.max(0, 1 - (cyclePhase - settings.travelDuration) / 700);

        renderFlight(settings, distance, trailFade);
      }

      frameId = requestAnimationFrame(animateFrame);
    };

    const startAnimation = () => {
      if (
        frameId === null &&
        isConfigured &&
        !isReducedMotion &&
        isInViewport &&
        isDocumentVisible
      ) {
        frameId = requestAnimationFrame(animateFrame);
      }
    };

    const handleMotionPreferenceChange = () => {
      isReducedMotion = reducedMotion.matches;
      if (isReducedMotion) {
        stopAnimation();
        stage.style.opacity = "0";
      } else {
        cycleStart = performance.now();
        stage.style.opacity = "1";
        startAnimation();
      }
    };

    const handleDocumentVisibilityChange = () => {
      isDocumentVisible = document.visibilityState === "visible";
      if (isDocumentVisible) startAnimation();
      else stopAnimation();
    };

    updateLayout();

    if (Boolean(window.ResizeObserver)) {
      resizeObserver = new ResizeObserver(updateLayout);
      resizeObserver.observe(stage);
    } else {
      window.addEventListener("resize", updateLayout);
    }

    if (Boolean(window.IntersectionObserver)) {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        isInViewport = entry.isIntersecting;
        if (isInViewport) startAnimation();
        else stopAnimation();
      });
      intersectionObserver.observe(stage);
    } else {
      isInViewport = true;
      startAnimation();
    }

    reducedMotion.addEventListener("change", handleMotionPreferenceChange);
    document.addEventListener("visibilitychange", handleDocumentVisibilityChange);

    return () => {
      stopAnimation();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("resize", updateLayout);
      reducedMotion.removeEventListener("change", handleMotionPreferenceChange);
      document.removeEventListener("visibilitychange", handleDocumentVisibilityChange);
    };
  }, []);

  return (
    <div ref={stageRef} className={styles.motionLayer} aria-hidden="true">
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        focusable="false"
      >
        {FLIGHTS.map((settings) => {
          const flight = flightsRef.current[settings.id];

          return (
            <g key={settings.id}>
              <path
                ref={(element) => {
                  flight.route = element;
                }}
                fill="none"
                stroke="none"
              />
              {Array.from({ length: settings.dotCount }, (_, index) => (
                <circle
                  key={index}
                  ref={(element) => {
                    flight.dots[index] = element;
                  }}
                  className={styles.trailDot}
                  cx="0"
                  cy="0"
                  r="1"
                  opacity="0"
                />
              ))}
              <g
                ref={(element) => {
                  flight.planePosition = element;
                }}
              >
                <g
                  ref={(element) => {
                    flight.planeShape = element;
                  }}
                >
                  <path
                    className={styles.planeBody}
                    d="M -20 -13 L 21 0 L -20 13 L -11 1 Z"
                  />
                  <path
                    className={styles.planeFold}
                    d="M -11 1 L 21 0 M -11 1 L -20 -13"
                  />
                </g>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
