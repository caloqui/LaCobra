const elementosIzquierda = document.querySelectorAll('.useri');
const elementosDerecha = document.querySelectorAll('.userp');

function mostrarElementos() {
  elementosIzquierda.forEach((elemento) => {
    const elementoPos = elemento.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementoPos < screenHeight) {
      elemento.classList.add('mostrar-integrante-i');
    }
  });

  elementosDerecha.forEach((elemento) => {
    const elementoPos = elemento.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementoPos < screenHeight) {
      elemento.classList.add('mostrar-integrante-p');
    }
  });
}

// Ejecuta la función una vez al cargar la página para mostrar elementos visibles inicialmente
mostrarElementos();

// Luego, escucha el evento scroll para mostrar elementos adicionales al hacer scroll
window.addEventListener('scroll', mostrarElementos);
