# Elegir el stack: vanilla o framework moderno

En la **Clase 11**, después de aprender los fundamentos "a mano" (vanilla) y de ver los frameworks
modernos, **cada equipo decide con qué construye su proyecto**. Este documento explica las opciones
para que la decisión sea informada. No hay respuesta "correcta": depende del equipo y del proyecto.

---

## 1. ¿Por qué aprendemos vanilla primero?

Porque un framework **automatiza cosas que primero hay que entender**. Si aprendes React sin saber
qué es el DOM, o Next sin saber qué es una petición HTTP, el framework es "magia" que no puedes
depurar. Con los fundamentos vanilla (clases 02–09) ya sabes **qué hace la máquina por dentro**; ahora
un framework solo te lo hace más rápido.

> Analogía: primero aprendes a manejar con caja manual (entiendes el motor). Luego, si quieres, pasas
> a la automática (más cómoda). Pero ya sabes qué pasa debajo.

---

## 2. Las dos rutas

### 🟢 Ruta A — Vanilla (lo que ya dominan)
**Frontend:** HTML + CSS + JavaScript (DOM). **Backend:** Node.js + Express. **Datos:** SQL.

- ✅ Ya lo saben; menos cosas nuevas que aprender a mitad del proyecto.
- ✅ Máximo control y cero "magia": entienden cada línea.
- ✅ Más liviano; fácil de desplegar (GitHub Pages + Render).
- ⚠️ Más código repetitivo para interfaces grandes.
- **Ideal si:** el proyecto es mediano, el equipo quiere ir seguro, o el tiempo es justo.

### 🔵 Ruta B — Framework moderno (lo empleable)
**Frontend:** React (o **Next.js**). **Backend:** **Next.js** (API routes) o **NestJS**. **Datos:** SQL.

- ✅ Es lo que piden hoy muchas empresas (más empleable).
- ✅ Menos código repetitivo; interfaces grandes más ordenadas (componentes).
- ✅ Next/Vercel hacen el despliegue muy fácil.
- ⚠️ Curva de aprendizaje: hay conceptos nuevos (componentes, estado, build).
- ⚠️ Más "magia": si algo falla, depurar es más difícil sin bases sólidas (por eso vimos vanilla antes).
- **Ideal si:** el equipo quiere retarse, apunta a algo vistoso/grande, o quiere aprender lo que se usa
  en la industria.

---

## 3. Los frameworks que vemos (clases 10–11)

| Framework | Qué es | Para qué en el proyecto |
|-----------|--------|--------------------------|
| **React** | Librería para construir interfaces con **componentes** reutilizables | El frontend, en vez de manipular el DOM a mano |
| **Next.js** | Framework **full-stack** sobre React: páginas + **API routes** + despliegue fácil | Puede ser TODO el proyecto (front + back) en un solo lugar |
| **NestJS** | Framework de **backend** sobre Node/Express, muy ordenado (estilo "empresa") | El backend, si quieren separarlo y estructurarlo |

> **Combinaciones típicas:**
> - **Solo Next.js** (front + back juntos) → la opción moderna más simple.
> - **React (front) + NestJS (back)** → separación clásica, estilo empresa.
> - **Next.js (front) + Express/Nest (back)** → mezcla flexible.

---

## 4. Reglas para el hackathon (importante)

- **Ambas rutas son 100% válidas** para competir. Un proyecto vanilla bien hecho **puede ganarle** a
  uno con framework mal hecho. Se juzga que **funcione, esté desplegado y trabaje el equipo** (ver la
  [rúbrica](HACKATHON.md)).
- Usar un framework **no da puntos gratis**: el criterio "feature técnica destacada" premia lo que
  esté **bien logrado**, sea vanilla o moderno.
- **No mezclen medio proyecto en cada uno** sin razón. Elijan una ruta y sean consistentes.
- El **stack elegido se registra** en su [REQUERIMIENTOS.md](PLANTILLA-REQUERIMIENTOS.md).

---

## 5. Cómo seguir aprendiendo el framework (autoaprendizaje)

Dos clases son solo la **introducción para decidir**. Quien tome la ruta de frameworks profundiza con:

- **jscamp.dev** — cubre React, Node y más, gratis y en español (ver
  [../recursos/RECURSOS-Y-VIDEOS.md](../recursos/RECURSOS-Y-VIDEOS.md)).
- Documentación oficial: `react.dev`, `nextjs.org`, `docs.nestjs.com`.

> Consejo: el **PM** coordina que el equipo aprenda lo que su ruta necesita y reparte quién estudia qué.
