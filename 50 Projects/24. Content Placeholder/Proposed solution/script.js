const headerEl = document.getElementById('header')
const titleEl = document.getElementById('title')
const excerptEl = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const dateEl = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    headerEl.innerHTML = `
    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">
    `
    titleEl.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerptEl.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est?'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/women/12.jpg" alt="">'
    nameEl.innerHTML = 'John Doe'
    dateEl.innerHTML = 'Oct 08, 2020'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg'))

}
