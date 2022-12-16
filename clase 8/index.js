// document nos permite el acceso a todos los nodos que forman parte del árbol DOM

console.log(document)

// getElementById
// me trae el nodo/elemento ligado a su identificador
// el identificador es único

const tituloPrincipal = document.getElementById("titulo-principal")
console.log(tituloPrincipal)
console.log(typeof tituloPrincipal)

// getElementsByClassName

const contenedores = document.getElementsByClassName("contenedor")
console.log(contenedores)

// getElementsByTagName

const div = document.getElementsByTagName("li")
console.log(div)

// querySelector

const tituloQuerySelector = document.querySelector("#titulo-principal")

// querySelectorAll

const contenedorQuerySelector = document.querySelectorAll(".contenedor")
const divQuerySelector = document.querySelectorAll("div")

console.log(tituloQuerySelector)
console.log(contenedorQuerySelector)
console.log(divQuerySelector)

// createElement
// nos permite generar nuevos elementos html desde js

const contenedorDesdeJs = document.createElement("header")

contenedorDesdeJs.textContent = "Esto es un mensaje desde js"

// textContent
// poder acceder al contenido de una etiqueta
// poder reasignar el contenido de una etiqueta

// console.log(tituloQuerySelector.textContent)

// tituloQuerySelector.textContent = "contenido cambiado"


// append
// es un método que me permite añadir a un contenedor padre, un hijo
// hijo simboliza otra etiqueta
// append se utiliza para nodos de texto

document.body.append(contenedorDesdeJs)
console.log(document)

// appendChild
// es un método que permite añadir a un contenedor padre, un hijo
// este hijo NO PUEDE SER UN NODO DE TEXTO
// este hijo tiene que ser un nodo de etiqueta

const container = document.querySelector(".contenedor")

const card = document.createElement("div")

// className --> añade una clase a un nodo desde js

card.className = "tarjeta"

card.textContent = "Pikachu"

console.log(card)

container.appendChild(card)

// innerHTML
// introduce un nuevo nodo en un nodo padre

tituloPrincipal.innerHTML = "Esto está generado desde un innerhtml"