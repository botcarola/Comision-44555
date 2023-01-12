const contenedor = document.querySelector(".container")

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="pokemon-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.name}>
                </div>                
                <h2>
                    ${element.name}
                </h2>
                <button id="boton-${element.id}" class="boton-card">
                    Añadir al carrito
                </button>
            </div>
        `
    }, "")

    contenedor.innerHTML = generarNodos
}

cardHtml(pokemon)

let carrito = []

// necesito llamar a todos los botones que van a generar la acción de añadir al carrito
// para poder hacerlo, utilizamos querySelectorAll , getElementByClassName

function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)   
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))   
        }
        
    })
}

aniadirAlCarrito(pokemon)

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []