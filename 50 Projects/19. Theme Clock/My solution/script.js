const hands = document.querySelectorAll('.hand')
const digital = document.querySelector('.digital-clock')
const button = document.querySelector('.theme')

button.addEventListener('click', switchTheme)

setInterval(updateClocks, 1000)

function switchTheme() {
    document.body.classList.toggle('dark')

    button.textContent = document.body.classList.contains('dark')
        ? 'Light mode'
        : 'Dark mode'
}

function updateClocks() {
    const d = new Date()

    updateAnalogClock(d)
    updateDigitalClock(d)
}

function updateDigitalClock(date) {
    const [hoursHand, minutesHand, secondsHand] = hands

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const hoursDegrees = mapValueToDegree(hours, 12)
    const minutesDegrees = mapValueToDegree(minutes, 60)
    const secondsDegrees = mapValueToDegree(seconds, 60)

    const hoursOffset = (minutesDegrees / 360) * 30

    const transform = 'transform .1s ease-out';
    hoursHand.style.transition =
        hours === 0 ? 'none' : transform;
    minutesHand.style.transition =
        minutes === 0 ? 'none' : transform;
    secondsHand.style.transition =
        seconds === 0 ? 'none' : transform;

    hoursHand.style.transform = `rotate(${hoursDegrees + hoursOffset}deg)`
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
}

function updateAnalogClock(date) {
    const time = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    })
    const day = date.getDay()
    const [weekday, month] = date
        .toLocaleString('en-US', {
            weekday: 'long',
            month: 'short',
        })
        .split(' ')

    digital.querySelector('.time').textContent = time
    digital.querySelector('.date').innerHTML = `
        ${weekday}, ${month} <span class="day">${day}</span>
    `
}

function mapValueToDegree(value, maxValue = 60) {
    const tick = 360 / maxValue
    return value * tick
}
