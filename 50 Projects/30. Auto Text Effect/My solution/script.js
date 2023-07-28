const container = document.querySelector('.container.text')
const speedInput = document.getElementById('speed')

const text = container.textContent.trim()
let speed = 1
let len = 0

function typewrite() {
    const displayText = text.slice(0, len);
    container.textContent = displayText

    len++

    if(len > text.length) len = 0

    setTimeout(typewrite, 1000 / (speed * 4))
}

typewrite()

speedInput.addEventListener('change', e => {
    speed = +e.target.value
})