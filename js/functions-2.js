//UI Menu
const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu")

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
})

// Funcion para expander Imagenes de Artistas

const artistGalery = (imgs) => {
    const expandImg = document.querySelector(".expandedImg");
    const imgText = document.querySelector(".imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

// Quitar la imagen expandida

const closeButton = document.querySelector(".closebtn");

closeButton.addEventListener("click", () => {
    closeButton.parentElement.style.display = "none"
});
