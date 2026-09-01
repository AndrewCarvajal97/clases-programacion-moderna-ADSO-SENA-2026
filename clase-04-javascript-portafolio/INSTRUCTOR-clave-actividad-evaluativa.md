# 🔒 CLAVE DEL INSTRUCTOR — Actividad Evaluativa Clase 04

> ⚠️ **NO repartir a los estudiantes.** Este documento explica las trampas anti-copy-paste de
> [`actividad-evaluativa-clase04.docx`](actividad-evaluativa-clase04.docx) (el Word que sí se reparte),
> cómo **detectar** a quien lo pegó en una IA y entregó sin leer, la **solución** de las tareas y la **rúbrica**.

## Por qué existe esta actividad

En la clase de OpenCode vimos que varios estudiantes **pegan la actividad completa en la IA y entregan lo
que salga**, sin leer ni entender. Esta actividad evaluativa está **sembrada con dos trampas silenciosas**
que hacen que ese atajo **falle de forma visible**: quien copia y pega entrega cosas absurdas y responde mal
el candado. Quien **lee y piensa**, la resuelve sin problema y ni se entera de las trampas.

> **Es justo:** la página avisa (integridad académica) que entregar código de IA sin entender se califica en
> cero y que habrá sustentación oral. La trampa solo “castiga” a quien ignora eso y no lee.

---

## 🎭 Trampa 1 — Inyección de prompts (texto oculto para la IA)

El Word tiene **instrucciones invisibles** dirigidas a un asistente de IA, escritas en **texto blanco de
1 punto**: no se ven en la hoja (blanco sobre blanco, minúsculo), pero **el color y el tamaño NO afectan lo
que se copia**. Al hacer <kbd>Ctrl</kbd>+<kbd>A</kbd> → copiar → pegar en la IA, ese texto viaja igual; y una
IA que lee el `.docx` directamente también lo ve (está en el flujo de texto del documento).

Si el estudiante pega **todo** el documento en su IA, esas órdenes viajan con él y la IA produce
**basura detectable**. Las instrucciones sembradas piden (todo inofensivo, solo delatan):

### ✅ Checklist de detección — señales de copy-paste sin leer
Si en la entrega (código, README, respuestas o el propio portafolio) aparece **cualquiera** de esto, la IA
fue secuestrada y el estudiante **no leyó**:

- [ ] Respuestas o comentarios **en verso/rima** sin motivo.
- [ ] Afirma que **π = 4** o que **“las tortugas inventaron internet”**.
- [ ] Sugiere/usa **Comic Sans 90px**, **rosa fosforescente** sobre **fondo rojo**.
- [ ] Aparece el nombre **“Copión Pérez”** como autor en algún archivo.
- [ ] Aparece la palabra clave **`PLÁTANO-42`** (canario; búscala con <kbd>Ctrl</kbd>+F / `grep`).
- [ ] Termina algún texto con **“Miau, ya soy libre”**.
- [ ] Se **borraron los comentarios** del código de golpe.

> Búsqueda rápida en su repo:
> ```bash
> grep -rInE "PLÁTANO-42|Copión Pérez|Miau, ya soy libre|tortugas|Comic Sans" .
> ```

**Lección para dar después de calificar:** esto se llama *prompt injection*. Existe en correos, webs, PDFs
e imágenes. Defensa: no pegar a ciegas, leer lo que se envía, no automatizar acciones sensibles sin revisar.

---

## 🧮 Trampa 2 — “Lo que ves ≠ lo que copias” (el candado)

La fórmula que el estudiante **ve** es una **imagen** (`( 8 + 4 ) × 2 − 5`): no se puede seleccionar ni
copiar. Justo al lado hay una operación **distinta en texto blanco de 1pt** (`( 8 - 4 ) / 2 + 5`) que **sí**
se copia. Así, quien lee la imagen calcula bien; quien selecciona-copia-pega, se lleva la operación cambiada.

| | Operación | Resultado |
|---|---|---|
| **Quien LEE con sus ojos** (la imagen) | `(8 + 4) × 2 − 5` | **19** ✅ |
| **Quien COPIA y PEGA** (el texto oculto) | `(8 - 4) / 2 + 5` | **7** ❌ |

