# Clase 01 — Fundamentos y Entorno de Desarrollo

> **Meta de la clase:** que cada estudiante entienda *cómo funciona la web*, haga su **primer
> repositorio con Git**, y que cada equipo confirme sus **roles**, cree su **repo** y publique su
> **primera página** (el despliegue arranca hoy).

**Duración estimada:** 1 sesión larga (o repartir el kickoff de equipos a la siguiente si falta tiempo).
**Requisitos previos:** haber completado la **[Clase 0](../clase-00-instalaciones-y-configuracion/GUIA.md)**
(Node, Git, VS Code y el asistente de IA ya instalados).

---

## Índice

1. [¿Qué es programar y qué es el software?](#1-qué-es-programar)
2. [¿Cómo funciona la web? Cliente, servidor y HTTP](#2-cómo-funciona-la-web)
3. [Frontend vs Backend](#3-frontend-vs-backend)
4. [La terminal: hablarle a la máquina con texto](#4-la-terminal)
5. [Git y repositorios: la máquina del tiempo del código](#5-git-y-repositorios)
6. [Buenas prácticas desde el día 1](#6-buenas-prácticas)
7. [Práctica guiada: tu primer repositorio](#7-práctica-guiada)
8. [Kickoff del Hackathon: equipos, roles y GitHub](#8-kickoff)
9. [Cierre y actividad](#9-cierre)

---

## 1. ¿Qué es programar? <a name="1-qué-es-programar"></a>

> **Explica (instructor):** usa una analogía. Programar es **escribir instrucciones muy precisas**
> para una máquina que es rapidísima pero **literal**: hace exactamente lo que dices, no lo que
> quieres decir. Una receta de cocina, pero donde si dices "agrega sal" sin decir cuánta, se rompe.

Un **programa** es una lista de instrucciones. El **software** es el conjunto de programas que hacen
algo útil: un navegador, WhatsApp, un videojuego... o el proyecto que vas a construir en este curso.

Los computadores no entienden español ni "haz un chat bonito". Entienden **lenguajes de programación**.
Nosotros vamos a usar principalmente **JavaScript**, el lenguaje de la web, para construir tu portafolio
y el proyecto de tu equipo.

**Idea clave:** no hay que memorizar todo. Programar es más *resolver problemas* y *buscar bien* que
saberse las cosas de memoria. Los mejores programadores consultan documentación todo el tiempo.

---

## 2. ¿Cómo funciona la web? <a name="2-cómo-funciona-la-web"></a>

Cuando abres una página, pasa esto:

```
  TÚ (Cliente)                                    INTERNET / RED                    SERVIDOR
 ┌───────────┐        1. "Dame la página de..."   ┌──────┐      2. Recibe pedido   ┌──────────┐
 │ Navegador │  ───────────  PETICIÓN  ─────────► │      │  ───────────────────►  │ Computador│
 │ (Chrome)  │                                     │      │                        │ encendido │
 │           │  ◄─────────  RESPUESTA  ─────────── │      │  ◄───────────────────  │ 24/7      │
 └───────────┘        4. Recibe HTML/CSS/JS        └──────┘      3. Envía la página └──────────┘
      5. El navegador dibuja la página en pantalla
```

- **Cliente:** el programa que *pide* (tu navegador).
- **Servidor:** un computador encendido que *responde* con páginas y datos.
- **Petición y respuesta:** el ida y vuelta se hace con un idioma común llamado **HTTP**.

### HTTP en una frase

**HTTP** (HyperText Transfer Protocol) es el **idioma/protocolo** que usan cliente y servidor para
entenderse. Un *protocolo* es simplemente un **conjunto de reglas acordadas** para comunicarse (como
las reglas de cortesía de una llamada: "aló", "chao").

Con HTTP, el cliente **pide**, el servidor **responde**... y la conexión se **cierra**. Para lo
siguiente, otra petición. Métodos comunes: `GET` (pedir) y `POST` (enviar). Lo profundizamos en el
backend (Clase 07).

> **Analogía:** el cliente es un comensal, el servidor es la cocina, y HTTP es el idioma del mesero.
> El comensal pide (GET), la cocina responde con el plato (la página).

### Panorama: HTTP, WebSocket y SSE

> **Explica:** hay más de un protocolo. Hoy solo damos un **panorama** (que conozcan el vocabulario);
> los usaremos de verdad más adelante. La diferencia está en **quién habla y cuándo**.

| Protocolo | Sentido | Conexión | Para qué | Analogía |
|-----------|---------|----------|----------|----------|
| **HTTP** | ida y vuelta (por petición) | se abre y cierra | páginas, APIs | una carta 📩 |
| **SSE** (Server-Sent Events) | servidor → cliente (flujo) | queda abierta, 1 vía | notificaciones, feeds en vivo | la radio 📻 |
| **WebSocket** | bidireccional | queda abierta, 2 vías | chat, juegos, colaboración en vivo | una llamada 📞 |

- **WebSocket:** conexión **viva** en ambos sentidos; el servidor puede enviar sin que el cliente pida.
  Es el corazón del **tiempo real** (lo usaremos con Socket.IO).
- **SSE:** el servidor **transmite** un flujo de mensajes y el cliente solo **escucha** (una sola vía).
  Útil para avisos y actualizaciones en vivo, más simple que WebSocket.

---

## 3. Frontend vs Backend <a name="3-frontend-vs-backend"></a>

Todo software web tiene dos mitades:

| | **Frontend** | **Backend** |
|--|-------------|-------------|
| Dónde vive | En el navegador del usuario | En el servidor |
| Qué hace | Lo que **se ve y se toca**: botones, colores, la sala | La **lógica y los datos**: cuentas, quién está conectado |
| Lenguajes | HTML, CSS, JavaScript | JavaScript (Node.js), base de datos |
| Analogía (restaurante) | El **salón**: mesas, decoración, menú | La **cocina**: donde se prepara y guarda todo |
| En Habbo | La sala dibujada, el avatar, el chat en pantalla | El servidor que sincroniza a todos y guarda las cuentas |

> **Explica:** el frontend es "la cara", el backend es "el cerebro y la memoria". Ninguno sirve solo.
> Un frontend sin backend es un maniquí bonito; un backend sin frontend es un cerebro en un frasco.

En este curso:
- Clases 2–5 → **Frontend** (HTML, CSS, JS) + despliegue.
- Clases 7–9 → **Backend** y datos **a mano** (vanilla).
- Clases 10–11 → **frameworks modernos** (React/Next/Nest) y cada equipo elige su stack.
- Clases 12–13 → los **unimos en tiempo real** y con autenticación.

---

## 4. La terminal <a name="4-la-terminal"></a>

> **Explica:** la terminal asusta al principio pero es solo otra forma de darle órdenes al computador,
> escribiendo en vez de haciendo clic. Es más rápida y es como trabajan los desarrolladores de verdad.

En Windows usaremos **PowerShell** (o la terminal integrada de VS Code).

### Comandos mínimos que necesitas esta semana

| Comando | Qué hace | Ejemplo |
|---------|----------|---------|
| `pwd` | Muestra en qué carpeta estás ("dónde estoy") | `pwd` |
| `ls` | Lista los archivos de la carpeta actual | `ls` |
| `cd carpeta` | Entra a una carpeta | `cd Escritorio` |
| `cd ..` | Sube un nivel (a la carpeta de arriba) | `cd ..` |
| `mkdir nombre` | Crea una carpeta nueva | `mkdir mi-portafolio` |
| `ni archivo` | Crea un archivo vacío (PowerShell) | `ni index.html` |
| `del archivo` | Borra un archivo | `del viejo.txt` |
| `cls` | Limpia la pantalla | `cls` |
| `code .` | Abre VS Code en la carpeta actual | `code .` |

**Atajos que ahorran tiempo:** **Tab** autocompleta nombres de archivos/carpetas · **↑ / ↓** repiten
comandos anteriores · **Ctrl + C** cancela lo que se está ejecutando.

> **Práctica rápida (5 min):** cada estudiante abre PowerShell y navega hasta el Escritorio, crea una
> carpeta `pruebas`, entra en ella y confirma con `pwd`. Sin tocar el mouse.
>
> **Ojo:** en Windows usamos PowerShell; algunos comandos cambian frente a Linux/Mac (ahí sería
> `touch`, `rm`, `clear`).

---

## 5. Git y repositorios <a name="5-git-y-repositorios"></a>

> **Explica:** imagina escribir un trabajo y guardar `trabajo_final.doc`, luego
> `trabajo_final_2.doc`, `trabajo_final_BUENO.doc`, `trabajo_final_ESTE_SI.doc`... un caos.
> **Git** resuelve eso: guarda la historia completa de tu proyecto y te deja volver a cualquier punto.

### Conceptos

- **Repositorio (repo):** una carpeta que Git está vigilando. Guarda **toda la historia** de cambios.
- **Commit:** una "foto" del proyecto en un momento, con un mensaje que dice qué cambiaste.
  Es como un punto de guardado en un videojuego.
- **Rama (branch):** una línea de trabajo paralela. Permite que varios trabajen sin pisarse.
  **La empezamos a usar desde hoy** y en todas las clases: una rama por tarea.
- **Pull Request (PR):** pedir "quiero unir mi rama, ¿la revisan?". Es cómo se colabora sin romper
  lo de los demás. Lo usaremos apenas subamos el repo a GitHub.
- **GitHub:** una web donde se guardan repos en la nube para compartir y para desplegar. Git es la
  herramienta; GitHub es el lugar donde viven los repos. *(El `push`/PR necesita internet; Git en sí
  funciona 100% local sin internet.)*

> **Explica:** en este curso Git **no es un tema del final**, es cómo trabajamos desde el día 1. Hoy
> aprendemos el ciclo básico; en cada clase sumamos una pieza (ramas, luego PRs, luego colaboración).
> El flujo completo está en
> [proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md](../proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md).

### El ciclo básico de Git (memorízalo)

```
   Editas archivos          git add            git commit
 ┌──────────────┐   ───►  ┌───────────┐  ───► ┌──────────────┐
 │  Working dir │         │  Staging  │       │  Historial   │
 │ (tus cambios)│         │ (elegidos │       │ (foto guardada│
 │              │         │ para foto)│       │  para siempre)│
 └──────────────┘         └───────────┘       └──────────────┘
```

1. **Editas** archivos (todavía Git no guarda nada permanente).
2. `git add` → eliges **qué** cambios entran en la próxima foto.
3. `git commit` → tomas la **foto** con un mensaje.

### Comandos de Git de esta semana

| Comando | Qué hace |
|---------|----------|
| `git init` | Convierte la carpeta actual en un repositorio |
| `git status` | Muestra qué cambió y qué falta por guardar |
| `git add .` | Prepara **todos** los cambios para el commit |
| `git add archivo.txt` | Prepara solo ese archivo |
| `git commit -m "mensaje"` | Guarda la foto con un mensaje |
| `git log` | Muestra la historia de commits |
| `git log --oneline` | La historia resumida, un commit por línea |

### Configuración inicial (una vez por equipo)

Antes del primer commit, Git necesita saber quién eres:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
```

### Git (local) vs GitHub (en la nube)

> **Explica:** es la confusión más común. **Git** y **GitHub** NO son lo mismo.

- **Git** es la **herramienta** que corre en **tu máquina** y guarda la historia. **Funciona sin internet.**
- **GitHub** es un **servicio en la nube** que **aloja una copia** de tu repositorio (el "remoto") para
  compartirlo, colaborar y desplegar.

> 📓 Git es tu **cuaderno**; GitHub es la **copia compartida en la nube**.
> El puente entre los dos: `push` (subir tus commits) y `pull` (bajar los de otros).

### Estrategia de ramas (cómo trabajan los equipos)

En proyectos reales no se trabaja directo en `main`. Se usan varias ramas según su propósito:

```
 feature/*  ──►  development  ──►  staging  ──►  main
 (una tarea)     (se integra)     (se prueba)   (producción)
```

- **`feature/*`** — una rama por cada tarea nueva.
- **`development`** — donde el equipo **junta** el trabajo de todos.
- **`staging`** — **preproducción**: pruebas finales antes de publicar.
- **`main`** — lo **estable**, lo que ven los usuarios (el "release").

> Los nombres varían entre equipos (Git Flow, GitHub Flow…). Hoy usamos algo simple (`main` + ramas de
> tarea); esta es la **meta profesional** hacia la que vamos.

### Crear el repo en GitHub y vincular el local

1. En GitHub: botón **New repository** (crea el repo vacío en la nube).
2. En tu máquina, vincula tu repo local con ese remoto y súbelo:

```bash
git remote add origin git@github.com:usuario/repo.git   # "origin" = apodo del remoto
git branch -M main                                       # nombra la rama principal
git push -u origin main                                  # sube y enlaza local ↔ nube
```

### ¿Cómo te conectas a GitHub? (autenticación)

| Forma | Cómo | Cuándo |
|-------|------|--------|
| **gh** (GitHub CLI) | `gh auth login` y luego `gh repo create` | La más fácil para empezar ✅ |
| **SSH** | `ssh-keygen -t ed25519 -C "correo"` y pegar la llave pública en GitHub | Cómodo a largo plazo |
| **HTTPS + token** | Usuario + un *token personal* (PAT) como contraseña | Alternativa sin SSH |

> Recomendado para principiantes: **`gh`** (se configura una vez y ya). Es un tema para hacer **con
> internet**, así que puede quedar como parte de la actividad.

### Conectarte por SSH — paso a paso (para que cada uno lo haga)

1. **Crea tu llave** (una sola vez). Presiona **Enter** en todo (sin contraseña está bien para empezar):
   ```bash
   ssh-keygen -t ed25519 -C "tu-correo"
   ```
2. **Copia la llave PÚBLICA** (empieza con `ssh-ed25519`):
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
3. **Pégala en GitHub:** Settings → **SSH and GPG keys** → **New SSH key** → pega y guarda.
4. **Prueba la conexión:**
   ```bash
   ssh -T git@github.com
   ```
   Debe responder: *"Hi usuario! You've successfully authenticated…"*.

> Desde ahí usas URLs `git@github.com:usuario/repo.git` **sin escribir contraseña** cada vez.

### Comandos de Git más usados (chuleta)

| Día a día | Ramas | Con la nube | Deshacer |
|-----------|-------|-------------|----------|
| `git status` | `git branch` | `git clone url` | `git diff` |
| `git add .` | `git switch -c rama` | `git pull` | `git restore archivo` |
| `git commit -m ""` | `git switch main` | `git push` | `git log` |
| `git log --oneline` | `git merge rama` | | |

### ¿Qué es GitHub Actions? (un vistazo)

**GitHub Actions** es un **robot** dentro de GitHub que ejecuta tareas **solas** cuando pasa algo (por
ejemplo, un `push`): probar el código y **desplegarlo**. Eso es **CI/CD**. Se configura con un archivo
`.github/workflows/*.yml`. No hace falta dominarlo hoy; lo veremos a fondo más adelante.

---

## 6. Buenas prácticas desde el día 1 <a name="6-buenas-prácticas"></a>

Empezamos con buenos hábitos para no sufrir después:

1. **Nombres claros y sin espacios ni tildes** en archivos y carpetas.
   `sala-principal.js` ✅ · `Sala Principal (final).js` ❌
2. **Un `README.md` en cada proyecto** que diga qué es y cómo correrlo.
3. **Commits pequeños y frecuentes** con mensajes que digan *qué* hiciste.
   `git commit -m "Agrega pantalla de login"` ✅ · `git commit -m "cambios"` ❌
4. **`.gitignore`**: le dice a Git qué NO guardar (archivos pesados o generados, como `node_modules/`).
5. **Sangría (indentación) consistente**: el código alineado se lee; el desalineado esconde errores.
6. **Comenta el *por qué*, no el *qué*.** El código ya dice qué hace; el comentario explica la razón.

> Estas prácticas se **evalúan** vía el historial de Git durante todo el curso (ver PLAN-DE-CURSO.md).

---

## 7. Práctica guiada: tu primer repositorio <a name="7-práctica-guiada"></a>

Vamos a crear un repositorio y hacer nuestros primeros commits.
**Todos siguen paso a paso.** Aquí cada quien practica en su máquina; el repo del equipo lo creamos
en la sección 8.

### Paso 1 — Verificar el entorno (instalado en la Clase 0)

Abre la terminal y confirma que todo está listo:

```bash
node --version
git --version
```

Si ambos responden con un número, ¡listo! Si no, repasa la
[Clase 0](../clase-00-instalaciones-y-configuracion/GUIA.md).

### Paso 2 — Crear la carpeta del proyecto

Creamos el repositorio de tu **portafolio** (lo empezaremos a llenar con HTML en la Clase 02):

```bash
cd Escritorio
mkdir mi-portafolio
cd mi-portafolio
```

### Paso 3 — Convertirla en repositorio

```bash
git init
```

Deberías ver: `Initialized empty Git repository in .../mi-portafolio/.git/`

### Paso 4 — Crear los primeros archivos

Crea un `README.md` (en VS Code: `code .` y luego crea el archivo). Contenido de ejemplo:

```markdown
# Mi Portafolio

Portafolio personal hecho en el curso de ADSO — SENA Bucaramanga.

## Autor
Tu Nombre

## Estado
En construcción 🚧
```

Crea también un archivo `.gitignore` con este contenido (para no versionar dependencias pesadas
que agregaremos más adelante):

```
node_modules/
*.log
.DS_Store
```

> En la carpeta `codigo/` de esta semana tienes estos dos archivos listos como plantilla, por si
> quieres copiarlos: [`README.md`](codigo/README.md) y [`.gitignore`](codigo/.gitignore.txt).

### Paso 5 — Ver el estado

```bash
git status
```

Verás `README.md` y `.gitignore` en rojo (aún no guardados).

### Paso 6 — Primer commit

```bash
git add .
git commit -m "Primer commit: estructura inicial del proyecto"
```

### Paso 7 — Ver la historia

```bash
git log --oneline
```

Deberías ver tu commit. **¡Felicitaciones, ya tienes un repositorio con historia!**

### Paso 8 — Un segundo commit (practicar el ciclo)

Edita el `README.md` (agrega tu materia o una línea más), guarda, y repite:

```bash
git add .
git commit -m "Actualiza README con más información"
git log --oneline
```

Ahora tienes **dos** puntos de guardado. Puedes volver a cualquiera cuando quieras.

### Paso 9 — Probar una rama (nuestro flujo de aquí en adelante)

Desde hoy trabajaremos en **ramas**, no directo sobre `main`. Practiquemos el concepto:

```bash
git checkout -b prueba-rama     # crea una rama y te cambia a ella
```

Edita el `README.md` (agrega una línea), y haz un commit en esta rama:

```bash
git add .
git commit -m "Prueba de trabajo en una rama"
```

Ahora vuelve a `main` y une el cambio:

```bash
git checkout main               # regresas a la rama principal
git merge prueba-rama           # traes lo que hiciste en la rama
git log --oneline
```

> **Resultado esperado:** tu cambio aparece en `main` después del *merge*. Acabas de hacer, en
> pequeño, lo que haremos en equipo todo el curso: trabajar en una rama y **unirla a `main`**.
> Cuando subamos el repo a GitHub (con internet), en vez de `merge` local haremos un **Pull Request**.

> **Errores comunes:**
> - `did not match any file(s) known to git` al hacer `checkout` → escribiste mal el nombre de la rama.
> - "necesito guardar antes de cambiar de rama" → haz `commit` de lo que tengas y vuelve a intentar.

---

## 8. Kickoff del Hackathon: equipos, roles y GitHub <a name="8-kickoff"></a>

> **Explica:** el curso es un **hackathon** 🏆. En equipos van a usar lo que aprendan para construir
> **el proyecto que quieran** (una idea nueva o incluso continuar su **proyecto de grado**), y al final
> hay **premio al mejor**. En clase construimos ejemplos para aprender cada técnica, pero el proyecto de
> cada equipo es suyo. Detalles en
> [proyecto-de-equipo/HACKATHON.md](../proyecto-de-equipo/HACKATHON.md) y
> [proyecto-de-equipo/VISION-Y-ROLES.md](../proyecto-de-equipo/VISION-Y-ROLES.md).

### 8.1. ¿Qué es GitHub? (en 2 minutos)
Git guarda la historia **en tu máquina**. **GitHub** es una web donde ese repositorio vive **en la
nube** para que el equipo lo comparta y trabaje junto. Es como un Google Drive, pero para código y con
superpoderes: ramas, pull requests y **despliegue automático** (GitHub Pages).

> El `push`/pull request necesita internet, así que esta parte se hace **donde haya buena conexión**
> (casa o la conexión del instructor). En el aula se trabaja local; a GitHub se sube después.

### 8.2. Confirmar el equipo y los roles (≈5 min)
Los equipos **ya están conformados**. Hoy solo:
- Se sientan juntos y confirman **quién tiene cada rol** (todos programan; el rol lidera un área):

| Rol | Responsable de |
|-----|----------------|
| ⚙️ **DevOps** | El repo, Git, CI/CD y **despliegue**, que todo esté publicado |
| 🎨 **Frontend** | Pantallas, estilos, interacción |
| 🔧 **Backend** | Servidor, API, lógica y base de datos |
| 🧭 **PM** | Único canal con el instructor (que hace de *cliente*): canaliza dudas, QA, entregas, y explica al equipo. También dueño de una parte (QA/docs) |

> **Datos y la feature clave son de TODO el equipo**, no un rol aparte. En equipos grandes, dos
> personas comparten Frontend o Backend. Detalle en
> [proyecto-de-equipo/VISION-Y-ROLES.md](../proyecto-de-equipo/VISION-Y-ROLES.md).

### 8.3. Nombre e idea del proyecto (≈5 min)
Cada equipo confirma un **nombre** y su **idea** de proyecto (idea nueva o su proyecto de grado). El
alcance formal se define en la **Clase 06** (requerimientos = inscripción al premio).

### 8.4. Crear el repo del equipo (lo hace DevOps)
El rol **DevOps** crea el repositorio del equipo en GitHub (cuando haya internet) y agrega a sus
compañeros como colaboradores. Ese será **el hogar del proyecto** todo el curso.

### 8.5. ¡Desplegar la primera página! (el despliegue arranca hoy) 🚀
Para que desde el día 1 exista un **link real** que crece con el proyecto, cada equipo publica una
página con **GitHub Pages**:

1. En el repo del equipo, crea un archivo `index.html` con algo mínimo:
   ```html
   <h1>Proyecto [nombre del equipo]</h1>
   <p>¡Aquí vamos a construir nuestro proyecto! 🚧</p>
   ```
2. `git add . && git commit -m "Primera página del proyecto"` y `push`.
3. En GitHub: **Settings → Pages →** elegir la rama `main` y guardar.
4. En un momento, la página queda publicada en una URL como
   `https://usuario.github.io/nombre-del-repo`.

> **Resultado esperado:** cada equipo tiene un **link público** que hoy dice casi nada, pero que va a
> ir mostrando el proyecto crecer. **De aquí en adelante, cada clase cierra desplegando**, y el
> instructor puede ver el avance real entrando a ese link.

> **Práctica:** el DevOps registra en un `equipo.md` del repo: nombre del equipo, idea, roles y el
> **link de la página publicada**.

---

## 9. Cierre y actividad <a name="9-cierre"></a>

### Lo que dominas al terminar la clase
- [x] Explico qué es cliente, servidor y HTTP con mis palabras.
- [x] Distingo frontend de backend.
- [x] Me muevo por carpetas en la terminal.
- [x] Creo un repositorio y hago commits (y probé una rama).
- [x] Sé qué es GitHub, estoy en un equipo con un rol, y mi equipo tiene su **página desplegada**.

### Actividad entre clases
Está en [actividad.md](actividad.md). Resuélvela antes de la próxima sesión: refuerza terminal + Git y
te deja listo para empezar con HTML en la Clase 02.

### Adelanto de la Clase 02
Vamos a aprender **HTML** y a empezar tu **portafolio** (solo estructura, sin estilos todavía). En
paralelo, tu equipo empieza a bocetar su proyecto.
