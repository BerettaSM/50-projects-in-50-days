const container = document.querySelector('.faq-container')

container.addEventListener('click', e => {
    if(!e.target.closest('button')) return
    const faq = e.target.closest('.faq')
    faq.classList.toggle('active')
})