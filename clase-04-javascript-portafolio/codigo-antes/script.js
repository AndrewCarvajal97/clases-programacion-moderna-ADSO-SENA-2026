/* ============================================================
   VERSIÓN "ANTES" — TODO en un solo archivo
   ------------------------------------------------------------
   Este archivo FUNCIONA igual que la versión modular de ../codigo,
   pero está escrito "a la antigua": todo junto, variables globales,
   sin clases ni módulos. Con 140 líneas se lee más o menos… imagina
   esto con 400. Por eso, en la guía avanzada, lo separamos en clases.

   👉 Compáralo con ../codigo/js/ (misma app, código profesional).
   ============================================================ */

document.documentElement.classList.add("js");

// 👉 Cambia esto por TU usuario de GitHub
const USUARIO_GITHUB = "andrewcarvajal97";

/* ---- 1) TEMA claro / oscuro ---- */
const botonTema = document.querySelector("#btn-tema");
function temaEsOscuro() {
  const t = document.documentElement.dataset.theme;
  if (t) return t === "dark";
  return matchMedia("(prefers-color-scheme: dark)").matches;
}
function actualizarIconoTema() {
  botonTema.querySelector("i").className = temaEsOscuro() ? "fa-solid fa-moon" : "fa-solid fa-sun";
}
botonTema.addEventListener("click", function () {
  document.documentElement.dataset.theme = temaEsOscuro() ? "light" : "dark";
  actualizarIconoTema();
});
actualizarIconoTema();

/* ---- 2) NAV que aparece al hacer scroll ---- */
const nav = document.querySelector("#nav");
addEventListener("scroll", function () {
  nav.classList.toggle("is-visible", scrollY > innerHeight * 0.7);
});

/* ---- 3) REVEAL al hacer scroll ---- */
const observador = new IntersectionObserver(function (entradas) {
  for (const entrada of entradas) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("is-visible");
      observador.unobserve(entrada.target);
    }
  }
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(function (el, i) {
  el.style.transitionDelay = (i % 4 * 0.08) + "s";
  observador.observe(el);
});

/* ---- 4) Contador animado ---- */
function animarContador(elemento, destino) {
  const duracion = 900;
  const inicio = performance.now();
  function paso(ahora) {
    const t = Math.min((ahora - inicio) / duracion, 1);
    elemento.textContent = Math.round(destino * t);
    if (t < 1) requestAnimationFrame(paso);
  }
  requestAnimationFrame(paso);
}

/* ---- 5) GITHUB con fetch ---- */
async function cargarGitHub(usuario) {
  const contenedorRepos = document.querySelector("#gh-repos");
  try {
    const res = await fetch("https://api.github.com/users/" + usuario);
    if (!res.ok) { contenedorRepos.innerHTML = "<p class='muted'>No pude cargar GitHub 😕</p>"; return; }
    const perfil = await res.json();

    document.querySelector("#gh-avatar").src = perfil.avatar_url;
    animarContador(document.querySelector("#stat-repos"), perfil.public_repos);
    animarContador(document.querySelector("#stat-followers"), perfil.followers);
    animarContador(document.querySelector("#stat-following"), perfil.following);

    const repos = await (await fetch(perfil.repos_url + "?sort=updated&per_page=6")).json();
    contenedorRepos.innerHTML = "";
    for (const repo of repos) {
      const desc = repo.description || "Sin descripción";
      const card = document.createElement("article");
      card.className = "repo reveal";
      card.innerHTML =
        '<h3><i class="fa-solid fa-book-bookmark"></i> ' + repo.name + "</h3>" +
        "<p>" + desc + "</p>" +
        '<div class="repo__foot">' +
        "<span>⭐ " + repo.stargazers_count + " · " + (repo.language || "—") + "</span>" +
        '<a href="' + repo.html_url + '" target="_blank">Ver →</a>' +
        "</div>";
      contenedorRepos.appendChild(card);
      observador.observe(card);
    }
  } catch (error) {
    contenedorRepos.innerHTML = "<p class='muted'>Sin conexión para cargar GitHub ahora.</p>";
  }
}

/* ---- 6) FORMULARIO — validación + confeti (demo, sin envío real) ---- */
const formulario = document.querySelector("#form-contacto");
const mensajeForm = document.querySelector("#form-msg");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nombre = evento.target.nombre.value.trim();
  if (nombre === "") {
    mensajeForm.textContent = "⚠️ Escribe tu nombre, por favor.";
    mensajeForm.style.color = "var(--accent)";
    return;
  }
  mensajeForm.textContent = "✅ ¡Gracias, " + nombre + "! Mensaje recibido (demo).";
  mensajeForm.style.color = "var(--link)";
  evento.target.reset();
  // 'confetti' es global (vino del <script> de la CDN en el <head>)
  if (typeof confetti === "function") {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.8 } });
  }
});

/* Arrancamos */
cargarGitHub(USUARIO_GITHUB);
