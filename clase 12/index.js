// sugar syntax
// azúcar sintáctico
// - sintaxis clara y reducida

// operador unario
// ++ para incrementar de 1 en 1
// -- para decrementar en 1 en 1

let acc = 0

for ( let i = 0; i < 10; i++ ){
    acc--
    console.log(acc)
}

console.log(acc)

// array de objetos inconsistente 

let clientes = [
    {
        nombre: "Franco",
        edad: 20,
        clientes: "Regular"
    },
    {
        nombre: "Nicolás",
    },
    {
        nombre: "Andrea",
        clientes: "Regular",
        edad: 20
    }
]

// EVALUACIÓN DE CORTOCIRCUITO

// or lógico
// DEVUELVE EL PRIMER VALOR VERDADERO
// AL MENOS UN ODE LOS DOS VALORES TIENE QUE SER TRUE

const data = false 

console.log(data || "No hay datos")

clientes.forEach( elemento => {
    console.log( elemento.edad || "no tiene")
})

// AND LÓGICO
// devuelve el último valor verdadero, o un false
// LOS DOS VALORES DEBEN SER TRUE
// SI SE DA EL PRIMER CASO, SUCEDE EL SEGUNDO

const saludar = false
console.log( saludar && "Bienvenido a nuestra hermosa página web" )

const div = document.querySelector("div")

clientes.forEach( elemento => {
    const item = document.createElement("p")
    item.innerHTML = `La edad del cliente ${elemento.nombre} es de: ${elemento.edad}`
    elemento.edad && div.appendChild(item)
})

// OPERADOR TERNARIO
// es una sintaxis reducida de un if
// es el único operador que tiene tres operandos
// comparación ? PORSILARESPUESTAESTRUE : PORSILARESPUESTAESFALSE
// hay un retorno implícito

const validarEdad = edad => edad >= 18 ? "Puede entrar al cine" : "Usted no puede entrar"

// const edadDelUser = prompt("Ingrese su edad")

console.log(validarEdad(undefined))

// nullish
// son dos operandos que se unifican en una evaluación a través del operando ??
// siEstoEsNullOUndefined ?? EntoncesdevolverEsteValor
// siEstoEsUnValorTrue ?? EntoncesNoSeDevuelveEsto

const informacion = ""

console.log( informacion ?? "No se hallaron datos")

// optional chaining (?)
// el uso de este operador siempre va a estar relacionado a las propieades anidadas
// valida que exista una propiedad y si no existe devuelve un undefined
// este operador facilita que no se interrumpa la ejecución del código por un error 

const mascota = {}

const persona = {
    nombre: "Juli",
    familia: {
        mama: "sakdsad",
        papa: "sañdkñsad"
    }
}

// si no existe la propiedad duenio, no se puede acceder a edad y eso da un error por indefinido
// console.log(mascota.duenio.edad)

// alert(mascota.duenios?.nombreDelDuenio)
// console.log(persona.familia?.primo)

// destructuring

// arrays

const frutas = [ "banana", "manzana", "kiwi", "naranja", "melón" ]

const [ , , , , frutaFavorita ] = frutas

console.log(frutaFavorita)

// si se altera la posición de los elementos de un array, el destructuring tomará un dato diferente

frutas.reverse()

const [ frutaLoca ] = frutas

console.log(frutaLoca)

// objetos

let mesa = {
    patas: 4,
    asientos: 6,
    color: "rojo"
}

const { color } = mesa
console.log(color)

// alias de objeto
// const { propiedadDelObjeto, nuevoNombreDeLValorExtraído } = nombreDelArray

const { patas: cantidadDePatas } = mesa
console.log(cantidadDePatas)

// si se intenta acceder al nombre de la propiedad y no al del nuevo alias, tenemos un error
// console.log(patas)

// spread operator

const verduras = [ "espinaca", "lechuga", "acelga", "apio" ]

const verdulería = [ ...frutas, ...verduras]

console.log(verdulería)

// Math.max(a, b, c ,d)
// el spread nos permite pasar a arrays como argumentos, auqnue esos métodos o funciones reciban argumentos diferentes a ese tipo de dato (array)

const numeros = [ 100, 1234234, 6 ]

console.log(Math.max(...numeros))

// podemos copiar arrays u objetos

const copiaDeMesa = {...mesa}

const nuevasFrutas = frutas

console.log(copiaDeMesa === mesa)

const copiaFrutas = [...frutas]

console.log( copiaFrutas === frutas)