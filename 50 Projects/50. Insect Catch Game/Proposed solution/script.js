const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const gameContainer = document.getElementById('game-container');

const annoyingMessages = [
    'Are we there yet?',
    'Guess what? Chicken butt!',
    'Boo! Did I scare you?',
    'Can you stop winning, please?',
    "I bet you can't catch me!",
    'Hey, listen! Hey, listen!',
    'You must be really bored to keep playing this.',
    "I heard this game is better when you're not playing it.",
    'Do you even have a strategy, or are you just clicking randomly?',
    'You call that a high score?',
    "You know you're wasting your time, right?",
    'I think the game is laughing at you.',
    'I think you need a break. A long one.',
    "Don't you have dishes to wash or something?",
    "I hope you're enjoying this as much as a root canal.",
    'I think your pet rock would play better than you.',
    "You're making me feel embarrassed for you.",
    'I heard the bugs in this game formed a union, thanks to you.',
];

let seconds = 0;
let score = 0;
let selectedInsect;

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const { src, alt } = img;
        selectedInsect = { src, alt };
        screens[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    });
});

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.left = x + 'px';
    insect.style.top = y + 'px';
    insect.innerHTML = `
        <img
            src="${selectedInsect.src}"
            alt="${selectedInsect.alt}"
            style="transform: rotate(${Math.random() * 360}deg)"
        />
    `;

    insect.addEventListener('click', catchInsect);

    gameContainer.appendChild(insect);
}

function getRandomLocation() {
    const { innerWidth: width, innerHeight: height } = window;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.textContent = `Time: ${m}:${s}`;
    seconds++;
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    this.addEventListener('transitionend', () => this.remove());
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {
    score++;
    if (score % 15 === 0) {
        const message = getRandomMessage()
        showMessage(message);
    }
    scoreEl.textContent = `Score: ${score}`;
}

function getRandomMessage() {
    const rndIdx = Math.floor(Math.random() * annoyingMessages.length);
    return annoyingMessages[rndIdx];
}

function showMessage(message) {
    messageEl.textContent = message;
    messageEl.classList.add('visible');
    setTimeout(() => messageEl.classList.remove('visible'), 3000);
}
