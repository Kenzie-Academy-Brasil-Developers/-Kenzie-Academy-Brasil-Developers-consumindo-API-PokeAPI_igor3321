const pokemonsList = getLocalStorage()
const ul = document.querySelector("#pokemonsContainer")

function createCard (pokemon, index) {
    const li = document.createElement("li")

    const h3 = document.createElement("h3")
    h3.innerHTML = pokemon.name

    const img = document.createElement("img")
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name

    const button = document.createElement("button")
    button.innerText = "Remover"

    button.addEventListener("click", () => {
        pokemonsList.splice(index, 1)

        localStorage.setItem("pokemons", JSON.stringify(pokemonsList))

        ul.innerHTML = ""
        renderPokemons()
    })
    
    li.append(h3, img, button)
    
    return li
}

function renderPokemons() {
    const noPokemonText = document.querySelector(".noPokemonText")

    // const pokemonsList = getLocalStorage()

    if (pokemonsList.length > 0) {

        noPokemonText.classList.add("hide")

        pokemonsList.forEach((pokemon, index) => {
            const card = createCard(pokemon, index)
            ul.appendChild(card)
        })
    } else {
        noPokemonText.classList.remove("hide")
    }

}

renderPokemons()