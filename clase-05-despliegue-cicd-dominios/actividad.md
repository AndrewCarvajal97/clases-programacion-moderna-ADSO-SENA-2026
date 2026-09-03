# Actividad — Clase 05 (Despliegue)

**Objetivo:** dejar tu **portafolio publicado en internet** con un link real, y practicar el flujo
automático. **Necesita internet:** hazlo en casa o donde tengas buena conexión.
**Se entrega:** el **link** de tu portafolio funcionando.

---

## Parte A — Publica tu portafolio
1. Sube tu portafolio a un repositorio de GitHub:
   ```bash
   git add .
   git commit -m "Portafolio listo para publicar"
   git push
   ```
2. En el repo: **Settings → Pages** → Branch `main` → **Save**.
3. Espera ~1 min y **abre tu link** (`https://tu-usuario.github.io/mi-portafolio`).

## Parte B — Comprueba el flujo automático
1. Cambia algo pequeño en tu portafolio (un color, un texto).
2. `git add . && git commit -m "Cambio de prueba" && git push`.
3. Vuelve a abrir tu link y confirma que **se actualizó solo** (dale F5 tras un minuto).

## Parte C — Dominio (opcional)
- Solicita el **GitHub Student Developer Pack** (`education.github.com`) para tu **dominio gratis**.
  Se puede verificar con correo institucional **o** con carnet/constancia del SENA.

---

## Reto extra ⭐
- Investiga cómo publicar el mismo portafolio en **Netlify** (arrastrando la carpeta o conectando el
  repo). Compara lo fácil que es.
- Agrega un `README.md` a tu repo con una captura y el link a tu portafolio publicado.

---

### Criterios de logro
- [ ] Mi portafolio está **publicado** y el link funciona.
- [ ] Comprobé que al hacer `push` la página **se actualiza sola**.
- [ ] Entiendo qué es CI/CD y dónde se despliega cada tipo de proyecto.

> **Recuerda:** de aquí en adelante, **cada clase cierra desplegando** tu avance.
