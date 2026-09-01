# Clase 04 — JavaScript y tu Portafolio (v3)

> **Meta de la clase:** dar el salto de "páginas que solo se ven" a **páginas que reaccionan**. Vamos a
> entender qué es **JavaScript**, cómo se conecta al HTML, y sus piezas básicas (variables, tipos,
> funciones, condicionales, un bucle, el **DOM** y los **eventos**) para agregarle **interactividad real**
> a tu portafolio: la **versión 3**.
>
> 🧑‍🏫 **Esta es una clase GUIADA.** JavaScript es el tema más difícil del curso, así que hoy el
> instructor va explicando **cada línea de código en voz alta** mientras todos escriben al mismo ritmo.
> No corras adelante ni te quedes atrás: si algo no cuadra, **levanta la mano**. Nadie sigue hasta que
> el grupo esté a la par.

**Duración estimada:** 1 sesión (guiada, con pausas).
**Requisitos previos:** [Clase 02](../clase-02-html-portafolio/GUIA.md) (portafolio v1 en HTML) y
[Clase 03](../clase-03-css-portafolio/GUIA.md) (portafolio v2 con estilos CSS).
**Presentación para proyectar:** [presentacion.html](presentacion.html)

> 🚀 **¿Ya dominan lo básico y quieres profundizar?** Esta guía enseña los **fundamentos** con un
> `script.js` sencillo. La segunda mitad —**POO, módulos (separación por clases), datos desde JSON,
> GitHub/LinkedIn, formulario que envía correos y animaciones con anime.js / GSAP**, más un adelanto de
> **Node.js**— está en la [**GUÍA AVANZADA (Nivel PRO)**](GUIA-AVANZADA.md). El código de `codigo/` ya
> viene en esa versión modular y profesional.

---

