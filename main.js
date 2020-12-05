import { people } from '../StarWars/people.js'
import {removeChildren, getLastNumber} from '../utils/index.js'

const mainContent = document.querySelector('#main')

populateDOM(people)

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







/*maleButton.addEventListener('click', (event) => {
    maleCharacters.forEach((element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/10.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = `Luke Skywalker`

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainContent.appendChild(charFigure)
    })
})*/


const maleCharacters = people.filter((person) => person.gender === 'male')

const femaleCharacters = people.filter((person) => person.gender === 'female')


const otherCharacters = people.filter((thing) => {
if (
    thing.gender === 'n/a' ||
    thing.gender === 'none' ||
    thing.gender === 'hermaphrodite'
)  {
    return thing
   }
})

function populateDOM(characters){
    removeChildren(mainContent)
    characters.forEach((element) => {
        
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true)
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainContent.appendChild(charFigure)
    })

}




maleButton.addEventListener('click', () => populateDOM(maleCharacters))
   
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))






