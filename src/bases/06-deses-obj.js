
const person = {
    name : 'Tony',
    age: 45 ,
    codeName: 'Ironman'
    
}

const { name, age, codeName, power = 'No tiene poder'} = person
//Constantes que van a ser extraidas por este objeto

// console.log( name )
// console.log( age )
// console.log( codeName)
// console.log( power)




//Creamos una funcion que va a recibir una persona

const createHeroe = ({name, age, codeName, power}) =>
({
        id: 123456,
        name, 
        age, 
        codeName,
        power
})
console.log(person)