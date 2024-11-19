document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const menuOverlay = document.getElementById("menu-overlay");
  
    // Alternar visibilidade do menu e overlay
    menuButton.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
      menuOverlay.style.display = sideMenu.classList.contains("active") ? "block" : "none";
    });
  
    // Fechar o menu ao clicar no overlay
    menuOverlay.addEventListener("click", () => {
      sideMenu.classList.remove("active");
      menuOverlay.style.display = "none";
    });
  });