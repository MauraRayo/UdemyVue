import gitphyApi from "./bases/11-Axios";

const getImage = async() => {
try {
  const { data } = (await  gitphyApi.get('/random')).data
  const { url } = data.images.original
  
  
  const img = document.createElement('img')
  img.src = url
  document.body.append( img )

    
} catch (error) {
    console.log('Error en la peticion' , error)
    throw error
    
}


}

getImage()