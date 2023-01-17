const apiKey = "2bfe34db0d27d97661602c0ccc0e3df3"
const contenedor = document.querySelector(".contenedor")

let paginado = 1

const cards = (array) => {
    const nodos = array.reduce((acc, element) => {
        return acc + `
        <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt=${element.title}>
        `
    }, "")
    contenedor.innerHTML = nodos
}

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginado}`)
.then( res => res.json())
.then( data => { 
    console.log(data)
    cards(data.results)

})

// const imagenTMDB = `https://image.tmdb.org/t/p/original${imagen}`



document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?query=${document.querySelector("#busqueda").value}&api_key=${apiKey}&language=es-ES&page=${paginado}&include_adult=false`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
})
}

document.querySelector("#next").onclick = () => {
    
    if( paginado !== 500){        
        paginado++
        document.querySelector("#next").disabled = false
    } else if ( paginado === 500){
        document.querySelector("#next").disabled = true
    }

    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginado}`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
    })
}

document.querySelector("#prev").onclick = () => {
    
    if( paginado !== 1){        
        paginado--
        document.querySelector("#prev").disabled = false
    } else if ( paginado === 1){
        document.querySelector("#prev").disabled = true
    } 

    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${paginado}`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
    })
}

confirm("Desea recibir un préstamo")