const container  = document.querySelector('.container')
let   active     = document.querySelector('.panel.active')

container.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return
    const panel = e.target.closest('.panel')
    if (panel === active) return
    active.classList.remove('active')
    panel.classList.add('active')
    active = panel
})
