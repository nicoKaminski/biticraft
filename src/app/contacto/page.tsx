"use client";

import Script from "next/script";
import {
  FormEvent,
  useActionState,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { enviarFormularioContacto } from "../actions";
import { EVENT_TYPES } from "./constants";
import styles from "./page.module.css";

const initialState = {
  success: false,
  message: "",
};

type TurnstileSize = "compact" | "flexible";

type TurnstileOptions = {
  sitekey: string;
  action: "biticraft_contact";
  language: "es";
  theme: "auto";
  size: TurnstileSize;
  "response-field": false;
  callback: (token: string) => void;
  "error-callback": () => void;
  "expired-callback": () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";

export default function PaginaContacto() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [widgetSize, setWidgetSize] = useState<TurnstileSize>(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 400px)").matches
      ? "compact"
      : "flexible"
  );
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const renderRequestedRef = useRef(false);

  const showWidgetInitializationError = useCallback(() => {
    setTurnstileToken("");
    setVerificationMessage(
      "No se pudo cargar la verificación de seguridad. Intentá nuevamente más tarde."
    );
  }, []);

  const resetWidget = useCallback((widgetId: string) => {
    try {
      window.turnstile?.reset(widgetId);
    } catch {
      showWidgetInitializationError();
    }
  }, [showWidgetInitializationError]);

  const [state, formAction, isPending] = useActionState(
    async (previousState: typeof initialState, formData: FormData) => {
      const result = await enviarFormularioContacto(previousState, formData);

      if (!result.success) {
        setTurnstileToken("");
        setVerificationMessage("");

        const widgetId = widgetIdRef.current;
        if (widgetId && window.turnstile) {
          resetWidget(widgetId);
        }
      }

      return result;
    },
    initialState
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");
    const updateWidgetSize = () => {
      const nextSize = mediaQuery.matches ? "compact" : "flexible";
      if (nextSize !== widgetSize) {
        setTurnstileToken("");
        setWidgetSize(nextSize);
      }
    };

    mediaQuery.addEventListener("change", updateWidgetSize);
    return () => mediaQuery.removeEventListener("change", updateWidgetSize);
  }, [widgetSize]);

  useEffect(() => {
    if (
      !siteKey ||
      !scriptReady ||
      state.success ||
      !widgetContainerRef.current ||
      widgetIdRef.current ||
      renderRequestedRef.current
    ) {
      return;
    }

    let cancelled = false;
    const reportInitializationError = () => {
      queueMicrotask(() => {
        if (!cancelled) {
          showWidgetInitializationError();
        }
      });
    };

    const turnstile = window.turnstile;
    if (!turnstile) {
      reportInitializationError();
      return () => {
        cancelled = true;
      };
    }

    renderRequestedRef.current = true;

    try {
      const container = widgetContainerRef.current;
      if (!container || widgetIdRef.current) {
        renderRequestedRef.current = false;
        return;
      }

      const widgetId = turnstile.render(container, {
        sitekey: siteKey,
        action: "biticraft_contact",
        language: "es",
        theme: "auto",
        size: widgetSize,
        "response-field": false,
        callback: (token) => {
          setTurnstileToken(token);
          setVerificationMessage("");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setVerificationMessage(
            "No se pudo completar la verificación. Intentá nuevamente."
          );
          const currentWidgetId = widgetIdRef.current;
          if (currentWidgetId) {
            resetWidget(currentWidgetId);
          }
        },
        "expired-callback": () => {
          setTurnstileToken("");
          setVerificationMessage(
            "La verificación venció. Completala nuevamente."
          );
          const currentWidgetId = widgetIdRef.current;
          if (currentWidgetId) {
            resetWidget(currentWidgetId);
          }
        },
      });

      widgetIdRef.current = widgetId;
    } catch {
      reportInitializationError();
    } finally {
      renderRequestedRef.current = false;
    }

    return () => {
      cancelled = true;
      const widgetId = widgetIdRef.current;
      if (widgetId) {
        try {
          turnstile.remove(widgetId);
        } catch {
          // A failed teardown must not interrupt route navigation.
        }
        widgetIdRef.current = null;
      }
      renderRequestedRef.current = false;
    };
  }, [scriptReady, state.success, widgetSize, resetWidget, showWidgetInitializationError]);

  const canSubmit = Boolean(siteKey && turnstileToken);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!canSubmit || isPending) {
      event.preventDefault();
    }
  }

  return (
    <div className={styles.pagina}>
      {siteKey && (
        <Script
          id="cloudflare-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => {
            if (!window.turnstile) {
              showWidgetInitializationError();
              return;
            }
            setScriptReady(true);
          }}
          onError={() => {
            setScriptReady(false);
            setVerificationMessage(
              "No se pudo cargar la verificación de seguridad. Intentá nuevamente más tarde."
            );
          }}
        />
      )}

      <div className={styles.tarjeta}>
        <div className={styles.encabezado}>
          <h1 className={styles.titulo}>Contáctanos</h1>
          <p className={styles.descripcion}>
            ¿Tenés una idea? ¡Escribinos y la hacemos realidad!
          </p>
        </div>

        {state.success ? (
          <div role="status" className={styles.mensajeExito}>
            <p className={styles.mensajeTitulo}>¡Mensaje Enviado!</p>
            <p className={styles.mensajeTexto}>{state.message}</p>
            <button
              onClick={() => window.location.reload()}
              className={styles.botonReiniciar}
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            action={formAction}
            onSubmit={handleSubmit}
            className={styles.formulario}
          >
            {state.message && !state.success && (
              <div role="alert" className={styles.alertaError}>
                {state.message}
              </div>
            )}

            {/* Campo Honeypot para evitar bots */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">Sitio Web</label>
              <input
                type="text"
                name="website"
                id="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="nombre" className={styles.etiqueta}>
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                className={styles.control}
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className={styles.etiqueta}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                maxLength={254}
                autoComplete="email"
                className={styles.control}
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="tipoEvento" className={styles.etiqueta}>
                Tipo de Evento (Opcional)
              </label>
              <select
                name="tipoEvento"
                id="tipoEvento"
                className={styles.control}
              >
                <option value="">Selecciona una opción</option>
                {EVENT_TYPES.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className={styles.etiqueta}>
                Mensaje
              </label>
              <textarea
                name="mensaje"
                id="mensaje"
                rows={4}
                required
                minLength={10}
                maxLength={3000}
                className={[styles.control, styles.textarea].join(" ")}
                placeholder="Contanos qué estás buscando..."
              />
            </div>

            <input
              type="hidden"
              name="turnstileToken"
              value={turnstileToken}
              readOnly
            />

            <div>
              {siteKey ? (
                <div
                  ref={widgetContainerRef}
                  className={styles.turnstile}
                  role="group"
                  aria-label="Verificación de seguridad"
                />
              ) : (
                <p role="alert" className={styles.verificacionError}>
                  La verificación de seguridad no está disponible en este
                  momento.
                </p>
              )}
              {siteKey && verificationMessage && (
                <p role="alert" className={styles.verificacionError}>
                  {verificationMessage}
                </p>
              )}
            </div>

            <div className={styles.acciones}>
              <button
                type="submit"
                disabled={!canSubmit || isPending}
                className={styles.botonEnviar}
              >
                {isPending ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
