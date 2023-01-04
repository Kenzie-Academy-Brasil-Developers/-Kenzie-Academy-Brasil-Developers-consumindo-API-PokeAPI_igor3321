async function consomePokeAPI() {
    const loading = document.querySelector('#loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => alert(error))

    loading.classList.add('hidden')

    return pokemonsDaAPI
}

consomePokeAPI()
