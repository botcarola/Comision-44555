console.log("ASÍ SE PROGRAMA DE VERDAD")

// console.log es un método que me va a permitir visualizar en consola un mensaje
// este mensaje puede ser tanto una cadena de texto, cualquier tipo de dato, etc

// SINTAXIS --> son reglas que se establecen a la hora de generar instrucciones

//----------------------------------------

// 1) NO SE TIENEN EN CUENTA LOS ESPACIO O SALTOS DE LÍNEA
// [asdjklasd] ---> [ askdjsakd ]
//{
//  askldjasd: asñdkañsldkasd  
//}
// la identación o sangría es el espacio que se genera entre líneas de código anidadas

// ----------------------------------------

// 2) camelCase
// ej: edadDelUsuario
// se hace uso de mayus en la primera letra que deviene de una palabra anterior
// LA PRIMER PALABRA SIEMPRE VA A ESTAR EN MINÚSCULA, LAS CONSECUENTES, SOLAMENTE EN MAYUS LA PRIMERA LETRA
// ej: verificarEdadDelUsuario, carritoDeCompras, nombreDelJugador, emailDelUsuario

//-----------------------------------------

// 3) NO SE DEFINE EL TIPO DE VARIABLES
// JavaScript tiene tipado débil
// De que las variables no precisan que se le asignen un tipo específico de dato

//-----------------------------------------

// 4) Se pueden incluir comentarios: ----> // para código de una sola línea /* para código extenso */

//-----------------------------------------

// 5) JavaScript es case-sensitive: que distingue mayúsculas de minúsculas
// PERRO, perro, Perro, PerRo, peRRo, pERro: TODO ESTO ES DIFERENTE PARA JAVASCRIPT

//-----------------------------------------

// 6) En JavaScript no es necesario el uso de ;

// ----------------------------------------

// 7) NO SE USA LA Ñ 

// DECLARACIÓN DE VARIABLES

// const es una declaración de variable que va a generar que el valor al cual se asigna sea constante
// QUE UNA VEZ INICIADA ESTA VARIABLE, ESE VALOR VA A MANTENERSE SIEMPRE IGUAL

const gustoFavoritoDeFernando = "Menta"

const nombre = "Carolina"

// INTENTAR REASIGNAR UNA VARIABLE EN JS, QUE SEA CONST, DA ERROR

// gustoFavoritoDeFernando = "Chocolate Suizo"

// console.log(gustoFavoritoDeFernando)

// let es una forma de declaración de variable que permite la reasignación del valor

let edad = 28

console.log(edad)

edad = 29

console.log(edad)

// una cosa es declarar una variable

let edadDelUsuario = 50

// reasignación

edadDelUsuario = 55

// redeclara NO SE PUEDE

// let edadDelUsuario = 1999 ---> ESTO ES UN ERRORRRRR !!!!!

// var esEstudiante = "Si"

// console.log(esEstudiante)

// var esEstudiante = "no"

// console.log(esEstudiante)

// NO SE UTILIZA VAR PARA NADA, ESTÁ DEPRECADO, ESTÁ OBSOLETO
// NO SE REDECLARAN VARIABLES CON VAR NI CON NADA, ESTÁ MAL, ES UN ERROR

// DATOS PRIMITIVOS

// SON TIPOS DE DATOS QUE NO PRECISAN INSTRUCCIONES PARA MANIPULAR VALORES


// string, cadena de caracteres
// string = texto
// lo que define a los string es el uso de "", '', ``
// si intentas escribir texto sin comillas, javascript interpreta que estás escribiendo el identificador de una variable

const segundoNombre = "Elizabeth"
console.log(segundoNombre)

// 'Carola' 
// `laskj dkl asjdk asds`
// "añsld jaskl jd klsajd" // --->> todos son datos de tipo string

// number
// en js los números con coma se llaman números flotantes
// todos los números se pueden asignar a una variable

const numeroFavorito = 20931092
const numeroConComa = 2.123123213 // así se representan los números con coma

// OPERADORES ARITMÉTICOS

// suma
console.log( 1 + 1 )

// resta
console.log( 10 - 5 )

// multiplicación
console.log( 5 * 10 )

// división
console.log( 10 / 2)

// CONCATENACIÓN

const usuario1 = "Agustín"
const usuario2 = "Andres"
const usuario3 = "Joaquín"

console.log( usuario1 + ", " +  usuario2 + " y " + usuario3 )

// prioridad

console.log( 2 * 4 + 5)

const suma = 2 * 5 + 10

// CUADROS DE DIALOGO

// es una ventana emergente con la cual interactúa el usuario
// es nativa del navegador
// esa ventana no es customizable
// es horrible
// solamente se usa para aprender lo básico de js

// alert visualiza un mensaje al usuario

alert("HOLA CHICOS, BIENVENIDOS A MI PÁGINA")

// prompt interactúa con el usuario a través de un input

const edadRealDelUsuario = prompt("INGRESE SU EDAD")

console.log(`Usted tiene: ${ edadRealDelUsuario }`)

// 1) Muestre un mensaje en consola que diga lo siguiente: "¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!"
// 2) Hacer una variable que almacene un número par mayor a 10.
// 3) Hacer una variable que almacene  un numero impar menor a 100.
// 4) Visualizar en consola la suma de las dos variables numéricas que hicimos.
// 5) Con un cuadro de diálogo, pregúntele el nombre al usuario que ingresa a la web y guarde su valor en una variable.
// 6) Visualizar en consola, junto al nombre del usuario, el siguiente mensaje: "Bienvenide a nuestra primera web -usuario-"
// 7) Genere una nueva variable que almacene el número 5 y que se multiplique con el número impar.
// 8) Visualice en consola cada uno de los nombres de las participantes del grupo.
// 9) Reste 100 a la variable que multiplica por 5 al número primo.
// 10) Cotejar el tipo de dato del punto 3 y 5.

const impar = 99
const multiplicadora = 5 * impar

console.log(multiplicadora)
console.log (impar)

// TYPEOF ES UN MÉTODO QUE TE DICE CUÁL ES EL TIPO DE DATO QUE LE PASASTE

console.log((typeof "99") + 99)
