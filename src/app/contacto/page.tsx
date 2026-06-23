"use client";

import { useActionState } from "react";
import { enviarFormularioContacto } from "../actions";
import { EVENT_TYPES } from "./constants";
import styles from "./page.module.css";

const initialState = {
  success: false,
  message: "",
};

export default function PaginaContacto() {
  const [state, formAction, isPending] = useActionState(
    enviarFormularioContacto,
    initialState
  );

  return (
    <div className={styles.pagina}>
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
          <form action={formAction} className={styles.formulario}>
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
              <label
                htmlFor="nombre"
                className={styles.etiqueta}
              >
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
              <label
                htmlFor="email"
                className={styles.etiqueta}
              >
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
              <label
                htmlFor="tipoEvento"
                className={styles.etiqueta}
              >
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
              <label
                htmlFor="mensaje"
                className={styles.etiqueta}
              >
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

            <div className={styles.acciones}>
              <button
                type="submit"
                disabled={isPending}
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

