// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Movimientos
// Filtra los movimientos por tipo (tabs) y por texto buscado, combinando
// ambos filtros al mismo tiempo. Basado en el patrón de filtrado en tiempo
// real del ejercicio 3.2 (querySelectorAll, toLowerCase, trim).
// ==========================================================================

const tabsFiltro = document.querySelectorAll(".filtro-tab");
const buscador = document.getElementById("buscador-movimientos");
const items = document.querySelectorAll(".item-movimiento");
const gruposDia = document.querySelectorAll(".grupo-dia");
const estadoVacio = document.getElementById("estado-vacio");

let filtroActivo = "todos";

function aplicarFiltros() {
  const texto = buscador.value.toLowerCase().trim();
  let algunoVisible = false;

  items.forEach(function (item) {
    const coincideTipo = filtroActivo === "todos" || item.dataset.tipo === filtroActivo;
    const coincideTexto = item.dataset.texto.includes(texto);
    const visible = coincideTipo && coincideTexto;

    item.classList.toggle("oculto", !visible);

    if (visible) {
      algunoVisible = true;
    }
  });

  // Oculta el encabezado de un día si no le quedó ningún movimiento visible.
  gruposDia.forEach(function (grupo) {
    const tieneVisibles = grupo.querySelectorAll(".item-movimiento:not(.oculto)").length > 0;
    grupo.classList.toggle("oculto", !tieneVisibles);
  });

  estadoVacio.classList.toggle("oculto", algunoVisible);
}

tabsFiltro.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabsFiltro.forEach(function (otraTab) {
      otraTab.classList.remove("filtro-tab--activo");
    });
    tab.classList.add("filtro-tab--activo");

    filtroActivo = tab.dataset.filtro;
    aplicarFiltros();
  });
});

buscador.addEventListener("input", aplicarFiltros);
