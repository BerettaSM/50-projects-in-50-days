const form = document.getElementById('form');
const input = document.getElementById('input');
const todosList = document.getElementById('todos');

let todos = [];

loadTodos();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() === '') {
        input.value = '';
        return;
    }
    saveTodo(input.value);
    input.value = '';
});

todosList.addEventListener('click', (e) => {
    const clickedTodo = e.target.closest('li');
    if (!clickedTodo) return;
    toggleTodo(clickedTodo);
    input.focus()
});

todosList.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const clickedTodo = e.target.closest('li');
    if (!clickedTodo) return;
    deleteTodo(clickedTodo);
    input.focus()
});

function loadTodos() {
    const fetchedTodos = JSON.parse(localStorage.getItem('todos'));
    if (fetchedTodos) {
        todos = fetchedTodos;
    }
    renderTodos();
}

function saveTodo(todo) {
    todos.push({
        text: todo,
        done: false,
    });
    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function toggleTodo(todoEl) {
    const todoIdx = getTodoIndex(todoEl);
    todos[todoIdx].done = !todos[todoIdx].done;
    saveTodos();
}

function deleteTodo(todoEl) {
    const todoIdx = getTodoIndex(todoEl);
    todos.splice(todoIdx, 1);
    saveTodos();
}

function getTodoIndex(todoEl) {
    return Array.prototype.indexOf.call(todoEl.parentElement.children, todoEl);
}

function renderTodos() {
    todosList.innerHTML = '';
    todos.forEach((todo) => {
        const todoEl = document.createElement('li');
        todoEl.textContent = todo.text;
        if (todo.done) todoEl.classList.add('completed');
        todosList.appendChild(todoEl);
    });
}
