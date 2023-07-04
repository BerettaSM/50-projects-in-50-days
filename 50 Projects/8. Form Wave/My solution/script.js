const form = document.querySelector('form')
const labels = document.querySelectorAll('form .form-control label')

const transitionInterval = 75

const wrapLettersInSpan = (text) => {
    const letters = text.split('')
    const wrappedLetters = letters.map((letter) => {
        return `<span class="label-letter">${letter}</span>`
    })
    return wrappedLetters.join('')
}

const transitionSpans = (spans) => {
    for (const [index, span] of Object.entries(spans)) {
        const delay = index * transitionInterval
        setTimeout(() => {
            span.classList.toggle('active')
        }, delay)
    }
}

labels.forEach(label => {
    label.innerHTML = wrapLettersInSpan(label.textContent)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Not a real form. :)')
})

form.addEventListener('click', e => {
    if(e.target.tagName !== 'INPUT') return;
    const label = e.target.parentElement.lastElementChild;
    transitionSpans(label.children)
    if(!e.target.onblur) {
        e.target.onblur = transitionSpans.bind(null, label.children)
    }
})
