// JAVASCRIPT TIENE UN ÚNICO THREAD, ES DECIR, UN ÚNICO HILO DE EJECUCIÓN
// ESTE HILO DE EJECUCIÓN EJECUTA LAS SENTENCIAS DE MANERA SECUENCIAL
// ADEMÁS BLOQUEA LA EJECUCIÓN HASTA ESTAR RESUELTA

// ESTOS CONSOLE.LOG SE VEN DE MANERA SECUENCIAL
// Y DENTRO DEL CALLSTACK SE EJECUTAN UNO DESPUÉS DEL OTRO

console.log("Primer mensaje")
console.log("Segundo mensaje")
console.log("Tercer mensaje")

// en los casos en los cuales se deban procesar diversas funciones, devenidas de una, se hará de manera lifo (last in first out)

const suma = (a, b) => {
    return a + b
}

const multiplicarPorDos = (a, b) => {
    return suma(a, b) * 2
}

console.log(multiplicarPorDos())

// asíncronía con setTimeout
// setTimeout es un recurso asincrónico que me va a permitir ejecutar un callbacl luego de un tiempo determinado en milisegundos

// setTimeout( () => {
//     alert("Este mensaje se verá dentro de un tiempo")
// }, 5000)

// ejemplo de diferencia de sincronismo y asincronismo

console.log("Este es primero")
setTimeout(() => {
    console.log("Este es segundo")    
}, 0)
console.log("Este es tercero")

setTimeout( () => {
    console.log("Esto es asincrónico")
}, 10000)

// pueden existir errores por saturación en el callstack
// esto es una función recursiva que se llama a sí misma infinitamente

// function foo() {    
//     foo()
// }
// foo()

// setIterval
// ejecuta un callback cada determinada cantidad de tiempo

// setInterval( () => {
//     console.log("Esto es un loop")
// }, 2000)

// clearTimeout() y clearInterval()
// estos dos métodos me permiten detener la ejecución de estos elementos asíncronos

const cadaDosSegundos = setInterval( () => {
        console.log("Esto es un loop")
    }, 2000)

clearInterval(cadaDosSegundos)

const despuesDeDiezUnSegundo = setTimeout(() => console.log("asdasd"), 1000)

clearTimeout(despuesDeDiezUnSegundo)

// PROMESAS

// REPRESENTA LA RESPUESTA DE UN EVENTO A FUTURO
// esta respuesta se puede dar o no
// las promesas tienen tres estados posibles
// el estado por defecto es pending, en donde la promesa aguarda a que se genere una respuesta

const promesa = new Promise ( (resolve, reject) => {

})

console.log(promesa)

// funcion con promesa

const evaluar = ( nota ) => new Promise((resolve, reject) => {
    setTimeout(() => {
        nota > 7 ? resolve("Usted aprobó") : reject("Desaprobó")
    }, 500)
})

// si la promesa cambia el estado a fulfilled, toma por valor un resolve
// fulfilled no es lo mismo que resolve

// console.log(evaluar(10))

//si la promesa no se resuelve, toma el estado de rejected

// console.log(evaluar(1))

// para poder acceder a los valores que se decantan de una resolución de promesa, podemos utilizar los métodos .then() y .catch()
// las promesas también tienen acceso a un caso default, que se denomina .finally()
// todos estos métodos reciben un callback como argumento
// el callback para .then() y .catch()

evaluar(1)
.then(() => {
    console.log(`Hola, el resultado de la promesa es aprobado`)
})
.catch(() => {
    console.log(`El resultado de la promesa es desaprobó`)
})
.finally(() => {
    console.log("Yo sirvo para algo, eso creo")
})

// sugar syntax
// con el uso de la palabra reservada async, una función se puede volver asíncrona sin usar la clase new Promise

const funcionAsincrona = async (url) => {    
    const response = await fetch(url)
}

