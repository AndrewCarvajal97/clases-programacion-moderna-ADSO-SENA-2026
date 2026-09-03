# Curso ADSO — Desarrollo de Software desde Cero (grupo-1)

Curso intensivo de **8 semanas** (clases **martes y jueves**, 16 sesiones) para estudiantes de Análisis
y Desarrollo de Software del SENA Bucaramanga, desde **cero conocimientos**.

## 💡 La idea del curso en una página

1. **Objetivo:** que cada equipo **construya y despliegue su propio proyecto de software** (una idea
   libre, o incluso su **proyecto de grado**) y lo presente en un **hackathon** con premio.
2. **Cómo se aprende:** primero **a mano (vanilla)** — HTML, CSS, JS, Node, SQL — para *entender la
   máquina*; luego lo **moderno** — React / Next.js / NestJS — y **cada equipo elige su stack**. Desde
   la **Clase 0** usan un **asistente de IA** (OpenCode) como copiloto, sin dejar de entender el código.
3. **Tres cosas se construyen a la vez:**
   - 👤 **Portafolio** individual (cada estudiante) — la práctica de los fundamentos.
   - 👥 **Proyecto de equipo** (el hackathon) — el objetivo, idea libre, desplegado.
   - 🏫 **Ejemplos en clase** — pequeñas demos con las que enseñamos cada técnica.
4. **Se trabaja como en la vida real:** equipos con roles (**DevOps, Frontend, Backend, PM**), el **PM**
   es el único canal con el instructor (que hace de *cliente*), y todo pasa por **Git** (ramas, PRs).
5. **Se despliega desde el día 1:** cada clase cierra publicando, así el instructor **ve el avance real**
   entrando al link de cada proyecto.
6. **Internet del SENA:** hay internet (a veces falla) → trabajamos **normal y moderno** (paquetes,
   CDNs, `fetch` a APIs, deploy); con un **plan B** (dependencias descargadas) para las caídas de red.

> **Inscripción al hackathon:** en la Clase 06 cada equipo entrega sus **requerimientos**.
> Sin requerimientos, no participa por el premio.

---

## 🚀 Empieza aquí

1. Lee el **[Plan de Curso](PLAN-DE-CURSO.md)** — el temario completo (16 clases).
2. Si vas a dictar, lee la **[Guía para el instructor](GUIA-PARA-EL-INSTRUCTOR.md)** — cómo dar
   cualquier clase aunque no la hayas preparado.
3. Prepara el aula con la **[Configuración Offline](CONFIGURACION-OFFLINE.md)** — el internet del SENA
   es malo: se codea local y se despliega cuando hay red (dependencias pre-instaladas).
4. Conoce el norte del curso en **[Visión, Equipos y Roles](proyecto-de-equipo/VISION-Y-ROLES.md)**.
5. Comparte el refuerzo en **[Recursos y Videos](recursos/RECURSOS-Y-VIDEOS.md)**.
6. Arranca con la **[Clase 0 — Instalaciones](clase-00-instalaciones-y-configuracion/GUIA.md)** y sigue
   con la **[Clase 01](clase-01-fundamentos-y-entorno/GUIA.md)**.

**Formato hackathon 🏆 — tres niveles de trabajo:**
- 🏫 **Ejemplo de referencia** — pequeños ejemplos que construimos juntos en clase para enseñar cada técnica.
- 👥 **[Proyecto de equipo (idea libre)](proyecto-de-equipo/HACKATHON.md)** — cada equipo construye lo que
  quiera con lo aprendido, lo **despliega gratis** y compite por premio.
- 👤 **[Portafolio individual](proyecto-portafolio/README.md)** — HTML → CSS → JS, de cada estudiante.

