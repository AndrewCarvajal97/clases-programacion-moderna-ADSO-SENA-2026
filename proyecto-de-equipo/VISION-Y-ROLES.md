# Proyecto de equipo — Visión, Estructura y Roles

Cada equipo construye **su propio proyecto de software** y lo **despliega**. Es el corazón del curso,
en formato **hackathon** con premio. Este documento define qué construyen, con qué estructura y quién
hace qué.

---

## 1. ¿Qué construye cada equipo?

**La idea es de cada equipo.** Puede ser:

- una idea nueva que se les ocurra (una app útil, una herramienta, un juego, una plataforma…), **o**
- **continuar su proyecto de grado** y llevarlo más lejos con lo aprendido.

No hay un tema impuesto. Lo que sí es común para todos es **la estructura técnica** (sección 2) y que
el proyecto **quede desplegado con un link real** que evoluciona clase a clase.

> En clase construimos algunos ejemplos para aprender cada técnica (uno de ellos puede ser un pequeño
> *Habbo* para enseñar tiempo real). **Eso es solo material didáctico**: el proyecto del equipo no
> tiene que parecerse en nada a esos ejemplos.

---

## 2. Estructura técnica común (la base de cualquier proyecto)

Sea cual sea la idea, el proyecto se arma con estas piezas. **Todo el equipo debe entenderlas**, porque
son el esqueleto con el que van a construir:

```
        Navegador (usuario)                        Servidor del equipo (desplegado)
   ┌───────────────────────────┐   HTTP     ┌──────────────────────────────────────┐
   │  FRONTEND                 │◄──────────►│  BACKEND (Node.js + Express)          │
   │  HTML + CSS + JavaScript  │            │  - API: rutas que reciben/envían datos│
   │  (lo que ve y toca)       │            │  - lógica del negocio                 │
   │                           │  (opcional)│                                       │
   │  cliente tiempo real ─────┼───WebSocket┼─►  FEATURE en vivo (Socket.IO)        │
   └───────────────────────────┘            │  BASE DE DATOS (SQLite/PostgreSQL/…)  │
                                            └──────────────────────────────────────┘
```

- **Frontend** — la interfaz (HTML semántico, CSS, interacción con JavaScript).
- **Backend** — el servidor con Node.js + Express y su **API**.
- **Datos** — una base de datos donde la información **persiste** (la que el equipo prefiera).
- **Feature clave** — la funcionalidad que hace especial al proyecto (puede ser tiempo real con
  Socket.IO, o cualquier otra cosa que su idea necesite).
- **Despliegue** — todo publicado y accesible por un link, actualizándose con cada `push` (CI/CD).

> **Datos y la feature clave son de TODOS.** No son un rol aparte: son la estructura sobre la que se
> arma el proyecto, así que todo el equipo debe conocerlas y poder tocarlas.

> **¿Vanilla o framework?** Esta estructura se puede construir con HTML/JS/Express "a mano" (**vanilla**,
> como aprendemos en las clases 02–09) **o** con **frameworks modernos** (React/Next.js/NestJS, clases
> 10–11). Cada equipo elige en la Clase 11. Ver [ELEGIR-STACK.md](ELEGIR-STACK.md).

---

## 3. Equipos y roles

Los equipos **ya están conformados**. El tamaño es flexible (da igual que sean más o menos): lo
importante es que cada área tenga un responsable y que **todos desarrollen o sean dueños de una parte**.

> Los roles son de **responsabilidad y liderazgo de un área**, no de aislamiento: **todos programan**.
> El rol dice "yo respondo por que esta parte funcione y la entiendo a fondo".

### Los 4 roles

| Rol | Responsable de |
|-----|----------------|
| ⚙️ **DevOps** | El repo, Git (ramas/PRs/merge), **CI/CD y despliegue**, que todo compile y esté publicado |
| 🎨 **Frontend** | La interfaz: pantallas, estilos, interacción con el usuario |
| 🔧 **Backend** | El servidor, la API, la lógica y la conexión con la base de datos |
| 🧭 **PM (Project Manager)** | Ver sección 4. Coordina, hace de puente con el cliente, QA y entregas |

> **Datos** y la **feature clave** las maneja **todo el equipo** (sección 2), repartiéndose el trabajo
> según lo necesite el proyecto. En equipos grandes, dos personas pueden compartir Frontend o Backend.

---

## 4. El PM y el flujo con el "cliente" (como en la vida real)

En este curso el **instructor hace de cliente**. Para simular el trabajo real, la comunicación con el
cliente pasa por **un solo canal: el PM**. El PM de cada equipo es responsable de:

- **Ser el único que pregunta y entrega al instructor.** Nadie más del equipo consulta o entrega
  directamente: todo se canaliza por el PM (como en un *daily* real).
- **Desbloquear al equipo:** recoge las dudas de sus compañeros, las lleva al instructor (cliente), y
  el instructor las resuelve. El PM devuelve la respuesta al equipo.
- **Recibir los cambios y técnicas** que indique el instructor y **explicárselos a sus compañeros en
  primera instancia** (es la primera línea de soporte del equipo).
- **QA (control de calidad):** revisar que lo que se entrega funcione y cumpla lo pedido.
- **Entregas de avances al cliente:** mostrar el progreso (por el link desplegado) en cada punto de
  control.
- **Monitorear a sus compañeros:** saber quién va en qué y que nadie se quede atascado.

> **El PM también construye.** Además de coordinar, es dueño de una parte real (por ejemplo, QA/pruebas
> o documentación). No es un rol "sin código".

### El daily (rutina corta del equipo)
Al empezar a trabajar, el equipo hace un **daily** de 5 minutos guiado por el PM: cada quien dice
*qué hizo, qué hará y qué lo bloquea*. Los bloqueos que el equipo no resuelve, el PM los lleva al
instructor.

---

## 5. Definición de "terminado" (Definition of Done)

Una funcionalidad del proyecto está lista cuando:

1. **Funciona** y está **desplegada** (se ve en el link del proyecto).
2. Está en una **rama** y se integró vía **pull request** revisado por otro compañero.
3. No rompe lo que ya funcionaba.
4. Tiene commits con mensajes claros.

> **Requisitos, calendario y premio del hackathon:** [HACKATHON.md](HACKATHON.md).
> **Plantilla de requerimientos (inscripción):** [PLANTILLA-REQUERIMIENTOS.md](PLANTILLA-REQUERIMIENTOS.md).
> **Flujo de Git y despliegue por clase:** [FLUJO-DE-TRABAJO-GIT.md](FLUJO-DE-TRABAJO-GIT.md).
