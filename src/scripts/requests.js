async function getAllPokemon() {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {

      return res
    })
    return pokemon
  }
  
  async function renderAll() {
    const pokemons = await getAllPokemon()
  
      render(pokemons)
  }
    
  async function getPokemonByName(pokemonName) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res =>{
      const mainList = document.querySelector(".main_card")
      const loadingCard = createLoaddingCard()
      mainList.innerHTML = "" 
      mainList.appendChild(loadingCard)
      return res.json()
    }) 
    .then(res => {
     setTimeout(()=>{
      renderCardSearch(res)
     },1000) 
      console.log(res)
       return res
    })
  
    return pokemon
  }
  
    function renderSearch() {
    const searchInput = document.querySelector('#inputs')
    const searchBtn = document.querySelector('#searchBtn')
  
   searchBtn.addEventListener('click', async (eve) => {
    eve.preventDefault()
    if(searchInput.value !== ""){
      await getPokemonByName(searchInput.value.toLowerCase().trim())
    }else{
      await renderAll()
    }
    })
  }
  

  renderSearch()
  renderAll()
  