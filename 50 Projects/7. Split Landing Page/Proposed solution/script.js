const container = document.querySelector('.container')
const [left, right] = container.children;

left.addEventListener('mouseenter', e => container.classList.add('hover-left'))
left.addEventListener('mouseleave', e => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', e => container.classList.add('hover-right'))
right.addEventListener('mouseleave', e => container.classList.remove('hover-right'))
