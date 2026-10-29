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

- No ejecutes operaciones Git de escritura: commit, push, pull, fetch, merge, rebase, reset, checkout, switch, restore, stash, clean, creación/eliminación de ramas ni equivalentes.
- Solo ejecuta inspecciones Git de lectura cuando la tarea las autorice expresamente. Una autorización de lectura no habilita escrituras.
- Distingue en el cierre las validaciones ejecutadas de las pendientes y comunica cualquier limitación.
- Antes de terminar, audita el diff completo, el alcance, la seguridad y la privacidad. No afirmes que una integración está operativa sin verificarla en un entorno configurado.
