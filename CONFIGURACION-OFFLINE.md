# Internet en el SENA: trabajar normal, con un plan B

**El SENA tiene internet.** A veces falla o se pone lento, pero **existe**. Por eso trabajamos de forma
**normal y moderna** (instalar paquetes, usar CDNs, `fetch` a APIs, desplegar) y solo tenemos un
**plan B** para los ratos en que la red se cae.

- 🟢 **Lo normal:** hay internet → `pnpm install`, CDNs, `fetch`, `git push` y despliegue funcionan.
- 🟡 **Si la red falla un rato:** sigues **codeando y probando en local** (eso no necesita internet);
  el `push`/deploy se hace apenas vuelva la conexión (o en casa).
- 🛟 **Plan B para no perder la clase:** ten las **herramientas y dependencias ya descargadas** (USB),
  para que una caída de red no bloquee a 30 estudiantes a la vez.

> **La única regla firme:** no hagas depender la clase de **30 `pnpm install` simultáneos** justo cuando
> la red está débil. Ten las dependencias listas por si acaso. Todo lo demás, úsalo con normalidad.

---

## 1. Kit del instructor (preparar EN CASA, una sola vez)

Lleva todo en un **USB** (o carpeta compartida en la red del aula):

| Qué | Para qué |
|-----|----------|
| Instalador de **Node.js LTS** | Ejecutar JS fuera del navegador |
| Instalador de **Git** | Control de versiones |
| Instalador de **VS Code** | Editor de código |
| **OpenCode** (`npm i -g opencode-ai`) + proveedor de modelo elegido | Asistente de IA (ver Clase 0) |
| Carpeta **`vendor/`** con `node_modules` ya instalados | Dependencias sin `npm install` en vivo |
| Este repositorio (`grupo-1/`) | Guías + código de cada clase |

> **Asistente de IA:** usamos un **tier gratuito** (API key gratis) para el modelo; el instructor lo
> **prueba antes**. El agente de IA **local** (server propio) queda para un **módulo futuro**. Detalle
> en la [Clase 0](clase-00-instalaciones-y-configuracion/GUIA.md).

> **Regla:** nada de `npm install` en vivo frente a 30 estudiantes con internet malo. Las dependencias
> van **pre-instaladas** y se copian.

---

## 2. Instalar Node, Git y VS Code sin internet

Son instaladores normales: doble clic, **no necesitan internet**. En equipos SENA sin permisos de
administrador, usa las versiones **portables (zip)** de Node, Git (PortableGit) y VS Code, o pide al
coordinador que los **pre-instale** en las máquinas del aula.

Verifica en cada equipo (PowerShell):

```bash
node --version
pnpm --version
git --version
```

Si los tres responden con una versión, el equipo está listo.

> **Usamos `pnpm`** (no `npm`) por ser más rápido, ahorrar disco y ser más estricto/seguro. Se activa
> con Corepack (viene con Node): `corepack enable pnpm`. Ver la Clase 0.

---

## 3. Dependencias sin instalar en vivo (vendorizar con pnpm)

Desde la **Clase 07** (backend) usamos paquetes (Express, etc.). Como no podemos instalarlos en vivo,
se pre-instalan una vez y se copian.

**En casa (con buen internet), por cada proyecto que use paquetes:**

```bash
cd clase-07-backend-node/codigo   # la carpeta del proyecto
pnpm install                      # crea node_modules/
# Copia la carpeta node_modules/ al USB junto al proyecto.
```

> 💡 **Truco para que `node_modules/` sea copiable con pnpm:** por defecto pnpm usa enlaces a un almacén
> global (no se copia bien de una máquina a otra). Para el aula offline, crea un archivo `.npmrc` en el
> proyecto con la línea `node-linker=hoisted`. Así `node_modules/` queda como una carpeta normal, plana,
> que **sí se puede copiar** por USB como con npm.

**En el aula:** cada equipo copia esa carpeta `node_modules/` dentro de su proyecto. Como ya existe,
el proyecto **corre sin instalar nada**.

> Cada carpeta `clase-XX/codigo/` trae un `README` que dice qué dependencias necesita pre-descargar.

### ⚠️ Frameworks (Clases 10–11): node_modules muy pesado
React / Next.js / NestJS tienen un `node_modules` **grande** (cientos de MB) y no es práctico copiarlo
por USB para todos. Opciones para los equipos que elijan framework:
- **Pre-instalar** el proyecto base en las máquinas del aula una vez (con la conexión del instructor).
- Aprovechar que **el despliegue lo construye la nube**: Vercel/Netlify hacen `npm install` en sus
  servidores al hacer `push`, así que para **publicar** no hace falta el `node_modules` local.
- Para **desarrollar** en local sí se necesita; los equipos de framework lo instalan donde tengan
  buen internet (casa o la conexión del instructor).

---

## 4. Publicar y ver el avance (lo importante para el instructor)

El despliegue está explicado en **[DESPLIEGUE-CICD.md](DESPLIEGUE-CICD.md)**. Lo esencial aquí:

- Cada equipo publica su página desde la **Clase 01** (GitHub Pages) y **cada clase cierra desplegando**
  en cuanto haya internet.
- Ten a la mano la **lista de links** de los proyectos: entrando a cada uno ves el avance real, sin
  pedir archivos.

---

## 5. (Opcional) Probar en RED LOCAL sin internet

Si un proyecto necesita mostrarse **sin nada de internet** (p. ej. una demo multiusuario y la nube está
caída), se puede correr el servidor en una máquina y conectarse desde otras por la **LAN**:

1. En el código, escucha en `0.0.0.0`:
   ```js
   server.listen(3000, "0.0.0.0", () => console.log("Servidor en el puerto 3000"));
   ```
2. Averigua la IP local del servidor con `ipconfig` (línea "Dirección IPv4", ej. `192.168.1.45`).
3. Los demás entran a `http://192.168.1.45:3000` (misma red).
4. Si no conecta: revisa que estén en la **misma red** y **permite el puerto en el Firewall** de Windows
   la primera vez.

> Esto es un **plan B** para demos sin internet, no el flujo normal. El flujo normal es desplegar a la nube.

---

## 6. Resumen

- ✅ Instaladores + `node_modules` preparados **en casa**, llevados en **USB**.
- ✅ Verifica `node`, `git`, `npm` en cada equipo antes de empezar.
- ✅ En clase se **codea y prueba local**; el `git push` + **deploy** se hace en cuanto haya algo de red.
- ✅ Frameworks: node_modules pesado → pre-instalar o construir en la nube.
- ❌ Nunca dependas de `npm install` en vivo para 30 personas.
