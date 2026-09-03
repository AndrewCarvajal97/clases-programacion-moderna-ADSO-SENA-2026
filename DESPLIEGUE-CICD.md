# Despliegue y CI/CD (nube gratuita)

Además de correr en la LAN del aula, vamos a **publicar los proyectos en internet** con un flujo
automático: cada vez que hacemos `push`, el sitio se actualiza solo. Eso es **CI/CD**.

> **¿Qué es CI/CD en simple?**
> - **CI (Integración Continua):** cada cambio que subes se junta y se revisa automáticamente.
> - **CD (Despliegue Continuo):** si todo está bien, ese cambio se **publica solo** en la nube.
> En una frase: *"subo mi código y, sin hacer nada más, la web queda actualizada para todos"*.

---

## 1. Cómo encaja con el aula sin internet

No hay contradicción con lo offline:

| Actividad | Dónde |
|-----------|-------|
| Escribir y **correr** el código | En clase, en local / LAN (sin internet) |
| Hacer commits y ramas | En clase, offline |
| `push` + despliegue automático | Cuando haya internet (casa, conexión del instructor) |

La nube trabaja **por su cuenta**: una vez conectado el repositorio, cada `push` dispara el
despliegue sin que tengamos que estar pendientes.

---

## 2. Desplegar GRATIS es una habilidad del curso

Que un proyecto quede **en internet con un link** es parte de lo que enseñamos y **se exige en el
hackathon**. La regla para elegir dónde alojar es simple: **según qué necesita tu proyecto**.

