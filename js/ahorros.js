// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Ahorros
// Igual que en Inicio: por ahora solo abre/cierra los paneles laterales.
// La lógica real (crear objetivo, mover dinero entre Disponible y Ahorros)
// se suma cuando armemos el modelo financiero.
// ==========================================================================

const overlay = document.getElementById("overlay");
const panelCrearObjetivo = document.getElementById("panel-crear-objetivo");
const panelAgregarAhorro = document.getElementById("panel-agregar-ahorro");

const btnCrearObjetivo = document.getElementById("btn-crear-objetivo");
const btnAgregarAhorro = document.getElementById("btn-agregar-ahorro");

const botonesCerrar = document.querySelectorAll("[data-cerrar-panel]");

function abrirPanel(panel) {
  panel.classList.add("panel--abierto");
  overlay.classList.add("overlay--visible");
}

function cerrarPaneles() {
  panelCrearObjetivo.classList.remove("panel--abierto");
  panelAgregarAhorro.classList.remove("panel--abierto");
  overlay.classList.remove("overlay--visible");
}

btnCrearObjetivo.addEventListener("click", function () {
  abrirPanel(panelCrearObjetivo);
});

btnAgregarAhorro.addEventListener("click", function () {
  abrirPanel(panelAgregarAhorro);
});

botonesCerrar.forEach(function (boton) {
  boton.addEventListener("click", cerrarPaneles);
});

overlay.addEventListener("click", cerrarPaneles);

document.getElementById("form-crear-objetivo").addEventListener("submit", function (evento) {
  evento.preventDefault();
  cerrarPaneles();
});

document.getElementById("form-agregar-ahorro").addEventListener("submit", function (evento) {
  evento.preventDefault();
  cerrarPaneles();
});
