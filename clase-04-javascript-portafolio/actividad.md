# Actividad — Clase 04 (JavaScript)

> 📝 **Nota:** esta es la actividad de **práctica** entre clases. La **actividad evaluativa (con nota)** es
> un documento aparte que entrega el instructor: `actividad-evaluativa-clase04.docx`. Léela con atención de
> principio a fin.

**Objetivo:** agregarle una **segunda interacción** con JavaScript a tu portafolio (además del tema
claro/oscuro y la validación que hicimos en clase).
**Tiempo estimado:** 45–60 min.
**Se entrega:** tu `script.js` actualizado en el repo, con un commit.

> 🧑‍🏫 En clase lo hicimos **guiados**; esta actividad la haces **por tu cuenta**. Está bien equivocarse:
> abre la consola con **`F12`** y lee los errores con calma. No estás solo, tienes al asistente de IA.

---

## Parte A — Elige UNA interacción nueva
Escoge **una** de estas ideas (o inventa la tuya) y agrégala a tu `script.js`:

1. **Botón "Ver más":** un botón que muestra u oculta un párrafo de tu sección *Sobre mí*.
   ```js
   const boton = document.querySelector("#ver-mas");
   const texto = document.querySelector("#texto-extra");
   boton.addEventListener("click", function () {
     texto.classList.toggle("oculto");   // en el CSS: .oculto { display: none; }
   });
   ```

2. **Contador de clics:** un botón que cuenta cuántas veces lo presionaron.
   ```js
   let veces = 0;
   const boton = document.querySelector("#contador");
   boton.addEventListener("click", function () {
     veces = veces + 1;                          // usamos let porque cambia
     boton.textContent = "Me gusta (" + veces + ")";
   });
   ```

3. **Menú que se abre/cierra:** un botón que muestra u oculta el menú de navegación (útil para celular).

## Parte B — Entiende lo que agregas (no solo pegar) 🧠
Usa el **asistente de IA** para que te **explique**, no para que te resuelva a ciegas. Buenas preguntas:

- *"¿Qué hace `classList.toggle` en JavaScript? Explícamelo con un ejemplo sencillo."*
- *"No entiendo esta línea: `boton.textContent = ...`. ¿Me la explicas paso a paso?"*
- *"Mi botón no funciona y la consola dice `null`. ¿Qué puede significar eso?"*

> **Regla del curso:** si le pides código a la IA, **pídele también que te lo explique** y **reescríbelo
> con tus palabras** en un comentario. Código que no entiendes = código que no sirve.

## Parte C — Guarda en Git
```bash
git add .
git commit -m "Portafolio v3: segunda interaccion con JavaScript"
```

---

## Reto extra (opcional) ⭐
- **Recordar el tema:** haz que el modo oscuro **se quede puesto** aunque recargues la página, usando
  `localStorage`. Pregúntale a la IA: *"¿Cómo guardo en localStorage si el usuario eligió modo oscuro?"*.
- **Validación más completa:** en el formulario, valida también que el **correo** no esté vacío y que
  el mensaje tenga al menos 10 caracteres, mostrando un aviso distinto para cada caso.

---

## Reto PRO (si viste la [guía avanzada](GUIA-AVANZADA.md)) 🚀
Toma el portafolio modular de [`codigo/`](codigo/) (POO + módulos + JSON) y **hazlo tuyo**. Elige al
menos **dos**:

1. **Tus datos:** edita `datos.json` con tu nombre, tus skills y **dos proyectos reales**. Pon **tu
   usuario** de GitHub en `redes.github` y ve cómo cargan tus repos.
2. **Tu correo:** saca un *access key* gratis en [web3forms.com](https://web3forms.com), pégalo en
   `js/main.js` y **envíate un mensaje de prueba** desde tu propio formulario.
3. **Tu LinkedIn:** pon la URL real de tu perfil en `datos.json` y comprueba que el botón te lleva ahí.
4. **Una animación tuya:** agrega en `Animaciones.js` un efecto con **anime.js** (o **GSAP**) a la
   sección de skills o proyectos. Respeta `prefers-reduced-motion`.
5. **Una clase nueva:** crea un archivo `js/Reloj.js` con una clase `Reloj` que muestre la hora en el
   footer y se actualice cada segundo. Impórtala en `main.js`. (Practica POO + módulos de cero.)

> **Recuerda abrir con Live Server** (no doble clic), o los módulos y el `fetch` del JSON no cargan.
> Si algo falla, **F12 → Console**: el error casi siempre está ahí escrito.

---

### Criterios de logro
- [ ] Agregué **una** interacción nueva con JavaScript (además de las de clase).
- [ ] Usé `querySelector` y `addEventListener` en mi código.
- [ ] **Entiendo** cada línea que escribí (puedo explicarla con mis palabras).
- [ ] Probé que funciona y revisé la consola (`F12`) sin errores en rojo.
- [ ] Hice commit de mi avance.

> **Recuerda:** viste el video de JavaScript del [refuerzo](../recursos/RECURSOS-Y-VIDEOS.md). Es el tema
> que más práctica necesita, así que repetirlo no es perder el tiempo: es ganarlo.
