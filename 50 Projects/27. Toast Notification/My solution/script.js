const button = document.querySelector('button')
const notificationsEl = document.querySelector('.notifications')

const messages = [
    {
        text: 'This is a success message!',
        type: 'success',
    },
    {
        text: 'This is an informational message!',
        type: 'info',
    },
    {
        text: 'This is a danger message!',
        type: 'danger',
    },
]

button.addEventListener('click', displayToast)

function displayToast() {
    const message = getRandomMessage()
    const toastEl = createToastEl(message.text, message.type)
    notificationsEl.appendChild(toastEl)
    setTimeout(() => {
        toastEl.remove()
    }, 2000)
}

function getRandomMessage() {
    const rndIdx = Math.floor(Math.random() * messages.length)
    return messages[rndIdx]
}

function createToastEl(text, type) {
    const toastEl =  document.createElement('span')
    toastEl.className = `notification notification-${type}`;
    toastEl.textContent = text
    return toastEl
}