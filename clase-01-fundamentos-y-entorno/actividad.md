# Actividad entre clases — Clase 01 (martes → jueves)

> Esta es una actividad **corta** (tramo de 2 días). El objetivo es afianzar terminal + Git.
> Las actividades más grandes de **avance del proyecto de equipo** caen en el tramo largo jueves → martes.

**Objetivo:** afianzar terminal + Git creando tu propio mini-repositorio, sin ver la guía.
**Tiempo estimado:** 30–45 min.
**Se entrega:** el historial de `git log --oneline` (captura de pantalla o el repo en el USB/GitHub).

### 🎥 Refuerzo (opcional, si tienes internet en casa)
Ve preparando el terreno para HTML mirando el inicio del curso recomendado (queda completo para la
próxima clase): ver [recursos/RECURSOS-Y-VIDEOS.md](../recursos/RECURSOS-Y-VIDEOS.md).

---

## Parte A — Terminal (sin mouse)

Haz TODO desde la terminal, sin usar el explorador de archivos:

1. Ve a tu Escritorio.
2. Crea una carpeta llamada `actividad-clase-1`.
3. Entra en ella.
4. Crea dentro dos carpetas: `frontend` y `backend`.
5. Confirma con `ls` que ambas existen.
6. Muestra con `pwd` en qué carpeta estás.

> Pista: `cd`, `mkdir`, `ls`, `pwd`.

---

## Parte B — Git (el ciclo completo tres veces)

Dentro de `actividad-clase-1`:

1. Inicializa un repositorio con `git init`.
2. Crea un archivo `notas.md` y escribe **3 cosas que aprendiste** esta semana.
3. Haz tu **primer commit** con un mensaje claro.
4. Agrega al `notas.md` **una pregunta que todavía tienes**. Haz el **segundo commit**.
5. Crea un `.gitignore` con la línea `node_modules/`. Haz el **tercer commit**.
6. Muestra la historia con `git log --oneline`.

Al final debes tener **3 commits** con mensajes que se entiendan.

---

## Parte C — Pensar (responde en `notas.md`)

Responde con tus palabras (2–3 líneas cada una):

1. ¿Cuál es la diferencia entre un **cliente** y un **servidor**?
2. ¿Por qué el **frontend** y el **backend** son cosas distintas? Da un ejemplo de qué haría cada uno
   en un proyecto (el del ejemplo de clase o el de tu equipo).
3. ¿Para qué sirve hacer **commits pequeños y frecuentes** en vez de uno gigante al final?

---

## Reto extra (opcional, para los que van rápido) ⭐

- Investiga qué hace el comando `git diff` y pruébalo: edita `notas.md` **sin** hacer commit y ejecuta
  `git diff`. Escribe en `notas.md` qué mostró.
- Investiga qué es una **rama** (`git branch`). Crea una rama llamada `pruebas` con
  `git branch pruebas` y lista las ramas con `git branch`. (No hace falta más, solo verla existir.)

---

### Criterios de logro
- [ ] Hiciste toda la Parte A desde la terminal.
- [ ] Tienes 3 commits con mensajes claros (`git log --oneline` lo muestra).
- [ ] Respondiste las 3 preguntas de la Parte C.
