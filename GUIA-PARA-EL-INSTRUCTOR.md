# Guía para el instructor

Este documento es para **cualquier instructor** que vaya a dictar una clase de este curso, incluso si
no la preparó. La idea es que **nada quede implícito**: todo lo que necesitas está escrito.

---

## 1. Antes de la clase (10 minutos)

1. Abre la carpeta de la clase que te toca: `clase-XX-tema/`.
2. Lee su `GUIA.md` completo. Está escrito como un **guion**: puedes proyectarlo y seguirlo de arriba
   a abajo.
3. Revisa la carpeta `codigo/`: es el código ya probado. Ten una copia lista en el USB.
4. Verifica que el aula esté lista según [CONFIGURACION-OFFLINE.md](CONFIGURACION-OFFLINE.md)
   (Node, Git y VS Code instalados; dependencias copiadas si la clase las usa).

---

## 2. Cómo leer una GUIA.md

Cada guía usa estas convenciones. Reconócelas:

| Marca | Significado | Qué haces con ella |
|-------|-------------|--------------------|
| `> Explica` | Nota para ti: cómo introducir un concepto, con analogías | Lo dices con tus palabras |
| `Práctica` | Momento para que los estudiantes **escriban código** | Te detienes y todos teclean |
| Bloques de código | Código exacto a escribir o mostrar | Se copia/escribe tal cual |
| `Resultado esperado` | Lo que debe verse si salió bien | Confirmas con el grupo |
| `Errores comunes` | Fallos típicos y su solución | Los tienes listos por si aparecen |

---

## 3. Ritmo de la clase (martes y jueves)

**Horario:** cada clase va de **6:00 a.m. a 12:00 m.**, con **descanso de 9:00 a 9:30**. Son unas
**5,5 horas** por sesión → hay tiempo de sobra para ver el tema **a fondo y bien explicado**. La
prioridad es **profundizar**, no correr.

**Estructura sugerida (bloque de 6 h):**

| Franja | Qué |
|--------|-----|
| 6:00 – 6:15 | Repaso de la clase anterior + qué haremos hoy |
| 6:15 – 9:00 | **Teoría + práctica guiada** del tema (proyectar la `presentacion.html`, todos escriben) |
| 9:00 – 9:30 | **Descanso** |
| 9:30 – 11:30 | **Práctica profunda**: aplicar el tema (portafolio / proyecto de equipo), resolver dudas |
| 11:30 – 12:00 | **Cierre**: desplegar el avance, commit, y entregar la actividad |

> Aprovecha el bloque largo: alterna **explicar → que ellos hagan → revisar juntos**. Con este tiempo,
> temas grandes (como HTML, que trae muchas etiquetas) se pueden ver **completos y con calma**.

- **Martes → jueves:** actividad corta de refuerzo.
- **Jueves → martes:** actividad de avance del proyecto del equipo (tramo largo).

---

## 4. Qué dejar asignado al final de cada clase

En cada carpeta hay un `actividad.md`. Al cerrar la clase:

1. Comparte el **video de refuerzo** del tema (enlaces en
   [recursos/RECURSOS-Y-VIDEOS.md](recursos/RECURSOS-Y-VIDEOS.md)).
2. Asigna la actividad del `actividad.md`.
3. Recuérdales **hacer commits** de su avance (la evidencia se mide en Git).

---

## 5. Continuidad entre instructores

- El **estado del proyecto** vive en el repositorio de cada estudiante/equipo (su historial de Git).
- Si tú diste la clase anterior, deja una nota de **hasta dónde llegaron** al final de tu sesión
  (basta un comentario en el grupo o una línea en un `bitacora.md` compartido).
- Todo el temario y el orden están en [PLAN-DE-CURSO.md](PLAN-DE-CURSO.md). No hace falta coordinar
  en persona: sigue el número de clase que corresponde.

---

## 6. Los dos hilos que cierran cada clase

Además del tema del día, toda clase refuerza dos cosas transversales:

1. **🌿 Flujo Git:** la clase cierra con el ritual (rama → commits → push/PR cuando haya internet).
   Ver [proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md](proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md).
2. **🚀 Despliegue en CADA clase (desde la Clase 01):** cada equipo publica su página en la Clase 01 y
   **cada clase cierra desplegando**. Así **monitoreas el avance real entrando a la página de cada
   proyecto** en cualquier momento, sin pedir archivos. Ver [DESPLIEGUE-CICD.md](DESPLIEGUE-CICD.md).
   Ten a mano la lista de **links de los proyectos** para revisarlos entre clases.

Y hay **tres niveles** de trabajo (formato hackathon 🏆): el **ejemplo de referencia** que construimos
juntos en clase (un Habbo, solo para enseñar), el **proyecto libre de cada equipo** (su propia idea o
su proyecto de grado; competencia con premio, equipos ya formados, roles desde la Clase 01) y el
**portafolio individual** (clases 02–05). Reglas del hackathon en
[proyecto-de-equipo/HACKATHON.md](proyecto-de-equipo/HACKATHON.md).

> **Clases guiadas por el instructor (04 JavaScript, 10 React, 11 Next/Nest):** por ser las más
> difíciles y el grupo grande, se explica el código y la funcionalidad completos mientras todos siguen;
> el video y la actividad refuerzan. No se deja al autodescubrimiento. Los frameworks (10–11) son una
> **introducción para decidir** el stack, no dominio total.

---

## 7. Principios que no se negocian

- **Se aprende escribiendo.** Si los estudiantes solo miran, no aprendieron. Prioriza la práctica.
- **Commits pequeños y frecuentes** valen más que "todo funcionó al final".
- **Nada de `npm install` en vivo** con el internet del SENA: usa el código y dependencias del USB.
- **Todos entienden el sistema completo**, aunque después se dividan en equipos.
- **`main` siempre funciona**; lo que está a medias vive en ramas.
