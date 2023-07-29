const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const pokeTemplate = document.getElementById('poke-template');

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

fetchPokemons()

async function fetchPokemons() {
    for (let i = 1; i <= pokemonCount; ++i) {
        const pokemon = await getPokemon(i);
        createPokemonCard(pokemon);
    }
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function createPokemonCard(pokemon) {
    const pokeEl = pokeTemplate.content.cloneNode(true);

    const pokemonNumber = pokemon.id.toString().padStart(3, '0');

    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`;
    const image = pokeEl.querySelector('.image');
    image.src = imageUrl;
    image.alt = pokemon.name;

    const numberSpan = pokeEl.querySelector('.number')
    numberSpan.textContent = '#' + pokemonNumber

    const h3 = pokeEl.querySelector('.name')
    h3.textContent = pokemon.name


    const typeSpan = pokeEl.querySelector('.type > span')
    const pokeType = pokemon.types[0]?.type.name ?? 'Unknown'
    typeSpan.textContent = pokeType
    pokeEl.firstElementChild.style.backgroundColor = colors[pokeType]

    pokeContainer.appendChild(pokeEl);
}
