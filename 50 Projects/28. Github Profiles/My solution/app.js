const card = document.querySelector('.card')
const input = document.querySelector('input')

input.addEventListener('input', onInput)

let timer

function onInput(e) {
    clearTimeout(timer)
    timer = setTimeout(() => {
        const { value } = e.target
        if (!value) {
            card.innerHTML = ''
            return
        }
        searchUser(value)
    }, 500)
}

async function searchUser(input) {
    try {
        const foundUser = await findUser(input)
        const userRepos = await findRepos(foundUser.login)
        const user = {
            avatar_url: foundUser.avatar_url,
            followers: foundUser.followers,
            following: foundUser.following,
            name: foundUser.name ?? foundUser.login,
            public_repos: foundUser.public_repos,
            repos: userRepos.slice(0, 5),
            bio: foundUser.bio ?? 'No bio provided.',
        }
        renderUser(user)
    } catch (e) {
        if (!e.status || e.status !== 404) {
            throw e
        }
        displayMessage('No profile with this username.')
    }
}

async function findUser(searchQuery) {
    return fetchData(`https://api.github.com/users/${searchQuery}`)
}

async function findRepos(userLogin) {
    return fetchData(`https://api.github.com/users/${userLogin}/repos`)
}

async function fetchData(url) {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) {
        const e = new Error()
        e.message = data.message
        e.status = res.status
        throw e
    }
    return data
}

function renderUser(user) {
    const { avatar_url, followers, following, name, bio, public_repos, repos } =
        user
    card.innerHTML = `
        <div class="content">
            <div class="user-pic">
                <img src="${avatar_url}" alt="${name}">
            </div>
            <div class="info">
                <h1>${name}</h1>
                <p>${bio}</p>
                <div class="stats">
                    <span>${followers} Follower(s)</span>
                    <span>${following} Following</span>
                    <span>${public_repos} Repo(s)</span>
                </div>
                <div class="repos">
                    ${repos.map((repo) => `
                        <span class="repo">${repo.name}</span>
                    `).join('')}
                </div>
            </div>
        </div>

    `
}

function displayMessage(message) {
    card.innerHTML = `
        <div class="content">
            <span class="message">${message}</span>
        </div>
    `
}
