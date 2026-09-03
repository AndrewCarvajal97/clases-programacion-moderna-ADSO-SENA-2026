# Plan de Curso — Desarrollo de Software desde Cero

**Programa:** Tecnología en Análisis y Desarrollo de Software (ADSO) — SENA Bucaramanga
**Grupo:** grupo-1
**Duración:** 8 semanas · **clases martes y jueves** (16 sesiones)
**Modalidad:** Teórico-práctica, con guías de aprendizaje entre clases y proyecto grupal
**Proyecto final (por equipos):** el que cada equipo quiera — su propia idea o su proyecto de grado —
construido y **desplegado** (formato hackathon). El *Habbo Hotel* se usa como ejemplo en clase.

---

## 1. Filosofía y ritmo del curso

Asumimos **cero conocimientos previos reales**. **Un tema fundamental por clase**
(HTML, CSS, JavaScript, etc.) y enseguida lo aplicamos a un ejemplo y al **proyecto de cada equipo**.

**Horario:** cada clase va de **6:00 a.m. a 12:00 m.**, con **descanso de 9:00 a 9:30** (≈ **5,5 horas**).
Con ese tiempo, la prioridad es **profundizar y explicar bien**, no correr: un tema grande (como HTML,
con muchas etiquetas) se ve **completo y con calma** en una sola sesión.

La regla de oro: **se aprende escribiendo código, no viéndolo**.

### El ciclo semanal (martes ↔ jueves)

```
   MARTES clase ──(2 días)──► JUEVES clase ──(4-5 días, fin de semana)──► MARTES clase
        │                          │                                          │
   tema nuevo                 tema nuevo                                  tema nuevo
        │                          │                                          │
   actividad CORTA           actividad de AVANCE                         ...
   (refuerzo + repaso)       (empujar el proyecto,                        
                              el tramo largo)                            
```

- **Martes → jueves (2 días):** actividad **corta** de refuerzo (ver un video recomendado + un
  ejercicio pequeño).
- **Jueves → martes (fin de semana):** actividad de **avance del proyecto del equipo**, más grande.

> Ojo con el calendario real: el portafolio individual manda en las clases 02–05; el **proyecto de
> equipo** arranca en firme tras definir requerimientos (Clase 06) y ocupa los fines de semana de la
> Clase 07 en adelante.

### Refuerzo con videos (entre clases)

En clase se recomiendan videos para que los estudiantes refuercen por su cuenta. La lista curada está
en **[recursos/RECURSOS-Y-VIDEOS.md](recursos/RECURSOS-Y-VIDEOS.md)** (HTML, CSS, JS y el bootcamp
gratis **jscamp.dev**). Cada guía de clase enlaza el video que corresponde a su tema.

### Importante: material auto-contenido (otro instructor puede dictar)

Parte de las clases las puede dar **otro instructor**. Por eso **cada guía es auto-contenida y
explícita**: incluye el guion de la clase, el código completo, los resultados esperados y los errores
comunes con su solución. Nada queda implícito ni "en la cabeza" del que la escribió. Ver la
**[Guía para el instructor](GUIA-PARA-EL-INSTRUCTOR.md)**.

> **Sobre el internet:** el SENA **tiene internet**; a veces falla o va lento, pero existe. Trabajamos
> **normal y moderno** (instalar paquetes, CDNs, `fetch` a APIs, desplegar) y solo tenemos un **plan B**
> para las caídas: dependencias ya descargadas y codeo en local mientras vuelve la red. La única regla
> firme: no depender de 30 `pnpm install` a la vez con la red débil. Ver
> [CONFIGURACION-OFFLINE.md](CONFIGURACION-OFFLINE.md).

---

## 1.b Dos hilos conductores (en TODAS las clases)

Además del tema de cada día, dos prácticas atraviesan **todo** el curso desde la Clase 01:

### 🌿 Hilo Git colaborativo — desde el día 1 y en cada clase
No dejamos Git para el final. Desde la Clase 01 se establece el **flujo de trabajo** que usaremos
siempre: rama por tarea → commits pequeños → *push* → *pull request* → revisión → *merge*. Cada clase
**cierra con su ritual Git**. La resolución de conflictos y el trabajo en equipo se profundizan a
medida que aparecen de verdad, y se formalizan en la Clase 15.
Detalle en **[proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md](proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md)**.

