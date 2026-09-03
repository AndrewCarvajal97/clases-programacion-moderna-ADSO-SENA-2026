# 🚀 Trabajo de entrega — CI/CD leyendo documentación oficial

> **Competencia:** desplegar un proyecto con **CI/CD** aprendiendo a **leer documentación oficial** (no
> copiar y pegar a ciegas). Este trabajo evalúa dos cosas a la vez: que **automatices un despliegue** y
> que sepas **buscar, leer y aplicar** la documentación de una herramienta real.

**Modalidad:** individual (o parejas, según indique el instructor).
**Se entrega:** el **enlace al repositorio**, el **link del sitio publicado** y este documento con tus
respuestas (o un archivo `ENTREGA.md` en tu repo).
**Uso de IA:** permitido como **tutor** (que te explique), no como **oráculo** (copiar sin entender). En la
sustentación tendrás que explicar tu workflow línea por línea.

---

## 🧭 Primero: cómo leer documentación (el superpoder del dev)

Leer documentación es **la habilidad #1** de un programador. Nadie memoriza todo; los buenos **saben
buscar y leer**. Método:

1. **Ve a la fuente OFICIAL.** La doc del creador (github.com/docs, electronjs.org…), no un blog cualquiera
   ni un video de hace 4 años.
2. **Busca "Quickstart" o "Getting started".** Casi toda doc tiene una guía de inicio rápido con un ejemplo
   mínimo que **funciona**.
3. **Haz funcionar el ejemplo mínimo primero.** Cópialo tal cual, compruébalo, y **luego** cámbialo.
4. **Cambia una cosa a la vez.** Así, si se rompe, sabes qué fue.
5. **Usa `Ctrl+F`** para saltar a la palabra que buscas (p. ej. `secrets`, `branches`).
6. **Mira la versión.** Que la doc coincida con la versión que usas (`@v4`, "latest"…).
7. **Lee el error completo** y búscalo tal cual. El error casi siempre dice el archivo y la línea.
8. **Verifica con la doc lo que te diga la IA.** La IA se equivoca; la doc oficial es la verdad.

> **Analogía:** la documentación es el **manual del juego**. Quien lo lee juega mejor que quien adivina
> los controles a los golpes.

---

## 📚 Documentación oficial que usarás (enlaces verificados)

| Tema | Documentación oficial |
|------|------------------------|
| GitHub Pages (publicar) | https://docs.github.com/en/pages/quickstart |
| GitHub Actions (CI/CD) | https://docs.github.com/en/actions/get-started/quickstart |
| Plantillas de workflows | https://github.com/actions/starter-workflows |
| Netlify | https://docs.netlify.com/ |
| Vercel | https://vercel.com/docs |
| Render (apps dinámicas) | https://render.com/docs |
| Electron (escritorio) | https://www.electronjs.org/docs/latest/tutorial/process-model |
| MDN (web, referencia) | https://developer.mozilla.org/es/ |
| Todo lo gratis para devs | https://free-for.dev/ |
| Dominio gratis (estudiantes) | https://education.github.com/pack |

---

## 📝 Parte 1 — Bitácora de lectura (40 pts)

**Lee** la [Quickstart de GitHub Actions](https://docs.github.com/en/actions/get-started/quickstart) y la
[Quickstart de GitHub Pages](https://docs.github.com/en/pages/quickstart). Responde **con tus propias
palabras** (copiar/pegar de la doc = 0):

1. ¿Qué es un **workflow** y en qué carpeta exacta debe guardarse? ¿Qué **extensión** de archivo usa?
2. Explica qué hacen estas 4 claves de un workflow: `on`, `jobs`, `runs-on`, `steps`.
3. ¿Qué es un **runner** (`ubuntu-latest`)? ¿De quién es esa máquina?
4. En GitHub Pages: ¿en qué menú se activa y qué **archivo** busca como página principal
   (`index.html`, …)? ¿Cuánto puede **tardar** en publicarse un cambio?
5. Escribe **una duda** que te surgió leyendo y **cómo la resolviste** (qué buscaste, dónde).

> **Regla:** cada respuesta, 2–4 frases tuyas. Se nota muchísimo cuándo alguien copió sin leer.

---

## 🔧 Parte 2 — Implementa el CI/CD (40 pts)

Automatiza el despliegue de **tu portafolio** con GitHub Actions (en vez de activar Pages a mano).

1. Crea el archivo `.github/workflows/deploy.yml`.
2. Que en **cada push a `main`** publique tu sitio en GitHub Pages.
3. **Guíate por la plantilla oficial** ("GitHub Pages" en
   [starter-workflows](https://github.com/actions/starter-workflows/tree/main/pages)) — **léela y
   adáptala**, no la pegues sin entender.
4. Comprueba en la pestaña **Actions** que el workflow corre en **verde** ✅ y que tu sitio queda publicado.

**Criterios de logro:**
- [ ] Existe `.github/workflows/deploy.yml` y se dispara en push a `main`.
- [ ] El workflow termina en **verde** y el sitio está **en vivo** en su URL.
- [ ] Puedes **explicar cada línea** (qué hace `on`, `checkout`, `build`, `deploy`).
- [ ] Hiciste un cambio, `push`, y el sitio se **actualizó solo** (evidencia: 2 corridas en Actions).

> **Punto extra (10 pts) — app dinámica:** en un repo aparte, monta un workflow que primero **pruebe**
> (`npm test`) y solo si pasa, **despliegue** (usa `needs:`), leyendo la doc de la acción que elijas.

---

## 📦 Parte 3 — Entrega y sustentación (20 pts)

Entrega:
1. **Link del repositorio** (público).
2. **Link del sitio publicado** (tu URL de Pages).
3. Este documento con la **bitácora** (Parte 1) respondida, o un `ENTREGA.md` en el repo.
4. **Captura** de la pestaña *Actions* con el workflow en verde.

En la **sustentación** te preguntaré: *"muéstrame tu `deploy.yml` y explícame qué hace cada línea, y
enséñame en qué parte de la documentación lo aprendiste"*.

---

## 🎯 Rúbrica (100 pts)

| Ítem | Pts | Qué se evalúa |
|------|-----|---------------|
| Bitácora de lectura | 40 | Respuestas **con tus palabras**, correctas, que demuestran que leíste. |
| Workflow CI/CD | 40 | `deploy.yml` funciona (verde), sitio en vivo, se actualiza solo. |
| Entrega + sustentación | 20 | Links + captura + **explicar** el workflow y **dónde** lo aprendiste. |
| Extra: app dinámica | +10 | Pipeline con `test` → `deploy` encadenado. |

> **Lo que de verdad se evalúa:** que sepas **leer la documentación y aplicarla**. Un workflow que
> funciona pero que no puedes explicar (ni señalar en la doc de dónde salió) **no** cumple el objetivo.

---

### Ayuda para arrancar (no es la solución, es el mapa)
- Busca en la plantilla oficial las palabras `checkout`, `pages`, `deploy`.
- Si el workflow falla, **abre la corrida en Actions**, lee el paso rojo y **búscalo** en la doc.
- Recuerda: **HTTPS** y la URL te los da GitHub Pages solo.
