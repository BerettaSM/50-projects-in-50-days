const container = document.querySelector('.container')
const loadingSpan = document.querySelector('span.loading-text')
let load = 0
let interval = 4000 / 100;

const mapPercentageToAbsolute = (
    percent,
    absoluteVal,
    returnDifference = false
) => {
    const valueMapping = (absoluteVal / 100) * percent
    return returnDifference ? absoluteVal - valueMapping : valueMapping
}

let eventId = setInterval(() => {
    if (load > 100) return clearInterval(eventId)

    loadingSpan.textContent = `${load}%`
    const opacity = mapPercentageToAbsolute(load, 1, true)
    loadingSpan.style.opacity = opacity

    const blur = mapPercentageToAbsolute(load, 30, true)
    container.style.setProperty('--blur', `${blur}px`)

    load++
}, interval)
