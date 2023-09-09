function toggleAnimation() {
    const button = document.querySelector('.dropdown-butint');
    button.style.animationPlayState = 'running'; // Inicia la animación
    setTimeout(function() {
      button.style.animationPlayState = 'paused'; // Pausa la animación después de 2 segundos
    }, 2000);
  }
  
  // Iniciar la animación automáticamente
  setInterval(toggleAnimation, 7000); // Iniciar la animación cada 7 segundos (5s de pausa + 2s de activación)
  