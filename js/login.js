// ==========================================================================
// PATRIMONIO - Lógica de la pantalla Login
// Valida cada campo antes de continuar y muestra el error junto al campo.
// Por ahora no hay backend conectado, así que si los datos tienen formato
// válido simulamos el ingreso y redirigimos a Inicio.
// Cuando armemos el backend, acá va la petición real (fetch) para validar
// las credenciales contra la base de datos.
// ==========================================================================

const formLogin = document.getElementById("form-login");
const inputCorreo = document.getElementById("login-correo");
const inputContrasena = document.getElementById("login-contrasena");

limpiarAlEscribir(formLogin);

formLogin.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = inputCorreo.value.trim();
  const contrasena = inputContrasena.value;
  let hayErrores = false;

  limpiarErrorCampo(inputCorreo);
  limpiarErrorCampo(inputContrasena);

  if (correo === "") {
    mostrarErrorCampo(inputCorreo, "Ingresá tu correo electrónico.");
    hayErrores = true;
  } else if (!regexCorreo.test(correo)) {
    mostrarErrorCampo(inputCorreo, "El correo no tiene un formato válido (ej. nombre@correo.com).");
    hayErrores = true;
  }

  if (contrasena === "") {
    mostrarErrorCampo(inputContrasena, "Ingresá tu contraseña.");
    hayErrores = true;
  }

  if (hayErrores) {
    enfocarPrimerError(formLogin);
    return;
  }

  // Simulación temporal: más adelante esto se reemplaza por la
  // validación real contra el backend.
  window.location.href = "inicio.html";
});
