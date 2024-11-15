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
  