const jokeEl = document.getElementById('joke')
const button = document.getElementById('jokeBtn')

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    if(!res.ok) {
        jokeEl.textContent = data.message
    } else {
        jokeEl.textContent = data.joke
    }
}

button.addEventListener('click', generateJoke)