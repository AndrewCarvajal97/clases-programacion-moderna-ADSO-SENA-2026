# Clase 0 — Instalaciones y Configuración

> **Meta de la clase:** dejar cada máquina **lista para programar** y con las **herramientas modernas**
> instaladas: Node.js, Git, VS Code, cuenta de GitHub y un **asistente de IA de programación**
> (OpenCode). Al terminar, todos pueden escribir, correr y versionar código, y tienen un ayudante de IA.

**Duración estimada:** 1 sesión (sesión de inducción, antes de la Clase 01).
**Requisitos previos:** ninguno.
**Presentación para proyectar:** [presentacion.html](presentacion.html)
**Para el instructor:** prepara el aula con [CONFIGURACION-OFFLINE.md](../CONFIGURACION-OFFLINE.md)
(instaladores y dependencias en USB). Lo que **más internet necesita** (crear cuenta de GitHub, bajar el
modelo de IA) conviene hacerlo donde haya buena red o dejarlo pre-instalado.

---

## Índice
1. [¿Por qué estas herramientas?](#1-por-qué)
2. [Node.js](#2-node)
3. [Git](#3-git)
4. [Visual Studio Code](#4-vscode)
5. [Cuenta de GitHub](#5-github)
6. [Asistente de IA de programación (OpenCode)](#6-ia)
7. [Cómo usar la IA sin dejar de aprender](#7-uso-ia)
8. [Checklist final](#8-checklist)

---

## 1. ¿Por qué estas herramientas? <a name="1-por-qué"></a>

> **Explica:** un desarrollador moderno usa siempre el mismo kit. Hoy lo instalamos de una vez para no
> perder tiempo en las próximas clases.

| Herramienta | Para qué |
|-------------|----------|
| **Node.js** | Ejecutar JavaScript fuera del navegador (y usar `npm`) |
| **Git** | Guardar la historia del código (control de versiones) |
| **VS Code** | El editor donde escribimos el código |
| **GitHub** | Guardar los repos en la nube y trabajar en equipo |
| **Asistente de IA** | Un ayudante que explica, sugiere y acelera (como se trabaja hoy) |

---

## 2. Node.js <a name="2-node"></a>

Instala **Node.js LTS** (desde el instalador del USB, o de `nodejs.org` si hay internet).

**Verifica** en la terminal (PowerShell):
```bash
node --version
npm --version
```
> **Resultado esperado:** ambos responden un número (ej. `v20.x` y `10.x`).
> **Error común:** "no se reconoce node" → cierra y abre la terminal, o reinicia; si sigue, revisa que
> Node quedó en el `PATH` (o usa la versión portable).

### 2.1. Gestores de paquetes: por qué usamos pnpm

Todos (npm, pnpm, yarn, bun) instalan las librerías del proyecto. Se diferencian en velocidad, disco y
seguridad:

| Gestor | Nota |
|--------|------|
| **npm** | Viene con Node. Confiable, pero más lento y gasta más disco. |
| **pnpm** ⭐ | **Rápido**, ahorra disco (una sola copia) y **estricto/seguro**. **Lo usamos.** |
| **yarn** | Alternativa popular, similar en la práctica. |
| **bun** | Muy rápido y nuevo; también es un runtime. Aún con detalles de compatibilidad. |

Activa **pnpm** con Corepack (ya viene con Node):

```bash
corepack enable pnpm
pnpm --version
```

> A partir de aquí, en el curso instalamos con `pnpm install` / `pnpm add`, no con `npm`.

### 2.2. Varias versiones de Node… ¡con el mismo pnpm!

> **Explica:** distintos proyectos piden **distintas versiones** de Node (uno la 18, otro la 20). Antes
> se usaba una herramienta aparte (**nvm**). Hoy **pnpm ya administra Node por ti**: el mismo gestor
> instala y cambia la versión. **Un solo tool para todo.**

```bash
pnpm env use --global lts   # instala y ACTIVA la última LTS
pnpm env use --global 20    # cambiar a Node 20
pnpm env add --global 18    # instalar la 18 sin activarla
pnpm env list               # ver las que tienes  (--remote = las disponibles)
```

> 🆕 **Forma más nueva:** `pnpm env` se está reemplazando por `pnpm runtime`
> (equivalente: `pnpm runtime set node lts -g`). Ambas funcionan; usa la que tu versión de pnpm soporte.
>
> ⚠️ Para que pnpm pueda **administrar** Node conviene instalarlo **standalone** (con el script oficial
> de `pnpm.io`), no atado a un Node. **Alternativa:** si prefieres, aún puedes usar **nvm** (en Windows,
> `nvm-windows` de coreybutler) — pero con pnpm ya no hace falta.

---

## 3. Git <a name="3-git"></a>

Instala **Git** (del USB o `git-scm.com`). Luego **configura tu identidad** (una vez por equipo):

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
```

**Verifica:**
```bash
git --version
```
> **Resultado esperado:** responde un número de versión.

---

## 4. Visual Studio Code <a name="4-vscode"></a>

Instala **VS Code** (del USB o `code.visualstudio.com`). Ábrelo y, si hay conexión, instala estas
extensiones útiles (o cópialas del USB como `.vsix`):

- **Live Server** — ver tu HTML en el navegador con recarga automática.
- **Prettier** — ordenar el código automáticamente.
- **Spanish Language Pack** (opcional) — VS Code en español.

> **Tip:** desde cualquier carpeta en la terminal, `code .` abre VS Code ahí.

---

## 5. Cuenta de GitHub <a name="5-github"></a>

> ⚠️ **Necesita internet.** Si el aula no tiene buena red, hazlo en casa o donde se pueda; déjalo como
> tarea de la actividad. Con correo institucional del SENA, además pueden pedir el **GitHub Student
> Developer Pack** (dominio gratis + créditos — ver [DESPLIEGUE-CICD.md](../DESPLIEGUE-CICD.md)).

1. Entra a `github.com` y crea una cuenta (usa un usuario profesional, ej. `nombreapellido`).
2. Verifica tu correo.
3. Guarda bien tu usuario y contraseña.

> En la Clase 01 el rol **DevOps** de cada equipo creará el repositorio del equipo con esta cuenta.

### 5.1. ¿No tienes correo institucional del SENA todavía?

Si el SENA **aún no te habilitó el correo**, no te preocupes: **no te bloquea**. Opciones:

1. **Verifica el Student Pack con un documento.** El GitHub Student Developer Pack se puede solicitar
   subiendo una **foto del carnet** o una **constancia de estudio** del SENA — no solo con correo `.edu`.
2. **Trabaja igual sin el Pack.** GitHub es **gratis** de todos modos: creas tu cuenta con **cualquier
   correo** y publicas en `usuario.github.io` (sin dominio propio). El Pack lo pides **después**.
3. **Agrégalo cuando lo tengas.** Cuando te habiliten el correo institucional, lo **añades a tu cuenta**
   de GitHub (Settings → Emails) y solicitas el Pack en ese momento.

> Para el **asistente de IA** (tier gratis) y los **despliegues** **no** necesitas correo institucional.

---

## 6. Asistente de IA de programación — OpenCode <a name="6-ia"></a>

> **Explica:** hoy los desarrolladores trabajan con **asistentes de IA** que ayudan a escribir, explicar
> y corregir código. Aprender a usarlos **bien** es parte de ser desarrollador moderno. Usaremos
> **OpenCode**, un asistente open-source que corre en la terminal.

### 6.1. Instalar OpenCode
Como ya tenemos Node, la forma más fácil es con npm:

```bash
npm install -g opencode-ai
```

**Verifica:**
```bash
opencode --version
```
> Alternativas si npm falla: en Windows con Scoop/Chocolatey, o el script oficial
> (`curl -fsSL https://opencode.ai/install | bash`) en Git Bash/WSL. Ver `opencode.ai/docs`.

### 6.2. Conectar un modelo — usamos un **tier gratuito**
OpenCode no trae "cerebro" propio: se conecta a un **modelo de IA**. En este curso usamos un
**proveedor con capa gratuita** (una API key gratis, con límites de uso). Es lo más liviano para las
máquinas del SENA y solo necesita internet intermitente.

**Pasos:**
1. El instructor elige un proveedor con **tier gratuito** y **lo prueba antes** de la clase (para no
   improvisar frente a 30 estudiantes). Puede ser el mismo para todos o una **llave compartida** del
   instructor.
2. Crear la **API key** en la web del proveedor.
3. En OpenCode, ejecutar `/connect`, elegir el proveedor y **pegar la API key**.

> Sigue las indicaciones de `opencode.ai/docs` para el proveedor elegido. Como los proveedores y sus
> planes gratuitos cambian, el instructor confirma cuál está vigente al momento del curso.

> 🔜 **Módulo futuro — agente de IA local en un server propio.** Más adelante habrá un módulo (que
> prepara el instructor como práctica) para **levantar un servidor con un modelo de IA local** (tipo
> Ollama) y que el asistente funcione **100% offline**. Por ahora, con el tier gratis es suficiente.

### 6.3. Primer uso
Abre OpenCode en una carpeta y pídele algo simple, por ejemplo:
> "Explícame qué es una etiqueta de HTML con un ejemplo."

Le puedes pedir: **explicar** ("¿qué hace esta línea?"), **crear** ("hazme un formulario de login") o
**arreglar** ("¿por qué da este error?").

> **Resultado esperado:** responde en la terminal. Si no, revisa que el modelo/clave esté bien conectado.

### 6.4. OpenCode dentro de VS Code
1. Abre la **terminal integrada** de VS Code (menú **Terminal → New Terminal**).
2. Escribe `opencode` → instala su extensión sola.
3. Con `Ctrl+Esc` lo abres y comparte el archivo abierto como contexto.

### 6.5. Autocompletado vs dudas (aclaración importante)
- **OpenCode** sirve para **dudas y tareas** (chat/agente en la terminal). **No** es autocompletado
  inline mientras escribes.
- Para **autocompletado** (sugerencias grises mientras tecleas), gratis: **GitHub Copilot** (plan
  gratuito / gratis para estudiantes) o la extensión **Continue** con un modelo gratis.

> En resumen (todo en tier gratuito): **dudas con OpenCode** + **autocompletado con Copilot Free /
> Continue**. Los slides de esta clase muestran cada paso con capturas simuladas.

### 6.6. Qué configurar en VS Code (déjalo cómodo)
- **Tema** oscuro (File → Preferences → Theme).
- **Auto Save** (File → Auto Save) para no perder cambios.
- **Format on Save** con Prettier (ordena el código al guardar).
- Extensiones: **Live Server**, **Prettier**, **Español**.

---

## 7. Cómo usar la IA sin dejar de aprender <a name="7-uso-ia"></a>

> **Explica (importante):** la IA es un **tutor y copiloto**, no un reemplazo de tu cabeza. En este
> curso **se aprende escribiendo y entendiendo código**. Si la IA lo hace todo y tú no entiendes, no
> aprendiste (y en la Demo Day tendrás que **explicar** lo que hiciste).

**Reglas de oro del uso de IA en el curso:**
1. **Primero intenta tú.** Usa la IA cuando estés atascado, no antes.
2. **Pide que te explique, no solo que te dé.** "Explícame por qué", "¿qué hace esta línea?".
3. **Nunca pegues código que no entiendes.** Si no lo entiendes, pídele que te lo explique.
4. **Verifica.** La IA se equivoca; prueba siempre que el código funcione.
5. **Tu portafolio y tus commits son tuyos.** Debes poder explicar cada parte.

> Buen prompt: *"Soy principiante. Explícame paso a paso cómo centrar un div con Flexbox, y dime qué
> hace cada propiedad."* · Mal uso: *"Hazme todo el proyecto."*

---

## 8. Checklist final <a name="8-checklist"></a>

Cada estudiante confirma (marca ✅):

- [ ] `node --version` y `npm --version` responden.
- [ ] `git --version` responde y configuré mi `user.name` y `user.email`.
- [ ] VS Code abre y puedo crear un archivo.
- [ ] Tengo (o crearé en casa) mi cuenta de GitHub.
- [ ] `opencode --version` responde y le hice mi primera pregunta.
- [ ] Entiendo las **reglas de oro** del uso de la IA.

> Si algo no quedó (por internet), queda en la [actividad](actividad.md) para completar antes de la
> Clase 01. **La Clase 01 asume que este checklist está listo.**
