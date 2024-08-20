function toggleAnimation() {
  const hiddenPhotos = document.querySelectorAll('.dropdown-contentfot');
  const button = document.querySelector('.dropdown-buttonfot');

  hiddenPhotos.forEach(photo => {
      if (photo.classList.contains('showfot')) {
          photo.classList.remove('showfot');
      } else {
          photo.classList.add('showfot');
      }
  });

  if (button.innerText === "Mostrar más") {
      button.innerText = "Mostrar menos";
  } else {
      button.innerText = "Mostrar más";
  }
}
