# Clase 05 — Despliegue, CI/CD y la Nube

> **Meta de la clase:** publicar el **portafolio en internet** con un **link real** (GitHub Pages),
> entender **CI/CD** (publicar solo con cada `push`), cómo conseguir un **dominio gratis**, y los
> conceptos del **desarrollo moderno**: la **nube** vs **on-premise**, **balanceadores de carga**,
> aplicaciones de **escritorio con Electron** y las **mejores prácticas** de despliegue.

**Duración estimada:** 1–2 sesiones.
**Requisitos previos:** [Clase 04](../clase-04-javascript-portafolio/GUIA.md) (portafolio v3) y una cuenta
de GitHub (Clase 0). **Necesita internet** para publicar.
**Presentación para proyectar:** [presentacion.html](presentacion.html)
**Trabajo de entrega:** [trabajo-entrega-cicd.md](trabajo-entrega-cicd.md)
**Referencia base del curso:** [DESPLIEGUE-CICD.md](../DESPLIEGUE-CICD.md)

---

## Índice
1. [¿Qué es desplegar?](#1-desplegar)
2. [Estático vs Dinámico (la gran división)](#2-estatico-dinamico)
3. [¿Qué es CI/CD? y el pipeline](#3-cicd)
4. [GitHub Actions: workflows (estático y dinámico)](#4-actions)
   - 4.b [Secretos y variables de entorno](#4b-secretos)
   - 4.c [Entornos: dev / staging / producción](#4c-entornos)
5. [Dominios y DNS (+ dominio gratis)](#5-dominios)
6. [GitHub Pages paso a paso (+ flujo automático)](#6-pages)
7. [La nube: cloud vs on-premise · IaaS/PaaS/SaaS](#7-nube)
8. [Escalar: balanceadores de carga](#8-balanceadores)
9. [Electron: JavaScript de escritorio](#9-electron)
10. [Mejores prácticas de despliegue](#10-practicas)
11. [Leer documentación oficial (+ trabajo)](#11-docs)
12. [Ejercicios de refuerzo y trabajo](#12-ejercicios)
13. [Práctica y cierre](#13-practica)

---

## 1. ¿Qué es desplegar? <a name="1-desplegar"></a>

> **Explica:** hasta ahora tu portafolio solo vive en **tu computador** (lo abres con doble clic).
> **Desplegar** (*deploy*) es ponerlo en **internet**, con una dirección (link) que **cualquiera** puede abrir.

```
 💻 En tu PC ───► ☁️ Servidor (encendido 24/7) ───► 🌍 Internet (todos, con un link)
```

Un **servidor** es solo un computador **siempre encendido** que entrega tu página cuando alguien la pide.
Podrás mandar el link a tu familia, ponerlo en tu hoja de vida o en LinkedIn. Es tuyo y es real.

---

## 2. Estático vs Dinámico (la gran división) <a name="2-estatico-dinamico"></a>

> **Explica:** antes de desplegar hay que saber **qué tipo de web** tienes. Cambia **dónde** y **cómo** se
> despliega. Es la división más importante de esta clase.

| | 🧊 **Sitio estático** | ⚙️ **Sitio dinámico** |
|---|---|---|
| Qué es | Archivos ya listos: HTML, CSS, JS | Un **servidor** genera la respuesta (Node, PHP, Python) |
| Datos | Iguales para todos | Cambian por usuario; casi siempre hay **base de datos** |
| Ejemplos | Portafolio, landing, blog | Red social, tienda, panel de admin |
| Hosting | **Estático** (barato/gratis): GitHub Pages, Netlify | **De apps**: Render, Railway, un servidor |
| Tu caso | **Tu portafolio es estático** ✅ | El proyecto de equipo, más adelante |

> **Regla:** si tu proyecto **solo** son archivos que se ven igual para todos → **estático**. Si hay
> **código corriendo en un servidor** y base de datos → **dinámico**. Hoy publicamos lo estático.

> Existe un punto medio moderno: **SSG** (*Static Site Generation*, como Astro o Next export), que
> "construye" un sitio estático a partir de código. Se despliega como estático, pero se programa como app.

---

## 3. ¿Qué es CI/CD? y el pipeline <a name="3-cicd"></a>

- **CI (Integración Continua):** cada cambio que subes se junta y se **revisa** (se compila y se prueba)
  automáticamente.
- **CD (Despliegue Continuo):** si todo pasó, ese cambio se **publica solo** en internet.

> En una frase: **"subo mi código y la web queda probada y actualizada sola"**.

El proceso automático se llama **pipeline** (tubería), con etapas en orden:

```
 ✏️ Commit ──► 🔨 Build (construir) ──► 🧪 Test (probar) ──► 🚀 Deploy (publicar)
```

> **Lo clave:** si una etapa **falla**, la tubería se **detiene** y **no** publica. Así un error **no
> llega a producción**. Ese es el valor de CI/CD: rapidez **con** red de seguridad.

---

## 4. GitHub Actions: workflows (estático y dinámico) <a name="4-actions"></a>

**GitHub Actions** ejecuta tu pipeline. Se configura con un archivo **YAML** en `.github/workflows/`.
Anatomía de un workflow:

```yaml
# .github/workflows/deploy.yml
on: [push]              # CUÁNDO se ejecuta (al subir código)
jobs:                   # TRABAJOS a realizar
  build:
    runs-on: ubuntu-latest   # DÓNDE: una máquina en la nube (runner, gratis)
    steps:                   # PASOS, en orden
      - run: npm ci && npm test
```

- `on` → el **disparador** (push, pull request, un horario…).
- `jobs` → los **trabajos**. `runs-on` → en qué **máquina** (runner).
- `steps` → los **pasos**, en orden. `uses:` usa una acción hecha; `run:` corre un comando.

### CI/CD para un sitio **estático**
```yaml
on:
  push: { branches: [main] }          # al subir a main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4       # baja tu código
      - run:  npm ci && npm run build   # construye el sitio → carpeta dist/
      - uses: actions/deploy-pages@v4   # lo publica en GitHub Pages
```
> Si tu sitio es **solo** HTML/CSS/JS (sin herramientas), Pages lo publica **sin build**. Con Vite/Astro/React,
> el `build` arma la carpeta `dist/` que se publica.

### CI/CD para una app **dinámica** (servidor + base de datos)
```yaml
jobs:
  test:                              # 1) CI: probar ANTES de publicar
    runs-on: ubuntu-latest
    steps: [ { run: npm ci && npm test } ]
  deploy:
    needs: test                      # solo si las pruebas pasan
    runs-on: ubuntu-latest
    steps:
      - run: npm run migrate         # 2) actualiza la base de datos
      - run: ./deploy.sh             # 3) CD: publica en el servidor/Render
        env: { API_KEY: ${{ secrets.API_KEY }} }   # secreto, NO en el código
```
> Lo nuevo vs estático: **pruebas**, **migraciones** de base de datos y **secretos**. `needs:` encadena
> los trabajos: no publica si algo falló. En `codigo/` tienes ejemplos comentados:
> [`deploy-estatico.yml`](codigo/deploy-estatico.yml) y [`deploy-dinamico.yml`](codigo/deploy-dinamico.yml).

### 4.b Secretos y variables de entorno <a name="4b-secretos"></a>

> **Regla de oro:** **claves, contraseñas y tokens** NUNCA van en el código ni en el repositorio.
> Cualquiera los vería (en el repo o con F12) y se filtran **para siempre**.

```js
const key = "sk_live_123abc";   // ❌ ¡NO! queda en el historial de Git
```
En su lugar, van en **variables de entorno**:
- **En tu PC:** un archivo `.env` (que agregas al `.gitignore`, para que **no** se suba).
- **En CI:** los **Secrets** de GitHub (repo → *Settings → Secrets and variables → Actions*), y se usan
  como `${{ secrets.API_KEY }}`.

### 4.c Entornos: dev / staging / producción <a name="4c-entornos"></a>

> **Explica:** no se prueba en la web que ven los usuarios. Se usan **entornos** separados:

```
 🧑‍💻 dev (tu PC) ──► 🧪 staging (copia de prueba) ──► 🌍 producción (usuarios reales)
```
- **dev:** donde programas y rompes cosas sin miedo.
- **staging:** idéntico a producción, para probar **antes** de soltar.
- **producción:** lo que ven los usuarios. Aquí **no** se improvisa.

> 🏋️ **Ejercicio.** Abre la plantilla oficial de "GitHub Pages" en
> [starter-workflows](https://github.com/actions/starter-workflows/tree/main/pages) y **señala** dónde
> están `on`, `jobs`, `steps` y el paso que publica. Explícalos con tus palabras.

---

## 5. Dominios y DNS (+ dominio gratis) <a name="5-dominios"></a>

Un **dominio** es el nombre fácil de tu sitio (`tuweb.com`). El **DNS** lo traduce a la **IP** (número)
del servidor:

```
 ⌨️ tuweb.com ──► 📖 DNS (traduce nombre → número) ──► 🔢 203.0.113.5 ──► 🖥️ Servidor
```
> **Analogía:** el DNS es la **agenda de contactos** de internet: tú marcas el **nombre**, ella conoce el **número**.

### Cómo conseguir un dominio GRATIS
1. **Subdominio del host** (ya viene incluido): `usuario.github.io`, `tu-sitio.netlify.app`,
   `*.vercel.app`. **Cero pasos, gratis para siempre.** Suficiente para el curso.
2. **🎓 GitHub Student Pack** (con correo institucional o carnet): **un dominio 1 año gratis** (Namecheap
   `.me`, `name.com`, `.tech`…) + créditos de nube. Ver [education.github.com/pack](https://education.github.com/pack).
3. **Dominios de comunidad** para proyectos: `*.js.org`, `*.is-a.dev`, `*.eu.org` — gratis, se piden por
   solicitud/PR en GitHub.

> ⚠️ Evita los "TLD gratis" dudosos (tipo Freenom / `.tk`): se caen y te quedas sin sitio.

### Conectar tu dominio al host (apuntar el DNS)
En el panel **DNS** de tu dominio creas registros:
- **A** → apunta a una **IP** (ej. la de GitHub Pages).
- **CNAME** → apunta a otro **nombre** (alias, ej. `usuario.github.io`).

Luego, en el host, agregas tu dominio ("Custom domain") y activas **HTTPS** (el candado). El host siempre
te da los **valores exactos** que debes pegar.

> 🏋️ **Ejercicio.** Explica con tus palabras la diferencia entre un registro **A** y un **CNAME**, y por
> qué el DNS puede tardar en "propagar".

---

## 6. GitHub Pages paso a paso (+ flujo automático) <a name="6-pages"></a>

1. **Sube tu portafolio** a un repositorio:
   ```bash
   git add .
   git commit -m "Portafolio listo para publicar"
   git push
   ```
2. En el repositorio (web de GitHub): **Settings → Pages**.
3. En **Branch**, elige `main` y `/ (root)`, y **Save**.
4. Espera ~1 minuto. GitHub te muestra tu URL:
   ```
   ✔ Your site is live at  https://tu-usuario.github.io/mi-portafolio
   ```

> **Error común:** "404" al abrir → el archivo principal debe llamarse `index.html` y estar en la raíz del
> repo. Espera 1–2 minutos la primera vez.

**El flujo automático:** una vez activado, cada cambio se publica solo.
```
 ✏️ Editas ──► git push ──► ☁️ la nube construye ──► 🌍 URL actualizada
```
> **Eso es CD.** A partir de hoy, **cada clase cierra desplegando**: el instructor ve tu avance abriendo tu link.

> **Otros hosts estáticos (gratis):** **Netlify** (arrastras la carpeta y ya está), **Vercel**,
> **Cloudflare Pages** (todos con preview por rama, HTTPS y CDN global). Lista completa: **free-for.dev**.

---

## 7. La nube: cloud vs on-premise · IaaS/PaaS/SaaS <a name="7-nube"></a>

> **Explica:** "la nube" es **el computador de otra persona**: servidores de una empresa (AWS, Azure,
> Google Cloud) que **alquilas** y usas por internet.

Ventajas de la nube: **pagas por uso** (como la luz), **escala** al instante y **sin mantenimiento físico**.

### Nube vs On-premise
| | ☁️ **Nube** | 🏢 **On-premise** (tus servidores, en tu edificio) |
|---|---|---|
| Arranque | Rápido, escala solo | Lento; compras el hardware |
| Costo | Pagas por uso (gasto operativo) | Inversión inicial alta (gasto de capital) |
| Control | Menos control físico | **Control total** (datos en casa) |
| Cuándo | Empezar y crecer, la mayoría de casos | Normativa/seguridad estricta: bancos, hospitales, gobierno |

> Muchas empresas mezclan las dos: es la **nube híbrida**.

### Modelos de servicio (analogía de la pizza 🍕)
- **IaaS (Infraestructura):** te dan la máquina "vacía"; tú instalas todo. *Te dan la cocina.* (AWS EC2)
- **PaaS (Plataforma):** subes tu código y ellos lo corren. *Te hacen la pizza, tú eliges ingredientes.* (Render, Vercel)
- **SaaS (Software):** solo lo usas desde el navegador. *Te la entregan lista.* (Gmail, Canva)

> Cuanto más "arriba" (SaaS), **menos gestionas** tú (y menos controlas). En el curso usamos **PaaS** por ser fácil.

---

## 8. Escalar: balanceadores de carga <a name="8-balanceadores"></a>

Cuando un servidor **no da abasto** (muchos usuarios), pones **varios** y un **balanceador de carga**
reparte el tráfico entre ellos:

```
 👥 Usuarios ──► ⚖️ Balanceador ──► 🖥️ Servidor 1
                               ├──► 🖥️ Servidor 2
                               └──► 🖥️ Servidor 3
```
**Ventajas:** aguanta **más usuarios** y, si un servidor **se cae**, el balanceador manda el tráfico a los
otros (**alta disponibilidad**).

### Escalar vertical vs horizontal
- **↕️ Vertical:** una máquina **más potente** (más RAM/CPU). Simple, pero tiene tope y si se cae, cae todo.
- **↔️ Horizontal:** **más máquinas** trabajando juntas (con balanceador). Escala casi sin límite y tolera
  caídas. Es como funciona internet a gran escala.

> **Regla moderna:** cuando puedas, **escala horizontal** (muchas máquinas pequeñas) en vez de una gigante.

> 🏋️ **Ejercicio.** Con tus palabras: ¿por qué una tienda online en Black Friday prefiere escalar
> **horizontal** con un balanceador en vez de comprar un solo servidor enorme?

---

## 9. Electron: JavaScript de escritorio <a name="9-electron"></a>

> **Explica:** **Electron** junta **Chromium** (un navegador) + **Node.js** para que tu **HTML/CSS/JS** sea
> una **app de escritorio** instalable (Windows, Mac, Linux). **Una base de código** para los 3 sistemas.

Apps famosas hechas con Electron: **VS Code, Discord, Slack, WhatsApp Desktop, Figma**. Por dentro son una
web; por fuera, un programa normal.

**Cómo funciona (dos procesos):**
- **Proceso principal (main):** es **Node.js**. Crea las ventanas y habla con el **sistema** (archivos,
  menús, notificaciones).
- **Proceso de ventana (renderer):** es **Chromium**. Pinta tu **HTML/CSS/JS**, como una web dentro de la app.
- Se comunican por **IPC** (mensajes).

```
 🧠 main (Node · sistema) ◄──IPC──► 🪟 renderer (tu web)
```

**Distribuir la app:**
- **Empaquetar** con `electron-builder`: genera `.exe` (Win), `.dmg` (Mac), `.AppImage` (Linux).
- **Firmar** la app (evita el aviso de "editor desconocido" y que el antivirus la bloquee).
- **Auto-update:** se actualiza sola desde un servidor de releases (p. ej. GitHub Releases).
- 💡 CI/CD también aplica: un workflow puede **construir los 3 instaladores** en cada versión.

> Alternativa más liviana: **Tauri** (usa el navegador del sistema en vez de traer Chromium; pesa mucho menos).

---

## 10. Mejores prácticas de despliegue <a name="10-practicas"></a>

| ✅ Haz | ❌ Evita |
|-------|---------|
| **Automatiza** el deploy (CI/CD), no subas a mano | Subir por **FTP a mano** "a ver si funciona" |
| **Prueba antes** de publicar; si falla, no sale | Publicar sin probar |
| **Secretos** fuera del código; **HTTPS** siempre | **Contraseñas** en el repositorio |
| Separa **entornos** (dev/staging/prod) | Probar en producción |
| Ten **rollback** (volver atrás) y **backups** | Desplegar el **viernes 6pm** sin plan B |
| **Observa**: logs y monitoreo | Un **solo servidor** sin respaldo ni alertas |

> Con **monitoreo y logs** te enteras de que algo se rompió **antes** que el usuario. 📈

---

## 11. Leer documentación oficial (el superpoder del dev) <a name="11-docs"></a>

> **Explica:** un buen programador **no memoriza todo**: sabe **buscar, leer y aplicar** la documentación
> oficial. Es la habilidad que más se usa en el trabajo real.

**El método:**
1. **Fuente oficial**, no un blog viejo ni un video de hace años.
2. Busca **"Quickstart" / "Getting started"**: casi siempre hay un ejemplo mínimo que **funciona**.
3. **Haz funcionar el ejemplo mínimo** tal cual; **luego** cámbialo, **una cosa a la vez**.
4. Usa **`Ctrl+F`** para saltar a la palabra clave. Revisa la **versión**.
5. **Lee el error completo** y búscalo. Con la IA: úsala para **entender**, pero **verifica** en la doc.

> **Dato de oro:** la documentación de GitHub, MDN y muchas más está **en español**
> (`docs.github.com/es/…`, `developer.mozilla.org/es/`).

**Documentación oficial (verificada) para esta clase:**

| Tema | Enlace oficial |
|------|----------------|
| GitHub Pages | https://docs.github.com/es/pages/quickstart |
| GitHub Actions (CI/CD) | https://docs.github.com/es/actions/get-started/quickstart |
| Plantillas de workflows | https://github.com/actions/starter-workflows |
| Netlify · Vercel · Render | https://docs.netlify.com · https://vercel.com/docs · https://render.com/docs |
| Electron (escritorio) | https://www.electronjs.org/docs/latest/tutorial/process-model |
| MDN (referencia web) | https://developer.mozilla.org/es/ |
| Todo lo gratis | https://free-for.dev/ · Student Pack: https://education.github.com/pack |

### 🎓 Trabajo de entrega
El trabajo **calificado** junta **leer documentación** + **montar CI/CD** + **entregar**: está en
**[`trabajo-entrega-cicd.md`](trabajo-entrega-cicd.md)**. Los estudiantes leen la doc oficial de Actions y
Pages (bitácora con sus palabras), montan un `deploy.yml` **adaptando la plantilla oficial** (no copiando a
ciegas), publican, y sustentan explicando **de dónde en la doc** salió cada línea.

---

## 12. Ejercicios de refuerzo y trabajo <a name="12-ejercicios"></a>

### A) Concepto 🧠
1. Clasifica en **estático** o **dinámico**: un portafolio, una tienda con carrito, un blog, un panel de
   admin con login. Justifica.
2. Explica **CI** y **CD** con tus palabras y pon un ejemplo de cada uno.
3. Ordena las etapas del pipeline y di qué pasa si **Test** falla.

### B) Práctico (en GitHub) 🎯
4. Publica tu portafolio en **GitHub Pages** y comparte tu URL.
5. Haz un cambio, `push`, y verifica que la página **se actualizó sola** (mira 2 corridas).
6. Lee la plantilla oficial de Pages en *starter-workflows* y **crea** tu `.github/workflows/deploy.yml`.
   Comprueba en **Actions** que corre en **verde**.

### C) Nube e infraestructura ☁️
7. Di si es **IaaS**, **PaaS** o **SaaS**: AWS EC2, Render, Gmail, Vercel, Canva.
8. Dibuja (a mano o en texto) un **balanceador** con 3 servidores y explica qué pasa si uno se cae.
9. Da un caso donde convenga **on-premise** en vez de nube, y por qué.

### 🛠️ Trabajo de la clase (entrega calificada)
El trabajo formal está en **[trabajo-entrega-cicd.md](trabajo-entrega-cicd.md)**: bitácora de lectura de
documentación + montar CI/CD + entregar (repo, link vivo, captura de Actions en verde) + sustentación.

---

## 13. Práctica y cierre <a name="13-practica"></a>

### Práctica rápida (en clase)
1. Sube tu portafolio a GitHub (`git push`).
2. Actívalo en **Settings → Pages** (branch `main`).
3. Abre tu **link**, compruébalo y **compártelo**.
4. Haz un cambio pequeño, `git push`, y ve cómo se **actualiza solo**.
5. Si puedes, solicita el **Student Pack** para tu dominio gratis.

### Lo que dominas hoy
- [x] Distingo **estático** vs **dinámico** y sé **dónde** desplegar cada uno.
- [x] Publiqué mi portafolio en **GitHub Pages** con un link real.
- [x] Entiendo **CI/CD**, el **pipeline**, los **secretos** y los **entornos**.
- [x] Sé qué es la **nube**, **on-premise**, **IaaS/PaaS/SaaS** y un **balanceador**.
- [x] Sé qué es **Electron** y cómo se distribuye una app de escritorio.
- [x] Sé **leer documentación oficial** y aplicarla.

### Adelanto de la Clase 06
Cada equipo define los **requerimientos** de su proyecto (la inscripción al hackathon 🏆). Ver la
[plantilla de requerimientos](../proyecto-de-equipo/PLANTILLA-REQUERIMIENTOS.md).
