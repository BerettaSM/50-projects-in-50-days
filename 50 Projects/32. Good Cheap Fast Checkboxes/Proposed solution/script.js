const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => {
    toggle.addEventListener('change', doTheTrick)
})

function doTheTrick(event) {
    const clicked = event.target;

    if(!good.checked || !cheap.checked || !fast.checked) return

    if(clicked == good) {
        fast.checked = false
    } else if(clicked == cheap) {
        good.checked = false
    } else {
        cheap.checked = false
    }
}