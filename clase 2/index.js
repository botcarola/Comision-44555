// 8) Visualice en consola cada uno de los nombres de las participantes del grupo.
// 9) Reste 100 a la variable que multiplica por 5 al número primo.
// 10) Cotejar el tipo de dato del punto 3 y 5.


const usuario1 = "Itzel"
const usuario2 = "María"
const usuaria3 = "Ana Paula"

console.log(usuario1 + " " + usuario2 + " " + usuaria3)
console.log(`${usuario1}, ${usuario2} y ${usuaria3}`)

// 9

const primo = 7
const multiplicacion = primo * 5
const resta = multiplicacion - 100 

// 10

console.log(typeof 10)
console.log(typeof "Hola")

// Boolean

// tipo de dato primitivo
// tiene dos posibles valores
// true ---> verdadero ---> prendido ---> 1 
// false ---> falso --> apagado ---> 0

const esDocente = 1
const esAlumna = 0

// console.log(Boolean(esDocente)) // true
// console.log(Boolean(esAlumna)) // false
// console.log(Boolean("Carola")) // true
// console.log(Boolean(-10)) // true
// console.log(Boolean("")) // false
// console.log(Boolean(undefined))
// console.log(Boolean(null))

// // OPERADORES LÓGICOS

// && AND LÓGICO
// jamón Y queso ---> 

// usuario Y contraseña ---> error, 

const user = true
let password = false

console.log(user && password) // QUIERO QUE EVALUES QUE AMBOS OPERANDOS SEAN TRUE

// cómo se compone un operador lógico en js?
// OPERANDO_1 && OPERANDO_2 ---> TRUE SI AMBOS SON VERDADEROS
// ESCENARIOS POSIBLES DE OPERADOR LÓGICO AND &&

console.log( true && true ) // --> true
console.log( true && false ) // --> false
console.log( false && true ) // --> false
console.log( false && false ) // --> false

// SE PUEDEN UTILIZAR MÁS DE 2 OPERANDOS EN UNA COMPARACIÓN

const token = 13109831923
password = "contraseña123"

console.log( user && password && token)

// SIEMPRE EL AND TE VA A DEVOLVER EL PRIMER VALOR FALSE Y EL ÚLTIMO VALOR TRUE, EN EL CASO DE QUE TODA LA CADENA DE OEPRANDOS SEA TRUE

// OR ||

// EVALÚA QUE AL MENOS UN OPERANDO SEA TRUE
// EXISTEN 4 CASOS POSIBLES

// console.log( true || true ) // true
// console.log( true || false ) // true
// console.log( false || true ) // true
// console.log( false || false ) // false

// TANTO COMO PARA || O && SE VAN A EVALUAR LOS OPERANDOS DE IZQUIERDA DERECHA

// USO DE AND Y OR EN UNA MISMA EVALUACIÓN

// NOT !
// SE EXPRESA A TRAVÉS DE UN SIGNO DE EXCLAMACIÓN
// niega el valor booleano implícito del dato
// INVIERTE SU VALOR BOOLEANO

// console.log( !true )
// console.log( !!false ) // NIEGA A LA NEGACIÓN
// console.log( !!true )
// console.log( !false )

// SI QUIEREN SABER CUÁL ES EL VALOR BOOLEANDO DE UN TIPO DE DATO, PUEDEN USAR Boolean()

console.log(Boolean("Franco"))

// OPERADORES DE COMPARACIÓN
// comparan el valor de los operandos, no su estado booleano
// SIEMPRE DE LA COMPARACIÓN DEVUELVEN UN BOOLEANO, QUE PUEDE SER TRUE O FALSE

// DE CANTIDAD

// console.log( 10 > 100 ) // false
// console.log( 10 < 100) // true
// console.log( 10 >= 10 ) // true
// console.log( 10 <= 100) // true
// console.log( 10 <= 10 ) // true

// COMPARACIÓN DE VALORES
console.log( "10" == 10 ) // comparación que no es estrica y que evalúa el valor y no el tipo
console.log("diez" == 10) // false

// COMPARACIÓN ESTRICTA (VALORES Y TIPO DE DATO)
console.log( "10" === 10 ) // evalúa valor y tipo de dato

// DESIGUALDAD

console.log( 10 != "10" ) 

// DESIGUALDAD ESTRICTA
// cuando sea diferente por valor o tipo de dato

console.log( 10 !== "10" ) 

console.log( "carola" && 0 || "laura")

// IF

let edadDelUsuario = 15
let permisoDeLosPadres = false
const mayoriaDeEdad = 18

// SI LA COMPARACIÓN ( ENTRE ESTE OPERANDO Y ESTA COSA DA TRUE) {
//     ENTONCES SE EJECUTA TODO LO QUE ESTÁ ACÁ, QUE SON LAS SENTENCIAS
// }

// SI EL USUARIO ES MAYOR DE EDAD O TIENE EL PERMISO DE SUS PADRES, PUEDE ASISTIR AL CINE A VER UNA PELÍCULA GORE DE MIEDO JAPONÉS

edadDelUsuario = 50

if ( edadDelUsuario >= mayoriaDeEdad || permisoDeLosPadres ) {
    console.log("ESTE NIÑO ES ADULTO O TIENE PERMISO DE LOS PADRES")
}

// EL IF VA A EJECUTAR SUS SENTENCIAS O INSTRUCCIONES SIEMPRE Y CUANDO LA EVALUACIÓN DEL CASO SEA TRUE

let hijoDelPrimerUser = 10

// si la evaluación del if da false

if ( hijoDelPrimerUser >= mayoriaDeEdad || permisoDeLosPadres ) {

    console.log("Usted puede ver la película")

} else {

    console.log("tas chikito")
}

// el else (sino) siempre ejecuta sus intrucciones cuando la evaluación del if es falsa

if ( hijoDelPrimerUser >= mayoriaDeEdad ) {
    console.log("puede acceder al cine")
} else if ( permisoDeLosPadres ) {
    console.log("tiene permiso de los padres")
} else {
    console.log("no tiene permiso")
}

