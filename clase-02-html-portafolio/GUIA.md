# Clase 02 — HTML y tu Portafolio (v1)

> **Meta de la clase:** entender qué es **HTML** y la **estructura semántica** de una página, y
> construir la **versión 1 del portafolio** de cada estudiante: **solo HTML, sin estilos todavía**.

**Duración estimada:** 1 sesión.
**Requisitos previos:** [Clase 0](../clase-00-instalaciones-y-configuracion/GUIA.md) (entorno) y
[Clase 01](../clase-01-fundamentos-y-entorno/GUIA.md) (repo creado, flujo Git).
**Presentación para proyectar:** [presentacion.html](presentacion.html)

---

## Índice
1. [¿Qué es HTML?](#1-que-es-html) — anatomía, con/sin cierre, atributos, `class`/`id`, comentarios
2. [La estructura de un documento HTML](#2-estructura) — + metadatos del `<head>`
3. [Etiquetas más usadas](#3-etiquetas) — + multimedia (imagen, video, audio)
4. [HTML semántico (¡importante!)](#4-semantico) — por qué importa
4c. HTML a fondo: DOM/árbol, elemento vs etiqueta, metadatos, SEO/Open Graph, semántico (casos de uso), enlaces especiales, atributos booleanos
4b. [Dónde buscar documentación](#4b-docs)
5. [Formularios](#5-formularios)
6. [Práctica: Portafolio v1](#6-practica)
7. [Cierre, Git y actividad](#7-cierre)

---

## 1. ¿Qué es HTML? <a name="1-que-es-html"></a>

> **Explica:** HTML es el **esqueleto** de toda página web. No es un lenguaje de programación (no tiene
> lógica): es un lenguaje de **marcado** que dice *qué es cada cosa*: "esto es un título", "esto es un
> párrafo", "esto es una imagen".

**HTML** = *HyperText Markup Language*. Se escribe con **etiquetas** entre `<` y `>`.
La mayoría vienen en **par**: una de apertura y una de cierre.

```html
<p>Hola, soy un párrafo.</p>
```

- `<p>` abre el párrafo · `</p>` lo cierra · el texto va en medio.

> **Analogía:** el HTML es como los rótulos de las cajas de una mudanza: no cambian lo de adentro, pero
> dicen **qué es** cada cosa para que todo quede en su lugar.

### Anatomía de una etiqueta

Mira las partes de esta etiqueta de enlace:

```html
<a href="pagina.html">Clic aquí</a>
```

- `<a` → **etiqueta de apertura**.
- `href="pagina.html"` → un **atributo** (`href`) con su **valor** (`"pagina.html"`).
- `Clic aquí` → el **contenido** (lo que se ve).
- `</a>` → la **etiqueta de cierre** (lleva la barra `/`).

> **Nota de vocabulario:** en HTML se llaman **atributos**. Mucha gente les dice "propiedades" (las
> *propiedades* son de CSS), pero es lo mismo: información extra dentro de la apertura.

### Etiquetas CON cierre vs SIN cierre (vacías)

| Tipo | Cómo son | Ejemplos |
|------|----------|----------|
| **Con cierre** (en par) | **Envuelven** contenido: apertura + contenido + cierre | `<p>…</p>`, `<h1>…</h1>`, `<div>…</div>` |
| **Sin cierre** (vacías / *void*) | No envuelven nada; se cierran solas | `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>` |

> **Regla simple:** si la etiqueta **envuelve** algo, lleva cierre. Si representa un elemento "único"
> (una imagen, un salto de línea `<br>`, una línea `<hr>`), **no** lleva cierre.

### Atributos importantes: `class` e `id`

Dos atributos que usaremos muchísimo (sobre todo en CSS y JavaScript):

- **`class`** — una etiqueta **reutilizable**: muchos elementos pueden tener la misma clase. Se usa
  para darles el **mismo estilo**. Ej: `<p class="destacado">`.
- **`id`** — un identificador **único**: solo un elemento en la página lo tiene. Sirve de **ancla**
  (saltar con `href="#contacto"`) o para **JavaScript**. Ej: `<section id="contacto">`.

### Comentarios en HTML

Notas para ti (u otro programador) que **no se muestran** en la página:

```html
<!-- Esto es un comentario: el navegador lo ignora -->
```

Sirven para explicar el código o "apagar" algo temporalmente.

---

## 2. La estructura de un documento HTML <a name="2-estructura"></a>

Todo archivo `.html` arranca con este esqueleto. **Escríbelo, no lo memorices** (con el tiempo sale solo):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Portafolio</title>
</head>
<body>
  <!-- Todo lo que se VE va aquí -->
  <h1>Hola mundo</h1>
</body>
</html>
```

- `<!DOCTYPE html>` — "esto es HTML moderno".
- `<html lang="es">` — la página, en español.
- `<head>` — información que **no se ve** (título de la pestaña, codificación).
- `<body>` — todo lo que **sí se ve**.
- `<!-- ... -->` — un comentario (no se muestra).

> **Truco en VS Code:** escribe `!` y presiona `Tab` → genera este esqueleto solo.

### Metadatos: qué va en el `<head>`

Los **metadatos** son datos **sobre** la página (no se ven, pero el navegador y Google los leen):

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portafolio de Tu Nombre, aprendiz ADSO.">
  <title>Mi Portafolio</title>
</head>
```

- `<meta charset="UTF-8">` — para que los **acentos y la ñ** se vean bien.
- `<meta name="viewport" ...>` — que la página se vea bien en **celular** (responsive).
- `<meta name="description" ...>` — **resumen** para Google (SEO).
- `<title>` — el texto de la **pestaña** del navegador.

---

## 3. Etiquetas más usadas <a name="3-etiquetas"></a>

| Etiqueta | Para qué | Ejemplo |
|----------|----------|---------|
| `<h1>`…`<h6>` | Títulos (h1 el más grande) | `<h1>Mi nombre</h1>` |
| `<p>` | Párrafo | `<p>Sobre mí...</p>` |
| `<a>` | Enlace | `<a href="https://github.com">Mi GitHub</a>` |
| `<img>` | Imagen | `<img src="foto.jpg" alt="Mi foto">` |
| `<ul>`/`<li>` | Lista con viñetas | `<ul><li>HTML</li></ul>` |
| `<button>` | Botón | `<button>Enviar</button>` |

> **Ojo:** `<img>` no tiene etiqueta de cierre, y **siempre** lleva `alt` (texto por si la imagen no
> carga; también ayuda a personas con lectores de pantalla).

### Más etiquetas: multimedia y contenido

| Etiqueta | Para qué |
|----------|----------|
| `<img src alt>` | Imagen (sin cierre) |
| `<video src controls>` | Video con botones de reproducción |
| `<audio src controls>` | Audio |
| `<figure>` + `<figcaption>` | Imagen con su **leyenda** |
| `<strong>` / `<em>` | Énfasis (negrita / cursiva con significado) |
| `<ol>` / `<li>` | Lista **numerada** |
| `<table>` | Tabla de datos |

```html
<figure>
  <img src="foto.jpg" alt="Mi foto">
  <figcaption>Yo en el SENA 👋</figcaption>
</figure>

<video src="demo.mp4" controls></video>
<audio src="tema.mp3" controls></audio>
```

> ⚠️ **Sin internet:** la imagen, el video y el audio deben ser **archivos locales** en tu carpeta
> (`foto.jpg`, `demo.mp4`…), no enlaces de la web.

---

## 4. HTML semántico (¡importante!) <a name="4-semantico"></a>

> **Explica:** se puede hacer todo con `<div>` (una caja genérica), pero es mejor usar etiquetas que
> **dicen qué son**. Eso es HTML **semántico**: más claro, mejor para buscadores (SEO) y accesibilidad.

| En vez de… | Usa… | Es… |
|------------|------|-----|
| `<div>` arriba | `<header>` | El encabezado |
| `<div>` de menú | `<nav>` | La navegación |
| `<div>` principal | `<main>` | El contenido principal |
| `<div>` de bloque | `<section>` | Una sección |
| `<div>` abajo | `<footer>` | El pie de página |

```html
<header>
  <h1>Ana Pérez</h1>
  <nav><a href="#proyectos">Proyectos</a></nav>
</header>
<main>
  <section id="sobre-mi"> ... </section>
</main>
<footer><p>© 2026 Ana Pérez</p></footer>
```

> **Regla de la clase:** usa etiquetas semánticas siempre que puedas. `<div>` solo cuando ninguna otra
> encaje.

### ¿Por qué es tan importante el semántico?

Comparar "sopa de `<div>`" contra semántico:

```html
<!-- 😵 Sopa de divs: nada dice qué es cada cosa -->
<div class="header"> <div class="nav"> ... </div> </div>

<!-- ✅ Semántico: se entiende solo -->
<header> <nav> ... </nav> </header>
```

Tres razones concretas:
1. **SEO (Google):** los buscadores entienden mejor tu página y la posicionan mejor.
2. **Accesibilidad:** los **lectores de pantalla** (para personas ciegas) anuncian "encabezado",
   "navegación", "contenido principal". Con `<div>` no pueden.
3. **Mantenimiento:** tu código se **lee solo**; tú y tu equipo lo entienden rápido.

### 🧪 Demo en vivo: "divididitis" vs semántico (para hacer en clase)

En `codigo/ejemplo-semantico/` hay **tres archivos** listos para copiar y probar:

- `estilos.css` — una hoja de estilos que **selecciona por etiqueta** (`header`, `nav`, `main`, `article`, `footer`).
- `divititis.html` — el mismo contenido pero **todo con `<div>`**.
- `semantico.html` — el mismo contenido con **etiquetas semánticas**.

> **Práctica (impacto garantizado):** abre los **dos** HTML en el navegador, uno al lado del otro.
> Comparten **exactamente el mismo CSS**, pero:
> - El de `<div>` se ve **plano** (el CSS busca `header`, `nav`… y no los encuentra).
> - El **semántico** se ve **estilizado** — ¡sin tocar el CSS!
>
> Ahí se ve de golpe que el semántico cambia **el estilo** *y* **la interpretación** del navegador.
>
> **Bonus (interpretación):** abre las DevTools (F12) → pestaña **Accessibility** y mira el árbol.
> En el semántico aparecen los *landmarks* (`banner`, `navigation`, `main`, `contentinfo`); en el de
> `<div>`, nada. Eso es lo que "leen" Google y los lectores de pantalla.

---

## 4.c HTML a fondo (DOM, semántica, metadatos, atributos y enlaces)

### Elemento vs Etiqueta
- **Etiqueta (tag):** la marca entre `<` y `>` (`<p>` o `</p>`).
- **Elemento:** el **conjunto completo** — apertura + contenido + cierre: `<p>Hola</p>`.

> La etiqueta es el rótulo; el elemento es la caja entera con lo que lleva dentro.

### El DOM: el árbol de elementos
El navegador convierte tu HTML en un **árbol de nodos** llamado **DOM** (Document Object Model). Cada
elemento es un **nodo** con relaciones:

```
<html>
├── <head>  → <meta>, <title>
└── <body>
    ├── <header> → <h1>, <nav>
    └── <main>   → <section> → <p>, <ul>…
```

- **Padre / hijo:** `<ul>` es el **padre** de sus `<li>` (**hijos**).
- **Hermanos:** los `<li>` entre sí (mismo padre).
- **Anidar bien:** lo que abres **último**, ciérralo **primero**.
- **Jerarquía de títulos:** un solo `<h1>`, luego `<h2>`, `<h3>`… en orden (importa para SEO y accesibilidad).

> JavaScript "agarra" estos nodos por el DOM (Clase 04).

### Metadatos importantes (el `<head>` completo)

```html
<meta charset="UTF-8">                          <!-- acentos y ñ -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- responsive -->
<meta name="description" content="…">           <!-- resumen para Google -->
<meta name="author" content="Tu Nombre">
<meta name="theme-color" content="#2563eb">     <!-- color de la barra del navegador -->
<meta name="robots" content="index, follow">    <!-- ¿Google puede indexar? -->
<link rel="icon" href="favicon.ico">            <!-- iconito de la pestaña -->
```
> `keywords` ya casi no se usa (Google lo ignora).

### SEO y Open Graph
- **SEO básico:** `<title>` claro, `meta description`, **un solo `<h1>`**, HTML semántico, `alt` en imágenes.
- **Open Graph** (cómo se ve el link al compartir en WhatsApp/redes):
  ```html
  <meta property="og:title" content="…">
  <meta property="og:image" content="…">
  <meta property="og:description" content="…">
  ```
- También: `<link rel="canonical" href="…">` (la URL "oficial") y las **Twitter Cards**.

### Semántico: cuándo usar cada etiqueta

| Etiqueta | Cuándo usarla |
|----------|---------------|
| `<header>` | Cabecera de la página o de una sección |
| `<nav>` | Un menú de navegación |
| `<main>` | El contenido principal (uno por página) |
| `<section>` | Un bloque temático con su título |
| `<article>` | Contenido **independiente** (un post, una tarjeta) |
| `<aside>` | Contenido lateral/relacionado (barra, notas) |
| `<footer>` | Pie de la página o de una sección |
| `<figure>`/`<figcaption>` | Imagen con leyenda |
| `<small>` | Letra pequeña / textos legales |
| `<address>` | Datos de contacto |
| `<time>` | Fechas y horas |
| `<mark>` | Resaltar texto |

### El enlace `<a>` y enlaces especiales

```html
<a href="pagina.html">Ir</a>            <!-- otra página -->
<a href="#contacto">Contacto</a>        <!-- salta a un id de ESTA página -->
<a href="mailto:hola@x.com">Correo</a>  <!-- abre el correo -->
<a href="tel:+57300...">Llamar</a>      <!-- llamar (en el celular) -->
<a href="cv.pdf" download>Descargar CV</a>
<a href="https://..." target="_blank" rel="noopener noreferrer">Abrir en otra pestaña</a>
```
> ⚠️ **Siempre** que uses `target="_blank"`, agrega `rel="noopener noreferrer"` (seguridad y privacidad).

### Atributos booleanos (sí / no)
Con solo **estar presentes** valen "sí". No llevan valor:

```html
<input required>        <!-- obligatorio -->
<button disabled>       <!-- deshabilitado -->
<input type="checkbox" checked>  <!-- marcado -->
<input readonly>        <!-- solo lectura -->
<div hidden>            <!-- oculto -->
```
> Otros: `selected`, `autofocus`, `multiple`.

### Otros atributos importantes
- `rel` — relación de un enlace: `noopener`, `noreferrer`, `nofollow`.
- `role` y `aria-*` — accesibilidad (para **lectores de pantalla**): `role="button"`, `aria-label="Cerrar"`.
- `alt` — texto alterno de imágenes · `title` — tooltip · `lang` — idioma · `data-*` — datos propios.

---

## 4.b Dónde buscar documentación (referencias) <a name="4b-docs"></a>

Ningún desarrollador se lo sabe todo de memoria: **se consulta**. Referencias confiables:

- **MDN Web Docs** ⭐ — la referencia oficial, en español: `https://developer.mozilla.org/es/`
  (busca en Google: "MDN" + el nombre de la etiqueta, ej. "MDN figure").
- **lenguajehtml.com** — curso de HTML en español (Manz), claro y actualizado.
- **web.dev/learn/html** — curso de HTML de Google: `https://web.dev/learn/html?hl=es`
- **Can I use** — ¿esta etiqueta funciona en todos los navegadores?: `https://caniuse.com/`

> ⚠️ **Evita W3Schools:** a veces trae información desactualizada o imprecisa. Usa las de arriba.

> 💡 Y tu **asistente de IA**: "explícame la etiqueta `<figure>` con un ejemplo". Pero **entiende** lo
> que te responde; no lo pegues a ciegas.

---

## 5. Formularios <a name="5-formularios"></a>

Los formularios recogen datos del usuario (lo usaremos de verdad con el backend más adelante).

```html
<form>
  <label>Nombre: <input type="text" name="nombre"></label>
  <label>Correo: <input type="email" name="correo"></label>
  <button type="submit">Enviar</button>
</form>
```

- `<label>` — la etiqueta de texto del campo (mejora accesibilidad).
- `<input>` — la casilla; `type` cambia qué acepta (`text`, `email`, `password`, `number`…).
- `<button type="submit">` — envía el formulario.

### 5.1. Formularios a fondo (fieldset, label, validaciones, datalist)

- **`<fieldset>` + `<legend>`** — agrupan campos con un título.
- **`<label for="id">`** — conéctala al `id` del input; al hacer clic en el texto se **enfoca** el campo.
- **Validaciones (¡sin JavaScript!):** el navegador valida solo con atributos:
  `required`, `type="email"`, `minlength`/`maxlength`, `min`/`max`, `pattern="[0-9]{10}"`.
- **`<datalist>`** — sugerencias mientras el usuario escribe.
- **`<button>` vs `<input type="submit">`:** usa `<button>` (moderno, admite iconos). `type="submit"`
  envía; `type="button"` **no** envía (para otras acciones).

### 5.2. En línea vs de bloque · `<span>`

- **Bloque:** ocupan todo el ancho y empiezan en línea nueva (`div`, `p`, `section`, `h1`, `ul`).
- **En línea:** ocupan solo lo necesario, van seguidos (`span`, `a`, `strong`, `em`, `img`).
- `<div>` = caja genérica de **bloque**; `<span>` = caja genérica **en línea** (con CSS puedes cambiarlo).

### 5.3. Interactivos nativos: `<details>` y `<dialog>`

- **`<details>` + `<summary>`** — un **acordeón** que abre/cierra **sin JavaScript**.
- **`<dialog>`** — un **modal** nativo; la ventana es HTML y se abre con `.showModal()` desde JS.

### 5.4. iframes, carga diferida y listas

- **`<iframe>`** — incrusta otra página (un mapa, un video de YouTube).
- **`loading="lazy"`** — en `<img>`/`<iframe>`, carga el recurso **solo al acercarse** → página más rápida.
- **Listas:** `<ul>` (sin orden, viñetas) y `<ol>` (numerada; atributos `type`, `start`, `reversed`); dentro, `<li>`.

### 5.5. Detalles: estilos por defecto y convenciones

- El **navegador ya trae estilos** (un `h1` grande y en negrita, listas con viñetas). El CSS los **sobrescribe**.
- Escribe las etiquetas en **minúscula** (`<section>`, no `<SECTION>`).
- **Evita etiquetas obsoletas** como `<center>` o `<font>`: eso hoy se hace con **CSS**.

> 🧪 **Para probar:** abre `codigo/ejemplo-formulario.html` — un formulario completo con validaciones,
> `datalist`, un `<details>` y un `<dialog>` funcionando. Escrito para copiar y ver en acción.

---

## 6. Práctica: Portafolio v1 (¡solo HTML!) <a name="6-practica"></a>

Vamos a construir la **versión 1** de tu portafolio. **Regla de oro: prohibido usar CSS hoy.** Se ve
"feo" a propósito: hoy nos concentramos en la **estructura y el significado**. El maquillaje viene en la
Clase 03.

> Ver el proyecto completo del portafolio en [proyecto-portafolio/README.md](../proyecto-portafolio/README.md).

### Paso 1 — Abrir tu repo del portafolio
Abre en VS Code la carpeta `mi-portafolio` que creaste en la Clase 01 (`code .`).

### Paso 2 — Crear `index.html`
Crea el archivo `index.html`. Escribe el esqueleto (`!` + `Tab`) y cambia el `<title>` a tu nombre.

### Paso 3 — Construir las secciones
Dentro del `<body>`, arma tu portafolio con HTML **semántico**. Usa esta estructura como guía (cámbiala
con tus datos reales):

```html
<header>
  <h1>Tu Nombre</h1>
  <p>Aprendiz de Análisis y Desarrollo de Software — SENA</p>
  <nav>
    <a href="#sobre-mi">Sobre mí</a>
    <a href="#proyectos">Proyectos</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>

<main>
  <section id="sobre-mi">
    <h2>Sobre mí</h2>
    <p>Escribe un párrafo corto sobre ti.</p>
  </section>

  <section id="proyectos">
    <h2>Proyectos</h2>
    <ul>
      <li>Proyecto de equipo (en construcción)</li>
    </ul>
  </section>

  <section id="habilidades">
    <h2>Habilidades</h2>
    <ul>
      <li>HTML</li>
    </ul>
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
    <form>
      <label>Nombre: <input type="text" name="nombre"></label>
      <label>Correo: <input type="email" name="correo"></label>
      <button type="submit">Enviar</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Tu Nombre</p>
</footer>
```

> En `codigo/` tienes este archivo como plantilla: [`index.html`](codigo/index.html).

### Paso 4 — Verlo en el navegador
Doble clic en `index.html` (o clic derecho → *Open with Live Server* si instalaste la extensión).

> **Resultado esperado:** una página sin colores ni diseño, pero con tu información **bien organizada**:
> títulos, párrafos, listas y un formulario. Los enlaces del menú saltan a cada sección.

### Errores comunes
- **No se ve nada / se ve raro:** revisa que cada etiqueta que abriste esté **cerrada** (`</p>`, `</section>`).
- **Los acentos salen mal (Ã©):** te faltó `<meta charset="UTF-8">` en el `<head>`.
- **El menú no salta:** el `href="#proyectos"` debe coincidir con un `id="proyectos"` en la sección.

---

## 7. Cierre, Git y actividad <a name="7-cierre"></a>

### Cierre Git de la clase 🌿
Guarda tu avance en el historial:
```bash
git add .
git commit -m "Portafolio v1: estructura HTML semantica"
git push        # cuando haya internet
```

### Lo que dominas hoy
- [x] Sé qué es HTML y escribo el esqueleto de un documento.
- [x] Uso etiquetas comunes y **semánticas** (`header`, `main`, `section`, `footer`).
- [x] Hice un formulario básico.
- [x] Tengo la **v1 de mi portafolio** en HTML.

### Refuerzo (video)
Mira el curso de HTML recomendado: [recursos/RECURSOS-Y-VIDEOS.md](../recursos/RECURSOS-Y-VIDEOS.md).

### Actividad entre clases
En [actividad.md](actividad.md): completar tu portafolio v1 con contenido real.

### Adelanto de la Clase 03
Le daremos **estilo con CSS**: colores, tipografía y que se vea bien en el celular. Tu mismo portafolio,
pero bonito.
