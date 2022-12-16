// // arrays

// // son un tipo de dato objeto, que tiene una forma de estructurar su contenido, basada en [] y ,
// // son una colección de datos o una lista de datos
// // todos sos elementos tienen una posición numérica (índice)
// // su dimensión no tiene límites
// // .length mide la longitud de un array
// // para definir un array, debemos usar corchetes

// const frutas = []

// const otrasFrutas = new Array()

// console.log(typeof frutas)

// console.log(otrasFrutas)

// // como se listan los valores

// const numeros = [ 1, 2, 3, 4, 5, 6 ]

// // un array puede contener cualquier tipo de dato

// let random = [ "Luciano", "letras", 600, 44555, ["naranja", "banana"], { nombre: "Hideo Kojima", edad: 4} ]

// const bidimensional = [ [1, 2, 3], [4, 5, 6]]

// // para visualizar un valor

// console.log(random)

//de esta formA NO PUEDO ACCEDER A UN VALOR PARTICULAR DEL ARRAY

// console.log(`El nombre de mi perro es: ${random}`)

// para poder acceder a un dato particular, debo tener en cuenta el índice

// console.log(random[3])

// console.log(random[5].nombre)

// console.log(random[5].edad)

// console.log(random[4][1])

// acceder a array de objetos

// const cliente = [
//     { 
//         nombre: "Roberto", 
//         nDeCuenta: 132103242834234, 
//         clienteBlack: false
//     },
//     {
//         nombre: "Silvia", 
//         nDeCuenta: 093493842934889,
//         clienteBlack: true
//     }
// ]

// for (let index = 0; index < cliente.length; index++){
//     console.log( cliente[index] )
//     console.log(`El número de cuenta del cliente ${cliente[index].nombre} es de: ${cliente[index].nDeCuenta}`)

//     if( cliente[index].clienteBlack === true) {
//     console.log(`El cliente: ${cliente[index].nombre} tiene un 25% de descuento los viernes`)
//     }
// }

// métodos


const numeros = [20, 30, 6644, 3342, 35948645, 33, 12, 600]

// length 
// devuelve la longitud del array

console.log(numeros.length)

// push 
// push añade un nuevo elemento al final de la cadena
// necesitamos el identificador del array

numeros.push(55)

// afecta al array original y le añade un elemento

console.log(numeros) 

// unshift
// va a añadir un nuevo elemento al inicio del array
// va a desplazar a todos los índices de los elementos que contiene
// preciso del identificador parar aplicar el método

numeros.unshift(12)

console.log(numeros)

// shift 
// va a borrar el primer elemento del array
// precisa de un identificador para aplicar el método

numeros.shift()

console.log(numeros)

// pop
// va a borrar el último elemento del array
// precisa de un identificador para aplicar el método

numeros.pop()

console.log(numeros)

// splice
// permite remover elementos de un array
// también podés remover y añadir elementos
// poder añadir elementos sin remover ninguno
// AFECTA AL ARRAY ORIGINAL

const frutas = [ "Naranja", "banana", "manzana", "kiwi", "frutilla"]

// splice recibe argumentos
// va a recibir desde el inicio hasta donde queramos cortar
// si nosotros le pasamos solamente un valor, va a interpretar que es el índice y va a cortar todo lo que se encuentre dentro del array

// const frutasRecortadas = frutas.splice(1)

// console.log(frutas)
// console.log(frutasRecortadas)

// si yo le paso dos argumentos, el primero va a estar referido a la posición del index y segundo va a estar referido a la cantidad de elementos que se quieran extrear de ese array
// es incluyente del valor del índice

const copiaDeFrutas = [...frutas]

const frutasSpliceConDosArgumentos = copiaDeFrutas.splice(2, 2)

console.log(frutas)
console.log(frutasSpliceConDosArgumentos)

// recortar y añadir

const sacarPeroAñadirDosFrutasNuevas = frutas.splice(3, 2, "durazno", "uvas", "damasco", "pomelo", "melon")

console.log(frutas)

// yo puedo añadir elementos sin sacar ninguno
// lo que define la cantidad de elementos que extraemos, es el segundo argumento

frutas.splice(1, 0, "papaya", "frutilla")

console.log(frutas)

// join
// hace que un array se vuelva una cadena de caracteres, en donde se puede espaciar a los caracteres con un elemento


// si no le paso ningún valor, me los separa con coma
console.log(frutas.join())
console.log(frutas.join(", "))
// podemos aplicar el método dentro de las template strings

console.log(`La lista de frutas de la frutería es la siguiente: ${frutas.join(", ")}`)

// concat
// une dos arrays
// un array al cual unir el otro array

console.log(frutas.concat(numeros))
console.log(frutas.concat(["lapiz", "cartuchera", "goma"]))
console.log(frutas)

// slice 
// hace una copia de  UNA PORCIÓN O TOTALIDAD DE UN ARRAY, PERO NO MODIFICA EL ARRAY ORIGINAL
// ME DEVUELVE UN NUEVO ARRAY CON LOS ELEMENTOS QUE CORTÉ
// RECIBE HASTA DOS ARGUMENTOS: un inicio que es incluyente y un final que es excluyente del corte

const sliceFrutas = frutas.slice(4) // cortó desde el índice 1 hasta el final del array
console.log(sliceFrutas)
console.log( frutas)

// slice con punto de partida y final


const sliceConDosArgumentos = frutas.slice(2,6)
console.log(frutas)
console.log(sliceConDosArgumentos)

// slice sin argumentos
// copia total del array

const sliceSinArgumentos = frutas.slice()
console.log(sliceConDosArgumentos)

// indexOf
// me devuelve el índice del elemento que queremos
// el índice es numérico

console.log(frutas.indexOf("manzana"))

// includes
// verifica si existe el elemento que se pasa como argumento dentro del array
// devuelve booleano

console.log(frutas.includes("kiwi")) // false porque no existe

console.log(frutas.includes("frutilla"))

// ejemplo de implementación de includes dentro de un if

if (frutas.includes("frutilla")){

    console.log("si tenemos frutilla en la frutería")

} else {
    console.log("no tenemos")
}

// reverse
// invierte el orden de un array
// afecta al array original

console.log(frutas.reverse())

// ejemplo de splice y reverse, para no afectar al array original

const frutasCopiadas = frutas.slice()
frutas.reverse()

console.log(frutas)
console.log(frutasCopiadas)
console.table(frutas)

// 1) Necesito que instancien objetos con class constructor o con funcion. Este objeto tiene que tener los siguientes propiedades: nombre, apellido, edad, direccion, nDeCuenta, clientePreferencial, gastosDeTarjeta.
// 2) Crear una variable que contenga un array vacío ej: = []
// 3) quiero que instancien 5 nuevos objetos a partir de esto y que pusheen esos nuevos objetos a un array vacío. El array tiene que estar creado antes de hacer el push.
// 4) Quiero que visualicen en consola, con console.table, el array con los objetos que pushearon.
// 5) con un for, vamos a iterar sobre todos esos valores. Vamos a visualizar en consola cada uno de los nombres de los clientes.
// 6) Si el cliente es preferencial, entonces tiene un 5% de descuento en sus gastos de tarjeta. DENTRO DE FOR