## Índice
1. [¿Qué es JavaScript?](#1-que-es-js)
2. [Cómo se conecta al HTML](#2-conectar)
3. [La consola: tu mejor amiga (F12)](#3-consola)
4. [Variables: `let` y `const`](#4-variables)
5. [Tipos básicos de datos](#5-tipos)
6. [Funciones](#6-funciones)
7. [Condicionales: `if` / `else`](#7-condicionales)
8. [Un bucle simple: `for`](#8-for)
9. [El DOM: tocar la página con `querySelector`](#9-dom)
10. [Eventos: reaccionar con `addEventListener`](#10-eventos)
11. [Práctica guiada: Portafolio v3](#11-practica)
12. [Cierre, Git y actividad](#12-cierre)

---

## 1. ¿Qué es JavaScript? <a name="1-que-es-js"></a>

> **Explica:** hasta ahora tu página tiene **esqueleto** (HTML) y **ropa** (CSS), pero está *quieta*.
> **JavaScript** es lo que le da **movimiento y lógica**: botones que hacen cosas, mensajes que aparecen,
> temas que cambian. Es un **lenguaje de programación** de verdad: puede tomar decisiones, repetir tareas
> y guardar datos.

Los tres lenguajes de la web, con una analogía del cuerpo:

| Lenguaje | Es… | En el cuerpo sería… |
|----------|-----|---------------------|
| **HTML** | La estructura y el contenido | Los **huesos** 🦴 |
| **CSS** | El diseño y los colores | La **piel y la ropa** 👕 |
| **JavaScript** | El comportamiento y la lógica | Los **músculos** que dan movimiento 💪 |

> **Analogía:** un carro con HTML+CSS es un carro **bonito pero apagado**. JavaScript es **encender el
> motor**: ahora responde cuando lo tocas.

---

## 2. Cómo se conecta al HTML <a name="2-conectar"></a>

> **Explica:** el navegador no ejecuta el JavaScript solo; hay que **enlazarlo** desde el HTML, igual que
> enlazamos el CSS. Lo hacemos con la etiqueta `<script>`.

Escribimos el código en un archivo aparte llamado `script.js` y lo conectamos **justo antes de cerrar el
`</body>`**:

```html
<body>
  <!-- todo tu portafolio... -->

  <!-- El script va de ÚLTIMO, antes de cerrar body -->
  <script src="script.js"></script>
</body>
```

> **¿Por qué de último?** Porque el navegador lee la página de arriba hacia abajo. Si el JavaScript se
> carga **antes** que el HTML, va a buscar botones que todavía no existen y **fallará**. Poniéndolo al
> final, cuando el script corre, la página ya está completa.

- `src="script.js"` — la ruta al archivo (debe estar en la misma carpeta que el `index.html`).
- La etiqueta `<script>` **siempre** se cierra con `</script>`, aunque esté vacía.

> **Regla de la clase:** un archivo `.js` aparte (nunca mezclado con el HTML). Más ordenado y más fácil
> de leer.

### Las tres formas de incluir JavaScript

En realidad hay **tres** maneras de meter JS en una página. Conviene conocerlas todas (las verás en
proyectos reales y en frameworks), aunque nosotros usamos casi siempre la tercera.

**1. Inline, en un atributo del HTML** — el JS va *dentro* de una etiqueta:
```html
<button onclick="alert('Hola')">Clic</button>
```
> ❌ **Evítalo.** Mezcla HTML con JS, no se reutiliza y se vuelve imposible de mantener. Es la versión
> "espagueti" de conectar JS.

**2. Interno, dentro de una etiqueta `<script>` en el mismo HTML:**
```html
<script>
  const x = 1;
  console.log(x);
</script>
```
> Sirve para cosas muy pequeñas. **Dato importante:** así es como trabajan los **frameworks de
> componentes** (Vue, Astro, Svelte): cada componente junta en un archivo su plantilla y su `<script>`.
> Ahí *sí* tiene sentido, porque el JS pertenece a *ese* componente. En una página normal, mezcla
> estructura y lógica.

**3. Externo, en un archivo `.js` aparte** (lo que usamos):
```html
<script src="script.js"></script>
```
> ✅ **Lo recomendado.** Separa estructura (HTML) de comportamiento (JS), se reutiliza en varias páginas
> y el navegador lo puede **cachear**. Con `type="module"` además habilita `import`/`export`
> (lo verás en la [guía avanzada](GUIA-AVANZADA.md)).

| Forma | Cómo | ¿Cuándo? |
|-------|------|----------|
| Inline | `onclick="…"` | ❌ Casi nunca. |
| Interno | `<script>…</script>` en el HTML | Cosas pequeñas; **componentes** de frameworks. |
| Externo | `<script src="…">` | ✅ **Por defecto** en este curso. |

---

## 3. La consola: tu mejor amiga (F12) <a name="3-consola"></a>

> **Explica:** cuando programamos, **nos equivocamos todo el tiempo** (es normal, hasta los expertos).
> El navegador tiene una **consola** donde nos avisa qué salió mal. Aprender a leerla es media clase.

- Abre tu página en el navegador y presiona **`F12`** (o clic derecho → *Inspeccionar*).
- Ve a la pestaña **`Console`** (Consola).
- Ahí aparecen los **errores en rojo** y también lo que nosotros mandemos imprimir.

Nuestra primera instrucción de JavaScript es enviar un mensaje a esa consola:

```js
console.log("¡Hola desde JavaScript!");
```

> **Práctica (todos a la vez):** crea `script.js`, escribe esa línea, conéctalo al HTML y abre la
> consola. Si ves el saludo, **ya estás programando**. 🎉

> **Truco de oro:** cuando algo "no funciona", lo **primero** es abrir la consola con `F12` y leer el
> mensaje rojo. Casi siempre te dice el archivo y la **línea** del problema.

---

## 4. Variables: `let` y `const` <a name="4-variables"></a>

> **Explica:** una **variable** es una **caja con nombre** donde guardamos un dato para usarlo después.
> Le pones una etiqueta y metes algo adentro.

```js
let edad = 20;            // una caja que SÍ puede cambiar después
const nombre = "Ana";     // una caja que NO cambia (constante)
```

- `let` → para datos que **cambiarán** (un contador, un puntaje…).
- `const` → para datos que se quedan **fijos** (tu nombre, un texto). **Úsalo por defecto.**

> **Analogía:** `const` es una caja **sellada con cinta** (no la vuelves a abrir); `let` es una caja
> **con tapa** que puedes abrir para cambiar lo de adentro.

```js
let contador = 0;
contador = contador + 1;   // ahora contador vale 1 ✅ (con let se puede)
```

> **Errores comunes:** usar nombres con espacios o tildes (`let mi nombre` ❌). Usa `let miNombre` (estilo
> *camello*: la segunda palabra con mayúscula).

---

## 5. Tipos básicos de datos <a name="5-tipos"></a>

> **Explica:** los datos vienen en **sabores** distintos. Los tres que más usarás hoy:

| Tipo | Qué es | Ejemplo |
|------|--------|---------|
| **Texto** (*string*) | Palabras, entre comillas | `"Hola"`, `'Bucaramanga'` |
| **Número** (*number*) | Números, sin comillas | `20`, `3.5` |
| **Booleano** (*boolean*) | Verdadero o falso | `true`, `false` |

```js
const ciudad = "Bucaramanga";   // texto (siempre entre comillas)
const anios = 2;                // número (sin comillas)
const esEstudiante = true;      // booleano: verdadero o falso
```

> **Ojo:** `"20"` (con comillas) es **texto**, no número. Parece igual pero se comportan distinto. Para
> sumar de verdad, usa números **sin** comillas.

---

## 6. Funciones <a name="6-funciones"></a>

> **Explica:** una **función** es una **receta**: un bloque de pasos con nombre que puedes **usar cuando
> quieras** sin volver a escribirlo. La defines una vez y la "llamas" las veces que necesites.

```js
// Definimos la receta (todavía no hace nada)
function saludar() {
  console.log("¡Bienvenido a mi portafolio!");
}

// La llamamos (AHORA sí se ejecuta)
saludar();
```

Una función puede **recibir datos** (parámetros) entre los paréntesis:

```js
function saludarA(nombre) {
  console.log("Hola, " + nombre);
}

saludarA("Carlos");   // imprime: Hola, Carlos
saludarA("María");    // imprime: Hola, María
```

> **Analogía:** una función es como el botón de "licuar" de la licuadora: no te importa qué hace por
> dentro, lo aprietas y hace su trabajo. La escribes una vez y la reutilizas.

---

## 7. Condicionales: `if` / `else` <a name="7-condicionales"></a>

> **Explica:** los condicionales le dan **decisiones** al programa: "**si** pasa esto, haz aquello; **si
> no**, haz esto otro". Es la lógica de "tomar caminos".

```js
const hora = 20;

if (hora < 12) {
  console.log("¡Buenos días!");
} else {
  console.log("¡Buenas noches!");
}
```

- `if (condición)` — si la condición es **verdadera**, corre el bloque de arriba.
- `else` — **si no**, corre el bloque de abajo.

Para **comparar** usamos:

| Símbolo | Significa |
|---------|-----------|
| `===` | ¿son **iguales**? |
| `!==` | ¿son **distintos**? |
| `<` `>` | menor / mayor que |

> **Errores comunes:** confundir `=` (guardar en una variable) con `===` (comparar). Para preguntar "¿son
> iguales?" **siempre** se usan tres iguales: `===`.

### 7.b Evita los `if` anidados: negación temprana (cláusulas de guarda)

> **Explica:** cuando encadenas condiciones, es tentador meter un `if` **dentro** de otro `if` dentro de
> otro. El código empieza a formar una "flecha" `→` hacia la derecha y se vuelve difícil de leer.

**❌ Anidado (forma de flecha):**
```js
function saludar(usuario) {
  if (usuario) {
    if (usuario.activo) {
      console.log("Hola " + usuario.nombre);
    }
  }
}
```

**✅ Cláusulas de guarda (niega con `!` y sal temprano con `return`):**
```js
function saludar(usuario) {
  if (!usuario) return;          // si NO hay usuario, me salgo ya
  if (!usuario.activo) return;   // si NO está activo, me salgo ya

  // Si llegué hasta aquí, todo está bien. El caso importante queda
  // al final, plano y sin sangría.
  console.log("Hola " + usuario.nombre);
}
```

La idea: **descarta primero lo que está mal** (con la negación `!` y un `return`), y deja el caso bueno
**al final, sin anidar**. Esto se llama *cláusula de guarda* (o *early return*).

- `!` significa "**no**": `!usuario` es "si NO hay usuario".
- `return` **corta** la función ahí mismo: lo de abajo ya no se ejecuta.

> **Analogía:** es como un portero de discoteca. En vez de meter a todos y *después* revisar adentro
> ("¿tiene entrada? ¿es mayor?"), **filtra en la puerta**: "¿sin entrada? afuera. ¿menor? afuera". Los
> que pasan, ya están bien; adentro no hay que revisar nada más.

> **En nuestro código real** ya lo usamos: en [`codigo/js/Contacto.js`](codigo/js/Contacto.js),
> `if (error) { this.mostrar(error); return; }` — si hay error, avisa y **sale**; no envuelve el resto
> en un `else`. Y en [`Portafolio.js`](codigo/js/Portafolio.js): `if (!redes.linkedinUsuario) return;`.

---

## 8. Un bucle simple: `for` <a name="8-for"></a>

> **Explica:** un **bucle** repite una tarea muchas veces sin que tú copies y pegues. El `for` repite un
> número exacto de veces.

```js
// Repite 5 veces: cuenta del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log("Vuelta número " + i);
}
```

El `for` tiene tres partes entre paréntesis:
1. **Empieza:** `let i = 1` (arranca el contador en 1).
2. **Condición:** `i <= 5` (repite **mientras** sea verdadera).
3. **Avanza:** `i++` (suma 1 en cada vuelta).

> **Analogía:** es como hacer 10 sentadillas: haces una, cuentas, y **mientras** no llegues a 10, sigues.
> El `for` cuenta por ti.

---

## 9. El DOM: tocar la página con `querySelector` <a name="9-dom"></a>

> **Explica:** aquí está **la magia**. El **DOM** es la página vista como una **lista de elementos** que
> JavaScript puede **agarrar y modificar**. Con `document.querySelector(...)` seleccionamos un elemento
> del HTML para trabajar con él.

Se busca **igual que en CSS**: por `#id`, por `.clase` o por etiqueta.

```js
// Agarramos elementos del HTML (usa el mismo selector que en CSS)
const titulo = document.querySelector("h1");        // por etiqueta
const boton  = document.querySelector("#btn-tema"); // por id (con #)
```

Y una vez lo tenemos, lo podemos **cambiar**:

```js
titulo.textContent = "¡Portafolio con vida!";   // cambia el texto
document.body.classList.toggle("oscuro");        // pone/quita una clase CSS
```

- `.textContent` — el texto que se ve dentro del elemento.
- `.classList.toggle("oscuro")` — si el elemento **tiene** la clase `oscuro`, se la quita; si **no la
  tiene**, se la pone. (Con esto haremos el tema claro/oscuro. 💡)

> **Analogía:** el DOM es un **control remoto** de tu página. `querySelector` es apuntar el control a un
> elemento; luego le cambias el "canal" (texto, color, clase).

---

## 10. Eventos: reaccionar con `addEventListener` <a name="10-eventos"></a>

> **Explica:** un **evento** es *algo que pasa* en la página: un clic, una tecla, enviar un formulario.
> Con `addEventListener` le decimos a un elemento: "**cuando ocurra este evento, ejecuta esta función**".

```js
const boton = document.querySelector("#btn-tema");

// "Cuando hagan CLIC en el botón, corre esta función"
boton.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});
```

- `"click"` — el nombre del evento (también existen `"submit"`, `"keydown"`, etc.).
- La **función** de adentro es lo que pasa **cuando** ocurre el evento.

> **Analogía:** es poner un **timbre**. `addEventListener("click", ...)` es instalar el timbre; la función
> es lo que suena **cuando alguien lo toca**. Sin timbre instalado, el clic no hace nada.

> **Este es el corazón de la interactividad:** *seleccionar* un elemento (DOM) + *escuchar* un evento +
> *cambiar* algo. Ese trío se repite en TODA página web moderna.

---

## 10.b Código espagueti vs código limpio (buenas prácticas)

> **Explica:** el mismo programa se puede escribir de forma **enredada** ("espagueti") o **limpia**.
> Los dos "funcionan", pero uno es una pesadilla de mantener y el otro es un placer.

**🍝 Espagueti** — todo suelto, repetido, sin nombres:

```js
// se repite lo mismo, copiado y pegado, difícil de cambiar
b1.onclick = () => { document.body.style.background = "#000"; document.body.style.color = "#fff"; };
b2.onclick = () => { document.body.style.background = "#000"; document.body.style.color = "#fff"; };
```

**✨ Limpio (funcional)** — una función con nombre, reutilizable:

```js
function activarModoOscuro() {
  document.body.classList.toggle("oscuro");
}
boton.addEventListener("click", activarModoOscuro);
```

> Si mañana cambia la lógica, en el **limpio** la tocas en **un solo lugar**; en el espagueti, en
> veinte (y seguro olvidas alguno).

### Reglas de buenas prácticas

| ✅ Sí | ❌ No |
|------|------|
| Nombres **claros** (`activarModoOscuro`) | Nombres como `a`, `x`, `cosa` |
| **Funciones pequeñas** que hacen una cosa | Bloques gigantes que hacen de todo |
| **`const`** por defecto (`let` solo si cambia) | `var` por todos lados |
| **No repetir** (DRY): si copias-pegas, hazlo función | Copiar-pegar el mismo bloque |
| JS en un **archivo aparte** (`script.js`) | Todo mezclado dentro del HTML |
| Comentar el **por qué** | Comentar lo obvio (o no comentar nada) |

> Estas prácticas se **evalúan** en el proyecto: en la Demo Day tendrás que **explicar** tu código, y
> el limpio se explica solo.

---

## 10.c Peticiones HTTP (fetch), APIs y librerías

Aquí es donde el portafolio se ve **profesional**: pedimos datos a otros servidores y usamos librerías.

### `fetch`: pedir datos a una API

Una **API** es un servidor que entrega datos. Con `fetch` los pedimos desde JS:

```js
// async/await: espera la respuesta de internet sin congelar la página
async function cargarPerfil() {
  const res = await fetch("https://api.github.com/users/octocat");
  const datos = await res.json();
  console.log(datos.name, datos.public_repos);
}
```

> También existe **`axios`** (una librería que hace lo mismo, más cómoda). `fetch` ya viene en el navegador.

### Importar librerías

```html
<!-- Librería de iconos por CDN, en el <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome/.../all.min.css">
```

```js
// Importar un módulo desde un CDN (el <script> debe ser type="module")
import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1/+esm";
confetti(); // 🎉
```

### En el portafolio (código completo)

El `codigo/` de esta clase trae el portafolio **completo y funcional**:
- **Font Awesome** para iconos.
- **`fetch` a la API de GitHub** para mostrar tu **avatar, bio y tus repos** reales (con un **bucle** y
  **condiciones**).
- **`import` de confetti** que estalla al enviar el formulario.

> Cambia `const USUARIO_GITHUB = "octocat"` por **tu usuario**. Alternativa de demo divertida: la
> **PokeAPI** (`https://pokeapi.co/`).
>
> ⚠️ El `fetch` y las librerías por CDN **usan internet**: funcionan normal (el SENA tiene internet); si
> la red se cae en ese momento, el resto del portafolio sigue viéndose y el código tiene una **guarda**
> (`try/catch`) para no romperse.

---

## 11. Práctica guiada: Portafolio v3 <a name="11-practica"></a>

Vamos a juntar todo. Tu portafolio v2 (con CSS) va a **cobrar vida**. Lo hacemos **juntos, paso a paso**:
el instructor escribe y explica, tú replicas. Si algo no te funciona, **F12** y avisas.

> Hoy escribimos el código a mano (no lo copiamos): entender cada línea es el objetivo. El portafolio de
> referencia en [`codigo/`](codigo/) ya viene en su versión **modular/PRO** (varios archivos en `js/` +
> `datos.json`); si tu grupo apenas empieza, primero hazlo en un solo `script.js` como abajo, y luego
> pasa a la [guía avanzada](GUIA-AVANZADA.md) para separarlo en clases.

### Paso 1 — Crear `script.js` y conectarlo
En la carpeta de tu portafolio (junto a `index.html`), crea el archivo **`script.js`**. Luego, en tu
`index.html`, **antes de cerrar `</body>`**, agrega:

```html
  <script src="script.js"></script>
</body>
```

### Paso 2 — Preparar el HTML (un botón nuevo)
Agrega un botón en tu `<header>`, dentro del `<nav>` o al lado. Este será el interruptor del tema:

```html
<button id="btn-tema">🌙 Modo oscuro</button>
```

### Paso 3 — Preparar el CSS (la clase `oscuro`)
En tu archivo de estilos (el de la Clase 03), agrega los colores del modo oscuro. La idea: cuando el
`<body>` tenga la clase `oscuro`, cambian los colores.

```css
/* Colores normales del body ya los tienes de la Clase 03 */

/* Modo oscuro: solo se aplica cuando el body tiene la clase "oscuro" */
body.oscuro {
  background-color: #0f172a;
  color: #f1f5f9;
}
```

### Paso 4 — El toggle de tema (JavaScript)
En `script.js`, seleccionamos el botón y escuchamos su clic:

```js
// 1) Agarramos el botón por su id
const botonTema = document.querySelector("#btn-tema");

// 2) Cuando le hagan clic, ponemos/quitamos la clase "oscuro" del body
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});
```

### Paso 5 — Validar el formulario de contacto
Ahora, cuando alguien envíe el formulario **sin llenar el nombre**, mostramos un mensaje en vez de
recargar la página:

```js
// Agarramos el formulario y el campo de nombre
const formulario = document.querySelector("#contacto form");
const campoNombre = document.querySelector('input[name="nombre"]');

// Escuchamos el evento "submit" (cuando presionan Enviar)
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();          // evita que la página se recargue

  if (campoNombre.value === "") {   // si el nombre está vacío...
    alert("Por favor escribe tu nombre. 🙂");
  } else {
    alert("¡Gracias, " + campoNombre.value + "! Mensaje recibido.");
  }
});
```

> **Explica:** `evento.preventDefault()` frena el comportamiento por defecto del formulario (recargar la
> página). `campoNombre.value` es lo que el usuario **escribió** en la casilla.

> **Resultado esperado:**
> - Al hacer clic en **🌙 Modo oscuro**, toda la página cambia de colores (y vuelve al hacer clic de
>   nuevo). ✅
> - Al enviar el formulario **vacío**, aparece un aviso pidiendo el nombre; si está lleno, sale un
>   "gracias". ✅

### Errores comunes
- **El botón no hace nada:** abre la consola con **`F12`**. Si dice *"Cannot read properties of null"*, es
  que el `#btn-tema` del HTML **no coincide** con el `querySelector` (revisa que el `id` esté bien escrito).
- **`script.js` no carga:** revisa que el `<script src="script.js">` esté **antes de `</body>`** y que el
  archivo esté en la **misma carpeta** que el `index.html`.
- **El modo oscuro no cambia colores:** te faltó la regla `body.oscuro { ... }` en el CSS, o escribiste
  `"Oscuro"` con mayúscula en un lado y `"oscuro"` en el otro. **JavaScript distingue mayúsculas.**
- **El formulario recarga la página:** te faltó `evento.preventDefault();`.

---

## 12. Cierre, Git y actividad <a name="12-cierre"></a>

### Cierre Git de la clase 🌿
Guarda tu avance en el historial:
```bash
git add .
git commit -m "Portafolio v3: interactividad con JavaScript"
git push        # cuando haya internet
```

### Lo que dominas hoy
- [x] Sé qué es JavaScript y lo conecto al HTML con `<script src="script.js">`.
- [x] Uso variables (`let`/`const`), tipos básicos, funciones, `if/else` y un `for`.
- [x] Selecciono elementos con `document.querySelector` (el **DOM**).
- [x] Reacciono a clics con `addEventListener` (**eventos**).
- [x] Tengo la **v3 de mi portafolio** con tema claro/oscuro y validación de formulario.

### Refuerzo (video) 📺
JavaScript es el tema que **más práctica extra necesita**. Mira el video de JS completo (es corto pero
denso, míralo con pausas y repitiendo): [recursos/RECURSOS-Y-VIDEOS.md](../recursos/RECURSOS-Y-VIDEOS.md).

### Actividad entre clases
En [actividad.md](actividad.md): agregar una **segunda interacción** con JavaScript a tu portafolio.

### Adelanto de la Clase 05
Tu portafolio ya está vivo… pero solo lo ves tú, en tu computador. En la **Clase 05 — Despliegue**
lo **publicamos en internet** con **GitHub Pages** (¡tendrá su propia dirección web!) y hablaremos de
dominios. Vas a poder mandarle el enlace a quien quieras. 🚀
