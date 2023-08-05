const button = document.getElementById('btn');
const boxes = document.getElementById('boxes');

createBoxes();

button.addEventListener('click', () => boxes.classList.toggle('big'));

function createBoxes() {
    const boxWidth = 125;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const box = document.createElement('div');
            box.className = 'box';
            const position = `${-x * boxWidth}px ${-y * boxWidth}px`;
            box.style.backgroundPosition = position;
            boxes.appendChild(box);
        }
    }
}
