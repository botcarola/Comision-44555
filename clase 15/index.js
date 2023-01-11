// AJAX
// JAVASCRIPT ASINCRÓNICO Y XML
// ASYNCHRONOUS JAVASCRIPT AND XML


// API
// INTERFAZ DE PROGRAMACIÓN DE APLICACIONES
// es un puente que permite a dos componenetes de software comunicarse entre sí
// se pueden integrar funcionalidades y hacer envíos y peticiones de información

// fetch()
// promesa que nos permite hacer peticiones o enviar información a una base de datos
// fetch(URL, {})
// fetch es asíncrono
// 

// MÉTODO GET
// en fetch, pide recursos a una api
// cuando no incorporamos el segundo argumento de fetch, se sobreentiende qeu es una petición de tipo get

const personajesHtml = ( array ) => {
    const arrayReducido = array.reduce(( acc, elemento) => {
        return acc + `
        <p>
            ${elemento.name}
        </p>
        `
    }, "")

    document.querySelector(".contenedor").innerHTML = arrayReducido
}

fetch("https://rickandmortyapi.com/api/character")
.then(( respuesta ) => respuesta.json())
.then(( data ) => {
    const array = data.results // puedo recorrer la respuesta y guardar en variables la información que precise
    console.log(array)
    personajesHtml(data.results)
})
.catch((error) => console.log("malio sal"))


// MÉTODO POST
// POST ME PERMITE ENVIAR INFORMACIÓN A UNA BASE DE DATOS
// EJ: PODÉS DAR DE ALTA UN USUARIO
// se precisa que se utilice la url y se aclare el método, se incorpore el body y headers
// SI OBTENEMOS UNA RESPUESTA, SERÁ 201
// LA INFORMACIÓN DEL NUEVO USUARIO SE DEBE DESARROLLAR DENTRO DEL BODY
// NO TODAS LAS APIS PERMITEN UN ENVÍO DE TIPO POST


// fetch para ver qué trae la api

fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes")
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("error"))

// fetch con método post

// fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes", {
//     method: "POST",
//     body: JSON.stringify({
//         apellido: "Bolaños",
//         estudiante: true,
//         nombre: "José Fernando"
//     }),
//     headers: {
//         "Content-Type":"application/json"
//     }
// })
// .then( res => res.json())
// .then( data => console.log(data))

// dar de alta un usuario con POST a través de un evento de envío de formulario

const formUsers = document.querySelector("#form-users")
const inputNombre = document.querySelector("#input-nombre")
const inputApellido = document.querySelector("#input-apellido")
const inputEstudiante = document.querySelector("#input-estudiante")

formUsers.onsubmit = (e) => {
    e.preventDefault()

    fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes", {
    method: "POST",
    body: JSON.stringify({
        apellido: inputApellido.value,
        estudiante: inputEstudiante.value,
        nombre: inputNombre.value
    }),
    headers: {
        "Content-Type":"application/json"
    }
    })
    .then( res => res.json())
    .then( data => console.log(data))
}

// PUT Y PATCH
// nos permite modificar los valores de un recurso preexistente
// put reemplaza el valor por completo
// patch modifica una parte de ese recurso
// se va a precisar que la api aclare en su petición el id de el VALOR a modificar

fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes/11",{
    method: "PUT",
    body: JSON.stringify({
        apellido: "Mendez",
        estudiante: true,
        nombre: "Williams"
    }),
    headers: {
        "Content-Type":"application/json"
    }
})
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("error"))

// DELETE
// ES UN MÉTODO QUE BORRA UN RECURSO ESPECÍFICO
// PRECISA DE QUE SE LE PASE AL FETCH LA URL CON EL ID DEL RECURSO Y EL MÉTODO PRECISA SER ACLARADO CON DELETE
// ESTE MÉTODO NO LLEVA BODY NI HEADERS

// fetch("https://63bdd263f5cfc0949b4cc1fe.mockapi.io/comision-44555/estudiantes/20", {
//     method: "DELETE"
// })
// .then(( res ) => res.json())
// .then(( data ) => console.log(data))
// .catch(() => {
//     console.log("malio sal")
// })

// CÓMO BUSCAR A TRAVÉS DE UNA API INFORMACIÓN

const formPokemon = document.querySelector("#form-busqueda")
const inputPokemon = document.querySelector("#input-busqueda")

formPokemon.onsubmit = (e) => {
    e.preventDefault()
    peticion(inputPokemon.value)    
}

function peticion ( busqueda ) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}/`)
    .then( res => res.json())
    .then( data => {
        alert(`El nombre del pokemon buscado es: ${data.name}`)        
    })
    .catch(() => console.log("no se encontro")) 
}


// APIS
// LAS APIS TIENEN DOS TIPOS DE PARÁMETROS, CONSECUTIVOS A SUS ENDPOINTS
// URL PARAMS y QUERY PARAMS
// query params
// CUENTAN CON ? LUEGO DEL ENDPOINT, LOS ELEMENTOS A BUSCAR VAN A ESTAR DEFINIDOS POR CLAVE/VALOR Y SEPARADOS POR UN AMPERSAND

// fetch("https://api.pokemontcg.io/v2/cards?q=name:pikachu&pageSize=20&page=1")
// .then( res => res.json())
// .then( data => console.log(data))

// SUGAR SYNTAX DE LAS PETICIONES
// ASYNC AWAIT PARA PODER HACER PETICIONES

const peticionApi = async () => {
    const respuesta = await fetch("https://api.pokemontcg.io/v2/cards?q=name:pikachu&pageSize=20&page=1")
    const data = await respuesta.json()
    console.log(data)
}

peticionApi()

// PODEMOS HACER PETICIONES DESDE UN JSON

fetch("mockdata.json")
.then( res => res.json())
.then( data => {
        data.forEach(element => {
            console.log(element.email)
        
    });
})