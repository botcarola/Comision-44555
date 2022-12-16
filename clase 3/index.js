console.log("Franco")
console.log("Leonardo")
console.log("Andrea")
console.log("Thomas")

// EL SCOPE ES EL ACCESO A UN VALOR 

// esta es una variable global, por lo tanto se puede acceder a ella desde cualquier parte del código

let i = 1000

// scope de bloque
// solo se tiene acceso a ese valor dentro del ámbito en el que existe

for (let i = 0; i < 10; i++) {

}

// BUCLES
// ES UNA ESTRUCTURA QUE ME VA A PERMITIR REALZIAR UNA TAREA REPETITIVA
// va a tener una condición ligada a sí mismo para evaluar si sigue iterando sobre un elemento

// for ( inicio; condicion; incremento ) {
//     Sentencia o instrucción que será ejecutada siempre y cuando la condición sea true
// }

for ( let i = 5; i <= 10; i = i + 1 ) {
    console.log(i)

}

// versión en pseudocódigo

// LET INICIA CON 0
// SE COMPRUEBA QUE 0 ES MENOR QUE 10
// SE EJECUTA LA INSTRUCCION (CONSOLE.LOG)
// SE HACE EL INCREMENTO SOBRE LA VARIABLE i 0 + 1

// LET INICIAR CON 1
// SE COMPRUEBA QUE 0 ES MENOR QUE 10
// SE EJECUTA LA INSTRUCCION (CONSOLE.LOG)
// SE HACE EL INCREMENTO SOBRE LA VARIABLE i 1 + 1

// LET INICIAR CON 2
// SE COMPRUEBA QUE 0 ES MENOR QUE 10
// SE EJECUTA LA INSTRUCCION (CONSOLE.LOG)
// SE HACE EL INCREMENTO SOBRE LA VARIABLE i 2 + 1

// ejemplo 2 en pseudocódigo

// 0
// 0 <= 10? true
// se ejecuta la instrucción
// SE SUMA 1 A LA VARIABLE

// 1 <= 10? true
// se ejecuta la instrucción
// SE SUMA 1 A LA VARIABLE

// 2 <= 10= true
// se ejecuta la instrucción
// SE SUMA 1 A LA VARIABLE

// .
// .
// .

// 11 <= 10 ? FALSE --> ya no se ejecutan las sentencias del for y termina la iteración

// for con contador negativo
// i-- resta
// i-= x va a restar la cantidad establecida

for ( let i = 100; i >= 90; i-- ) {
    console.log(i)
}

// for con contador diferente a 1
// i += x va a sumar la cantidad establecida distinta a 1
for ( let i = 0; i <= 10; i += 2 ){
    console.log ("salkjdsklad")
}

// while
// también itera sobre elementos
// tiene el valor inicial fuera de un bloque, es decir tiene un scope global

let valorInicial = 0

while ( valorInicial <= 10 ){
    console.log(valorInicial);
    valorInicial++;
}

// do while
// siempre va a ejecutar la instrucción aunque sea una vez

let valorDoWhileInicial = 10000

do {
    console.log("aunque sea una vez");
    valorDoWhileInicial++
}
while( valorDoWhileInicial <= 5 )

// switch
// que evalúa casos comparando datos
// si no usamos break, se ejecuta la sentencia posterior, sin importar que no cumpla con el caso

const fruta = "banana"

switch ( fruta ) {
    case "banana":
        console.log("El kilo de banana está $300")
    break;
    case "naranja":
        console.log("El kilo de naranja está $100")
    break;
    default:
        console.log("Eso no es una fruta oops o no está en nuestra lista de productos")
    break;
}

// for que en vez de tener un valor inicial number, va a tener un string

// usamos .length
// .length determina la longitud de una cadena
// .length devuelve un número

const nombreDelEstudiante = "Williams"

console.log(nombreDelEstudiante.length)

for ( let i = 0; i < nombreDelEstudiante.length; i++) { 
    console.log(nombreDelEstudiante[i].toUpperCase())

}

// 0 <= 8
// 0 w
// 1 i 
// 2 l
// 3 l
// 4 i
// 5 a
// 6 m
// 7 s
// 8 undefined


// 0 < 8
// 0 w
// 1 i
// 2 l
// 3 l
// 4 i
// 5 a
// 6 m
// 7 s

// VARIABLE ACUMULADORA PARA PRESERVAR TODAS LAS ITERACIONES
let acc = 0

for ( let i = 0 ; i <= 5 ; i++ ) {  

    acc = acc + i

  
}

console.log(acc)

0 + 1
1 + 2
3 + 3
6 + 4
10 + 5
