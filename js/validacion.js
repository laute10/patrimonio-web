// ==========================================================================
// PATRIMONIO - Funciones compartidas de validación de formularios
// Cada campo tiene al lado un <p id="<id-del-input>-error"> donde se escribe
// el mensaje. Además se marca el input con aria-invalid y se lo vincula al
// mensaje con aria-describedby, para que los lectores de pantalla lo lean.
// ==========================================================================

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mostrarErrorCampo(input, texto) {
  const mensaje = document.getElementById(input.id + "-error");
  mensaje.textContent = texto;
  mensaje.classList.remove("oculto");
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", mensaje.id);
}

function limpiarErrorCampo(input) {
  const mensaje = document.getElementById(input.id + "-error");
  mensaje.textContent = "";
  mensaje.classList.add("oculto");
  input.removeAttribute("aria-invalid");
  input.removeAttribute("aria-describedby");
}

// Cuando el usuario corrige un campo, su error desaparece al escribir.
function limpiarAlEscribir(formulario) {
  formulario.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("input", function () {
      limpiarErrorCampo(input);
    });
  });
}

// Pone el foco en el primer campo con error (ayuda a quien usa teclado).
function enfocarPrimerError(formulario) {
  const primero = formulario.querySelector('[aria-invalid="true"]');
  if (primero) {
    primero.focus();
  }
}
