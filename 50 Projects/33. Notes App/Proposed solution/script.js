const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach((note) => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.className = 'note'
    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="main ${text ? '' : 'hidden'}">
            ${marked.parse(text)}
        </div>
        <textarea class="${text ? 'hidden' : ''}">${text}</textarea>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textarea = note.querySelector('textarea')

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })

    textarea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked.parse(value)
        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const textareas = document.querySelectorAll('textarea')
    const notes = [...textareas].map((textarea) => textarea.value)
    localStorage.setItem('notes', JSON.stringify(notes))
}
