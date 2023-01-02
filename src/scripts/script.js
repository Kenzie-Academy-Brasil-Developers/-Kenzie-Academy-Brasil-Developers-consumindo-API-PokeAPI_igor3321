const formHandle = () => {
    const form = document.querySelector("form")
    const input = document.querySelector("#name")
    const spans = document.getElementsByTagName("span")

    form.addEventListener("submit", async (e) => {
        e.preventDefault()

        const findPokemon = await getPokemon(input.value)

        if(findPokemon.count != undefined) {
            spans[0].classList.remove("hide")

            setTimeout(() => {
                spans[0].classList.add("hide")
            }, 1500)
        } else {

            const pokemonsList = getLocalStorage()

            pokemonsList.push(findPokemon)

            localStorage.setItem("pokemons", JSON.stringify(pokemonsList))

            spans[1].classList.remove("hide")
            setTimeout(() => {
                spans[1].classList.add("hide")
            },1500)

            // window.location.replace("../pages/pokemons.html")

        }
    })
}

formHandle()