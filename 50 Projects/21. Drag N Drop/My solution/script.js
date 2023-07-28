const dropzones = document.querySelectorAll('.dropzone')
const image = document.querySelector('.image')

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        if(e.target !== e.currentTarget) return
        e.target.classList.add('hovered')
        e.preventDefault()
    })
    dropzone.addEventListener('dragleave', e => {
        if(e.target !== e.currentTarget) return
        e.target.classList.remove('hovered')
    })
    dropzone.addEventListener('drop', e => {
        e.target.classList.remove('hovered')
        e.target.appendChild(image)
    })
})

image.addEventListener('dragstart', e => {
    const dropzone = e.currentTarget.closest('.dropzone');
    dropzone.classList.add('fade')
})

image.addEventListener('dragend', e => {
    const dropzone = e.currentTarget.closest('.dropzone');
    dropzone.classList.remove('fade')
})