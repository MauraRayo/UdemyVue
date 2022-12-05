

const apiKey = '2krqXQCiA0ARSEt3vldIQz5glQa8qdQ1'

//https://api.giphy.com/v1/gifs/random?api_key=2krqXQCiA0ARSEt3vldIQz5glQa8qdQ1



fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then (resp => resp.json())
.then(({ data })=> {
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url

    document.body.append( img )
    

    
})