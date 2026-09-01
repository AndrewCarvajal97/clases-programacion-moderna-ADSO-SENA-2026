# Versión "ANTES" — un solo archivo (para comparar en clase)

Este es **el mismo portafolio** que `../codigo`, pero escrito **a la antigua**:

- Todo el **contenido** está clavado en `index.html` (nombre, skills…).
- Todo el **JavaScript** vive en **un solo `script.js`**, con variables globales y sin clases.

**Funciona igual de bien** que la versión modular. Sirve para mostrar en vivo el **contraste**:

| | `codigo-antes/` (ANTES) | `codigo/` (DESPUÉS / PRO) |
|---|---|---|
| Contenido | Clavado en el HTML | En `datos.json` |
| JavaScript | 1 archivo, global | Clases en `js/` (POO + módulos) |
| Correo | Demo (alert) | Envío real (Web3Forms) |
| Mantener | Difícil al crecer | Cada cosa en su sitio |

## Cómo darlo en clase
1. Abre **este** (`codigo-antes`) y muestra que funciona. Pregunta: *"¿dónde cambio el formulario?"*
   → hay que buscar entre todo el archivo.
2. Abre **`codigo`** (el modular) y muestra que **hace lo mismo**, pero cada responsabilidad está en su
   archivo. Ese es el "ahá" de POO + módulos.

> Ábrelo con **Live Server** (clic derecho en `index.html` → *Open with Live Server*). El `fetch` a
> GitHub necesita internet; el resto se ve igual sin conexión.
