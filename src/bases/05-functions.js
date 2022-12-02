

// function saludar( xyz ) {
//     return `Hola ${ xyz }`
// }
// const saludar = ( xyz ) => {
//     return `Hola ${ xyz }`
// }
const saludar = ( nombre = 'Peter' ) => `Hola ${ nombre }`


const nombre = 'Tony'

// console.log(  saludar(nombre)   )

const getUser = () => ({ 
    uid: 'ABC123',
    username: 'Tony001' 
})

// console.log( getUser() )

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

// ???????
// id: 1// TRUE, FALSE
// const existe = heroes.some( ( heroe ) => heroe.id === 3 );
//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
//some es para comprobar si el id -> 1 o el 2 estan en la arrays te de true y si no te da false


const { name } = heroes.find( ( heroe ) => heroe.id === 1 );
console.log( name )
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
