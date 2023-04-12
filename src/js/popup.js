const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup-close-btn');

// Mostrar el pop-up
function showPopup() {
  popup.classList.add('show');
}

// Ocultar el pop-up
function hidePopup() {
  popup.classList.remove('show');
  setTimeout(() => popup.style.display = "none", 301);
}

// Mostrar el pop-up después de que la página se haya cargado
window.addEventListener('load', showPopup);

// Ocultar el pop-up cuando se hace clic en el botón de cerrar
closeBtn.addEventListener('click', hidePopup);

