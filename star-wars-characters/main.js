import {people} from '../Star Wars/people.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)


const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)


const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)





const maleCharacters = people.filter(person => person.gender === 'male')


const femaleCharacters = people.filter(person => person.gender === 'female')


const otherCharacters = people.filter((thing) => {
if {
    thing.gender === 'n/a' ||
    thing.gender === 'none' ||
    thing.gender === 'hermaphrodite'
    return thing

}

}



maleButton.addEventListener('click', () event => populateDOM{maleCharacters})
   
femaleButton.addEventListener('click', () event => populateDOM{femaleCharacters})

otherButton.addEventListener('click', () event => populateDOM{otherCharacters})





function populateDOM(characters) => {
    
    removeChildren
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    charImg.src=`https://starwars-visualguide.com/assets/img/characters/1.jpg`
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = 'Luke Skywalker'

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)
  })


let theUrl = "https://swapi.co/api/people/2/"

function getLastNumber(url) {
    let end = url.l
}

getLastNumber(theUrl)

