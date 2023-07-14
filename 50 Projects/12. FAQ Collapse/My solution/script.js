const container = document.querySelector('.container')

// card open
// p hide
// alternate icons

container.addEventListener('click', (e) => {
    if (e.target.tagName !== 'I' || !e.target.classList.contains('btn')) return
    
    // toggle card open
    const card = e.target.closest('.card');
    card.classList.toggle('open')

    // toggle p hide
    const p = card.querySelector('p');
    p.classList.toggle('hide')

    // alternate icons
    const buttons = card.querySelectorAll('i.btn')
    buttons.forEach(button => button.classList.toggle('hide'))
})
