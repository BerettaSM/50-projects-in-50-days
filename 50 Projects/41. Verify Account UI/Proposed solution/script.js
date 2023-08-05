const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', e => {
        e.preventDefault()

        const isFilled = codes[idx].value !== '';

        if(e.key === 'Backspace') {
            if(isFilled) {
                codes[idx].value = ''
            } else if(idx > 0) {
                codes[idx - 1].value = ''
            }
            if(idx > 0) codes[idx - 1].focus();
        } else if (e.key >= 0 && e.key <= 9) {
            if(isFilled && idx < 5) {
                codes[idx + 1].value = e.key
            } else {
                codes[idx].value = e.key
            }
            if(idx < 5) codes[idx + 1].focus();
        }

    });
})