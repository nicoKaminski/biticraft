# Reglas de trabajo

1. El repositorio `nicoKaminski/biticraft` es público. No agregues secretos ni datos privados; usa únicamente nombres de variables y valores ficticios o vacíos en ejemplos.
2. Antes de iniciar, confirma que la tarea identifica repositorio, rama, alcance, planificación, restricciones y validaciones. Si falta un dato que impide cumplirla sin riesgo, informa el bloqueo.
3. La rama habitual es `dev`, pero trabaja en la rama que la tarea indique expresamente. `main` requiere un pull request desde cualquier rama.
4. Inspecciona primero los archivos reales, sus consumidores y las configuraciones relacionadas. No supongas que la documentación antigua coincide con la aplicación.
5. Usa subagentes si las responsabilidades pueden separarse en grupos con archivos de escritura exclusivos. Coordina contratos compartidos antes de integrar.
6. No cambies comportamiento, diseño ni código fuera del alcance solicitado. No agregues dependencias ni hagas instalaciones o actualizaciones sin autorización.
7. No ejecutes comandos destructivos ni operaciones Git de escritura. Esto incluye commit, push, pull, fetch, merge, rebase, reset, checkout, switch, restore, stash y clean, así como equivalentes. Inspecciones Git de solo lectura requieren autorización expresa en la tarea.
8. Ejecuta solo las validaciones autorizadas. En el informe separa claramente las ejecutadas de las pendientes; no atribuyas un resultado a una validación no ejecutada.
9. Audita seguridad, privacidad, credenciales accidentales, archivos modificados y diff completo antes de finalizar. No declares operativa una integración sin prueba en un entorno configurado.