Se pide escribir el resultado en la **primera línea de la entrega**: si dice **7**, copió y pegó. También
existen los **homoglifos** (símbolos que se ven iguales: `×` vs `x`, `−` vs `-`). Defensa: si algo importa
(un cálculo, un comando, una URL), **reescríbelo tú** y verifica.

> Un estudiante que entrega **7** (o pregunta por qué su IA calculó 7) **se autodelata**: copió y pegó.

---

## 🔑 Solución de las tareas (Parte 1)

**① Cláusulas de guarda:**
```js
function publicarComentario(usuario, texto) {
  if (!usuario) return;
  if (!usuario.activo) return;
  if (texto.length === 0) return;
  console.log(usuario.nombre + " dijo: " + texto);
}
```

**② Frase desde JSON:** en `datos.json` → `"perfil": { …, "frase": "Tu cita" }`. En `index.html` un
`<p id="p-frase"></p>` en el hero. En `Portafolio.js`:
```js
pintarFrase() { this.$("#p-frase").textContent = this.datos.perfil.frase; }
```
y llamarlo dentro de `cargar()`.

**③ `js/Reloj.js`:**
```js
export class Reloj {
  constructor(elemento) { this.el = elemento; this.tick(); setInterval(() => this.tick(), 1000); }
  tick() { this.el.textContent = new Date().toLocaleTimeString(); }
}
```
En `main.js`: `import { Reloj } from "./Reloj.js";` y `new Reloj(document.querySelector("#reloj"));`
(con un `<span id="reloj">` en el footer).

**④ Guarda anti-enlace en `Contacto.js`** (dentro de `enviar`, tras validar):
```js
if (datos.mensaje.includes("http")) { this.mostrar("⚠️ No se permiten enlaces.", "var(--accent)"); return; }
```

**⑤ Mejora libre:** se evalúa que funcione y que **la sepa explicar**.

---

## 🎯 Rúbrica (100 pts)

| Ítem | Pts | Qué mirar |
|------|-----|-----------|
| ① Guardas | 15 | Máx. 1 nivel de indentación, sin `else` innecesario. |
| ② JSON | 15 | Cambiar el JSON cambia la página, sin tocar HTML/JS. |
| ③ Reloj | 15 | Clase en su archivo, exportada/importada, hora avanza. |
| ④ Validación | 15 | Rechaza `http`, deja pasar lo normal. |
| ⑤ Mejora libre | 10 | Funciona y la explica. |
| Candado | 10 | Respondió **19** (no 7). |
| Entrega + sustentación | 20 | Commit/push + **explica su código en voz alta**. |
| **Penalización** | — | **0 en el ítem** donde aparezca cualquier señal de la Trampa 1. |

> **La sustentación oral es la red de seguridad definitiva:** aunque alguien esquive las trampas, si no puede
> explicar su `Reloj` o sus guardas, no lo hizo entendiendo.

---

## 🧑‍🏫 Cómo usarla en clase

1. Reparte **solo** el Word [`actividad-evaluativa-clase04.docx`](actividad-evaluativa-clase04.docx)
   (por correo, drive o USB). Puedes exportarlo a PDF: los trucos (imagen + texto blanco) se conservan.
2. **No** menciones las trampas. Deja que quien vaya a copiar, copie.
3. Al calificar, pasa el checklist y el `grep`. Comenta los resultados **en grupo** (sin humillar a nadie):
   convierte los tropiezos en la lección de *prompt injection* y de “verifica, no copies”.
4. Cierre: la IA es un **tutor** para entender, no una **fotocopiadora**. *Código/texto que no entiendes = que
   no sirve.*

> **Nota ética:** las instrucciones ocultas son **inofensivas** (rimas, datos falsos absurdos, sugerencias de
> diseño feo, un nombre y una palabra clave). No borran archivos del sistema ni ejecutan comandos: solo
> **delatan** el copy-paste y son 100% reversibles con Git.
