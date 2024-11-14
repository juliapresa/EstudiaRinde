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
    });

    // Volver a la imagen original cuando se quita el mouse
    image.addEventListener("mouseout", () => {
        image.src = originalImage;
    });
});
