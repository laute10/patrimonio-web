// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Inicio
// Paneles laterales y registro de gastos/ingresos (valida, actualiza
// Disponible y Patrimonio y agrega el movimiento a la lista).
// ==========================================================================

const overlay = document.getElementById("overlay");
const panelGasto = document.getElementById("panel-gasto");
const panelIngreso = document.getElementById("panel-ingreso");

const btnAbrirGasto = document.getElementById("btn-registrar-gasto");
const btnAbrirIngreso = document.getElementById("btn-registrar-ingreso");

const botonesCerrar = document.querySelectorAll("[data-cerrar-panel]");

function abrirPanel(panel) {
  panel.classList.add("panel--abierto");
  overlay.classList.add("overlay--visible");
}

function cerrarPaneles() {
  panelGasto.classList.remove("panel--abierto");
  panelIngreso.classList.remove("panel--abierto");
  overlay.classList.remove("overlay--visible");
}

btnAbrirGasto.addEventListener("click", function () {
  abrirPanel(panelGasto);
});

btnAbrirIngreso.addEventListener("click", function () {
  abrirPanel(panelIngreso);
});

botonesCerrar.forEach(function (boton) {
  boton.addEventListener("click", cerrarPaneles);
});

overlay.addEventListener("click", cerrarPaneles);

// Registrar gasto / ingreso: valida el monto, actualiza Disponible y
// Patrimonio, agrega el movimiento arriba de la lista y avisa con un mensaje.
const formGasto = document.getElementById("form-gasto");
const formIngreso = document.getElementById("form-ingreso");
const listaMovimientos = document.getElementById("lista-movimientos");
const avisoRegistro = document.getElementById("aviso-registro");
const totalPatrimonio = document.getElementById("total-patrimonio");
const totalDisponible = document.getElementById("total-disponible");

function leerPesos(elemento) {
  return Number(elemento.textContent.replace(/[^0-9]/g, ""));
}

function formatearPesos(numero) {
  return "$" + numero.toLocaleString("es-AR");
}

function registrar(formulario, tipo) {
  const inputMonto = formulario.querySelector('input[name="monto"]');
  const select = formulario.querySelector("select");
  const descripcion = formulario.querySelector('input[name="descripcion"]');
  const monto = Number(inputMonto.value);

  if (inputMonto.value === "" || monto <= 0) {
    mostrarErrorCampo(inputMonto, "Ingresá un monto mayor a cero.");
    enfocarPrimerError(formulario);
    return;
  }

  const esGasto = tipo === "gasto";
  const disponible = leerPesos(totalDisponible) + (esGasto ? -monto : monto);
  const patrimonio = leerPesos(totalPatrimonio) + (esGasto ? -monto : monto);
  totalDisponible.textContent = formatearPesos(disponible);
  totalPatrimonio.textContent = formatearPesos(patrimonio);

  const titulo = descripcion.value.trim() !== "" ? descripcion.value.trim() : select.options[select.selectedIndex].text;
  const item = document.createElement("li");
  item.className = "movimiento";
  const punto = document.createElement("span");
  punto.className = "movimiento__punto movimiento__punto--" + (esGasto ? "gasto" : "ingreso");
  const info = document.createElement("div");
  info.className = "movimiento__info";
  const spanTitulo = document.createElement("span");
  spanTitulo.className = "movimiento__titulo";
  spanTitulo.textContent = titulo.toUpperCase();
  const spanSub = document.createElement("span");
  spanSub.className = "movimiento__subtitulo";
  spanSub.textContent = (esGasto ? "GASTO" : "INGRESO") + " - HOY";
  info.append(spanTitulo, spanSub);
  const spanMonto = document.createElement("span");
  spanMonto.className = "movimiento__monto movimiento__monto--" + (esGasto ? "negativo" : "positivo");
  spanMonto.textContent = (esGasto ? "- " : "+ ") + formatearPesos(monto);
  item.append(punto, info, spanMonto);
  listaMovimientos.prepend(item);

  avisoRegistro.textContent = (esGasto ? "Gasto" : "Ingreso") + " registrado: " + formatearPesos(monto) + ".";
  avisoRegistro.classList.remove("oculto");

  formulario.reset();
  cerrarPaneles();
}

limpiarAlEscribir(formGasto);
limpiarAlEscribir(formIngreso);

formGasto.addEventListener("submit", function (evento) {
  evento.preventDefault();
  registrar(formGasto, "gasto");
});

formIngreso.addEventListener("submit", function (evento) {
  evento.preventDefault();
  registrar(formIngreso, "ingreso");
});
