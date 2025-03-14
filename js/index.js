const elements = document.querySelectorAll(".hoverText");

elements.forEach(element => {
    const originalText = element.textContent;
    const hoverText = element.getAttribute("data-hover");

    element.addEventListener("mouseover", () => {
        element.textContent = hoverText;
        element.classList.add("hover-effect"); // Aplica los estilos
    });

    element.addEventListener("mouseout", () => {
        element.textContent = originalText;
        element.classList.remove("hover-effect"); // Quita los estilos
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
