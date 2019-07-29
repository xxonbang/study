const body = document.querySelector("body");

const AMOUNT_OF_IMAGES = 15;

function setBackgroundImage(imageNumber) {
    const image = new Image();
    image.src = `images/${imageNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getImageNumber() {
    const imageNumber = Math.floor(Math.random() * AMOUNT_OF_IMAGES);
    return imageNumber;
}

function init() {
    const imageNumber = getImageNumber();
    setBackgroundImage(imageNumber);
}

init();