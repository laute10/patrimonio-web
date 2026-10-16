// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Tarjetas
// - Abre/cierra el panel "Agregar tarjeta" (mismo patrón que Inicio/Ahorros)
// - Filtra el historial de períodos combinando tarjeta + estado,
//   igual que el filtrado por tipo + búsqueda de Movimientos.
// ==========================================================================

const overlay = document.getElementById("overlay");
const panelAgregarTarjeta = document.getElementById("panel-agregar-tarjeta");
const btnAgregarTarjeta = document.getElementById("btn-agregar-tarjeta");
const botonesCerrar = document.querySelectorAll("[data-cerrar-panel]");

function abrirPanel(panel) {
  panel.classList.add("panel--abierto");
  overlay.classList.add("overlay--visible");
}

function cerrarPaneles() {
  panelAgregarTarjeta.classList.remove("panel--abierto");
  overlay.classList.remove("overlay--visible");
}

btnAgregarTarjeta.addEventListener("click", function () {
  abrirPanel(panelAgregarTarjeta);
});

botonesCerrar.forEach(function (boton) {
  boton.addEventListener("click", cerrarPaneles);
});

overlay.addEventListener("click", cerrarPaneles);

document.getElementById("form-agregar-tarjeta").addEventListener("submit", function (evento) {
  evento.preventDefault();
  cerrarPaneles();
});

// Filtros del historial de períodos

const filtroTarjeta = document.getElementById("filtro-tarjeta");
const filtroEstado = document.getElementById("filtro-estado");
const itemsHistorial = document.querySelectorAll(".historial-item");

function aplicarFiltrosHistorial() {
  const tarjetaElegida = filtroTarjeta.value;
  const estadoElegido = filtroEstado.value;

  itemsHistorial.forEach(function (item) {
    const coincideTarjeta = tarjetaElegida === "todas" || item.dataset.tarjeta === tarjetaElegida;
    const coincideEstado = estadoElegido === "todos" || item.dataset.estado === estadoElegido;

    item.classList.toggle("oculto", !(coincideTarjeta && coincideEstado));
  });
}

filtroTarjeta.addEventListener("change", aplicarFiltrosHistorial);
filtroEstado.addEventListener("change", aplicarFiltrosHistorial);
