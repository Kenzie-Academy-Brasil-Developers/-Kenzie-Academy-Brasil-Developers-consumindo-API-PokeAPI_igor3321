async function getPokemon(name) {
    try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        const response = await request.json()

        return response
    } catch(err) {
        
    }
}