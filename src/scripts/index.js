async function renderizaPokemons() {
    const ulTag = document.querySelector('ul')

    const listaDePokemons = await consomePokeAPI()

    listaDePokemons.results.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        ulTag.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `)
    })
}

renderizaPokemons()

async function getPokemonByName(namePokemon) {
    const ulTag = document.querySelector('ul')

    const listaDePokemons = await consomePokeAPI()

    ulTag.innerHTML = ''

    listaDePokemons.results.forEach(pokemon => {
        if (namePokemon == pokemon.name) {
            const numeroNaPokedex = pokemon.url.slice(34, -1)

            ulTag.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `)
        }
    })
}

function renderSearch() {
    const inputSearch = document.querySelector('input')
    const ulTag = document.querySelector('ul')

    const btnSearch = document.querySelector('#searchBtn')
    btnSearch.addEventListener('click', () => {
        if (inputSearch.value == '') {
            ulTag.innerHTML = ''

            renderizaPokemons()
        } else {
            getPokemonByName(inputSearch.value)
        }
    })
}

renderSearch()