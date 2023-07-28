const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    const timestamp = new Date().getTime()

    if (timestamp - clickTime < 500) {
        createHeart(e)
    }

    clickTime = timestamp
})

const createHeart = (event) => {
    const heart = document.createElement('i')
    heart.classList.add('fas', 'fa-heart')

    const x = event.offsetX
    const y = event.offsetY

    heart.style.top = `${y}px`
    heart.style.left = `${x}px`
    loveMe.appendChild(heart)

    heart.onanimationend = () => heart.remove()

    times.innerHTML = ++timesClicked
}
