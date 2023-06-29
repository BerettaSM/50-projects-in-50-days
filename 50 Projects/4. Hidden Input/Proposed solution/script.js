const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input  = document.querySelector('input')

button.addEventListener('click', () => {
    search.classList.toggle('active')
    if(search.classList.contains('active')) {
        input.focus()
    }
})