const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []

getData()

filter.addEventListener('input', (event) => filterData(event.target.value))

async function getData() {
    const response = await fetch('https://randomuser.me/api?results=50');
    const { results } = await response.json();
    result.innerHTML = '';
    const fragment = document.createDocumentFragment()
    results.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        listItems.push(li);
        fragment.append(li);
    });
    result.appendChild(fragment)
}

function filterData(searchTerm) {
    listItems.forEach(li => {
        if(li.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            li.classList.remove('hide');
        } else {
            li.classList.add('hide');
        }
    })
}