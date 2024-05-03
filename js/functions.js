console.log("hola mundo!")

// Movimiento de las Imagenes
const mainBase = document.querySelector(".base");

const baseImage = mainBase.firstElementChild;

baseImage.addEventListener("mouseenter", () => {
    baseImage.style.transform = "scale(1.10)";
    baseImage.style.transition = "all 0.50s ease-in";
})

baseImage.addEventListener("mouseleave", () => {
    baseImage.style.transform = "scale(1)";
    baseImage.style.transition = "all 0.50s ease-in";
})

const downloadsMain = document.querySelector(".downloadsMain");
const playStoreMain = downloadsMain.firstElementChild;
const appStoreMain = downloadsMain.lastElementChild;

appStoreMain.addEventListener("mouseenter", () => {
    appStoreMain.style.transform = "scale(1.05)";
    appStoreMain.style.transition = "all 0.50s ease-in";
})

appStoreMain.addEventListener("mouseleave", () => {
    appStoreMain.style.transform = "scale(1)";
    appStoreMain.style.transition = "all 0.50s ease-out";
})

playStoreMain.addEventListener("mouseenter", () => {
    playStoreMain.style.transform = "scale(1.05)";
    playStoreMain.style.transition = "all 0.50s ease-in";
})

playStoreMain.addEventListener("mouseleave", () => {
    playStoreMain.style.transform = "scale(1)";
    playStoreMain.style.transition = "all 0.50s ease-out";
})

const downloadsBottom = document.querySelector(".bottomDownloads");
const appStoreBottom = downloadsBottom.lastElementChild;
const playStoreBottom = downloadsBottom.firstElementChild;

appStoreBottom.addEventListener("mouseenter", () => {
    appStoreBottom.style.transform = "scale(1.05)";
    appStoreBottom.style.transition = "all 0.50s ease-in";
})

appStoreBottom.addEventListener("mouseleave", () => {
    appStoreBottom.style.transform = "scale(1)";
    appStoreBottom.style.transition = "all 0.50s ease-out";
})

playStoreBottom.addEventListener("mouseenter", () => {
    playStoreBottom.style.transform = "scale(1.05)";
    playStoreBottom.style.transition = "all 0.50s ease-in";
})

playStoreBottom.addEventListener("mouseleave", () => {
    playStoreBottom.style.transform = "scale(1)";
    playStoreBottom.style.transition = "all 0.50s ease-out";
})

//Movimiento de la Imagen de Fondo

const underBase = document.querySelector(".underBase");

const underBaseEP = underBase.firstElementChild;
    let bgPosition = 0;

    const moveBackground = () => {
        bgPosition = bgPosition + 100
    }

const backgroundMovement = setInterval(() => {
    moveBackground();

    underBaseEP.style.backgroundPosition = `right ${bgPosition}px top 50px`
    underBaseEP.style.transition = "all 15s linear"
}, 1000)