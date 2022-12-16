// el navegador provee un almacenamiento local
// este almacenamiento no se relaciona con ningún servidor
// este almacenamiento solo puede ser accedido a través de javascript
// este espacio contiene información del usuario

// localStorage
// sobrevive a una recarga de página y hasta un reinicio completo del navegador

// setItem
// permite añadir un dato en el localStorage
// este dato está compuesto por una clave/valor
// setItem recibe dos argumentos, el primero la clave (el nombre de este elemento que se aloja)
// el valor a subirse

localStorage.setItem("esProfesora", "si")
localStorage.setItem("esTutor", "no, es bot")

// getItem
// este método permite extraer un dato del almacenamiento local
// para extraer debemos pasar la clave del elemento que se encuentra alojado

const validarSiEsProfe = localStorage.getItem("esProfesora")
console.log(validarSiEsProfe)

if ( validarSiEsProfe === "si" ) {
    console.log("corregí los trabajos")
}

// sessionStorage
// comparte los mismos métodos que localStorage
// al cerrarse la pestaña, se eliminan los datos
// es decir, contiene datos del usuario de manera temporal

sessionStorage.setItem("esEstudiante", "no")

// removeItem("clave")
// remueve info del almacenamiento local, en relación al nombre de la clave

localStorage.removeItem("esProfesora")

// clear()
// limpiar el almacenamiento local

localStorage.clear()

// SUBIR DATOS DIFERENTES AL ALMACENAMIENTO LOCAL

const frutas = [ "naranja", "banana", "manzana", "melón", "sandía" ]

// SI YO INTENTO SUBIR UN TIPO DE DE DATO OBJETO, VOY A PERDER SU FORMA
// ya no va a ser el de antes

localStorage.setItem("listaDeCompras", frutas)

// JSON
// javaScript object notation
// formato ligero de intercambio de datos


// JSON.stringify()
// recibe como argumento un valor
// lo transforma en un dato tipo json, que es equivalente a texto plano

const listaFrutasAJson = JSON.stringify(frutas)

console.log(typeof frutas)
console.log(typeof listaFrutasAJson)

localStorage.setItem("listaJson", listaFrutasAJson)

// JSON.parse()
// este método recibe una cadena de tipo json y la transforma a su forma original

const listaDelLocal = localStorage.getItem("listaJson")

const listaParseada = JSON.parse(listaDelLocal)

console.log(listaParseada)
console.log(typeof listaParseada)
console.log(listaParseada === frutas)

// forma segura de copiar arrays u objetos || arrays de objetos

const copiaSegura = JSON.parse(JSON.stringify(frutas))

console.log( copiaSegura === frutas)


const cliente = [
    {
        nombre: "Lucas",
        deuda: 1500
    },
    {
        nombre: "Carola",
        deuda: 0
    }
]

// esta forma solo genera una nueva referencia al array y no a los objetos
// los objetos siguen teniendo su referencia original

// const copiaDeCliente = [...cliente]

// console.log(cliente === copiaDeCliente)

// copiaDeCliente[0].deuda = 0

// console.log(cliente)
// console.log(copiaDeCliente)


// se puede hacer una copia segura, tanto como para el array y los objetos que lo componene

const copiaDeCliente = JSON.parse(JSON.stringify(cliente))

console.log(cliente === copiaDeCliente)

copiaDeCliente[0].deuda = 0

console.log(cliente)
console.log(copiaDeCliente)