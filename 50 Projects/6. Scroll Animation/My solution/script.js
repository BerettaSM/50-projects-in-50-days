const boxes = document.querySelectorAll('.box')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    root: null,  // null means relative to device viewport
    threshold: 1 // fully visible 
})

boxes.forEach(box => observer.observe(box))
