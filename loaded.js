window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none"; // Oculta la animación de carga
    document.body.classList.add("loaded"); // Muestra el contenido con una transición suave
  });
  