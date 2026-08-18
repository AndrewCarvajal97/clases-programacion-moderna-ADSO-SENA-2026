# 🏆 Hackathon — Reglas, calendario y premio

El curso es una **competencia entre equipos**: cada equipo usa lo que aprende para **construir el
proyecto que quiera** (su propia idea), y en la última clase hay **demostración y premio al equipo
ganador**.

> El **Habbo** que construimos juntos en clase es el **ejemplo de referencia**: enseña todas las
> técnicas (frontend, backend, datos, tiempo real, despliegue). Cada equipo puede hacer **su propia
> versión de un Habbo**... o **una idea totalmente distinta** que use esas mismas técnicas: una red
> social mínima, un juego multijugador, un chat temático, un marketplace, un tablero colaborativo, lo
> que se les ocurra. Lo que importa es que apliquen lo aprendido.

> El objetivo del hackathon no es solo "ganar": es que cada estudiante **construya algo real en
> equipo**, con Git, roles y despliegue, como en un trabajo de verdad.

---

## 1. Los equipos

- Los equipos **ya están conformados**. El **tamaño es flexible** (más o menos integrantes, no importa).
- En la **Clase 01** cada equipo confirma sus **roles** (ver [VISION-Y-ROLES.md](VISION-Y-ROLES.md)) y
  crea su **repositorio en GitHub** (lo hace el rol DevOps).
- Cada equipo define el **nombre y la idea** de su proyecto. La idea es **totalmente libre**: una idea
  nueva o **continuar su proyecto de grado**.

> La motivación de construir *su* proyecto es el mayor combustible del curso. No hay tema impuesto.

---

## 2. Inscripción: sin requerimientos NO se participa 📋

**Requisito de inscripción al hackathon:** cada equipo debe entregar su documento de **requerimientos**
(la [PLANTILLA-REQUERIMIENTOS.md](PLANTILLA-REQUERIMIENTOS.md) llena, subida a su repo) en la **Clase 06**.

> **Equipo sin requerimientos entregados = no participa por el premio.** Es como inscribirse a un
> concurso: sin formulario, no hay cupo. Refleja la vida real: sin alcance definido, no hay proyecto.

## 3. Qué debe entregar cada equipo (mínimos técnicos)

La **idea es libre** y el **stack también** (vanilla o framework — ver [ELEGIR-STACK.md](ELEGIR-STACK.md)).
Para competir, el proyecto debe **demostrar lo que aprendimos**:

- [ ] **Frontend** propio: HTML/CSS/JS **o** un framework (React/Next).
- [ ] **Backend** con al menos una API: Node.js + Express **o** NestJS/Next.js.
- [ ] **Persistencia** en una **base de datos** (SQLite, PostgreSQL, MySQL… la que prefieran).
- [ ] **Desplegado** y accesible por un **link** (ver [../DESPLIEGUE-CICD.md](../DESPLIEGUE-CICD.md)).
- [ ] Trabajo en equipo real en **Git** (ramas, PRs, commits de todos).

**Suma puntos:**
- [ ] **Tiempo real con Socket.IO.**

> Vanilla y framework son **igual de válidos**: se juzga que funcione y esté bien hecho, no la moda.

---

## 4. Calendario del hackathon (encaja con las 16 clases)

| Momento | Clases | Qué pasa con el proyecto de equipo |
|---------|--------|-------------------------------------|
| **Kickoff** | 01 | Confirman roles, crean el repo y **publican su primera página** (GitHub Pages) |
| **Diseño** | 02–05 | Mientras hacen su portafolio, el equipo define su idea: bocetos, pantallas, plan |
| **Inscripción** 📋 | 06 | **Entregan requerimientos** (obligatorio para participar). Confirman alcance y roles |
| **Construcción** | 07–14 | Construyen su proyecto aplicando cada técnica; **despliegan al final de cada clase** |
| **Integración** | 15 | Unir todo, resolver conflictos, pulir, dejar el **CI/CD** completo |
| **Demo Day** 🏆 | 16 | Cada equipo presenta su proyecto **en vivo por su link**; se juzga; **premio al ganador** |

> **Despliegue continuo:** desde la Clase 01, cada clase **cierra desplegando**. Así el instructor ve
> el **avance real** entrando a la página de cada proyecto en cualquier momento. Los equipos también
> avanzan y despliegan en casa y en las clases con el otro instructor.

---

## 5. Cómo se juzga (rúbrica del premio)

