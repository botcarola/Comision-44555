// este tipo de desarrollo de algoritmo tiene un bajo nivel de abstracción

const calculo = ( operando1, operador, operando2) => {

    if ( operador === "+"){
        return operando1 + operando2
    } else if ( operador === "-"){
        return operando1 - operando2
    } else if ( operador === "*"){
        return operando1 * operando2
    } else if ( operador === "/"){
        return operando1 / operando2
    } else {
        return `No es un operador válido.`
    }
}

console.log(calculo( 4 , "*" , 8 ))

// en js las funciones todas son consideradas funciones de primera clase

// callbacks
// GRUPO DE FUNCIONES QUE SE USAN PARA SER PASADAS COMO ARGUMENTOS O RETORNADAS EN OTRA FUNCION

const suma = (a , b) => {
    return a + b
}

const resta = ( a , b) => {
    return a - b
}

const multiplicacion = ( a , b) => {
    return a * b
}

const division = ( a , b) => {
    return a / b
}

// funciones de orden superior
// SON AQUELLAS QUE PUEDEN RECIBIR COMO ARGUMENTOS A FUNCIONES
// Y TAMBIÉN PUEDEN DEVOLVER FUNCIONES

function calculadora ( operacion, operando1, operando2 ) {
    return operacion(operando1, operando2)
}

console.log(calculadora(multiplicacion, 10, 20))

// n oes necesario que se realice la función y se ligue a una variable
// podemos desarrollarla al pasar el argumento

// métodos de arrays
// todos estos métodos se aplican específicamente a arrays e iteran buscando un resultado y/o ejecutando instrucciones
// TODOS LOS MÉTODOS QUE RECIBAN HASTA 3 PARÁMETROS, VAN A PRECISAR SI O SI DE QUE SE MENCIONES LOS PARÁMETROS ANTERIORES
const frutas = [ "kiwi", "naranja", "sandía", "banana", "manzana", "kiwi", "frutilla"]

const numeros = [ 213213, 3434, 564, 1, Infinity, 4989845, -Infinity, 4343, 223, 12, 12]

// forEach()
// es un método de array que itera sobre los elementos o valores que contiene
// específicamente se ocupa de ejecutar instrucciones
// no afecta al array original
// no acepta las sentencias break, continue
// no genera nuevos valores
// 3 parámetros: 
// 1) es obligatorio, elemento actual
// 2) index
// 3) array

// forEach no devuelve valores, simplemente ejecuta instrucciones sobre los elementos del array

frutas.forEach((elemento) => {
    console.log(elemento.toUpperCase())
    
})

// find()
// va a buscar dentro de un array y en relación a lo que se quiera obtener
// siempre va a devolver la primer coincidencia
// recibe hasta tres parámetros elementoActual, indice y array

const kiwi = frutas.find(( elemento, i ) => {
    return i === 0
})

console.log(kiwi)

// filter()
// filter copia todos los elementos que coincidan con el criterio de búsqueda
// recibe hasta tres parámetros elementoActual, indice y array
const numerosPares = numeros.filter(( elemento ) => {
    return elemento % 2 === 0 && elemento > 100
})

console.log(numerosPares)

// some()
// DEVUELVE UN BOOLEAN

const cotejarCantidadCaracteres = frutas.some((elementoActual) => {
    return elementoActual.length === 4
})

console.log(cotejarCantidadCaracteres)

// map()
// aplica una sentencia sobre cada elemento de un array y a su vez, lo copia por completo
// puede ser una copia mutada
// recibe hasta tres parámetros elementoActual, indice y array

const frutasEnMayus = frutas.map((elementoActual) => {
    return elementoActual.toUpperCase()
}) 

console.log(frutas)
console.log(frutasEnMayus)

// reduce()
// recibe hasta 4 parámetros, dos de ellos son obligatorios
// REDUCE TODO EL ARRAT A UN SOLO VALOR
// como genera un valor, vamos a querer guardarlo en una variable
// no afecta al array original
// reduce no solo recibe callback, sin otambién un valor inicial
// el valor inicial va a depender del tipo ded ato con el que estemos trabajando

const elementosHtml = frutas.reduce( ( acumuladora, elementoActual) => {
    return acumuladora + `<p>${elementoActual}</p>`

},"")

console.log(typeof elementosHtml)

// sort
// es un método de array que ordena el contenido
// siempre va a ordenar el contenido, teniendo en cuenta posición unicode de un character
// es un método que afecta al array original
// es un método inestable si n ose sabe manipular
// recibe dos parámetros obligatorios: a, b
// a y b representa la comparación entre elementos que existen en el array

// para ordenar numbers

// para ordenar de manera ascendente
// copio con spread operator el array para no ver afectado al array original
const numerosAscendente = [...numeros].sort(( a, b) => {
    return a - b
})

console.log(numeros)
console.log(numerosAscendente)

// de manera descendente
const numerosDescendente = [...numeros].sort(( a, b) => {
    return b - a
})

console.log(numerosDescendente)

// CÓMO ORDENA SORT LOS STRINGS?
const frustasAscendente = [...frutas].sort((a, b) => {
    if ( a < b ){
        return -1
    } else if ( a > b){
        return 1
    } else {
        return 0
    }
})

console.log(frutas)
console.log(frustasAscendente)

const frustasDescendente = [...frutas].sort((a, b) => {
    if ( a < b ){
        return 1
    } else if ( a > b){
        return -1
    } else {
        return 0
    }
})

console.log(frustasDescendente)


// Math.
// se usa el prefijo Math. + el método que querramos utilizar
// es un método envolvente para numbers
// en mayus siempre la primer letra

console.log(Math.E) // valor constante de Euler
console.log(Math.PI) // devuelve valor de PI
console.log(Math.min(10, 200, 5, -Infinity)) // devuelve el número menor
console.log(Math.max(5, 3, 30, 25)) // devuelve el número mayor
console.log(Math.sqrt(81))
console.log(Math.random()) // devuelve un número aleatorio entre 0 y 1

// utilizando los siguientes elementos, podemos establecer un rango numérico que me ofrezca números random 
// sintaxis de Math.random
// Math.random() * (max - min) + min;
// para poder redondear el número usamos Math.floor
console.log(Math.floor(Math.random() * (100 - 1) + 1 )) 

console.log(Math.floor(1.9)) // redondea hacia abajo
console.log(Math.ceil(1.1)) // redondea hacia arriba

// Date
// establece una fecha
// este tipo de dato no es string
// puede ser ordenado por sort

console.log( new Date()) // genera una fecha actual
// los meses en js se manipulan desde 0 a 11, en donde 0 representa enero y 11 diciembre
console.log( new Date(1994, 8, 26))
// puedo añadir hs, minutos, segundos
console.log( new Date(2000, 4, 12, 20, 35, 12))

const fechaDeHoy = new Date()

// getDate()
// extrae el día de una fecha
console.log(fechaDeHoy.getDate())

// getMonth()

console.log(fechaDeHoy.getMonth())

// getFullYear()

console.log(fechaDeHoy.getFullYear())

// toDateString()

console.log(fechaDeHoy.toDateString())

// toLocalDateString()

console.log(fechaDeHoy.toLocaleDateString())

// toLocaleString()

console.log(fechaDeHoy.toLocaleString())

// toTimeString()

console.log(fechaDeHoy.toTimeString())


