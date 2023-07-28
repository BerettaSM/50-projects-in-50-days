function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function shuffle(arr) {
    for(const index in arr) {
        const [removed] = arr.splice(index, 1);
        const rndIndex = Math.floor(Math.random() * arr.length);
        arr.splice(rndIndex, 0, removed);
    }
}

class PasswordGenerator {

    static letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    static numbers = '0123456789'.split('')
    static symbols = '!@#$%&()'.split('')

    constructor() {

        this.display = document.getElementById('password-display')
        this.lengthEl = document.getElementById('length')
        this.upperEl = document.getElementById('upper')
        this.lowerEl = document.getElementById('lower')
        this.numbersEl = document.getElementById('numbers')
        this.symbolsEl = document.getElementById('symbols')

        this.charLength = this.lengthEl.value
        this.lengthEl.addEventListener('input', this.validateNumber.bind(this))

        const generateButton = document.getElementById('generate')
        generateButton.addEventListener('click', this.generatePassword.bind(this))

        const clipboardButton = document.getElementById('clipboard');
        clipboardButton.addEventListener('click', this.copyToClipboard.bind(this))
    }

    validateNumber(inputEvent) {
        const { min, max, value } = inputEvent.target;

        if(value !== '' && (value < min || value > max)) {
            inputEvent.target.value = this.charLength;
            return;
        }

        this.charLength = value;
    }

    generatePassword() {
        const includeUpper = this.upperEl.checked;
        const includeLower = this.lowerEl.checked;
        const includeNumbers = this.numbersEl.checked;
        const includeSymbols = this.symbolsEl.checked;

        const chars = this.charLength;

        const charPool = [];

        if(includeUpper) {
            charPool.push(...PasswordGenerator.letters.map(char => char.toUpperCase()))
        }

        if(includeLower) {
            charPool.push(...PasswordGenerator.letters)
        }

        if(includeNumbers) {
            charPool.push(...PasswordGenerator.numbers);
        }

        if(includeSymbols) {
            charPool.push(...PasswordGenerator.symbols);
        }

        shuffle(charPool);

        const password = charPool.slice(0, chars).join('');
        
        this.display.textContent = password;
    }

    copyToClipboard() {
        if(!navigator.clipboard) {
            alert('Your browser does not have clipboard support.')
        } else {
            navigator.clipboard
                .writeText(this.display.textContent)
                .then(() => alert('Password copied to clipboard.'))
                .catch(() => alert('Could not copy text to clipboard.'))
        }
    }

}

new PasswordGenerator()