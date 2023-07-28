const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)
    setTimeout(notif.remove.bind(notif), 2000)
}

function getRandomMessage() {
    const rndIdx = Math.floor(Math.random() * messages.length)
    return messages[rndIdx]
}

function getRandomType() {
    const rndIdx = Math.floor(Math.random() * types.length)
    return types[rndIdx]
}
