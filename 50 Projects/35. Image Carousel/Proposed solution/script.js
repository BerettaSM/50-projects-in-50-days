const carousel = document.querySelector('.carousel')
const imagesContainer = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const images = imagesContainer.children.length
const slideOffset = imagesContainer.clientWidth

let interval
let image = 0

resetInterval()

leftBtn.addEventListener('click', () => slide('backwards'))
rightBtn.addEventListener('click', () => slide('forwards'))

function slide(direction, reset = true) {
    (direction === 'forwards') ? image++ : image--
    image = image === images ? 0 : image === -1 ? images - 1 : image
    const offset = image * slideOffset
    imagesContainer.style.transform = `translateX(-${offset}px)`
    if(reset) resetInterval()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(() => slide('forwards', false), 2000)
}
