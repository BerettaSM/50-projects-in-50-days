const hoverboard = document.querySelector('div')

createHoverboard(25, 20)

function createHoverboard(width, height) {
    const squaresNum = width * height
    createSquares(squaresNum, hoverboard)
    hoverboard.style.grid = `repeat(${width}, 1fr) / repeat(${height}, 1fr)`
}

function createSquares(squaresNum, target) {
    for (let i = 0; i < squaresNum; i++) {
        const square = createSquare()
        target.appendChild(square)
    }
}

function createSquare() {
    const square = document.createElement('square')
    square.className = 'square'
    square.onmouseenter = () => setColor(square);
    square.onmouseleave = () => removeColor(square);
    return square
}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = '#222';
    square.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const hue = getRandomNumber(0, 360)
    return `hsl(${hue}deg 50% 50%)`
}

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}
