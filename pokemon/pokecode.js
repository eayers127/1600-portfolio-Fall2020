/*async function getAPIData(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error){
        console.error(error)
    }

}


function loadPage(){
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
    (async (data) =>{
        for( const pokemon of data.results){
        await getAPIData(pokemon.url).then((pokeData) => {
            populatePokeCard(pokeData)
        })
    }
    })
}

const pokemonGrid = document.querySelector('.pokemonGrid')

function populatePokeCard(pokemon){
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    let cardFront = document.createElement('div')
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    let cardBack = document.createElement('div')
    let backLabel = document.createElement('p')


    
    frontLabel.textContent = pokemon.name
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    backLabel.textContent = `I'm the back`
    cardFront.appendChild(frontLabel)
    cardFront.appendChild(frontImage)
    cardBack.appendChild(backLabel)
    pokeCard.appendChild(cardFront)
    pokeCard.appendChild(cardBack)
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(cardScene)
}

function getImageFileName(pokemon){
    if (pokemon.id < 10){
        return `00$(pokemon.id)`

    }
    else if(pokemon.id > 9 && pokemon.id < 99){
        return `0$(pokemon.id)`
    }

}

loadPage()*/




async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?&limit=25`).then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    populatePokeCard(pokeData)
                })
            }
        })
}

const pokemonGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('button')

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.disabled = true
})



function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card__face card__face--front`
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    frontLabel.textContent = pokemon.name
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    return cardFront
}

/*function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('p')
    backLabel.textContent = `I'm the back of the card`
    cardBack.appendChild(backLabel)
    return cardBack
}*/

function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('h3')
    backLabel.textContent = `Abilities:`
    let abilityList = document.createElement('ul')
    pokemon.abilities.forEach(ability => {
        let abilityName = document.createElement('li')
        abilityName.textContent = ability.ability.name
        abilityList.appendChild(abilityName)
    })
    let movesLabel = document.createElement('h3')
    movesLabel.textContent = 'Stats:'
    let pokeWeight = document.createElement('h5')
    pokeWeight.textContent = `Weight: ${pokemon.weight} lbs.`
    let typeLabel = document.createElement('h3')
    typeLabel.textContent = `Types:`
    let typeList = document.createElement('ul')
    pokemon.types.forEach(type => {
        let typeName = document.createElement('li')
        typeName.textContent = type.type.name
        typeList.appendChild(typeName)
    })
    


    cardBack.appendChild(backLabel)
    cardBack.appendChild(abilityList)
    cardBack.appendChild(movesLabel)
    cardBack.appendChild(pokeWeight)
    cardBack.appendChild(typeLabel)
    cardBack.appendChild(typeList)
    return cardBack
}







function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}



/*let newButton = document.querySelector('#newButton')
newButton.addEventListener('click', () => {
  addPokemon()
})*/


/*
function addPokemon() {
    let newPokemon = new Pokemon(50, 25, 'Ethan', [
      {
        ability:
          { name: 'Thunder Belly' }
      },
      {  ability:
          { name: 'Lightining Fingers' }
      },
    ]
    [ 
    {
        type:
          {name: 'Fire'}
      }
    ] 
      )
    populatePokeCard(newPokemon)
  }

  let newButton = document.querySelector('#newPokemon')
  newButton.addEventListener('click', () => {
    addPokemon()
  })

  function Pokemon(name, height, weight, abilities, moves) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
    this.moves = moves
}

*/


  


