// let time = 5000;
// let currentImageIndex = 0;
// let images = document.querySelectorAll("#slider img");
// let max = images.length;
// Pode ser transformado nisso
let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }
    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)