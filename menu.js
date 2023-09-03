const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

let menuAbierto = false;

dropdownButton.addEventListener("click", function () {
  if (menuAbierto) {
    dropdownContent.classList.remove("show");
    dropdownButton.textContent = "Menú";
  }
  else {
    dropdownContent.classList.add("show");
    dropdownButton.textContent = "Cerrar";
  }
  menuAbierto = !menuAbierto;
});
