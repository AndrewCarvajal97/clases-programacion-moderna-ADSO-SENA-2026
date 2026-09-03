# Proyecto individual — Portafolio personal

Mientras cada equipo construye su proyecto, **cada estudiante construye su propio portafolio**: una página
web personal que crece clase a clase. Es la práctica individual de los fundamentos y, al final, una
**carta de presentación real** para buscar trabajo o prácticas.

> **Por qué un portafolio:** practica HTML, CSS y JS con algo **propio y útil**, no un ejercicio
> desechable. Y como es de cada uno, nadie puede copiar-pegar sin entender.

---

## 1. Cómo evoluciona (una versión por etapa)

El mismo sitio va sumando capas. **No se empieza de cero cada vez**: se mejora lo anterior.

| Versión | Clase | Qué se agrega | Qué se practica |
|---------|-------|---------------|-----------------|
| **v1 — Estructura** | 02 (HTML) | Solo **HTML semántico**: encabezado, secciones (sobre mí, proyectos, contacto), sin estilos | Etiquetas, semántica, estructura |
| **v2 — Estilo** | 03 (CSS) | **CSS**: colores, tipografía, box model, Flexbox, responsive | Diseño visual, layout |
| **v3 — Interactividad** | 04 (JS) | **JavaScript**: menú que se abre, tema claro/oscuro, formulario que valida, etc. | DOM, eventos |
| **v4 — Publicado** | 05 (Despliegue) | Pulido, contenido real, y queda **publicado con link** (GitHub Pages + dominio) | Despliegue, CI/CD |

Al terminar la Clase 05, cada estudiante tiene un portafolio **funcional y en internet**.

---

## 2. Secciones mínimas del portafolio

1. **Encabezado** con tu nombre y qué estudias (ADSO — SENA).
2. **Sobre mí** — un párrafo corto.
3. **Proyectos** — empieza vacío o con "Proyecto de equipo (en construcción)"; se irá llenando.
4. **Habilidades** — HTML, CSS, JS... y lo que vayas aprendiendo.
5. **Contacto** — correo o un formulario.

> El contenido es tuyo y real. La estructura es la que practicamos en clase.

---

## 3. Regla de oro: HTML primero, sin estilos

En la v1 (Clase 02) **está prohibido usar CSS**. Suena raro, pero es a propósito: obliga a pensar en
la **estructura y el significado** (semántica) antes que en cómo se ve. Un buen HTML se entiende
aunque esté "feo". El maquillaje (CSS) viene después.

---

## 4. Despliegue

En la Clase 05 el portafolio queda publicado en un **hosting estático gratuito** (GitHub Pages,
Netlify o Vercel) con despliegue automático: cada `push` actualiza tu página. Puedes ir subiéndolo
antes; la Clase 05 es donde lo dejamos pulido y con dominio. Ver [../DESPLIEGUE-CICD.md](../DESPLIEGUE-CICD.md).

Tener el portafolio **en internet** desde temprano es de las cosas que más motiva: puedes mandarle
el link a quien quieras.

---

## 5. Git en el portafolio

El portafolio es también donde practicas el **flujo Git** de forma individual antes de aplicarlo en
equipo en el proyecto:

- Una **rama por versión/mejora** (`feature/agregar-css`, `feature/modo-oscuro`).
- Commits pequeños ("Agrega sección de proyectos", "Aplica Flexbox al menú").
- `push` cuando haya internet → se despliega solo.

Ver [../proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md](../proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md).

---

## 6. Evaluación del portafolio

Cuenta como componente individual (ver [../PLAN-DE-CURSO.md](../PLAN-DE-CURSO.md)). Se valora:

- [ ] HTML **semántico** (no todo `div`).
- [ ] CSS ordenado y responsive (se ve bien en celular).
- [ ] Al menos **una** interacción hecha con JavaScript.
- [ ] Está **publicado** y el link funciona.
- [ ] Historial de Git con commits claros.
