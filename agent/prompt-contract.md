# Contrato de prompts para agentes

Todo prompt de implementación para este repositorio debe incluir:

- Repositorio y rama objetivo. La rama habitual es `dev`; se respeta cualquier rama indicada explícitamente. `main` requiere un pull request desde cualquier rama.
- Objetivo, alcance, archivos permitidos y planificación concreta.
- Restricciones, elementos fuera de alcance y contratos con otros grupos de trabajo.
- Lecturas previas necesarias para inspeccionar la implementación real y sus consumidores.
- Validaciones autorizadas y formato de entrega, separando resultados ejecutados de los pendientes.

## Límites de ejecución

- Este repositorio es público: nunca incorporar secretos, credenciales, tokens ni datos privados. No inspeccionar archivos de credenciales salvo autorización expresa y necesidad directa.
- No realizar cambios funcionales, visuales o refactors ajenos al objetivo. No instalar ni actualizar dependencias sin autorización.
- No ejecutar comandos destructivos ni operaciones Git de escritura (commit, push, pull, fetch, merge, rebase, reset, checkout, switch, restore, stash, clean, ni equivalentes). Los comandos Git de lectura requieren autorización expresa.
- Usar subagentes cuando el trabajo pueda separarse con archivos de escritura exclusivos; acordar interfaces compartidas antes de editar.
- Auditar el diff, la seguridad y la privacidad. En la entrega, distinguir lo verificado de lo que requiere configuración, ejecución o prueba manual posterior.
