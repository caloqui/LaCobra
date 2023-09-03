const dropdownButtonint = document.querySelector(".dropdown-butint");
const dropdownContentint = document.querySelector(".dropdown-int");

let integrantesAbierto = false;

dropdownButtonint.addEventListener("click", function () {
  console.log("Haciendo clic en el botón");
  if (integrantesAbierto) {
    dropdownContentint.classList.remove("showint");
    dropdownButtonint.textContent = "Mostrar más";
  }
  else {
    dropdownContentint.classList.add("showint");
    dropdownButtonint.textContent = "Mostrar menos";
  }
  integrantesAbierto = !integrantesAbierto;
});