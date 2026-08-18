# Flujo de trabajo con Git (el hilo de TODAS las clases)

Git no es un tema de una sola clase: es **la forma en que trabajamos todos los días** desde la
Clase 01. Este documento define el flujo. Cada guía de clase cierra aplicándolo.

> **Idea central:** commits pequeños y frecuentes + una rama por tarea + revisión antes de unir.
> Así varias personas trabajan sin pisarse y nunca se rompe lo que ya funcionaba.

---

## 1. Nivel por nivel (el flujo crece con el curso)

No se enseña todo el día 1. Se **establece el hábito** y se profundiza con el uso:

| Etapa | Clases | Qué se practica |
|-------|--------|-----------------|
| **Nivel 1 — Básico local + primer deploy** | 01 | `init`, `add`, `commit`, `log`. `push` a GitHub y **publicar la primera página** (GitHub Pages). |
| **Nivel 2 — Ramas** | 02–04 | Crear rama por tarea (`branch`, `checkout`), volver a `main`. |
| **Nivel 3 — Deploy en cada clase** | 05 en adelante | Cada clase **cierra desplegando**: el `push` a `main` actualiza el sitio publicado (CI/CD). |
| **Nivel 4 — Colaboración real** | 06–14 | Varios en el mismo repo, revisar PRs de otros, `pull` antes de trabajar. |
| **Nivel 5 — Conflictos** | 15 | Resolver conflictos de *merge* cuando dos tocan lo mismo. |

---

## 2. El ritual Git de cada clase (memorízalo)

Al **empezar** a trabajar en algo:

```bash
git checkout main          # pararse en la rama principal
git pull                   # traer lo último (si hay internet/equipo)
git checkout -b mi-tarea   # crear una rama para MI tarea
```

Mientras trabajas, **guarda seguido**:

```bash
git add .
git commit -m "Agrega el formulario de login"
```

Al **terminar** la tarea (o al cerrar la clase):

```bash
git push -u origin mi-tarea   # subir mi rama (cuando haya internet)
# luego, en GitHub: abrir un Pull Request y pedir revisión
# al hacer merge a main, el sitio se DESPLIEGA solo (GitHub Pages / CI/CD)
```

> 🚀 **Cada clase cierra desplegando.** Cuando lo aprobado llega a `main`, la página del proyecto se
> actualiza sola. Así queda un **link real** que crece clase a clase y el instructor ve el avance
> entrando a esa página. (El despliegue arranca en la Clase 01.)

> **Sin internet en el aula:** los pasos `pull`/`push` necesitan red. Pero **todo lo demás funciona
> 100% offline**: ramas, commits, merges locales. En clase se trabaja en la rama y se hacen commits;
> el `push` y el Pull Request se hacen cuando haya internet (en casa o con la conexión del instructor).

---

## 3. Nombres de ramas (convención del curso)

Una rama = una tarea pequeña. Nómbralas así:

```
feature/login-html        ← una funcionalidad nueva
fix/boton-no-responde     ← un arreglo
backend/api-usuarios      ← trabajo de un área del proyecto
```

Nada de trabajar directo en `main`. `main` siempre debe **funcionar**.

---

## 4. Pull Request (PR): revisar antes de unir

Un **Pull Request** es pedir "quiero unir mi rama a `main`, ¿lo revisan?". Sirve para que otro
compañero mire el cambio antes de mezclarlo. En el proyecto grupal, **otro equipo revisa el PR**
(ver "Definition of Done" en [VISION-Y-ROLES.md](VISION-Y-ROLES.md)).

Checklist mínimo antes de abrir un PR:
- [ ] Mi rama tiene commits con mensajes claros.
- [ ] Probé que lo mío funciona.
- [ ] No rompí lo que ya andaba (entrar → moverse → chatear sigue sirviendo).

---

## 5. Resolver conflictos (Clase 15, cuando aparezcan de verdad)

Un **conflicto** pasa cuando dos personas cambian **la misma línea** del mismo archivo. Git no sabe
cuál dejar y te pide decidir. Se ve así en el archivo:

```
<<<<<<< HEAD
color de fondo: azul
=======
color de fondo: rojo
>>>>>>> mi-tarea
```

Se resuelve **borrando las marcas** y dejando la versión correcta (o combinando ambas), luego:

```bash
git add archivo-en-conflicto
git commit
```

> En la Clase 15 lo practicamos a propósito: dos equipos tocan el mismo archivo y aprendemos a
> resolverlo con calma. Antes de eso, se evita repartiendo bien las tareas (cada equipo, sus archivos).

---

## 6. Reglas de oro

- **`main` siempre funciona.** Lo roto vive en ramas, nunca en `main`.
- **Commits pequeños y frecuentes** > un commit gigante al final.
- **`pull` antes de empezar**, `push` al terminar (cuando haya internet).
- **Un PR por tarea**, revisado por alguien más.
- El **historial de Git es la nota**: refleja quién hizo qué y cómo trabajó.
