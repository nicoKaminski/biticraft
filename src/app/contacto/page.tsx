import { useActionState } from "react";
import { enviarFormularioContacto } from "../actions";
import { Boton } from "@/components/ui/Boton";

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-marca-gris">Contáctanos</h1>
          <p className="mt-2 text-gray-600">
            ¿Tenés una idea? ¡Escribinos y la hacemos realidad!
          </p>
        </div>

        {state.success ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative text-center">
            <p className="font-bold">¡Mensaje Enviado!</p>
            <p>{state.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-sm underline hover:text-green-900"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form action={formAction} className="space-y-6">
            {state.message && !state.success && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
                {state.message}
              </div>
            )}

            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-marca-rosa focus:ring-marca-rosa sm:text-sm p-2 border"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-marca-rosa focus:ring-marca-rosa sm:text-sm p-2 border"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="tipoEvento"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de Evento (Opcional)
              </label>
              <select
                name="tipoEvento"
                id="tipoEvento"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-marca-rosa focus:ring-marca-rosa sm:text-sm p-2 border"
              >
                <option value="">Selecciona una opción</option>
                <option value="Boda">Boda</option>
                <option value="15 Años">15 Años</option>
                <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
                <option value="Bautismo">Bautismo</option>
                <option value="Comunión">Comunión</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                name="mensaje"
                id="mensaje"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-marca-rosa focus:ring-marca-rosa sm:text-sm p-2 border"
                placeholder="Contanos qué estás buscando..."
              />
            </div>

            <div className="text-center">
              <Boton type="submit" disabled={isPending} className="w-full">
                {isPending ? "Enviando..." : "Enviar Mensaje"}
              </Boton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
