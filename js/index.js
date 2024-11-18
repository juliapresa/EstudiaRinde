// Selecciona todas las imágenes con la clase "hoverImage"
const images = document.querySelectorAll(".hoverImage");

// Recorre cada imagen y agrega los eventos
images.forEach(image => {
    // Guarda la ruta original y la de hover en variables
    const originalImage = image.src;
    const hoverImage = image.getAttribute("data-hover");

    // Cambiar la imagen al pasar el mouse
    image.addEventListener("mouseover", () => {
        image.src = hoverImage;
            // Volver a la imagen original cuando se quita el mouse
    });
    image.addEventListener("mouseout", () => {
        image.src = originalImage;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close-btn");
  
    // Mapeo de clases a las imágenes que deben mostrarse
    const imageMap = {
      imgCarruselUnoGraficas: "./assets/grafica.png",
      imgCarruselDosGraficas: "./assets/grafica.png",
      imgCarruselUnoOcupaciones: "./assets/graficaOcupaciones.png",
      imgCarruselDosOcupaciones: "./assets/graficaOcupaciones.png",
      imgCarruselUnoIngresos: "./assets/graficaIngresos.png",
      imgCarruselDosIngresos: "./assets/graficaIngresos.png",
    };
  
    // Evento para abrir el modal
    document.querySelectorAll(".imgCarruselUnoGraficas, .imgCarruselDosGraficas, .imgCarruselUnoOcupaciones, .imgCarruselDosOcupaciones, .imgCarruselUnoIngresos, .imgCarruselDosIngresos").forEach(img => {
      img.addEventListener("click", () => {
        const imagePath = imageMap[img.classList[0]];
        if (imagePath) {
          modalImage.src = imagePath;
          modal.style.display = "flex";
        }
      });
    });
  
    // Evento para cerrar el modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      modalImage.src = "";
    });
  
    // Cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        modalImage.src = "";
      }
    });
  });
// Seleccionar todos los elementos que quieres animar
const animadas = document.querySelectorAll('.animada');

// Crear un observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar las clases de animación de la librería
            entry.target.classList.add('animate__animated', 'animate__fadeIn', 'animate__zoomIn');
            // Dejar de observar el elemento después de animarlo
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Activar cuando el 10% del elemento es visible
});

// Observar cada elemento animado
animadas.forEach(element => observer.observe(element));
