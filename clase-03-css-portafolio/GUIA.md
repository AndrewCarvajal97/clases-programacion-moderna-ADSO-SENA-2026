# Clase 03 — CSS y tu Portafolio (v2)

> **Meta de la clase:** entender qué es **CSS** y cómo se conecta al HTML, y darle **estilo** al
> portafolio: colores, tipografía, el **box model**, **Flexbox** para el layout y que se vea bien en el
> celular. Pasamos del portafolio **v1 (solo HTML)** al **v2 (con estilos)**.

**Duración estimada:** 1 sesión.
**Requisitos previos:** [Clase 02](../clase-02-html-portafolio/GUIA.md) (portafolio v1 en HTML) y su
flujo de Git.
**Presentación para proyectar:** [presentacion.html](presentacion.html)

---

## Índice
1. [¿Qué es CSS?](#1-que-es-css)
2. [Cómo se conecta CSS al HTML](#2-conectar)
3. [Selectores: etiqueta, clase e id](#3-selectores) — + combinadores, pseudoclases, especificidad, herencia, fallbacks
4. [Colores y tipografía (sin fuentes externas)](#4-colores-tipografia)
5. [El Box Model](#5-box-model)
6. [Flexbox: acomodar cosas](#6-flexbox)
7. [Responsive: que se vea bien en celular](#7-responsive)
7b. Más propiedades pro · 7c. Documentación · 7d. CSS moderno (`&`)
7e. **CSS a fondo:** cascada, unidades, box-sizing, border/outline, overflow, **position + z-index**, reset, **Flexbox a fondo**, **GRID**, transiciones y **animaciones**
8. [Práctica: Portafolio v2](#8-practica)
9. [Cierre, Git y actividad](#9-cierre)

---

## 1. ¿Qué es CSS? <a name="1-que-es-css"></a>

> **Explica:** si el HTML es el **esqueleto**, el CSS es la **ropa y el maquillaje**. HTML dice *qué es*
> cada cosa; CSS dice *cómo se ve*: colores, tamaños, espacios, dónde se coloca cada bloque. Tampoco es
> un lenguaje de programación (no tiene lógica): son **reglas de estilo**.

**CSS** = *Cascading Style Sheets* (Hojas de Estilo en Cascada). Una regla de CSS se ve así:

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

- `h1` — el **selector**: a qué elemento le aplico el estilo.
- `color`, `font-size` — las **propiedades** (qué quiero cambiar).
- `blue`, `32px` — los **valores** (cómo lo quiero).
- Cada par `propiedad: valor;` termina en **punto y coma** y va entre llaves `{ }`.

> **Analogía:** el HTML es la casa en obra gris (paredes y estructura); el CSS es la pintura, los muebles
> y la decoración. La misma casa se ve completamente distinta según el CSS.

---

## 2. Cómo se conecta CSS al HTML <a name="2-conectar"></a>

> **Explica:** hay tres formas de meter CSS, pero en el curso usamos **siempre la buena**: un archivo
> `.css` aparte, enlazado desde el `<head>`. Así el HTML queda limpio y el estilo se reutiliza.

Creamos un archivo llamado `styles.css` **al lado** del `index.html`, y lo enlazamos con `<link>`
dentro del `<head>`:

```html
<head>
  <meta charset="UTF-8">
  <title>Mi Portafolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

- `rel="stylesheet"` — "esto es una hoja de estilos".
- `href="styles.css"` — el nombre del archivo (debe coincidir **exactamente**, mayúsculas incluidas).

> **Regla del curso:** nada de estilos externos de internet (ni fuentes de Google, ni CDNs). Todo va en
> **tu** archivo `styles.css`, para que el portafolio funcione **sin conexión**.

---

## 3. Selectores: etiqueta, clase e id <a name="3-selectores"></a>

> **Explica:** el selector es *a quién le hablo*. Hay tres básicos. Empieza por el de **etiqueta**, que
> es el más simple y con el que estilizamos el portafolio hoy.

| Selector | Se escribe | A qué apunta | Ejemplo |
|----------|-----------|--------------|---------|
| Etiqueta | `header` | A **todas** las etiquetas de ese tipo | `header { ... }` |
| Clase | `.destacado` | A los elementos con `class="destacado"` | `.destacado { ... }` |
| Id | `#contacto` | Al **único** elemento con `id="contacto"` | `#contacto { ... }` |

```css
/* Todas las <section> */
section { margin: 20px; }

/* Solo los que tengan class="tarjeta" */
.tarjeta { background: white; }

/* Solo el elemento con id="contacto" */
#contacto { border: 1px solid gray; }
```

> **Truco para recordar:** el **punto** `.` es para **clases** (se pueden repetir), la **almohadilla**
> `#` es para **id** (único en la página). Como el `href="#contacto"` del menú apunta al `id`, ¡ya
> conoces los id de la Clase 02!

### 3.b Combinadores: seleccionar por relación

| Combinador | Significa | Ejemplo |
|-----------|-----------|---------|
| `A B` (espacio) | `B` **dentro de** `A` (a cualquier nivel) | `.nav a` |
| `A > B` | `B` **hijo directo** de `A` | `.lista > li` |
| `A + B` | el `B` **justo después** de `A` (hermano) | `h2 + p` |
| `A ~ B` | **todos** los `B` hermanos que sigan a `A` | `h2 ~ p` |

### 3.c Pseudoclases: por estado o posición

Empiezan con `:` y apuntan a un **estado** o **posición**:

- **Estado:** `:hover` (mouse encima), `:focus` (activo), `:checked`.
- **Posición:** `:first-child` (el primero), `:last-child` (el último), `:nth-child(2)` (el 2º), `:nth-child(odd)`.
- **Negación:** `:not(:last-child)` → todos menos el último.

```css
a:hover { color: coral; }          /* estado */
li:first-child { font-weight: bold; }  /* posición */
p:not(:last-child) { margin-bottom: 1rem; }  /* negación */
```

> **Pseudo-elementos** (con `::`) crean adornos: `::before` y `::after` (ej.: una barrita de color al hacer hover).

### 3.d Especificidad: ¿quién gana?

Cuando dos reglas afectan lo mismo, gana la **más específica**. El "puntaje":

```
etiqueta (0,0,1)  <  .clase (0,1,0)  <  #id (1,0,0)  <  style="..."  <  !important
```

- Ej.: `.proyecto.destacado` (dos clases) le gana a `.proyecto` (una clase).
- **Consejo:** usa **clases**; evita `#id` e `!important` para estilos (rompen el orden natural).

### 3.e Herencia: propiedades que pasan a los hijos

Algunas propiedades se **heredan** del padre a los hijos (no hay que repetirlas); otras no:

- ✅ **Se heredan:** `color`, `font-family`, `font-size`, `line-height`.
- ❌ **No se heredan:** las de "caja" — `margin`, `padding`, `border`, `width`, `background`.

```css
body { color: white; }   /* todos los textos hijos heredan blanco */
```

> Con la palabra `inherit` puedes **forzar** que una propiedad herede del padre.

### 3.f Fallbacks: planes B por si algo falla

- **Fuentes:** `font-family: "Sora", system-ui, sans-serif;` → si la 1ª no carga, usa la siguiente.
- **Variables:** `color: var(--x, #eee);` → si `--x` no existe, usa `#eee`.
- **`@supports`:** aplica reglas solo si el navegador soporta algo:
  ```css
  @supports (backdrop-filter: blur(1px)) { .nav { backdrop-filter: blur(12px); } }
  ```

> Los fallbacks hacen que tu página **no se rompa** en navegadores viejos. Todo esto está **usado y
> comentado** en el `styles.css` del portafolio de esta clase.

---

## 4. Colores y tipografía (sin fuentes externas) <a name="4-colores-tipografia"></a>

### Colores
Hay varias formas de nombrar un color. Las dos más usadas:

- **Por nombre:** `red`, `blue`, `white`, `black`, `gray`...
- **Hexadecimal:** `#2563eb` (azul), `#111827` (casi negro). Empieza con `#` y son 6 caracteres.

```css
body {
  background: #f8fafc;   /* fondo casi blanco */
  color: #1f2937;        /* texto gris oscuro */
}
```

- `background` — color de fondo.
- `color` — color del **texto**.

> **Tip:** en VS Code, al escribir un color hex sale un cuadrito para elegirlo visualmente. Juega con él.

### Tipografía (usando solo fuentes del sistema)
No descargamos fuentes de internet. Usamos las que **ya trae** cualquier computador, con una lista de
respaldo:

```css
body {
  font-family: 'Segoe UI', system-ui, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

- `font-family` — la fuente. Ponemos varias: si la primera no está, usa la siguiente.
- `font-size` — tamaño de la letra.
- `line-height` — espacio entre líneas (1.6 se lee cómodo).

> **Explica:** `sans-serif` al final es el "comodín": *cualquier fuente sin serifa*. Así el portafolio se
> ve bien en cualquier equipo, con o sin internet.

---

## 5. El Box Model <a name="5-box-model"></a>

> **Explica:** este es **el concepto más importante de CSS**. Todo elemento HTML es una **caja**. Y cada
> caja tiene cuatro capas, de adentro hacia afuera: **contenido → padding → border → margin**.

```
+-------------------------------------+
|            margin (afuera)          |
|   +-----------------------------+   |
|   |        border (borde)       |   |
|   |   +---------------------+   |   |
|   |   |  padding (adentro)  |   |   |
|   |   |   +-------------+   |   |   |
|   |   |   | contenido   |   |   |   |
|   |   |   +-------------+   |   |   |
|   |   +---------------------+   |   |
|   +-----------------------------+   |
+-------------------------------------+
```

- **`padding`** — espacio **dentro** de la caja, entre el contenido y el borde ("el relleno del colchón").
- **`border`** — la línea del borde.
- **`margin`** — espacio **fuera** de la caja, la separa de las demás.

```css
.tarjeta {
  padding: 16px;              /* aire adentro */
  border: 1px solid #e5e7eb; /* borde gris fino */
  margin: 12px;              /* separación con las vecinas */
  border-radius: 8px;        /* esquinas redondeadas */
}
```

> **Analogía:** piensa en un cuadro colgado en la pared. El **contenido** es la foto; el **padding** es
> el paspartú (el margen blanco de adentro); el **border** es el marco de madera; el **margin** es el
> espacio hasta el siguiente cuadro.

> **Truco de la vida real:** casi todos los "no me queda separado" o "está muy pegado" se arreglan con
> `padding` (adentro) o `margin` (afuera). Cuando algo se ve apretado, piensa: *¿adentro o afuera?*

---

## 6. Flexbox: acomodar cosas <a name="6-flexbox"></a>

> **Explica:** por defecto los bloques se apilan uno debajo de otro. **Flexbox** nos deja ponerlos **en
> fila** y repartir el espacio. Es la herramienta #1 para menús y layouts hoy en día.

Se activa poniendo `display: flex` en el **contenedor** (el elemento padre):

```css
nav {
  display: flex;
  gap: 20px;                  /* separación entre los enlaces */
  justify-content: center;    /* los centra en horizontal */
}
```

- `display: flex` — "acomoda a mis hijos en fila".
- `gap` — el espacio entre cada hijo (¡mucho más fácil que poner márgenes uno por uno!).
- `justify-content` — cómo se reparten en horizontal: `center`, `space-between`, `flex-start`...
- `align-items` — cómo se alinean en vertical: `center`, `stretch`...

> **Analogía:** `display: flex` es como decirle a una fila de personas "hagan fila y repártanse parejo".
> `justify-content` decide si se juntan al centro, a los lados o quedan separadas.

---

## 7. Responsive: que se vea bien en celular <a name="7-responsive"></a>

> **Explica:** *responsive* = la página se **adapta** al tamaño de la pantalla. Lo básico es una
> **media query**: un bloque de CSS que solo se aplica si la pantalla es de cierto tamaño.

```css
/* Estilos normales (pantallas grandes) arriba... */

/* Cuando la pantalla mide 600px o menos (celular): */
@media (max-width: 600px) {
  nav {
    flex-direction: column;   /* el menú pasa a columna */
  }
  body {
    font-size: 15px;          /* letra un poco más pequeña */
  }
}
```

- `@media (max-width: 600px)` — "aplica esto **solo** si el ancho es 600px o menos".
- Adentro van reglas normales que **sobreescriben** las de arriba en pantallas pequeñas.

> **Requisito clave:** para que el responsive funcione, el HTML **debe** tener en el `<head>`:
> `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. La plantilla de la Clase 02
> ya lo trae.

> **Cómo probarlo:** en el navegador presiona `F12` y activa el modo dispositivo (el iconito de
> celular/tablet). Cambia el ancho y mira cómo se reacomoda.

---

## 7.b Más propiedades para que se vea "pro"

Con estas pocas propiedades el portafolio da un salto de calidad:

| Propiedad | Qué hace |
|-----------|----------|
| `background` | Color (o imagen) de fondo |
| `border-radius` | Esquinas redondeadas |
| `box-shadow` | Sombra (da profundidad) |
| `transition` | Anima el cambio suavemente |
| `:hover` | Aplica estilos **al pasar el mouse** |

```css
.boton {
  background: #2563eb;
  border-radius: 8px;
  transition: background 0.2s;   /* la animación */
}
.boton:hover {                   /* al pasar el mouse */
  background: #1e40af;
}
```

### Variables CSS (colores reutilizables)

Define tus colores una vez y úsalos en todo el archivo. Cambias el valor y cambia toda la paleta:

```css
:root {
  --azul: #2563eb;
}
header { background: var(--azul); }
.boton { background: var(--azul); }
```

## 7.d CSS moderno: anidamiento con `&`

Hoy puedes **anidar** reglas dentro de otras (como en Sass, pero **nativo** en navegadores modernos).
Todo lo de un elemento queda en **un solo bloque**, más ordenado:

```css
.card {
  padding: 1em;

  &:hover { transform: translateY(-4px); }   /* estado */
  & h3   { color: blue; }                     /* subelemento */
  &.destacada { border: 2px solid gold; }     /* subclase (variante) */
}
```

- `&:hover` → un **estado** del mismo elemento.
- `& h3` → un **subelemento** dentro de `.card`.
- `&.destacada` → una **subclase** (una variante de la tarjeta).

> Así está escrito el `styles.css` del portafolio. También usamos **variables globales** (`:root { --azul: … }`)
> y `color-mix()` para crear tonos. Es el CSS que se usa hoy en la industria.

## 7.c Dónde buscar (documentación de confianza)

- **MDN** ⭐ — `https://developer.mozilla.org/es/` — la referencia **oficial** (busca "MDN flexbox").
- **web.dev/learn/css** — `https://web.dev/learn/css?hl=es` — curso de **CSS moderno** de Google, en español.
- **lenguajecss.com** — `https://lenguajecss.com/` — curso de CSS en español (Manz), claro y actualizado.
- **CSS-Tricks** — `https://css-tricks.com/` — su "A Complete Guide to Flexbox" es legendaria.

> ⚠️ **Evita W3Schools:** a veces trae información desactualizada o imprecisa. Las de arriba son de confianza.
>
> 💡 Y tu **asistente de IA** para dudas puntuales: "¿cómo centro un div con Flexbox?" — que te lo **explique**.

---

## 7.e CSS a fondo (temario completo)

Con las ~5,5 h de clase, se ve todo esto con calma. Resumen para el instructor:

### La cascada (la "C" de CSS)
Si varias reglas afectan lo mismo, gana en este orden: **1) importancia** (`!important`), **2) especificidad**,
**3) orden** (la última escrita). Por eso el orden del archivo importa.

### Herencia: valores especiales
- `inherit` — fuerza heredar del padre · `initial` — valor por defecto de la propiedad ·
  `unset` — hereda si puede, si no `initial` · `revert` — vuelve al estilo del navegador.

### Unidades
- **Absolutas:** `px` (fijas). **Relativas** (mejores para adaptar): `%` (del padre), `em` (de la fuente),
  **`rem`** (de la raíz), `vw`/`vh` (de la pantalla). Prefiere `rem`, `%` y `clamp()`.

### Modelo de la caja a fondo
- **`box-sizing: border-box`** — el ancho que pones es el final (padding/border no lo agrandan). Se aplica a `*` al inicio.
- **`border` vs `outline`** — `border` ocupa espacio; `outline` no (ideal para el foco de accesibilidad).
- **Overflow** — `visible` / `hidden` / `scroll` / `auto`. Truco de texto con "…":
  `white-space:nowrap; overflow:hidden; text-overflow:ellipsis;`.

### Position y z-index
- `static` (normal), `relative` (ancla), `absolute` (respecto al ancestro con position), `fixed` (fijo en
  pantalla), `sticky` (se pega al scroll). Se ajusta con `top/right/bottom/left`.
- **`z-index`** — quién va encima cuando se superponen (solo con `position` ≠ static).

### Reset / Normalize
- Reset mínimo: `* { margin:0; padding:0; box-sizing:border-box; }`. **Normalize.css** empareja estilos entre navegadores.

### Flexbox a fondo (1D)
- Contenedor: `flex-direction`, `flex-wrap` (atajo `flex-flow`), `justify-content` (eje principal),
  `align-items` (eje cruzado), `gap`.
- Hijos: `flex-grow`, `flex-shrink`, `flex-basis` (atajo `flex: 1`), `order`.

### CSS Grid (2D) — el mejor para layouts
```css
.rejilla {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* galería responsiva sin media queries */
  gap: 1rem;
}
```
- `fr` = fracción del espacio libre · `repeat()` · `auto-fit`/`auto-fill` · `grid-column/row` ·
  `grid-template-areas` (dibujar el layout con palabras) + `grid-area`.
- **Grid vs Flex:** Flex para **una** dirección; Grid para **dos** (cuadrículas y layouts).

### Transiciones y animaciones
- **Transición:** `transition: background .3s ease;` (anima entre estados, ej. `:hover`). ⚠️ Evita `transition: all`.
- **Animación:** `@keyframes` + `animation: nombre .6s ease both;` (`animation-fill-mode: both` mantiene el estado final).
- **Rendimiento (60 FPS):** anima `transform` y `opacity`; **evita** `width`/`height`/`margin`.

> 🧪 **Para copiar y ver:** `codigo/ejemplo-grid.html` (layout con áreas + galería `auto-fit`) y
> `codigo/ejemplo-animaciones.html` (transición al hover + `@keyframes` + `animation-fill-mode`).

---

## 8. Práctica: Portafolio v2 (¡a ponerlo bonito!) <a name="8-practica"></a>

Vamos a estilizar el portafolio **v1** de la Clase 02 sin tocar (casi) el HTML. Solo agregamos el
`<link>` y creamos el `styles.css`.

> Ver el hilo del portafolio en [proyecto-portafolio/README.md](../proyecto-portafolio/README.md).

### Paso 1 — Abrir tu portafolio
Abre en VS Code la carpeta de tu portafolio (la del `index.html` de la Clase 02).

### Paso 2 — Enlazar la hoja de estilos
En el `<head>` del `index.html`, agrega la línea del `<link>`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portafolio — Tu Nombre</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

### Paso 3 — Crear `styles.css`
Crea el archivo `styles.css` **en la misma carpeta** que el `index.html`. Empieza por lo global:

```css
/* Reinicio simple: quita márgenes raros por defecto */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, Arial, sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background: #f8fafc;
}
```

> `box-sizing: border-box` hace que el `padding` y el `border` **no** agranden la caja. Ponlo siempre:
> te evita muchos dolores de cabeza.

### Paso 4 — Estilizar el header y el nav
```css
header {
  background: #2563eb;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 16px;
}

nav a {
  color: white;
  text-decoration: none;   /* quita el subrayado */
}
```

### Paso 5 — Estilizar las secciones y el footer
```css
main {
  max-width: 800px;        /* que no se estire de más en pantallas grandes */
  margin: 0 auto;          /* centra el contenido */
  padding: 20px;
}

section {
  background: white;
  padding: 24px;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

footer {
  text-align: center;
  padding: 20px;
  color: #6b7280;
}
```

### Paso 6 — Hacerlo responsive
Al **final** del archivo, agrega la media query:

```css
@media (max-width: 600px) {
  nav {
    flex-direction: column;
  }
  header {
    padding: 24px 12px;
  }
}
```

> Tienes el archivo completo y comentado como plantilla en
> [`codigo/styles.css`](codigo/styles.css). Úsalo de guía, pero **cámbiale los colores** para que sea
> tuyo.

### Paso 7 — Verlo en el navegador
Recarga el `index.html`. Prueba también el modo celular con `F12`.

> **Resultado esperado:** el mismo portafolio de la Clase 02, ahora **con color de fondo, un encabezado
> azul, el menú en fila y centrado, las secciones como tarjetas blancas con bordes redondeados**, y que
> en el celular el menú se apila en columna. La misma información de v1, pero se ve profesional.

### Errores comunes
- **El CSS no se aplica:** revisa que el `<link>` tenga bien el nombre `href="styles.css"` y que el
  archivo esté **en la misma carpeta**. Mayúsculas/minúsculas importan.
- **Se aplica a medias:** te faltó un `;` o una llave `}`. El CSS después del error deja de funcionar.
- **En el celular no cambia nada:** falta el `<meta name="viewport">` en el `<head>`, o la media query
  quedó **antes** de las reglas normales (debe ir al final).
- **Los enlaces siguen subrayados y azules:** ponlos con `text-decoration: none;` y un `color`.
- **Todo pegado o sin aire:** usa `padding` (adentro) y `margin` (afuera). Recuerda el box model.

---

## 9. Cierre, Git y actividad <a name="9-cierre"></a>

### Cierre Git de la clase 🌿
Guarda tu avance en el historial:
```bash
git add .
git commit -m "Portafolio v2: estilos con CSS"
git push        # cuando haya internet
```

### Lo que dominas hoy
- [x] Sé qué es CSS y cómo se conecta al HTML con `<link>` y `styles.css`.
- [x] Uso selectores de **etiqueta, clase e id**.
- [x] Manejo colores y tipografía **sin fuentes externas**.
- [x] Entiendo el **box model** (margin, border, padding).
- [x] Uso **Flexbox** para el menú y una **media query** para el celular.
- [x] Tengo la **v2 de mi portafolio** con estilos.

### Refuerzo (video)
Mira el curso de CSS recomendado: [recursos/RECURSOS-Y-VIDEOS.md](../recursos/RECURSOS-Y-VIDEOS.md).

### Actividad entre clases
En [actividad.md](actividad.md): pulir el portafolio v2 (colores, tipografía, responsive) e investigar
2 propiedades nuevas.

### Adelanto de la Clase 04
Le daremos **vida con JavaScript**: un menú que se abre, un botón de tema claro/oscuro, un formulario
que valida... El mismo portafolio, ahora **interactivo** (v3).
