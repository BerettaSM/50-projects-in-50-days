const input = document.querySelector('textarea.choices-input')
const choicesContainer = document.querySelector('.choices')
const picks = 50

const randomChoice = arr => {
    const rndIdx = Math.floor(Math.random() * arr.length)
    return arr[rndIdx];
}

const chooseElement = async (htmlElements) => {
    let i = 0
    let lastHighlight = randomChoice(htmlElements);
    lastHighlight.classList.add('highlight')
    return new Promise((resolve) => {
        const eventId = setInterval(() => {
            if(i > picks) {
                clearInterval(eventId)
                return resolve()
            }
            let curHighlight = randomChoice(htmlElements)
            lastHighlight.classList.toggle('highlight')
            curHighlight.classList.toggle('highlight')
            lastHighlight = curHighlight
            i++
        }, 75)
    })
}

input.addEventListener('input', (e) => {
    if (e.target.value.trim() === '') {
        e.target.value = ''
        choicesContainer.innerHTML = ''
        return
    }
    choicesContainer.innerHTML = e.target.value
        .split(',')
        .filter((choice) => choice.trim())
        .map((choice) => `<span class="choice">${choice}</span>`)
        .join('')
})

input.addEventListener('keydown', async (e) => {
    if (e.code !== 'Enter') return
    const choices = choicesContainer.children
    if (choices.length < 2) return
    input.disabled = true
    input.value = ''
    input.placeholder = 'Dramatic drum roll!'
    choicesContainer.children = choices
    await chooseElement(choices)
    input.placeholder = 'Enter choices here...'
    input.disabled = false
})
