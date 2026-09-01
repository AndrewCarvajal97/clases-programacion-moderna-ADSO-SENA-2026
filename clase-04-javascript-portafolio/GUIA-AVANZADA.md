# Clase 04 — Nivel PRO: JavaScript profesional en el portafolio

> **Meta de esta guía:** dar el salto de "un `script.js` que funciona" a **código como el de la
> industria**: separado en **clases** (POO), en **archivos por responsabilidad** (módulos), con el
> **contenido en un JSON**, datos reales de **GitHub**, un botón de **LinkedIn**, un formulario que
> **envía correos de verdad** (gratis) y **animaciones modernas** con librerías (anime.js / GSAP).
> Cerramos con un adelanto de **Node.js** (JavaScript fuera del navegador).
>
> 🧑‍🏫 **Cuándo usar esta guía.** La [GUIA.md](GUIA.md) enseña los **fundamentos** (variables,
> funciones, DOM, eventos) escribiendo un solo `script.js`. Esta guía es la **segunda mitad**: la das
> cuando el grupo ya entendió lo básico y quieres mostrar **cómo se organiza un proyecto real**. No es
> para memorizar: es para **entender el porqué** de cada buena práctica.

**Código de referencia:** [`codigo/`](codigo/) (ya viene en su versión modular).
**Presentación:** [presentacion.html](presentacion.html) (diapositivas 16 en adelante).

---

