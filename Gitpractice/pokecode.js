async function getAPIData(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error){
        console.error(error)
    }

}
//look up 'async await'

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

loadPage()

