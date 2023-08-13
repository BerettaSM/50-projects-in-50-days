const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

loadImages()

function loadImages() {
    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img');
        img.src = `${unsplashURL}${getRandomSize()}`;
        container.appendChild(img);
    }
}

function getRandomSize() {
    return `${getRandomNumber(300, 310)}x${getRandomNumber(300, 310)}`
}

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
