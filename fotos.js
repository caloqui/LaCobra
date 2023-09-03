const dropdownButtonfot = document.querySelector(".dropdown-buttonfot");
const dropdownContentfot = document.querySelector(".dropdown-contentfot");

let fotosAbierto = false;

dropdownButtonfot.addEventListener("click", function () {
  if (fotosAbierto) {
    dropdownContent.classList.remove("showfot");
    dropdownButtonfot.textContent = "Mostrar más";
  }
  else {
    dropdownContentfot.classList.add("showfot");
    dropdownButtonfot.textContent = "Mostrar menos";
  }
  fotosAbierto = !fotosAbierto;
});