# Reglas para agentes

## Contexto del repositorio

- Este repositorio público contiene el sitio institucional y portafolio de BitiCraft. Nunca incorpores secretos, credenciales, tokens ni datos privados en el código, documentación, ejemplos, logs o commits.
- Inspecciona el código y la configuración reales antes de proponer o realizar cambios. Sigue los consumidores y el flujo completo que afecte la tarea.
- Cada tarea debe especificar el repositorio, la rama, el alcance, la planificación, las restricciones y las validaciones requeridas.
- La rama habitual es `dev`; utiliza cualquier otra rama que la tarea indique explícitamente. `main` requiere un pull request desde cualquier rama.

## Alcance y colaboración

- Divide el trabajo entre subagentes cuando las responsabilidades puedan separarse con archivos de escritura exclusivos.
- No amplíes el alcance ni realices cambios funcionales, visuales o refactors ajenos a la solicitud.
- No instales ni actualices dependencias, ni ejecutes comandos destructivos, sin autorización explícita.
- No leas, muestres ni modifiques archivos que contengan credenciales reales salvo autorización expresa y necesidad directa.

## Git y validación

- Para confirmar el contexto local, limita Git a estas dos comprobaciones: `git rev-parse --show-toplevel` para verificar el repositorio y `git branch --show-current` para verificar la rama.
- No consultes estado Git, historial, commits, hashes, remotos ni sincronización. Quedan prohibidas todas las demás operaciones Git, tanto de lectura como de escritura, incluidas las operaciones destructivas y sus equivalentes.
- Distingue en el cierre las validaciones ejecutadas de las pendientes y comunica cualquier limitación.
- Revisa los archivos modificados directamente para auditar los cambios propios, el alcance, la seguridad y la privacidad; no uses Git para inspeccionar cambios. No afirmes que una integración está operativa sin verificarla en un entorno configurado.

## Navegadores

- Por defecto, no abras ni automatices navegadores. Esto incluye abrir páginas o interactuar con ellas mediante Playwright, Puppeteer o herramientas equivalentes. Su uso requiere autorización expresa de Nico para cada tarea.
- Las restricciones de Git y navegador anteriores aplican también a todos los subagentes y herramientas delegadas.

## Contrato tipográfico

El sistema tipográfico es un contrato de diseño. Times New Roman es la única familia autorizada para headings; `Times, serif` son fallbacks técnicos de plataforma, no familias alternativas de diseño. DM Sans es la única familia autorizada para cuerpo e interfaz. Los únicos pesos permitidos son 300, 400 y 500; 600, 700, 800, 900, `bold` y `bolder` están prohibidos. Ningún agente puede incorporar otra familia, peso o archivo de fuente sin aprobación expresa del responsable. No se permiten overrides tipográficos locales que evadan el sistema global. Cualquier cambio futuro de tipografía requiere aprobación explícita. Ejecuta la validación tipográfica cuando el alcance involucre estilos o tipografía, junto con las validaciones autorizadas que correspondan.
