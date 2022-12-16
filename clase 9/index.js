const contenedor = document.querySelector("#contenedor")

// puedo acoplar eventos desde js
// on<event>
// handler es la función a ejecutar al desencadenarse el evento
// Sintaxis apropiada de propiedad de DOM para desencadenar eventos
// element.on<event> = () => {}

// onclick
// desencadena un evento al hacerse un click sobre un elemento del DOM

contenedor.onclick = () => {
    alert("Me hicieron click")
}

// addEventListener()
// es una alternativa que permite desencadenar handlers a partir de eventos
// te permite asignar múltiples handlers a un solo evento

// element.addEventListener( event, () => {
//})

const parrafo = document.querySelector("p")

parrafo.addEventListener( "click", () => {
    console.log("Hola chicos, somos finalistas")
} )

// style
// me permite acceder a las propiedades de css y modificarles desde js
// tenemos que pasar a las propiedades a camelcase, en vez de snake case
const cuadrado = document.querySelector("#rojo")
// console.log(cuadrado)

// cuadrado.onclick = () => {
//     console.log("slkdjsalkjd")
//     cuadrado.style.backgroundColor = "black"
// }

// MOUSE
// mouseover
// al ingresar a un nodo, desencadena el evento

// cuadrado.onmouseover = () => {
//     console.log("estoy en el cuadrado")
// }

// // mouseout
// // al salir de un nodo, se desencadena el evento

// cuadrado.addEventListener( "mouseout", () => {
//     console.log("estoy saliendo del cuadrado")
// })

// // mousemove
// // se refiere al movimiento del mouse dentro de un nodo

// cuadrado.onmousemove = () => {
//     console.log("estoy moviéndome")
// }

// mousedown
// cuando se hace tercer click
cuadrado.addEventListener( "mousedown", () => {
    console.log("click tercer")
})

// mouseup
// cuando se suelta el tercer click

cuadrado.onmouseup = () => {
    console.log("unclick")
}

// evento sensible al uso de la ruedita del mouse

cuadrado.addEventListener( "wheel", () => {
    console.log("ruedita")
})