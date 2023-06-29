const hiddenInput = document.querySelector('.hidden-input')
const [input, button] = hiddenInput.children

button.addEventListener('click', () => {
    hiddenInput.classList.toggle('active')
    if (hiddenInput.classList.contains('active')) {
        input.focus()
    }
})