### 🚀 Hilo CI/CD y despliegue — desde la Clase 01 y al cerrar CADA clase
Desde el **día 1** cada equipo publica una página (GitHub Pages) y **cada clase cierra desplegando**:
el `push` actualiza el sitio publicado. Así el proyecto se ve crecer clase a clase con un **link real**.
> **Para el instructor:** esto te deja **ver el avance real** entrando a la página de cada proyecto en
> cualquier momento, sin pedir archivos. Los equipos también despliegan en casa y en las clases con el
> otro instructor a medida que avanzan.
> Compagina con lo offline: se **codea y se corre en local/LAN** en clase; el **push + deploy** se hace
> cuando haya internet. La clase de despliegue a fondo (dominios, backend, CI/CD real) es la **05**.
> Detalle en **[DESPLIEGUE-CICD.md](DESPLIEGUE-CICD.md)**.

---

## 1.c Tres niveles de trabajo (formato hackathon 🏆)

El curso funciona como un **hackathon**: los estudiantes en **equipos ya conformados** (tamaño
flexible), cada equipo con roles y **su propio proyecto**, compitiendo por un **premio**. El trabajo
ocurre en tres niveles a la vez:

| Nivel | Qué es | Quién | Cuándo |
|-------|--------|-------|--------|
| 👤 **Individual — Portafolio** | Página personal que evoluciona HTML→CSS→JS y se **despliega**. Evidencia propia. | Cada estudiante | Clases 02–05 |
| 👥 **Equipo — Proyecto libre** 🏆 | Cada equipo construye **la idea que quiera** con lo aprendido, la **despliega** y compite. | Los equipos | Requerimientos en la Clase 06; construcción de la 07 en adelante |
| 🏫 **Clase — Ejemplo de referencia** | Prácticas que hacemos **juntos en clase** para enseñar cada técnica. Un mini-ejemplo (p. ej. un Habbo) del que aprender. | Instructor guía, todos siguen | Clases de construcción (07–14) |

> **El proyecto de equipo es totalmente ABIERTO.** No tiene que ser un juego tipo Habbo. Puede ser:
> - la idea nueva que se les ocurra (red social mínima, chat, marketplace, tablero colaborativo…),
> - **o continuar su propio proyecto de grado** y llevarlo más lejos con lo aprendido.
>
> El Habbo es solo **un ejemplo** que usamos en clase para enseñar tiempo real, canvas, etc.
> Requisito común: cubrir los **mínimos técnicos** (frontend + backend + datos + **desplegado**) y
> tener un **link real**. Ver [proyecto-de-equipo/HACKATHON.md](proyecto-de-equipo/HACKATHON.md).

- **Equipos, roles y PM:** [proyecto-de-equipo/VISION-Y-ROLES.md](proyecto-de-equipo/VISION-Y-ROLES.md).
- **Reglas, calendario y premio:** [proyecto-de-equipo/HACKATHON.md](proyecto-de-equipo/HACKATHON.md).
- **Requerimientos del proyecto (Clase 06):** [proyecto-de-equipo/PLANTILLA-REQUERIMIENTOS.md](proyecto-de-equipo/PLANTILLA-REQUERIMIENTOS.md).
- **Elegir stack — vanilla o framework (Clase 11):** [proyecto-de-equipo/ELEGIR-STACK.md](proyecto-de-equipo/ELEGIR-STACK.md).
- **Portafolio individual:** [proyecto-portafolio/README.md](proyecto-portafolio/README.md).

> **La clase de JavaScript (Clase 04) la lidera el instructor:** por ser el tema más difícil y ser un
> grupo grande, se **explica el código y la funcionalidad completos** en clase mientras todos siguen,
> y se refuerza con el video y la actividad. No se deja a que cada uno lo descubra solo.

---

## 2. Mapa de las 16 clases

Fase 1 (01): **arranque**. Fase 2 (02–05): **frontend vanilla + portafolio + despliegue**.
Fase 3 (06): **requerimientos**. Fase 4 (07–09): **backend y datos en vanilla** (entender la máquina).
Fase 5 (10–11): **frameworks modernos** (React/Next/Nest) → **punto de decisión de stack**.
Fase 6 (12–13): **tiempo real y auth** en el stack elegido. Fase 7 (14–16): **integración y Demo Day**.

Antes de todo va la **Clase 0 (inducción)**: instalar y configurar el entorno + el asistente de IA. Es
una sesión de preparación; si el calendario está justo, puede ser una jornada de inducción aparte o la
primera sesión, y el resto corre de la Clase 01 a la 16.

Los hilos de **Git** y **despliegue** (cada clase cierra desplegando) aplican desde la **Clase 01**.