Cada equipo se evalúa sobre **100 puntos**. El instructor (o un jurado invitado) puntúa en la Demo Day:

| Criterio | Puntos | Qué se mira |
|----------|--------|-------------|
| **Funciona y está desplegado** | 30 | El proyecto corre sin caerse y es **accesible por su link** (desplegado gratis) |
| **Feature técnica destacada** | 20 | Uso de **tiempo real** (Socket.IO) u otra técnica ambiciosa bien lograda |
| **Trabajo en equipo (Git)** | 20 | Historial: commits de **todos**, ramas, PRs revisados. No un solo héroe |
| **Creatividad de la idea** | 15 | Idea propia, útil o divertida; que se note el sello del equipo |
| **Calidad y presentación** | 15 | Código ordenado, y una demo clara donde **expliquen lo que hicieron** |

> **Antitrampa:** el 20% de Git evita que "uno hace todo". Se revisa que **cada integrante** tenga
> commits reales. Un proyecto brillante hecho por una sola persona **no gana**.

### Puntos extra (desempate)
- Varias pantallas/salas o navegación entre ellas.
- Personalización por usuario (perfiles, avatares, temas).
- Objetos, datos o contenido que persisten y se editan (CRUD completo).
- Despliegue con **CI/CD** (se actualiza solo al hacer `push`), no solo subido a mano.

---

## 6. El premio 🏆

El premio para el equipo ganador es **que su proyecto viva en internet como uno profesional**, con
acompañamiento para operarlo:

### Premio principal: un VPS + dominio + asesoría
- **Un VPS de Hostinger por 1 año** donde alojan su proyecto, con **dominio gratis incluido** (Hostinger
  regala 1 dominio el primer año con sus planes de VPS). A diferencia de los planes gratuitos, un VPS
  **no "duerme"** y corre Node.js sin límites de horas.
- **Asesoría para montar todo el VPS**: configuración con **seguridad**, **gestión** y **mantenimiento**
  durante toda la vigencia del VPS. Es decir, no solo se les da el servidor: se les acompaña a operarlo
  como en un entorno real.

**Precios de referencia (Hostinger VPS, planes con dominio gratis 1 año — verificar valores vigentes):**

| Plan | Precio promo | Recursos | Para qué alcanza |
|------|--------------|----------|------------------|
| **KVM 1** | ~6,49 USD/mes | 1 vCPU · 4 GB RAM · 50 GB NVMe · 4 TB | Suficiente para el proyecto del curso (Node + BD) |
| **KVM 2** (popular) | ~8,79 USD/mes | 2 vCPU · 8 GB RAM · 100 GB NVMe · 8 TB | Holgado para apps medianas (stack MERN, etc.) |

> Los precios promocionales aplican con contratación a 2 años y **suben en la renovación** (KVM 1 renueva
> ~11,99 USD/mes). Para un premio de 1 año, calcula el costo real según el plazo. **Confirma precios y la
> oferta de dominio gratis en hostinger.com antes de anunciarlo**, que cambian con el tiempo.

### Alternativas / complementos (según presupuesto)
- **Certificado formal** "Equipo ganador del Hackathon" (suma a la hoja de vida) · **puntos extra** ·
  **carta de recomendación** / recomendación en LinkedIn · su proyecto como **demo oficial** del curso.
- **Detalles físicos:** Raspberry Pi, periféricos, bonos, *swag*.

> **Idea de financiación:** un **patrocinador** (empresa de software de Bucaramanga o el mismo SENA)
> puede cubrir el VPS/dominio a cambio de ver las demos y conocer al talento. Es común y les interesa.

> **Justicia:** el premio es del **equipo** y la rúbrica exige aporte de todos (20% Git). Puedes sumar
> un reconocimiento al "mejor colaborador" según el historial de commits.

---

## 7. Reglas de convivencia del hackathon

- **Todos programan.** El rol es de liderazgo de un área, no de "yo no toco código".
- **`main` siempre funciona.** Lo roto vive en ramas (ver [FLUJO-DE-TRABAJO-GIT.md](FLUJO-DE-TRABAJO-GIT.md)).
- **Se vale inspirarse** en la demo de clase y en otros equipos, pero cada proyecto debe ser **propio**.
- **Pedir ayuda es válido** (a compañeros o instructor). No es examen individual: es trabajo en equipo.
- **La demo se prepara.** Tener claro quién muestra qué en los ~5 minutos de la Demo Day.
