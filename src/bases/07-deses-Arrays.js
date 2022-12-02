const characters = ['Luffy', 'Zoro', 'Robin', 'chopper']

const [ l, z , r , chopper = 'No tiene valor'] = characters

const  returnArray = ([letters,numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['LZR', 123])

console.log( letters, numbers)

//No lo entendi bien