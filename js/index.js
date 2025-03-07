const images = document.querySelectorAll(".hoverImage");

images.forEach(image => {
    const originalImage = image.src;
    const hoverImage = image.getAttribute("data-hover");

    image.addEventListener("mouseover", () => {
        image.src = hoverImage;
    });
    image.addEventListener("mouseout", () => {
        image.src = originalImage;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-btn");
  const imageMap = {
      desempleo: "./assets/grafica.png",
      ocupaciones: "./assets/graficaOcupaciones.png",
      ingresos: "./assets/graficaIngresos.png",
  };

  document.querySelectorAll(".desempleo, .ocupaciones, .ingresos").forEach(img => {
      img.addEventListener("click", () => {
          const imageClass = Object.keys(imageMap).find(cls => img.classList.contains(cls));

          if (imageClass) {
              modalImage.src = imageMap[imageClass];
              modal.style.display = "flex";
          }
      });
  });

  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      modalImage.src = "";
  });

  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
          modalImage.src = "";
      }
  });
});
