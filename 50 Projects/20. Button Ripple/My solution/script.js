const button = document.querySelector('button')

button.addEventListener('click', e => {
    const { offsetLeft, offsetTop } = e.currentTarget;

    const left = e.clientX - offsetLeft;
    const top = e.clientY - offsetTop;
    
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    ripple.style.top = `${top}px`;
    ripple.style.left = `${left}px`;

    ripple.onanimationend = function() {
        ripple.remove()
    }

    button.appendChild(ripple)
})