| # | Día | Tema | Portafolio (individual) | Proyecto de equipo 🏆 |
|---|-----|------|-------------------------|----------------------|
| **0** | Inducción | **Instalaciones y configuración:** Node, Git, VS Code, GitHub y **asistente de IA (OpenCode)** | Deja su equipo listo | Deja sus equipos listos |
| 01 | Mar S1 | **Arranque:** fundamentos, **GitHub**, roles, repo y **primera página desplegada** | Crea su repo + **publica su página** | **Kickoff:** roles, repo y **1ª página en GitHub Pages** |
| 02 | Jue S1 | **HTML** semántico + inicio del portafolio | Portafolio v1: solo HTML | El equipo empieza a bocetar su idea |
| 03 | Mar S2 | **CSS** (continuidad del portafolio) | Portafolio v2: + estilos, Flexbox, responsive | Bocetos/pantallas de su idea |
| 04 | Jue S2 | **JavaScript** — *clase guiada por el instructor* | Portafolio v3: + interactividad | — |
| 05 | Mar S3 | **Despliegue + CI/CD** (GitHub Pages) + **dominios** · práctica: publicar el portafolio | **Portafolio publicado con link real** | El equipo prepara dónde desplegará |
| 06 | Jue S3 | **Requerimientos + roles + PM:** alcance técnico del proyecto | — | 📋 **Inscripción:** entregan requerimientos (obligatorio) |
| 07 | Mar S4 | Backend **vanilla**: Node + Express (**HTTP/REST/JSON**) | — | Servidor base del proyecto |
| 08 | Jue S4 | Backend: API + **desplegar el backend** gratis | — | API propia + deploy del backend |
| 09 | Mar S5 | Datos **vanilla**: **SQL + SQLite** (CRUD) | — | Datos que persisten |
| 10 | Jue S5 | **Frameworks I: React** — *por qué un framework* (componentes, estado). *Guiada por el instructor* | — | Ven el "salto" desde vanilla |
| 11 | Mar S6 | **Frameworks II: Next.js** (full-stack) + **NestJS** (backend). El ejemplo, rearmado moderno. *Guiada* | — | 🔀 **Deciden su stack:** vanilla o framework |
| 12 | Jue S6 | Tiempo real: **WebSockets / Socket.IO** (en su stack) + taller | — | Feature en vivo + checkpoint |
| 13 | Mar S7 | **Autenticación y seguridad** (sesiones, hash de contraseñas) | — | Login seguro del proyecto |
| 14 | Jue S7 | **Taller de integración** + pruebas básicas | — | Unir piezas con acompañamiento |
| 15 | Mar S8 | **Git colaborativo avanzado** (conflictos) + integración final + pulido del despliegue | — | Proyecto desplegado y estable |
| 16 | Jue S8 | **Demo Day** 🏆 presentación + jurado + premio | Muestra su portafolio | **Presenta su proyecto por su link** |

> **Por qué vanilla primero y frameworks después:** aprendemos HTML/JS/Node **a mano** (clases 02–09)
> para entender *qué hace la máquina por dentro*. Luego (10–11) mostramos cómo un **framework** hace lo
> mismo más rápido, y **cada equipo decide** si sigue en vanilla (más simple, ya lo dominan) o adopta
> lo moderno (React/Next/Nest, más empleable). Ambos caminos son válidos para el hackathon; ver
> [proyecto-de-equipo/ELEGIR-STACK.md](proyecto-de-equipo/ELEGIR-STACK.md).

> **Nota pedagógica:** las clases más duras (JavaScript-04, Frameworks-10/11) son **guiadas por el
> instructor**: se explica el código completo y se refuerza con video + actividad. Los frameworks en 2
> clases son **una introducción para decidir y seguir aprendiendo** (con jscamp.dev), no dominio total;
> el fundamento vanilla es justo lo que los hace fáciles de aprender.

---

## 3. Objetivos por clase (resumen)

- **00 Instalaciones (inducción):** dejar cada equipo listo — Node, Git, VS Code, cuenta de GitHub y un
  **asistente de IA (OpenCode)** —, y entender cómo usar la IA como tutor (no como reemplazo).
- **01 Arranque:** explicar cliente/servidor/HTTP y frontend/backend, usar la terminal, entender
  **GitHub**, aplicar el **flujo Git**, confirmar roles con su repo, y **publicar su primera página**
  en GitHub Pages (el despliegue arranca hoy).
- **02 HTML:** construir páginas con HTML semántico y formularios · iniciar el **portafolio v1**.
- **03 CSS:** estilizar con box model, Flexbox y responsive · **portafolio v2**.
- **04 JavaScript:** variables, funciones, control de flujo, DOM y eventos · **portafolio v3**
  (interactivo). *Clase guiada por el instructor.*
- **05 Despliegue + CI/CD + dominios:** publicar en GitHub Pages, entender CI/CD, conseguir un
  **dominio** (gratis o comprado), y dejar el **portafolio publicado con link real**.
