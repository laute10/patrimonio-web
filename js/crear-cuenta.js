// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Crear cuenta
// Validaciones en el cliente, con el mensaje junto a cada campo: nombre
// obligatorio, formato de correo (expresión regular), longitud mínima de
// contraseña y coincidencia de ambas contraseñas.
// Todavía no hay backend conectado: si todo es válido, simula la creación
// de la cuenta y redirige a Inicio.
// ==========================================================================

const formCrearCuenta = document.getElementById("form-crear-cuenta");
const inputNombre = document.getElementById("cuenta-nombre");
const inputCorreo = document.getElementById("cuenta-correo");
const inputContrasena = document.getElementById("cuenta-contrasena");
const inputConfirmar = document.getElementById("cuenta-confirmar");

limpiarAlEscribir(formCrearCuenta);

formCrearCuenta.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  const correo = inputCorreo.value.trim();
  const contrasena = inputContrasena.value;
  const confirmar = inputConfirmar.value;
  let hayErrores = false;

  [inputNombre, inputCorreo, inputContrasena, inputConfirmar].forEach(limpiarErrorCampo);

  if (nombre === "") {
    mostrarErrorCampo(inputNombre, "Ingresá tu nombre.");
    hayErrores = true;
  }

  if (correo === "") {
    mostrarErrorCampo(inputCorreo, "Ingresá tu correo electrónico.");
    hayErrores = true;
  } else if (!regexCorreo.test(correo)) {
    mostrarErrorCampo(inputCorreo, "El correo no tiene un formato válido (ej. nombre@correo.com).");
    hayErrores = true;
  }

  if (contrasena === "") {
    mostrarErrorCampo(inputContrasena, "Creá una contraseña.");
    hayErrores = true;
  } else if (contrasena.length < 8) {
    mostrarErrorCampo(inputContrasena, "La contraseña debe tener al menos 8 caracteres.");
    hayErrores = true;
  }

  if (confirmar === "") {
    mostrarErrorCampo(inputConfirmar, "Repetí tu contraseña.");
    hayErrores = true;
  } else if (contrasena !== confirmar) {
    mostrarErrorCampo(inputConfirmar, "Las contraseñas no coinciden.");
    hayErrores = true;
  }

  if (hayErrores) {
    enfocarPrimerError(formCrearCuenta);
    return;
  }

  // Simulación temporal: más adelante esto se reemplaza por la
  // creación real de la cuenta contra el backend.
  window.location.href = "inicio.html";
});
