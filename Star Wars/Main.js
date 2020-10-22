import { films } from './films.js'
import { people } from './people.js'



//console.log(films[0])

//const filmList = document.querySelector('.filmList')



/*films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.title
}) */

const main = document.querySelector('main')

for (let step=0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
    let figCaption = document.createElement('figCaption')
    figCaption.textContent = films[step].title


    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    main.appendChild(figure)
    

}

/*for (const film of films) {
    lew newImg = document.creatElement('img') //new image instance
    newImg.src = 'https://starwars-visualguide.com/assets/img/films/1.jpg' // set the source or will not show
    //now add the img to the DOM
    main.appendChild(newImg)
    console.log(film.title);
}*/

//https://starwars-visualguide.com/assets/img/characters/1.jpg


