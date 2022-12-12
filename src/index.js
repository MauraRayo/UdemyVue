// Una función asíncrona retorna una promesa por defecto 
// y el await solo puede ser utilizado dentro de una funcion asíncrona

const miPromesa = () => {
  return new Promise ( resolve =>{
    setTimeout(() =>{
         resolve('Tenemos un valor en la promesa')
    }, 1000);
  })
}


const medirTiempoAsync = async() => {
  console.log('Inicio')
    // await miPromesa()
  console.log('Fin')


  throw 'Error en medirTiempoAsync'
}

medirTiempoAsync()
    .then( valor => console.log( valor ) )
    .catch( err => console.log( 'error : ',  err ))
// en valor es el return de async
