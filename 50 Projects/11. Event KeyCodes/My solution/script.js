const container = document.querySelector('.container')

window.addEventListener('keydown', (e) => {
    const info = { key: e.key, keyCode: e.keyCode, code: e.code }
    const divs = Object.entries(info).map(([key, value]) => {
        const div = document.createElement('div')
        const small = document.createElement('small')
        small.textContent = `event.${key}`;
        const p = document.createElement('p')
        p.textContent = value;
        div.appendChild(small)
        div.appendChild(p)
        return div;
    })
    container.innerHTML = ''
    divs.forEach(div => container.appendChild(div))
})
