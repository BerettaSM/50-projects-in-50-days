const container = document.getElementById('container')
const menuToggler = document.getElementById('menu-toggler')
const [closeButton, openButton] = menuToggler.children
const menu = document.getElementById('menu')

const toggle = () => {
    [container, menuToggler, menu].forEach(e => {
        e.classList.toggle('rotated')
    })
}

menuToggler.addEventListener('click', e => {
    if(e.target === e.currentTarget) return;
    toggle()
})