**Los dos hilos que atraviesan todo el curso:**
- 🌿 **[Flujo de trabajo Git](proyecto-de-equipo/FLUJO-DE-TRABAJO-GIT.md)** — cómo usamos Git en cada clase.
- 🚀 **[Despliegue y CI/CD](DESPLIEGUE-CICD.md)** — publicar gratis (ver [free-for.dev](https://free-for.dev/)) con cada `push`.

**Equipos y hackathon:**
- 👥 **[Visión y Roles](proyecto-de-equipo/VISION-Y-ROLES.md)** — estructura técnica + roles (DevOps, Frontend, Backend, PM).
- 🏆 **[Reglas del Hackathon](proyecto-de-equipo/HACKATHON.md)** — equipos, calendario, rúbrica y premio.

---

## 🗺️ Ruta de las 16 clases

| # | Día | Tema | Estado |
|---|-----|------|--------|
| **0** | Inducción | **Instalaciones + configuración** (Node, Git, VS Code, GitHub, **asistente IA OpenCode**) | ✅ Listo |
| 01 | Mar S1 | **Arranque:** fundamentos, **GitHub**, armado de equipos + roles + 1ª página | ✅ Listo |
| 02 | Jue S1 | **HTML** + inicio del portafolio | ✅ Listo |
| 03 | Mar S2 | **CSS** (continuidad del portafolio) | ✅ Listo |
| 04 | Jue S2 | **JavaScript** — *guiada por el instructor* | ✅ Listo |
| 05 | Mar S3 | **Despliegue + CI/CD + dominios** · publicar el portafolio | ✅ Listo |
| 06 | Jue S3 | **Requerimientos + roles + PM** del proyecto de equipo | ⏳ Por crear |
| 07 | Mar S4 | Backend **vanilla**: Node + Express + **HTTP/REST** | ⏳ Por crear |
| 08 | Jue S4 | Backend: API + **desplegar el backend** | ⏳ Por crear |
| 09 | Mar S5 | Datos: **SQL + SQLite** (CRUD) | ⏳ Por crear |
| 10 | Jue S5 | **Frameworks I: React** — *guiada por el instructor* | ⏳ Por crear |
| 11 | Mar S6 | **Frameworks II: Next.js + NestJS** → 🔀 **elegir stack** | ⏳ Por crear |
| 12 | Jue S6 | Tiempo real: **WebSockets / Socket.IO** + taller | ⏳ Por crear |
| 13 | Mar S7 | **Autenticación y seguridad** | ⏳ Por crear |
| 14 | Jue S7 | **Taller de integración** + pruebas | ⏳ Por crear |
| 15 | Mar S8 | **Git colaborativo** + despliegue final | ⏳ Por crear |
| 16 | Jue S8 | **Demo Day** 🏆 presentación + premio | ⏳ Por crear |

---

## 📁 Estructura del repositorio

```
grupo-1/
├── README.md                     ← este archivo
├── PLAN-DE-CURSO.md              ← temario detallado (16 clases)
├── GUIA-PARA-EL-INSTRUCTOR.md    ← cómo dictar cualquier clase (otro instructor)
├── CONFIGURACION-OFFLINE.md      ← montar el aula sin depender de internet
├── DESPLIEGUE-CICD.md            ← 🚀 publicar en nube gratuita con CI/CD
├── proyecto-de-equipo/
│   ├── VISION-Y-ROLES.md         ← roles del equipo (+ PM) y arquitectura de ejemplo
│   ├── HACKATHON.md              ← 🏆 reglas, calendario, rúbrica y premios
│   ├── PLANTILLA-REQUERIMIENTOS.md ← 📋 la llena cada equipo en la Clase 06
│   ├── ELEGIR-STACK.md           ← 🔀 vanilla vs framework (React/Next/Nest)
│   └── FLUJO-DE-TRABAJO-GIT.md   ← 🌿 cómo usamos Git en todas las clases
├── proyecto-portafolio/
│   └── README.md                 ← 👤 el portafolio individual (HTML→CSS→JS)
├── clase-00-instalaciones-y-configuracion/
│   ├── GUIA.md                   ← instalar todo + asistente de IA (OpenCode)
│   └── actividad.md              ← completar el checklist antes de la Clase 01
├── clase-01-fundamentos-y-entorno/
│   ├── GUIA.md                   ← guion + teoría + práctica guiada
│   ├── presentacion.html         ← 🖥️ slides para proyectar (offline)
│   ├── actividad.md              ← refuerzo (video) + avance entre clases
│   └── codigo/                   ← plantillas / código pre-preparado
├── clase-02-html-portafolio/     (misma estructura: GUIA + presentacion.html + actividad + codigo)
├── clase-03-... (se van creando clase a clase)
└── recursos/
    └── RECURSOS-Y-VIDEOS.md      ← videos de refuerzo + jscamp.dev + chuletas
```

---

## 🎯 Cómo está diseñado cada tema

Cada clase es **teórico-práctica** y aporta algo real al portafolio y/o al proyecto de equipo:

- **GUIA.md** — teoría en lenguaje simple + práctica paso a paso (guion del instructor).
- **presentacion.html** — 🖥️ diapositivas autocontenidas (funcionan **sin internet**) para **proyectar y
  explicar la teoría fácil**. Se abren con doble clic; se avanza con ← → o barra espaciadora.
- **codigo/** — código ya escrito y probado, listo para llevar en USB (sin `npm install` en vivo).
- **actividad.md** — refuerzo (video) + ejercicio/avance para resolver entre clases.

> **Principio:** se aprende escribiendo código. Las guías están hechas para que los estudiantes
> **teclee cada uno**, no para mirar.

---

## 👩‍🏫 Notas para el instructor

- Los bloques `> Explica` en las guías son apuntes para ti (analogías, cómo introducir el tema).
- Los bloques `Práctica` son momentos para que los estudiantes escriban código.
- La evidencia de aprendizaje principal es el **historial de Git** de cada estudiante.
- Los **equipos se forman desde la Clase 01** (ver Visión y Roles); el proyecto de equipo se define en
  la Clase 06 (requerimientos) y se construye de la 07 en adelante.

---

## Licencia / uso
Material educativo para uso del grupo. Adáptalo libremente a tu contexto.
