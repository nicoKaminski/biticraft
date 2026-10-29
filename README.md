# BitiCraft

Sitio institucional, catálogo y portafolio de BitiCraft, una marca de papelería creativa con diseños personalizados para eventos. El proyecto usa Next.js App Router, React y TypeScript. No incluye tienda, carrito ni pagos.

## Desarrollo

Requiere Node.js y npm. Instala las dependencias con `npm ci` y ejecuta `npm run dev` para iniciar el servidor local en `http://localhost:3000`.

Scripts disponibles:

- `npm run dev`: servidor de desarrollo de Next.js con Webpack.
- `npm run lint`: revisa el código con ESLint.
- `npm run typecheck`: ejecuta TypeScript sin emitir archivos.
- `npm run build`: compila la aplicación de producción con Webpack.
- `npm run start`: sirve la compilación de producción.

## Variables de entorno

Crea un archivo local `.env.local` a partir de `.env.example` y completa los valores en tu entorno. No compartas ni versionés credenciales.

| Variable | Uso |
| --- | --- |
| `GMAIL_USER` | Cuenta de Gmail usada por Nodemailer y destinatario del formulario. |
| `GMAIL_PASS` | Credencial de aplicación de Gmail para Nodemailer. Es secreta y solo se usa en el servidor. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Clave pública del widget Turnstile mostrado en `/contacto`. |
| `TURNSTILE_SECRET_KEY` | Clave privada para verificar el token Turnstile en el servidor. No debe llevar el prefijo `NEXT_PUBLIC_`. |
| `TURNSTILE_ALLOWED_HOSTNAMES` | Hostnames autorizados para Turnstile, separados explícitamente por comas. |

## Protecciones

- El formulario de `/contacto` conserva la validación de sus campos, un honeypot y el envío de correo con Nodemailer.
- Turnstile se valida en el servidor antes de enviar el correo. Se comprueban el resultado, la acción `biticraft_contact` y el hostname permitido; si falta configuración o falla la verificación, el envío se rechaza.
- La configuración de Next.js añade los headers `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` y `Permissions-Policy`.
- GitHub Actions ejecuta instalación reproducible, lint, typecheck y build en `main`, `dev` y los pull requests dirigidos a esas ramas.
- El rate limiting está **pendiente de activación** como configuración externa de Vercel Firewall: `POST` a `/contacto`, clave IP, ventana fija de 10 minutos, máximo de 5 solicitudes y respuesta HTTP 429 al superar el límite. No está implementado en la aplicación.

## Validaciones locales

```text
npm run lint
npm run typecheck
npm run build
```
