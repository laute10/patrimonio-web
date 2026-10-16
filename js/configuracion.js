// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Configuración
// - Panel lateral "Editar datos" (mismo patrón que el resto de los paneles)
// - Modal centrado de confirmación antes de cerrar sesión
// Ambos comparten el mismo overlay de fondo.
// ==========================================================================

const overlay = document.getElementById("overlay");
const panelEditarDatos = document.getElementById("panel-editar-datos");
const modalCerrarSesion = document.getElementById("modal-cerrar-sesion");

const btnEditarDatos = document.getElementById("btn-editar-datos");
const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
const btnCancelarCierre = document.getElementById("btn-cancelar-cierre");
const botonesCerrarPanel = document.querySelectorAll("[data-cerrar-panel]");

function cerrarTodo() {
  panelEditarDatos.classList.remove("panel--abierto");
  modalCerrarSesion.classList.add("oculto");
  overlay.classList.remove("overlay--visible");
}

btnEditarDatos.addEventListener("click", function () {
  panelEditarDatos.classList.add("panel--abierto");
  overlay.classList.add("overlay--visible");
});

btnCerrarSesion.addEventListener("click", function () {
  modalCerrarSesion.classList.remove("oculto");
  overlay.classList.add("overlay--visible");
});

btnCancelarCierre.addEventListener("click", cerrarTodo);

botonesCerrarPanel.forEach(function (boton) {
  boton.addEventListener("click", cerrarTodo);
});

overlay.addEventListener("click", cerrarTodo);

document.getElementById("form-editar-datos").addEventListener("submit", function (evento) {
  evento.preventDefault();
  cerrarTodo();
});
