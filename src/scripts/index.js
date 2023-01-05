async function render(element) {
    const mainList = document.querySelector('.main_card')
  
    mainList.innerHTML = ''
  
    element.results.forEach(card => {
      const cards = createCard(card)
  
      mainList.append(cards)
    })
  }
   
  function createCard(element) {
    const container = document.createElement('li')
    const image = document.createElement('img')
    const h2 = document.createElement('h2')
    
    container.classList.add("li_card")
    const numeroNaPokedex = element.url.slice(34, -1)

    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`
    image.alt = element.name
  
    h2.innerText = element.name

    container.append(image, h2)
  
    return container
  }

     function createCardSearch(element){
    const container = document.createElement('li')
    const image = document.createElement('img')
    const h2 = document.createElement('h2')
    
    container.classList.add("li_card")
    image.src = element.sprites.front_default
    image.alt = element.name
  
    h2.innerText = element.name

  
    container.append(image, h2)
  
    return container
  }

    async function renderCardSearch(element) {
    const mainList = document.querySelector('.main_card')
   
    mainList.innerHTML = ''
    const cards = createCardSearch(element)
    mainList.append(cards)

  }
   
    function createLoaddingCard() {
    const li = document.createElement('li')
    const p = document.createElement('p')
    const img = document.createElement('img')
    
    p.classList.add('loadingL')
    li.classList.add('loading')
    p.innerText = 'Loading...'
    li.append(p, img)
  
    return li
  }