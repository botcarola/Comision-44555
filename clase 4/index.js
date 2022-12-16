tablaDeMultiplicar(8)

// 3) Realice un bucle que muestre todas las vocales y consonantes de una palabra. La palabra tiene que estar dentro de una variable.

const palabra = "otorrinolaringólogo"

// console.log( palabra.length )

// for ( let i = 0; i < palabra.length; i++) {
//     console.log( palabra[i] )
//     // console.log(palabra)

// }

// 6) Realice un bucle que coteje cuántas vocales tiene el nombre de un usuario. Para valerse de un valor, genere una variable con su nombre. Precisarán de una variable acumuladora que cuente la cantidad de vocales.


// console.log(palabra)
// console.log(palabra.length)

// let acc = 0

// for ( let i = 0; i <= palabra.length; i++ ) { 

//     if ( palabra[i].match(/[aeiou]/)) {

//         acc = acc + 1      

//     }

// }

// console.log(`La cantidad de vocales que contiene la palabra, es de ${acc}`)


///////////////////////////////////////////////////////////

// FUNCIONES
// MÉTODOS QUE ME PERMITEN A MÍ EVITAR LA REPETICIÓN DE CÓDIGO, EJECUTAR INSTRUCCIÓNES (SENTENCIAS)
// DECLARACIÓN DE FUNCIONES
// palabra reservada function
// identificador
// se pueden ejecutar en cualquier ámbito del código

function saludar () {
    console.log("¡Hola, bienvenido a mi página web!")
}

// DEBO LLAMAR A LA FUNCIÓN PARA PODER EJECUTAR A LAS SENTENCIAS QUE CONTIENE

saludar()


// PARÁMETROS

function saludarALosUsuarios ( nombre ) {

    console.log(`Hola ${nombre}`)

}

// llamado de una función que tiene parámetros precisa en la ejecución que se le pasen argumentos, para reemplazar a esos parámetros por los valores verdaderos

saludarALosUsuarios("Alvaro")
saludarALosUsuarios("Bauti")
const profe = "Carola"
saludarALosUsuarios(profe)

// USAMOS UN PROMPT Y LE PASAMOS A UNA FUNCIÓN ESE VALOR

// const nombreDelUsuario = prompt("Ingrese su nombre")

// saludarALosUsuarios(nombreDelUsuario)

// LAS FUNCIONES POR DEFECTO TIENEN UN VALOR

function suma ( a, b ) {
    return a + b 
}

// EN LA LLAMADA, LOS ARGUMENTOS SE SEPARAN CON COMA

suma(5, 6)
const sumaDeDosOperandos = suma(10, 96) // 106

function multiplicarLoSumado ( multiplicador, unValor ) {
    return multiplicador * unValor
    
}

// a las funciones se le pueden pasar todo tipo de datos

console.log(multiplicarLoSumado(5, 1000))
console.log(multiplicarLoSumado(9, sumaDeDosOperandos ))

// return es exclusivo de la funciones
// no se puede utilizar dentro de un if
// no se puede utilizar dentro de un for
// si un if o un for están dentro de una funcion, pueden usarse el return

// TABLAS DE MULTIPLICAR CON UNA FUNCIÓN

function tablaDeMultiplicar ( numero ) {

    for (let i = 0; i <= 10; i++ ){
        console.log(`${numero} x ${i} = ${ numero * i} `)
    }
}

// tablaDeMultiplicar(7)
// tablaDeMultiplicar(1000)
// tablaDeMultiplicar(1232109832)

// anónimas
// son funciones que se encuentran ligadas a una variable
// son anónimas porque no cuentan con un identificador propio
// lo que la identifica es el identificador de la variable
// no se pueden ejecutar antes de su inicialización
// console.log(multiplicar(2,8)) --> ESTO NO SE PUEDE CON FUNCIONES ANÓNIMAS

const multiplicar = function (a, b) {
    return a * b
}

console.log(multiplicar(5, 6))

// ARROW FUNCTION

// no se precisa de la palabra function para la estructuración

const dividir = () => {
    return 5/5
}

console.log(dividir())

// un solo parámetro puede ir o no con paréntesis

const dividirOtroNumero = numero => {
    return numero / 5
}

// uso de más de un parámetro

const dividirDosNumero = ( a, b ) => {
    return a / b
}

// RETORNO IMPLÍCITO
// no se puede hacer uso de este recurso, si tenemos más de una instrucción

const retornoImplicito = (a , b) => a / b

console.log(retornoImplicito(10, 10))

// ESTRUCTURA IF DENTRO DE UNA FUNCIÓn

const comprobarSiPuedeAccederAlCine = ( edad, permisoPadres) => {

    if( edad >= 18 ){
        return "puede acceder al cine"
    } else if (permisoPadres === true) {
        return "Tiene permiso de los padres, puede acceder"
    } else {
        return "No puede acceder"
    }
}

console.log(comprobarSiPuedeAccederAlCine(28, false))
console.log(comprobarSiPuedeAccederAlCine())

// si yo no cumplo con la función y no le paso todos los argumentos
// "ROMPIMIENTO DE CONTRATO"

