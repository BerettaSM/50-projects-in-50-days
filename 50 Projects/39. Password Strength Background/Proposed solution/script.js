const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', changeBackground)

function changeBackground(event) {
    const { value: input } = event.target;
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`
}