const main  = document.querySelector('main')
let active  = document.querySelector('.card.active')

main.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return
    const card = e.target.closest('.card')
    if (card === active) return
    active.classList.remove('active')
    card.classList.add('active')
    active = card
})
