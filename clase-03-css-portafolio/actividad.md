# Actividad — Clase 03 (CSS)

**Objetivo:** dejar tu **portafolio v2** bien estilizado: colores y tipografía a tu gusto, que se vea
bien en el celular, y sumarle 2 propiedades nuevas que **entiendas**.
**Tiempo estimado:** 45–60 min.
**Se entrega:** el `styles.css` (y el `index.html` con el `<link>`) en tu repo, con un commit.

---

## Parte A — Hazlo tuyo (colores y tipografía)
Parte de la plantilla de `styles.css` y ajústala a tu estilo:

1. Cambia la **paleta de colores** (fondo, header, secciones). Que combine y se lea bien.
2. Ajusta la **tipografía**: prueba otro `font-family` del sistema (`Georgia`, `Verdana`, `Tahoma`...)
   y afina `font-size` y `line-height`.
3. Revisa el **box model**: dale aire con `padding` y separa las secciones con `margin`.

> **Recuerda la regla del curso:** nada de fuentes de Google ni recursos de internet. Solo fuentes del
> sistema, para que funcione sin conexión.

## Parte B — Que se vea bien en el celular
1. Prueba tu portafolio en modo dispositivo (`F12` → icono de celular).
2. Ajusta tu **media query** (`@media (max-width: 600px)`) para que en pantallas pequeñas nada se salga
   ni se vea apretado. El menú debería apilarse en columna.

## Parte C — Investiga 2 propiedades nuevas
Agrega al menos **dos** propiedades de CSS que no vimos en clase, por ejemplo:

- `box-shadow` (sombra a las secciones) · `transition` (cambios suaves) · `:hover` (efecto al pasar el
  mouse) · `text-align` · `letter-spacing` · `opacity`.

> Si te atascas, pregúntale al **asistente de IA**: *"¿Qué hace `box-shadow` en CSS y cómo se escribe?
> Dame un ejemplo simple."* — pero recuerda: **entiende** lo que agregas y sé capaz de explicar qué hace
> cada valor. No lo pegues sin más.

## Parte D — Guarda en Git
```bash
git add .
git commit -m "Pule portafolio v2: colores, tipografia y responsive"
```

---

## Reto extra (opcional) ⭐
- Agrega un efecto `:hover` a los enlaces del `nav` (que cambien de color al pasar el mouse).
- Ponle `box-shadow` a las secciones para que parezcan tarjetas "flotando".
- Investiga las **variables CSS** (`:root { --color-principal: #2563eb; }`) y usa una para tu color
  principal en varios lugares.

---

### Criterios de logro
- [ ] Mi portafolio tiene mi **propia paleta** de colores (no la de la plantilla tal cual).
- [ ] Ajusté la **tipografía** con fuentes del sistema (sin recursos externos).
- [ ] Se ve bien en **celular** gracias a mi media query.
- [ ] Agregué **2 propiedades nuevas** y entiendo qué hacen.
- [ ] Hice commit de mi avance.

> **Recuerda:** en la Clase 04 le sumamos **JavaScript** (interactividad). Deja tu v2 bien pulida para
> construir sobre ella.
