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
   try {
    console.log('Inicio')
    const respuesta =  await miPromesa()
    console.log(respuesta)
  
    // El await espera a que tengamos una resolucion de la promesa
    //ya se error o aceptacion
  
    console.log('Fin')
  
    return 'fin de medir tiempo async' 
   //  throw 'Error en medirTiempoAsync'

   } catch (error) {
    return 'Catch en medirTiempoAsync'
    
   }




}

medirTiempoAsync()
    .then( valor => console.log( valor ) )
    .catch( err => console.log( 'error : ',  err ))
// en valor es el return de async
