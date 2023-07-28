const header = document.querySelector('header')
const hero = document.querySelector('.hero')

function fixNav(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.classList.remove('scroll')
            scrollTop.classList.add('hide')
        } else {
            header.classList.add('scroll')
            scrollTop.classList.remove('hide')
        }
    })
}

const options = {
    root: null,
    threshold: .9,
};

const observer = new IntersectionObserver(fixNav, options);
observer.observe(hero)

const scrollTop = document.querySelector('.scroll-top')

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

/**
 * header.classList.add('scroll')
            scrollTop.classList.remove('hide')
 */
