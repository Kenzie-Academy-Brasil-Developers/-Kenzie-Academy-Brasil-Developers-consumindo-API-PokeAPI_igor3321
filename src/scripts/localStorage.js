function getLocalStorage() {
    const pokemonsList = JSON.parse(localStorage.getItem("pokemons")) || []

    return pokemonsList
}