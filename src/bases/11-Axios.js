 
import axios from 'axios';

const apiKey = '2krqXQCiA0ARSEt3vldIQz5glQa8qdQ1'
//fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

const gitphyApi = axios.create({
baseURL: 'https://api.giphy.com/v1/gifs',
params: {
    api_key: apiKey
}
})

export default gitphyApi


gitphyApi.get('/random')
.then(resp => {

    const { data } = resp.data
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url

    document.body.append( img )

})