> 📚 **La lista maestra: [free-for.dev](https://free-for.dev/)** — una lista enorme, mantenida por la
> comunidad, de servicios con **capa gratuita** para desarrolladores (hosting, bases de datos,
> dominios, correo, CI/CD, monitoreo y mucho más). Cuando un equipo necesite "algo gratis para X",
> ahí lo busca. La usamos como referencia oficial del curso.

### Caso A — Solo frontend (HTML + CSS + JS, sin servidor)
Es tu **portafolio** y cualquier sitio de solo archivos. Va a un **hosting estático**:

- **GitHub Pages** — gratis, integrado con el repo. Ideal para el portafolio y para la página del equipo.
- **Netlify**, **Vercel**, **Cloudflare Pages** — gratis para estáticos, despliegan solo al hacer `push`.

> **Empezamos el día 1:** en la **Clase 01** cada equipo publica una primera página con GitHub Pages, y
> **cada clase cierra desplegando**. La clase **05** es el despliegue a fondo (dominios, CI/CD, y luego
> el backend en la 08). Así el instructor ve el avance entrando a la página de cada proyecto.

### Caso B — App con servidor Node.js (Express, y opcional Socket.IO)
Es cualquier proyecto con backend (como el Habbo de ejemplo). Necesita un servidor encendido que corra Node (y que
mantenga conexiones vivas si usa WebSockets). Va a un **hosting de aplicaciones** con plan gratuito:

- **Render**, **Railway**, **Fly.io**, **Koyeb**, **Cyclic** — corren Node (con WebSockets) gratis.

> Empezamos aquí en la **Clase 08**, cuando ya hay un servidor Express.

### Caso C — Base de datos en la nube (si SQLite no basta)
En clase usamos **SQLite** (un archivo, no necesita servidor aparte: se despliega con la app). Si un
equipo quiere una base de datos gestionada, hay capas gratuitas:

- **Neon**, **Supabase**, **Turso** — Postgres/SQLite gestionado con plan gratuito.

> ⚠️ **Verifica los términos actuales:** los planes gratuitos cambian (límites de horas, "dormir" por
> inactividad, tarjeta requerida, etc.). Antes del curso, el instructor confirma la opción vigente en
> [free-for.dev](https://free-for.dev/) y prueba un despliegue de ejemplo. La estrategia no cambia;
> solo el proveedor concreto.

---

## 2.b Dominios: la dirección de tu proyecto (Clase 05)

Cuando despliegas, el host te da una dirección **gratis** tipo `tu-proyecto.netlify.app` o
`usuario.github.io/proyecto`. Con eso basta para el curso. Pero un **dominio propio**
(`mi-proyecto.com`) se ve más profesional. Opciones:

### Gratis
- **Subdominios del host:** `*.github.io`, `*.netlify.app`, `*.vercel.app`, `*.onrender.com`.
  No cuestan nada y funcionan perfecto para el hackathon.
- **Subdominios gratuitos de servicios** listados en [free-for.dev](https://free-for.dev/) (sección de
  DNS/dominios). Verifica cuáles siguen vigentes.

### 🎓 GitHub Student Developer Pack (muy recomendado para el SENA)
Los estudiantes con correo institucional pueden solicitar el **GitHub Student Developer Pack**, que
suele incluir **un dominio gratis por un año** (p. ej. `.me` vía Namecheap, o `.tech`), **certificado
SSL**, y **créditos de hosting/nube**. Es la forma más fácil de que cada equipo tenga dominio propio
sin pagar.
> Se solicita en `education.github.com`. Requiere verificar que son estudiantes (carné/constancia SENA).
> Verifica las ofertas vigentes, que cambian con el tiempo.

### Comprado (barato)
- Un dominio `.com` cuesta ~10–15 USD/año; hay TLDs más baratos (`.xyz`, `.site`) a veces por ~1–3 USD
  el primer año. Se compran en registradores como Namecheap, Porkbun, Cloudflare.
- Comprar un dominio es una **buena práctica de la vida real**; se puede hacer en clase como demo (sin
  obligar a los estudiantes a pagar).

> Conectar el dominio al host es un paso de "apuntar el DNS" que el host explica en su panel. Lo vemos
> en la Clase 05 con el portafolio como ejemplo.

---

## 3. El flujo de despliegue (versión simple para principiantes)

La forma más sencilla de CI/CD, sin configurar casi nada:

```
  Editas código  ──►  git push  ──►  la nube detecta el cambio  ──►  construye y publica  ──►  URL actualizada
```

1. Conectas **una vez** el repositorio de GitHub con la nube (GitHub Pages / Netlify / Render).
2. Marcas qué rama se publica (normalmente `main`).
3. Desde ahí, **cada `push` a `main` despliega solo**. No hay que hacer nada más.

Esto ya es CD: publicación automática. Empezamos por aquí porque no requiere escribir configuración.

---

## 4. Subiendo un escalón: GitHub Actions (CI)

Cuando el grupo esté cómodo (hacia la Clase 15), agregamos un paso de **CI** con **GitHub Actions**:
un archivo que, en cada `push`, revisa el código automáticamente antes de publicar (por ejemplo,
que el proyecto "arranca" o que pasan las pruebas básicas).

Ejemplo mínimo (se guarda en `.github/workflows/ci.yml`), a modo de referencia para más adelante:

```yaml
name: CI
on: [push]
jobs:
  revisar:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm test --if-present
```

> No hace falta entenderlo el día 1. Se introduce en la Clase 15 como cierre profesional del curso.

---

## 5. Qué necesita el instructor preparar

- Una **cuenta de GitHub** para el grupo/equipos (crear en casa, con internet).
- Elegir y probar **un hosting estático** (para portafolios) y **uno de apps Node** (para proyectos con
  backend), buscándolos en [free-for.dev](https://free-for.dev/).
- Hacer **un despliegue de ejemplo** antes de la Clase 03 para tener capturas y el paso a paso listo.
- Tener a mano las URLs publicadas para mostrar en clase (aunque el aula no tenga buen internet, se
  pueden mostrar desde el celular del instructor con datos).

---

## 6. Resumen

- **Elige según el proyecto:** solo frontend → hosting estático · con servidor Node → hosting de apps ·
  base de datos gestionada → capa gratuita. Todo se busca en **[free-for.dev](https://free-for.dev/)**.
- **Portafolio** → estático (GitHub Pages/Netlify/Vercel/Cloudflare Pages), desde la **Clase 03**.
- **Proyectos con backend** → apps Node (Render/Railway/Fly.io/Koyeb), desde la **Clase 08**.
- **Regla:** `push` a `main` = se publica solo.
- **CI con GitHub Actions** → cierre del curso (Clase 15), como buena práctica profesional.
- **Desplegar gratis y accesible por link es requisito del hackathon.**
- Todo esto es compatible con el aula offline: se **codea local**, se **despliega cuando hay internet**.
