import { films } from './films.js'
import { people } from './people.js'



//console.log(films[0])

//const filmList = document.querySelector('.filmList')



films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.title
}) 


