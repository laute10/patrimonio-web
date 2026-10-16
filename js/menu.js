// ==========================================================================
// PATRIMONIO - Menú hamburguesa (solo se ve en pantallas chicas)
// Abre y cierra la navegación principal y mantiene actualizado
// aria-expanded para que los lectores de pantalla sepan si está abierto.
// ==========================================================================

const botonMenu = document.getElementById("nav-toggle");
const menuPrincipal = document.getElementById("menu-principal");

function alternarMenu() {
  const abierto = menuPrincipal.classList.toggle("nav--abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
  botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  botonMenu.textContent = abierto ? "✕" : "☰";
}

botonMenu.addEventListener("click", alternarMenu);

// Con la tecla Escape también se cierra (y el foco vuelve al botón).
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && menuPrincipal.classList.contains("nav--abierto")) {
    alternarMenu();
    botonMenu.focus();
  }
});
