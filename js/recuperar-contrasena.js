// ==========================================================================
// PATRIMONIO - Lógica de Recuperar contraseña
// Valida el correo y muestra el error junto al campo. Por ahora no hay
// backend ni envío de correos real: si el formato es válido, se muestra un
// mensaje de éxito y se oculta el campo.
// ==========================================================================

const formRecuperar = document.getElementById("form-recuperar");
const inputCorreo = document.getElementById("recuperar-correo");
const mensajeExito = document.getElementById("recuperar-exito");
const campoCorreo = document.getElementById("recuperar-campo");
const botonEnviar = document.getElementById("recuperar-boton");

limpiarAlEscribir(formRecuperar);

formRecuperar.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = inputCorreo.value.trim();
  limpiarErrorCampo(inputCorreo);

  if (correo === "") {
    mostrarErrorCampo(inputCorreo, "Ingresá tu correo electrónico.");
    inputCorreo.focus();
    return;
  }

  if (!regexCorreo.test(correo)) {
    mostrarErrorCampo(inputCorreo, "El correo no tiene un formato válido (ej. nombre@correo.com).");
    inputCorreo.focus();
    return;
  }

  campoCorreo.classList.add("oculto");
  botonEnviar.classList.add("oculto");
  mensajeExito.classList.remove("oculto");
});
