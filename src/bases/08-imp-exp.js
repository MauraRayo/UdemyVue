// import { owners} from "./data/heroes";
//para importar  primero debemos poner export en Data/heroe

import superHeroes from "../data/heroes";


// getHeroById (id)
//funciones de flecha
export const getHeroById = ( id ) => superHeroes.find( heroes => heroes.id === id)
//console.log( getHeroById(2) )




//getHeroesByOwner( 'DC' , 'Marvel')
//filter
export const getHeroesByOwner = ( ownner ) => superHeroes.filter( heroes => heroes.owner === ownner)
//console.log( getHeroesByOwner('DC') )