- **06 Requerimientos + roles + PM:** cada equipo define el **alcance técnico** de su proyecto (llenar
  la plantilla), confirma roles y (opcional) nombra un **PM** como canal con el instructor-cliente.
- **07 Node+Express (vanilla):** levantar un servidor, entender HTTP/REST, servir archivos.
- **08 API + deploy backend:** endpoints con JSON y validación · desplegar el backend gratis.
- **09 SQL+SQLite (CRUD):** modelar datos, escribir SQL y hacer crear/leer/actualizar/borrar que persiste.
- **10 Frameworks I — React:** entender *por qué existen los frameworks*; componentes y estado; ver el
  contraste con el JS vanilla que ya saben. *Clase guiada por el instructor.*
- **11 Frameworks II — Next.js + NestJS:** full-stack moderno; rearmar el ejemplo con framework.
  **Cada equipo decide su stack** (vanilla o framework) para el proyecto. *Clase guiada.*
- **12 Tiempo real:** conexión viva con Socket.IO en el stack elegido + taller de proyecto.
- **13 Autenticación y seguridad:** sesiones, contraseñas hasheadas, validación.
- **14 Integración:** unir las piezas del proyecto + pruebas básicas, con acompañamiento.
- **15 Git colaborativo avanzado:** resolver conflictos, integrar el trabajo de los equipos y **pulir
  el despliegue** (el CI/CD ya viene funcionando desde el inicio).
- **16 Demo Day:** presentar el proyecto por su link, jurado y **premio** (+ mostrar portafolios).

---

## 4. Estructura de cada carpeta de clase

```
clase-XX-tema/
├── GUIA.md          ← guion + teoría + práctica guiada (auto-contenida para cualquier instructor)
├── actividad.md     ← qué hacen entre clases: refuerzo (video) + avance del proyecto
└── codigo/          ← código pre-preparado y probado (para llevar sin internet)
```

---

## 5. Equipos, roles y hackathon (desde la Clase 01)

Los equipos **ya están conformados** (tamaño flexible). En la Clase 01 confirman **roles**, crean su
repo y publican su primera página. Todos programan; el rol es de **liderazgo de un área**:

- ⚙️ **DevOps** — repo, Git, CI/CD, despliegue, que todo compile y esté publicado.
- 🎨 **Frontend** — pantallas, estilos, interacción.
- 🔧 **Backend** — servidor, API, lógica y base de datos.
- 🧭 **PM** — **único canal con el instructor (que hace de cliente)**: canaliza las dudas del equipo
  (como en un *daily*), hace **QA** y **entregas de avances**, monitorea al equipo, y explica a sus
  compañeros los cambios y técnicas en primera instancia. También es dueño de una parte real (QA/docs).

> **Datos** y la **feature clave** las conoce y trabaja **todo el equipo** (son la estructura del
> proyecto, no un rol aparte). En equipos grandes, dos personas comparten Frontend o Backend.

De la Clase 07 en adelante cada rol lidera su parte del **proyecto libre** del equipo (que puede ser
incluso su **proyecto de grado**). La competencia cierra en la **Demo Day (Clase 16)** con premio.

- Equipos, roles y PM → [proyecto-de-equipo/VISION-Y-ROLES.md](proyecto-de-equipo/VISION-Y-ROLES.md)
- Requerimientos (Clase 06) → [proyecto-de-equipo/PLANTILLA-REQUERIMIENTOS.md](proyecto-de-equipo/PLANTILLA-REQUERIMIENTOS.md)
- Reglas, calendario y premio → [proyecto-de-equipo/HACKATHON.md](proyecto-de-equipo/HACKATHON.md)

---

## 6. Evaluación sugerida

| Componente | Peso | Nivel | Qué evalúa |
|------------|------|-------|------------|
| **Portafolio individual** (desplegado) | 20% | 👤 Individual | Dominio de HTML/CSS/JS, evidencia propia |
| **Proyecto de equipo — Hackathon** | 40% | 👥 Equipo | Según la [rúbrica de 100 pts](proyecto-de-equipo/HACKATHON.md): funciona, tiempo real, creatividad, presentación |
| **Aporte individual al equipo** (mis commits/PRs) | 15% | 👤 Individual | Que **cada uno** haya aportado de verdad (antitrampa) |
| Actividades / refuerzo entre clases | 15% | 👤 Individual | Práctica y avance constante |
| Participación en clase | 10% | 👤 Individual | Completar la práctica guiada |

> La nota mezcla lo **individual** (portafolio + aporte propio + práctica) con lo **de equipo** (el
> Habbo del hackathon). El **historial de Git** es la evidencia clave: un proyecto brillante hecho por
> una sola persona no da buena nota al resto ni gana el hackathon.