## Índice
1. [El problema del archivo gigante](#1-problema)
2. [POO: pensar en "clases" (moldes)](#2-poo)
3. [Módulos: `import` / `export` (un archivo por tema)](#3-modulos)
4. [Separar los datos: cargar el portafolio desde un JSON](#4-json)
5. [GitHub real con la clase `GitHubAPI`](#5-github)
6. [LinkedIn: la verdad y qué sí se puede hacer](#6-linkedin)
7. [Formulario que envía correos (gratis): Web3Forms, Formspree, EmailJS](#7-correo)
8. [Animaciones modernas: anime.js y GSAP](#8-animaciones)
9. [Buenas prácticas de JS (checklist pro)](#9-buenas-practicas)
10. [Adelanto: Node.js (JavaScript en consola y escritorio)](#10-node)
11. [Cómo dar esta clase (guion para el instructor)](#11-guion)

---

## 1. El problema del archivo gigante <a name="1-problema"></a>

En la primera parte todo vivía en **un** `script.js`: el tema, el formulario, el fetch, las
animaciones… mezclado. Con 40 líneas se lee bien. Con 400, es una **pesadilla**:

- Para cambiar el formulario tienes que **bucear** entre el código del tema y el del scroll.
- Todo comparte las mismas variables globales → un nombre repetido y **se rompe todo**.
- No puedes **reutilizar** una parte en otro proyecto sin copiar-pegar.

> **Analogía:** un `script.js` gigante es un **cajón de sastre** donde metes cables, tijeras y comida.
> La solución no es un cajón más grande, son **cajones etiquetados**: uno para cada cosa. Eso son las
> **clases** y los **módulos**.

Nuestro objetivo: que al abrir el proyecto, cualquiera entienda **dónde está cada cosa** sin leerlo todo.

> 🔍 **Compáralo tú mismo.** En [`codigo-antes/`](codigo-antes/) está **el mismo portafolio** escrito
> en un solo `script.js` (con el contenido clavado en el HTML). En [`codigo/`](codigo/) está la versión
> modular. **Se ven idénticos**; ábrelos uno al lado del otro y siente la diferencia al buscar dónde
> cambiar algo. Ese es el punto de toda esta guía.

---

## 2. POO: pensar en "clases" (moldes) <a name="2-poo"></a>

> **Explica:** **POO** = Programación Orientada a Objetos. La idea es agrupar en un mismo lugar los
> **datos** de algo y **lo que ese algo sabe hacer**.

Una **clase** es un **molde**. Describe:
- **Propiedades:** qué datos guarda (con `this.`).
- **Métodos:** qué sabe hacer (funciones dentro de la clase).

```js
// La clase (el molde)
class Perro {
  constructor(nombre) {   // corre al crear el objeto
    this.nombre = nombre; // propiedad: un dato propio de ESTE perro
  }
  ladrar() {              // método: algo que el perro sabe hacer
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

// El objeto (una galleta hecha con ese molde)
const firulais = new Perro("Firulais");
firulais.ladrar();   // Firulais dice: ¡Guau!
```

- `class Perro { … }` → el molde.
- `new Perro("Firulais")` → crear un **objeto** concreto con ese molde.
- `this` → "**este** objeto en particular". `this.nombre` es el nombre de **este** perro.
- `constructor` → el método que **prepara** el objeto al nacer.

> **Analogía:** la clase es el **molde de galletas**; los objetos son las **galletas**. Un molde, muchas
> galletas iguales por fuera pero cada una con su propio relleno (`this`).

### En el portafolio
Cada responsabilidad es una clase, y cada clase vive en su archivo:

| Clase | Archivo | De qué se encarga (una sola cosa) |
|-------|---------|-----------------------------------|
| `Tema` | `js/Tema.js` | Modo claro/oscuro (y recordarlo). |
| `Portafolio` | `js/Portafolio.js` | Leer `datos.json` y pintar la página. |
| `GitHubAPI` | `js/GitHubAPI.js` | Pedir datos reales a GitHub. |
| `Contacto` | `js/Contacto.js` | Validar el formulario y enviar el correo. |
| `Animaciones` | `js/Animaciones.js` | Reveal al scroll, contadores, anime.js. |

> A esto se le llama **separación de responsabilidades** (*Single Responsibility*): **una clase, un
> tema**. Si algo del formulario falla, sabes **exactamente** en qué archivo mirar.

Míralo real en [`codigo/js/Tema.js`](codigo/js/Tema.js): es una clase pequeña que hace **solo** el tema.

---

## 3. Módulos: `import` / `export` (un archivo por tema) <a name="3-modulos"></a>

> **Explica:** un **módulo** es simplemente un archivo `.js` que **comparte** algunas cosas (`export`)
> y **usa** cosas de otros (`import`). Así cada archivo es independiente.

```js
// En Tema.js — lo compartimos:
export class Tema { /* … */ }

// En main.js — lo usamos:
import { Tema } from "./Tema.js";
const tema = new Tema(document.querySelector("#btn-tema"));
```

- `export` → "esto lo pueden usar otros archivos".
- `import { Tema } from "./Tema.js"` → "tráeme la clase `Tema` de ese archivo".
- El `./` significa "en esta misma carpeta". **No olvides el `.js`** al final.

Para que el navegador entienda módulos, el `<script>` debe ser `type="module"`:

```html
<script type="module" src="js/main.js"></script>
```

Fíjate que **solo enlazamos `main.js`**. Él importa a los demás; no hace falta un `<script>` por archivo.

> ⚠️ **REGLA DE ORO (esto confunde a todos la primera vez):** los módulos y `fetch("datos.json")`
> **NO funcionan** si abres el HTML con **doble clic** (`file://…`). El navegador lo bloquea por
> seguridad. **Ábrelo con Live Server** (clic derecho en `index.html` → *Open with Live Server*). Es el
> error #1 de esta clase; anótalo en el tablero.

### `main.js`: el director de orquesta
Un buen `main.js` casi no tiene lógica: **importa** las clases y las **pone a trabajar**. Leerlo debe
bastar para entender la app. Mira [`codigo/js/main.js`](codigo/js/main.js).

---

## 4. Separar los datos: cargar el portafolio desde un JSON <a name="4-json"></a>

> **Explica:** el **contenido** (tu nombre, skills, proyectos, redes) **no** debería estar clavado en el
> HTML. Si mañana cambias de skill, no quieres tocar código: quieres editar **un solo archivo de datos**.

**JSON** (*JavaScript Object Notation*) es un formato de texto para guardar datos. Se parece a un objeto
de JS, pero con reglas estrictas: **claves entre comillas dobles**, sin comas de más, sin comentarios.

```json
{
  "perfil": { "nombre": "Ana", "titulo": "Dev en formación" },
  "skills": [
    { "nombre": "HTML", "nivel": 90 },
    { "nombre": "CSS",  "nivel": 80 }
  ]
}
```

Lo leemos con `fetch` (igual que una API, pero es un archivo nuestro):

```js
async cargar() {
  const res = await fetch("datos.json");
  const datos = await res.json();   // texto → objeto de JS
  console.log(datos.perfil.nombre); // "Ana"
}
```

Y lo **pintamos** recorriendo el array con `.map()` (transforma cada dato en HTML):

```js
// De un array de skills a una lista <li> en la página
lista.innerHTML = datos.skills
  .map((s) => `<li>${s.nombre} — ${s.nivel}%</li>`)
  .join("");   // .join une el array en un solo texto
```

> **Por qué mola:** para actualizar el portafolio, tú (o cualquiera, aunque no sepa programar) edita
> `datos.json`. **Los datos están separados de la presentación.** Es exactamente cómo funcionan los
> sitios "de verdad" (un CMS no es más que esto a lo grande).

Está todo en [`codigo/js/Portafolio.js`](codigo/js/Portafolio.js) y [`codigo/datos.json`](codigo/datos.json).

> **Errores comunes de JSON:** una **coma de más** después del último elemento, comillas **simples** en
> vez de dobles, o poner **comentarios** (`//`) — JSON no los permite. Si `fetch` falla, abre `datos.json`
> en el navegador (`http://127.0.0.1:5500/datos.json`): si el JSON está roto, te lo dice.

---

## 5. GitHub real con la clase `GitHubAPI` <a name="5-github"></a>

GitHub **sí** tiene una API pública y gratuita. Con ella traemos tu **avatar, tus stats y tus repos**
reales. Lo encapsulamos en una clase para no ensuciar el resto del código:

```js
export class GitHubAPI {
  constructor(usuario) { this.usuario = usuario; this.base = "https://api.github.com"; }

  async obtenerPerfil() {
    const res = await fetch(`${this.base}/users/${this.usuario}`);
    if (!res.ok) throw new Error(`GitHub respondió ${res.status}`);
    return res.json();
  }
  async obtenerRepos(cantidad = 6) {
    const res = await fetch(`${this.base}/users/${this.usuario}/repos?sort=updated&per_page=${cantidad}`);
    return res.json();
  }
}
```

Quien la usa no sabe (ni le importa) cómo funciona por dentro:

```js
const gh = new GitHubAPI("octocat");
const perfil = await gh.obtenerPerfil();   // { avatar_url, public_repos, followers, … }
```

Qué te da la API de GitHub, sin pedir permiso ni token (para lo público):
`avatar_url`, `name`, `bio`, `public_repos`, `followers`, `following`, y la lista de repos con
`name`, `description`, `html_url`, `stargazers_count`, `language`.

> ⚠️ **Límite:** sin autenticar, GitHub permite ~**60 peticiones por hora por IP**. Para una clase de 30
> personas en la misma red del SENA, es **suficiente** (cada quien hace 2 peticiones al cargar). Si te
> sale error `403`, esperen unos minutos. No pongas tokens en el código: son secretos.

---

## 6. LinkedIn: la verdad y qué sí se puede hacer <a name="6-linkedin"></a>

Aquí toca ser honestos, porque es una pregunta clásica:

> **LinkedIn NO tiene una API pública y gratuita para leer tu perfil.** A diferencia de GitHub, LinkedIn
> **protege** esos datos: su API oficial exige aprobación de empresa y permisos especiales. No existe un
> `fetch("...linkedin.../mi-perfil")` que funcione. **Cualquier "truco" para raspar tu perfil viola sus
> términos y se rompe seguido.**

**Lo que SÍ se hace en un portafolio profesional (y es lo correcto):**

1. **Un botón/enlace a tu perfil** — que abra tu LinkedIn en otra pestaña. Lo servimos desde el JSON:
   ```json
   "redes": { "linkedin": "https://www.linkedin.com/in/tu-usuario" }
   ```
   ```js
   document.querySelector("#red-linkedin").href = datos.redes.linkedin;
   ```
2. **El "badge" oficial de LinkedIn** — LinkedIn te da un *badge* incrustable desde
   *Perfil → Recursos → Insignia pública*. Es la forma **oficial** de mostrar tu perfil en una web.
   **Ya viene maquetado** en el portafolio: en `datos.json` pon tu usuario en `redes.linkedinUsuario`
   (el trozo final de la URL de tu perfil, p. ej. `ana-perez`), y `Portafolio.js` configura el badge
   y carga el script de LinkedIn. Con el placeholder `tu-usuario` verás solo el **enlace de respaldo**
   (LinkedIn no encuentra ese perfil); con tu usuario real, se dibuja la **tarjeta completa**.
   ```json
   "redes": { "linkedin": "https://www.linkedin.com/in/ana-perez", "linkedinUsuario": "ana-perez" }
   ```
   > El badge necesita internet (lo sirve `platform.linkedin.com`). Si la red falla, se muestra el
   > enlace de respaldo — el portafolio no se rompe.
3. **Datos que tú controlas en el JSON** — si quieres mostrar tu titular o experiencia, escríbelos **tú**
   en `datos.json`. Es tu información, tú decides qué mostrar.

> **Lección de fondo (vale para toda la vida dev):** antes de programar contra un servicio, revisa si
> **tiene API** y si es **gratuita/permitida**. GitHub sí; LinkedIn no. Un buen dev **lee los términos**
> y no promete lo que la plataforma no permite.

---

## 7. Formulario que envía correos (gratis) <a name="7-correo"></a>

Un formulario HTML **no envía correos solo**: necesita algo que reciba los datos. Como todavía no tenemos
backend propio (eso es la Clase 07+), usamos un **servicio gratuito** que hace de intermediario. Vemos las
tres opciones más usadas; el código del curso trae **Web3Forms** por defecto.

### Opción A — Web3Forms (la más simple, por defecto) ⭐
Sin crear cuenta: pones tu correo en su web y te dan un **Access Key**. Envías con `fetch`:

```js
await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify({ access_key: "TU_KEY", nombre, correo, mensaje })
});
```
El mensaje llega a **tu correo**. Ver [`codigo/js/Contacto.js`](codigo/js/Contacto.js).

### Opción B — Formspree
Creas cuenta gratis (50 envíos/mes) y te dan un *endpoint*. Cambia solo la URL:

```js
await fetch("https://formspree.io/f/TU_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify({ nombre, correo, mensaje })
});
```

### Opción C — EmailJS
El más flexible (plantillas de correo), pero más pasos: creas *service*, *template* y *public key*.

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```
```js
emailjs.init("TU_PUBLIC_KEY");
await emailjs.send("TU_SERVICE", "TU_TEMPLATE", { nombre, correo, mensaje });
```

### Comparación
| | Web3Forms | Formspree | EmailJS |
|---|---|---|---|
| ¿Crear cuenta? | **No** (solo tu correo) | Sí | Sí |
| Configuración | 1 paso (una key) | 2 pasos | 3 pasos |
| Plantillas de correo | Básicas | Sí | **Sí, potentes** |
| Ideal para | **Empezar rápido** | Panel de mensajes | Correos con diseño |

> **Siempre valida ANTES de enviar:** nombre no vacío, correo con `@`, mensaje con largo mínimo. Y usa
> `evento.preventDefault()` para que la página no se recargue. (Todo eso está en `Contacto.js`.)
>
> **Regla de seguridad:** estas *keys* de formulario **pueden ir en el frontend** (son de "envío", no dan
> acceso a nada). Pero un **token de GitHub, una contraseña o una API key secreta NUNCA** se ponen en el
> JS del navegador: cualquiera las vería con F12. Eso va en un backend (Clase 07+).

---

## 8. Animaciones modernas: anime.js y GSAP <a name="8-animaciones"></a>

Ya tienes animaciones **nativas** (CSS + `IntersectionObserver`) en `Animaciones.js`. Para efectos más
ricos (secuencias, timelines, físicas) se usan **librerías**. Las dos reinas:

| Librería | Fuerte en | Peso | Curva |
|----------|-----------|------|-------|
| **anime.js** | Animaciones sueltas, `stagger` (escalonar), SVG | Ligera (~17 kB) | Fácil |
| **GSAP** | Timelines complejas, scroll-triggered, producción seria | Media | Media |

> **Regla:** la animación **decora**, no **estorba**. Poca y con propósito. Y **siempre** respeta
> `prefers-reduced-motion` (hay gente a la que el movimiento le marea). En el código lo comprobamos antes
> de animar.

### anime.js (ya integrado en el portafolio)
Lo cargamos por CDN **solo al usarlo** (import dinámico), con plan B si no hay internet:

```js
const { default: anime } = await import("https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js");

anime({
  targets: ".hero .reveal",   // qué animar (selector CSS)
  translateY: [24, 0],        // de 24px abajo → a su sitio
  opacity: [0, 1],            // de invisible → visible
  delay: anime.stagger(90),   // cada elemento 90ms después del anterior
  duration: 700,
  easing: "easeOutCubic"
});
```

`anime.stagger()` es la joya: anima una lista **en cascada** con una sola línea. Míralo en
[`codigo/js/Animaciones.js`](codigo/js/Animaciones.js), método `entradaHero()`.

### GSAP (listo para copiar)
Para GSAP: enlaza el CDN y usa `gsap.from()` (anima **desde** un estado hasta el actual):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```
```js
// El título entra desde abajo con un rebote suave
gsap.from(".hero__title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" });

// Una TIMELINE: varias animaciones en secuencia, controladas
const tl = gsap.timeline();
tl.from(".eyebrow", { opacity: 0, y: 20 })
  .from(".hero__title", { opacity: 0, y: 30 }, "-=0.3")   // empieza 0.3s antes
  .from(".hero__cta",   { opacity: 0, y: 20 });
```

GSAP tiene además **ScrollTrigger** (animar según el scroll), lo que lo hace el estándar en portafolios
"wow". Para el curso, con anime.js basta; deja GSAP como reto para quien quiera brillar.

> **Cómo enseñarlo:** muestra primero el efecto **sin** librería (CSS), luego el **mismo** efecto con
> anime.js/GSAP en 3 líneas. El "ahá" es ver cuánto **ahorran** las librerías.

---

## 9. Buenas prácticas de JS (checklist pro) <a name="9-buenas-practicas"></a>

Esto se **evalúa** en la Demo Day: el código limpio **se explica solo**.

| ✅ Haz | ❌ Evita | Por qué |
|-------|---------|---------|
| Una clase/archivo por responsabilidad | Un `script.js` de 400 líneas | Encuentras y arreglas rápido |
| `const` por defecto, `let` solo si cambia | `var` | `var` da errores raros de alcance |
| Nombres que se leen (`obtenerRepos`) | `f1`, `x`, `cosa` | El código se cuenta a sí mismo |
| Funciones/métodos **cortos** (una tarea) | Métodos que hacen de todo | Fáciles de probar y reusar |
| `async/await` + `try/catch` en fetch | Fetch "a pelo" sin manejar el error | La red falla; no rompas la página |
| Datos en JSON, no en el código | Texto clavado en el HTML | Actualizas sin tocar código |
| Comentar el **porqué** | Comentar lo obvio | El "qué" ya lo dice el código |
| Secretos (tokens) en el backend | Tokens en el JS del navegador | F12 los deja a la vista |
| Respetar `prefers-reduced-motion` | Animar siempre a full | Accesibilidad |

> **Mantra:** *"Código que no entiendes = código que no sirve."* Si le pides algo a la IA, pídele que te
> lo **explique** y reescríbelo con tus palabras.

### 9.b Prácticas modernas vs antiguas (JS de ayer vs de hoy)

> **Explica:** JavaScript cambió mucho, sobre todo desde **ES6 (2015)**. En tutoriales o respuestas viejas
> verás código que **funciona**, pero que hoy se escribe **mejor**: más corto, más seguro y más legible.
> Saber distinguirlo te ahorra copiar malos hábitos.

**Ejemplo estrella — seleccionar del DOM:**

```js
// 👴 Antiguo: un método distinto para cada caso
document.getElementById("titulo");
document.getElementsByClassName("card");   // HTMLCollection (sin forEach cómodo)
document.getElementsByTagName("p");

// ✨ Moderno: UN método, con selectores CSS (los mismos de tus hojas de estilo)
document.querySelector("#titulo");    // el primero que coincida
document.querySelectorAll(".card");   // todos (NodeList: SÍ tiene forEach)
```

Con `querySelector`/`querySelectorAll` no memorizas tres métodos: usas **el mismo selector que en CSS**
(`#id`, `.clase`, `etiqueta`, `.a .b`, etc.). `getElementById` no está "mal" (incluso es un pelín más
rápido), pero `querySelector` **unifica todo** y es el estándar moderno.

**Tabla chuleta — de lo viejo a lo moderno:**

| Tema | 👴 Antiguo | ✨ Moderno (ES6+) | Por qué |
|------|-----------|-------------------|---------|
| Variables | `var x` | `const` / `let` | `var` tiene alcance confuso; `const` protege |
| Seleccionar DOM | `getElementById`, `getElementsByClassName` | `querySelector`, `querySelectorAll` | uno solo, con selectores CSS |
| Texto + datos | `"Hola " + n + "!"` | `` `Hola ${n}!` `` (template literal) | se lee mejor, sin `+` por todos lados |
| Eventos | `btn.onclick = fn` / `onclick=""` | `btn.addEventListener("click", fn)` | permite varios listeners; separa HTML y JS |
| Clases CSS | `el.className += " activo"` | `el.classList.add("activo")` | `add`/`remove`/`toggle`, sin pisar otras clases |
| Comparar | `==` (con coerción) | `===` (estricto) | `==` da sorpresas (`0 == ""` es `true`) |
| Recorrer | `for (var i…; i<a.length; i++)` | `for (const x of a)` / `.map()` | menos ruido, menos errores de índice |
| Funciones | `function(){ var that=this; }` | `() => {}` (arrow) | más corto y `this` predecible |
| Valor por defecto | `x = x \|\| 10` | `x ?? 10` / parámetros por defecto | `??` no falla con `0` o `""` |
| Peticiones | `XMLHttpRequest`, `$.ajax`, callbacks | `fetch` + `async/await` | plano, legible, sin "callback hell" |
| Organizar | todo global / muchos `<script>` | `import`/`export` (módulos) | sin choques de nombres; cada archivo, su tema |

**El caso jQuery.** Durante años, jQuery (`$(".x")`, `$.ajax`, `.fadeIn()`) resolvía lo que el navegador
hacía mal o distinto en cada versión. **Hoy casi no se necesita:** el navegador ya trae nativo lo mismo
—`querySelector`, `classList`, `fetch`, y animaciones con **CSS**— así que un sitio moderno pesa menos y
depende de menos librerías. Si ves un tutorial que empieza con `$(...)`, probablemente es **viejo**.

> **Cómo enseñarlo:** toma una línea de código "vieja" (por ejemplo un `getElementsByClassName` con un `for`
> clásico) y reescríbanla juntos a la versión moderna (`querySelectorAll` + `for...of`). El "ahá" es ver que
> **hace lo mismo con la mitad de código**. Todo lo moderno de esta tabla **ya está en `codigo/`**.

### 9.c Sintaxis moderna esencial (chuleta de referencia)

> 📚 **Estos temas se enseñan a fondo, con ejercicios, en la [GUÍA base](GUIA.md)** (§5.b Objetos,
> §6.b Funciones flecha, §7.c Operadores, §8.b Desestructuración y spread). Aquí los dejamos como
> **chuleta rápida** para consultar de un vistazo.

> Estas piezas de ES6+ aparecen por todos lados. No hace falta dominarlas de memoria hoy, pero sí
> **reconocerlas** para no bloquearte al leer código (tuyo, de la IA o de internet).

**Objetos: los "diccionarios" de datos.** Un objeto guarda datos con **etiqueta** (pares `clave: valor`).
Tu `datos.json` es exactamente un objeto.
```js
const persona = {
  nombre: "Ana",
  edad: 20,
  saludar() { return `Hola, soy ${this.nombre}`; }  // un método
};
persona.nombre;    // "Ana"  (acceso con punto)
persona["edad"];   // 20     (acceso con corchetes)
```
> **Array vs Objeto:** un **array** `[]` es una lista ordenada (accedes por posición: `lista[0]`); un
> **objeto** `{}` son datos con nombre (accedes por clave: `persona.nombre`).

**Funciones flecha (`=>`).** La forma corta de escribir funciones:
```js
function sumar(a, b) { return a + b; }   // de siempre
const   sumar = (a, b) => a + b;         // flecha: una línea → return implícito
const   doble = n => n * 2;              // un solo parámetro: sin paréntesis
```
Se usan constantemente en `addEventListener("click", () => …)` y en `.map()`, `.filter()`, etc. Además,
`this` dentro de una flecha se comporta de forma **predecible** (no cambia como en las funciones normales).

**Operadores lógicos y el "if corto".**
```js
const entra  = tieneBoleto && esMayor;         // && (Y): verdadero si AMBOS lo son
const nombre = apodo || "invitado";            // || (O): el primero que "sirva"
const texto  = esMayor ? "Adulto" : "Menor";   // ternario: condición ? sí : no
```

**`??` (nullish) y `?.` (encadenamiento opcional).**
```js
const puntos = usuario.puntos ?? 0;        // usa 0 SOLO si puntos es null/undefined (respeta el 0)
const ciudad = usuario.direccion?.ciudad;  // undefined en vez de reventar si no hay direccion
```
> **`??` vs `||`:** `||` descarta también `0`, `""` y `false` (los trata como "vacío"); `??` **solo**
> descarta `null` y `undefined`. Para números y textos, `??` evita sorpresas.

**Desestructuración: desempacar en variables.**
```js
const { nombre, edad } = persona;          // saca campos de un objeto
const [primero, segundo] = ["rojo","verde"]; // saca de un array por posición
function saludar({ nombre }) { … }          // desestructurar en los parámetros
```
Ya la usas en el portafolio: `const { default: confetti } = await import(…)`.

**Spread y rest: los tres puntos `...`.**
```js
// SPREAD: "esparce" los elementos (copiar/combinar SIN dañar el original)
const skills = [...base, "js"];
const copia  = { ...persona, edad: 21 };
// REST: "junta" varios argumentos en un array
function sumar(...numeros) { return numeros.reduce((a, b) => a + b, 0); }
```
Lo usas en `Contacto.js`: `JSON.stringify({ access_key: this.accessKey, ...datos })`.

**Clases e `import` / `export`.** Estas dos ya están explicadas a fondo antes en esta misma guía:
- **Clases (POO):** ver la sección [2. POO: pensar en "clases"](#2-poo) — `class`, `constructor`, `this`, métodos.
- **Módulos:** ver la sección [3. Módulos: `import` / `export`](#3-modulos) — compartir y reutilizar entre archivos.

> **Regla para el aula:** no las enseñes todas de corrido como lista. Ve señalándolas **cuando aparezcan
> en el código del portafolio** ("¿ven este `...`? eso es spread"). Reconocer > memorizar.

---

## 10. Adelanto: Node.js (JavaScript en consola y escritorio) <a name="10-node"></a>

> **Explica:** hasta ahora JS vivía **dentro del navegador**. **Node.js** es un programa que ejecuta
> JavaScript **fuera** del navegador: en la **terminal**, en un **servidor**, o como app de **escritorio**.
> Es el mismo lenguaje, otro escenario.

Si ya instalaron Node (Clase 0), pruébenlo en vivo. Modo interactivo (REPL):

```bash
node
> 2 + 2
4
> "Hola".toUpperCase()
'HOLA'
> .exit
```

Un archivo `.js` corriendo en la terminal (sin navegador, sin HTML):

```js
// saludo.js
const nombre = process.argv[2] || "mundo";   // argumento de la terminal
console.log(`¡Hola, ${nombre}, desde Node!`);
```
```bash
node saludo.js Ana
# ¡Hola, Ana, desde Node!
```

**¿Para qué sirve Node?**
- **Consola/automatización:** scripts que renombran archivos, procesan datos, etc.
- **Backend/servidores:** APIs como la de GitHub se construyen así (lo verán en la **Clase 07**).
- **Escritorio:** apps como VS Code, Discord o Slack están hechas con **Electron**, que es Node + web.
- **Herramientas:** `npm`/`pnpm`, Vite, el propio Live Server… todo corre sobre Node.

> **Puente al curso:** el mismo JavaScript que hoy usas para dar vida al portafolio es el que en la
> **Clase 07** usarás para crear tu **propio servidor**. Aprender JS bien **abre las dos puertas**:
> frontend y backend. Eso es ser *full-stack*.

> ⚠️ **Ojo con el aula:** no hagas `npm install` en vivo con 30 personas y red débil (ver
> [CONFIGURACION-OFFLINE.md](../CONFIGURACION-OFFLINE.md)). Para este adelanto basta `node` y un archivo
> `.js`: **no necesita internet ni instalar nada**.

---

## 10.b Ejercicios de trabajo (Nivel PRO) <a name="10b-ejercicios-pro"></a>

Ejercicios para consolidar POO, módulos, JSON y buenas prácticas. Todos se hacen **sobre `codigo/`** (con
Live Server). Se evalúa que el estudiante **explique** su solución.

### Refuerzo (uno a uno)
1. **POO:** crea `js/Reloj.js` con una clase `Reloj` que muestre la hora en el footer y se actualice cada
   segundo (`setInterval`). Impórtala en `main.js` y arráncala. *(Practica clase + método + módulo.)*
2. **JSON:** agrega a `datos.json` un array `certificados` (cada uno con `nombre` y `anio`). Crea un método
   `pintarCertificados()` en `Portafolio.js` que los recorra y los muestre. *(Datos separados de la vista.)*
3. **Guardas + validación:** en `Contacto.js`, rechaza el envío si el mensaje trae un enlace (`http`),
   usando una cláusula de guarda (`if (...) return;`).
4. **API:** en `GitHubAPI.js`, añade un método `obtenerReposPorLenguaje(lang)` que filtre los repos por
   lenguaje (usa `.filter()`).
5. **Refactor:** busca en el código un `+` de concatenación (`"Hola " + x`) y cámbialo por un **template
   literal**; busca un `if` anidado y aplánalo con guardas.

### Trabajo grande (proyecto de la clase) 🛠️
Crea una **nueva clase con su módulo** que aporte una función real a tu portafolio. Elige una:

- **`Filtro`** — filtra las tarjetas de repos por lenguaje con botones (usa `datos`/DOM/eventos).
- **`Tema` mejorado** — recuerda el tema y además detecta la hora: de noche arranca en oscuro.
- **`Galeria`** — lee un array de proyectos del JSON y arma una galería con un método por tarjeta.

**Requisitos (rúbrica):** (a) una **clase** en su **propio archivo**, exportada e importada en `main.js`;
(b) datos desde **`datos.json`**, no clavados; (c) al menos una **guarda** y un **método** claro;
(d) código **limpio** (nombres, `const`, comentar el porqué); (e) saber **explicarlo en voz alta**.

> **Enlázalo con la evaluación:** este trabajo prepara para la **actividad evaluativa**
> (`actividad-evaluativa-clase04.docx`) y para la **Demo Day**.

---

## 11. Cómo dar esta clase (guion para el instructor) <a name="11-guion"></a>

Sugerencia de ritmo (ajústalo a tu grupo). Total ~2 h si va aparte de la clase base.

1. **(10 min) El dolor.** Abre [`codigo-antes/`](codigo-antes/) (todo en un `script.js`) y muéstralo
   funcionando. Pregunta: *"¿dónde cambio el formulario?"* Que sufran buscándolo. Luego abre
   [`codigo/`](codigo/) (modular): **hace lo mismo**, pero ordenado. Ese contraste **justifica** todo.
2. **(20 min) POO.** El ejemplo del `Perro`. Luego abre `Tema.js`: es una clase pequeña y real. `this`,
   `constructor`, métodos. Que identifiquen propiedades vs métodos.
3. **(15 min) Módulos.** `export`/`import`, `type="module"`, y **martilla la REGLA DE ORO del Live
   Server**. Provoca el error a propósito (doble clic) para que vean el mensaje.
4. **(20 min) JSON.** Edita `datos.json` en vivo (cambia el nombre, agrega un skill) y recarga: la página
   cambia **sin tocar código**. Ese es el momento "ahá".
5. **(15 min) GitHub.** Cada quien pone **su** usuario en `datos.json` y ve **sus** repos. Emoción real.
6. **(10 min) LinkedIn.** La charla honesta: por qué no hay API y qué sí se hace. Enlace desde el JSON.
7. **(15 min) Correo.** Saca un Access Key de Web3Forms en vivo, pégalo, y envíate un mensaje de prueba.
   Que les llegue a su correo = magia.
8. **(15 min) Animaciones.** El mismo efecto en CSS vs anime.js. Enseña `stagger`. Menciona GSAP.
9. **(10 min) Node.** El REPL y `saludo.js`. Puente a la Clase 07. Cierre.

> **Evaluación sugerida:** que cada estudiante **explique en voz alta** un archivo (`Tema.js`,
> `Contacto.js`…) con sus palabras. Si lo explica, lo entendió. Ese es el objetivo de todo esto.

> 📄 **Actividad evaluativa anti-copy-paste.** Para calificar hay un Word listo para repartir,
> `actividad-evaluativa-clase04.docx`, **sembrado con trampas** que delatan a quien lo pega en la IA y
> entrega sin leer (instrucciones ocultas + un cálculo que cambia al copiar). **No lo abras frente a los
> estudiantes ni expliques las trampas.** Todo (cómo detectarlos, la solución y la rúbrica) está en el
> documento SOLO para ti: `INSTRUCTOR-clave-actividad-evaluativa.md`.

---

### Cierre Git
```bash
git add .
git commit -m "Portafolio v3 PRO: POO, módulos, datos en JSON, correo y animaciones"
git push
```

### Lo que domina el grupo tras esta guía
- [x] Entiendo **POO**: clases, objetos, `this`, constructor y métodos.
- [x] Separo el código en **módulos** (`import`/`export`) y sé por qué necesito **Live Server**.
- [x] Cargo el contenido del portafolio desde un **JSON** (datos separados de la presentación).
- [x] Traigo datos reales de **GitHub** con una clase, y sé por qué **LinkedIn** no tiene API libre.
- [x] Mi formulario **envía correos** de verdad con una herramienta gratuita.
- [x] Animo con **anime.js** (y sé cómo sería con **GSAP**), respetando la accesibilidad.
- [x] Sé qué es **Node.js** y que el mismo JS me sirve para backend (Clase 07).
