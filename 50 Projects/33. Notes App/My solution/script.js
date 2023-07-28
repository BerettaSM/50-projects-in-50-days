const addButton = document.getElementById('add')
const main = document.querySelector('main')

loadNotes()

addButton.addEventListener('click', () => addNote())

function addNote(id, markdown) {
    const note = document.createElement('div')
    note.className = 'note'
    note.id = id ?? crypto.randomUUID()

    const initialMarkdown = !!markdown && typeof markdown === 'string'

    note.innerHTML = `
        <header class="action">
            <button class="edit">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </header>
        ${
            initialMarkdown
                ? `<div class="content">${markdown}</div>`
                : `
            <textarea class="content"></textarea>
        `
        }
    `
    const editButton = note.querySelector('button.edit')
    const deleteButton = note.querySelector('button.delete')

    editButton.addEventListener('click', (event) => {
        toggleEdit(event, note.id)
    })

    deleteButton.addEventListener('click', () => {
        deleteNote(note.id)
        note.remove()
    })

    main.appendChild(note)

    if (!id) {
        const textarea = note.querySelector('textarea')
        textarea.focus()
        saveNote('', note.id)
    }
}

function toggleEdit(event, id) {
    const ele = event.target.closest('.note').querySelector('.content')

    const isEditMode = ele.type === 'textarea'
    if (isEditMode) {
        saveNote(ele.value, id)
        const div = document.createElement('div')
        div.className = 'content'
        div.innerHTML = marked.parse(ele.value)
        ele.replaceWith(div)
    } else {
        const textarea = document.createElement('textarea')
        textarea.className = 'content'
        const markdown = getNote(id)
        textarea.value = markdown
        ele.replaceWith(textarea)
    }
}

function loadNotes() {
    const notes = getNotes()
    if (!notes) return
    for (const id in notes) {
        const markdown = notes[id]
        addNote(id, marked.parse(markdown))
    }
}

function saveNote(markdown, id) {
    const notes = getNotes() || {}
    notes[id] = markdown
    saveNotes(notes)
}

function deleteNote(id) {
    const notes = getNotes()
    if (!notes) return
    Reflect.deleteProperty(notes, id)
    saveNotes(notes)
}

function getNote(id) {
    const notes = getNotes()
    return notes[id]
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes'))
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
