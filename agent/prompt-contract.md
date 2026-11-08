# Contrato de prompts para agentes

Todo prompt de trabajo para este repositorio debe indicar:

- Repositorio y rama objetivo. El agente local solo comprueba que está en el repositorio indicado y en la rama indicada. Para ello, las únicas comprobaciones Git permitidas son `git rev-parse --show-toplevel` y `git branch --show-current`.
- Objetivo, alcance, archivos permitidos y planificación concreta.
- Restricciones, elementos fuera de alcance y contratos con otros grupos de trabajo.
- Lecturas de archivos relacionadas y necesarias para comprender la implementación y sus consumidores, limitadas al alcance de la tarea.
- Validaciones requeridas por la tarea y formato de entrega, distinguiendo las ejecutadas de las pendientes. No exigir verificaciones adicionales a las solicitadas o necesarias para el alcance.

## Límites de ejecución

- Este repositorio es público: nunca incorporar secretos, credenciales, tokens ni datos privados. No inspeccionar archivos de credenciales salvo autorización expresa y necesidad directa.
- No realizar cambios funcionales, visuales o refactors ajenos al objetivo. No instalar ni actualizar dependencias sin autorización.
- Quedan prohibidas todas las operaciones Git salvo las dos comprobaciones indicadas para confirmar repositorio y rama. Esto prohíbe cualquier otra operación Git, de lectura o escritura, incluidas inspecciones de estado, historial, commits, hashes, remotos y sincronización, así como commit, push, pull, fetch, merge, rebase, reset, checkout, switch, restore, stash, clean y equivalentes. Revisar los cambios propios inspeccionando directamente los archivos editados, sin recurrir a Git. No exigir ni incluir referencias internas de commits.
- Por defecto, no abrir, iniciar ni automatizar navegadores. Esto incluye Playwright, Puppeteer y herramientas equivalentes. Solo se permite hacerlo con autorización expresa de Nico para la tarea concreta; la autorización no se extiende a tareas posteriores.
- Las mismas restricciones de Git y navegador se aplican a todos los subagentes. No delegar operaciones prohibidas ni usar un subagente para eludirlas.
- Usar subagentes cuando el trabajo pueda separarse en grupos con archivos de escritura exclusivos; acordar interfaces compartidas antes de editar.
- Auditar los archivos modificados, el alcance, la seguridad y la privacidad. En la entrega, indicar los archivos cambiados, las reglas corregidas, las contradicciones pendientes y las verificaciones realizadas; distinguir lo verificado de lo que requiere configuración, ejecución o prueba manual posterior.

## Contrato tipográfico

El sistema tipográfico global es un contrato de diseño. Times New Roman es la única familia autorizada para headings; `Times, serif` son fallbacks técnicos de plataforma, no familias alternativas de diseño. DM Sans es la única familia autorizada para cuerpo e interfaz. Los únicos pesos globales permitidos son 300, 400 y 500; 600, 700, 800, 900, `bold` y `bolder` están prohibidos. Excepción decorativa de `/servicios`: se autoriza Caveat únicamente para los captions manuscritos de piezas visuales tipo polaroid de `src/app/servicios/page.tsx`. Debe cargarse mediante `next/font/google`, con peso 400 y subset `latin`, utilizando únicamente la clase generada localmente, sin exponer una variable CSS global. Su uso debe quedar combinado con `.captionManuscrito`. Caveat no forma parte del sistema tipográfico global y no puede utilizarse en headings, cuerpo, navegación, botones, formularios, módulos, listas, otras páginas ni otros elementos de interfaz. Cualquier ampliación futura requiere aprobación explícita. Fuera de esta excepción, ningún agente puede incorporar otra familia, peso o archivo de fuente sin aprobación expresa del responsable, ni usar overrides tipográficos locales que evadan el sistema global. Ejecuta la validación tipográfica junto con las validaciones habituales cuando el alcance involucre estilos o tipografía.
