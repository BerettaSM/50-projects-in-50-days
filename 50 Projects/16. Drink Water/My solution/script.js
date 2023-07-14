const glasses = document.querySelector('.glasses-container')
const mainGlass = document.querySelector('.glass-main')

glasses.addEventListener('click', (e) => {
    if (e.target === glasses) return

    const targetGlassNumber = +e.target.getAttribute('data-glass')

    for (const glass of glasses.children) {
        const glassNumber = +glass.getAttribute('data-glass')

        if (glassNumber <= targetGlassNumber) {
            glass.classList.add('full')
        } else {
            glass.classList.remove('full')
        }
    }

    const [empty, full] = mainGlass.children

    const liters = 2 - targetGlassNumber * 0.25
    empty.textContent = `${liters}L`

    const percent = targetGlassNumber * 12.5
    full.textContent = `${percent}%`

    empty.style.height = `${100 - percent}%`
    full.style.height = `${percent}%`
})
