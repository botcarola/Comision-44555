// ¡Hola! ACÁ HAY UN MIXING DE BUCLES Y FUNCIONES DE ORDEN SUPERIOR CON MÉTODOS DE ARRAYS DE TODO TIPO
// Vamos a tener que evaluar qué es mejor aplicar para cada caso. (hay más de métodos de arrays que for)
// Espero se diviertan.


//1) Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// Ej de llamada de función:
// crearCuentaRegresiva(3) 
// Ejemplo de la devolución de la función: [3, 2, 1, 0]
// crearCuentaRegresiva(5) // [5, 4, 3, 2, 1, 0]

function crearCuentaRegresiva (numeroInicial) {
    let array = []
    for ( let i = numeroInicial; i >= 0; i-- ) {
        array.push(i)
    }
    return array
}
console.log( crearCuentaRegresiva ( 5 ) )


// 2) Crear una función invertir que tome como argumento un array y que devuelva un array con los mismos valores pero en orden invertido.

// Ej de llamada de función:
// invertir([1, 2, 3]) 
// Ejemplo de la devolución de la función: [3, 2, 1]
// invertir([5, 7, 99, 34, 54, 2, 12]) // [12, 2, 54, 34, 99, 7, 5]

const array1 = [6, 7, 8, 9, 10]
const arrayInvertido = (array) => {
    return [...array].reverse()
}
console.log(`el array original es ${array1}`)
console.log(`el array invertido es ${arrayInvertido(array1)}`)


// 3) Crear una función removerDuplicados que tome como argumento un array y que devuelva un array con los mismos valores de array pero sin los valores duplicados.
// Pista: googleen cómo hacer esto!

// Ej de llamada de función:
// removerDuplicados([1, 1, 1]) // [1]
// removerDuplicados([1, 1, 2, 2, 3, 3]) // [1, 2 ,3]
// removerDuplicados([5, 23, 8, 5, 5, 44, 23]) // [5, 23 ,8, 44]

const arrayConDuplicados = [5, 23, 8, 5, 5, 44, 23]
console.log(`el array con duplicados original es ${arrayConDuplicados}`)

// Opción 1: usando SET
const removerDuplicados1 = (array) => {
    const newArray = new Set(array)
    let result = [...newArray]
    return result
}
console.log(`array removiendo duplicados con Set ${removerDuplicados1(arrayConDuplicados)}`)

// Opción 2: usando FILTER e INDEXOF
const removerDuplicados2 = (array) => {
    return array.filter ((elemento, i) => {
        return array.indexOf(elemento) === i
    } )
}
console.log(`array removiendo duplicados con filter e indeOf ${removerDuplicados2(arrayConDuplicados)}`)

// Opción 3: usando REDUCE
const removerDuplicados3 = (array) => {
    return array.reduce ( ( acumuladora, elemento ) => {
        if ( !acumuladora.includes (elemento) ) {
            acumuladora.push (elemento)
        }
        return acumuladora
    }, [] )
}
console.log(`array removiendo duplicados con reduce ${removerDuplicados3(arrayConDuplicados)}`)

// Opción 4: usando FOREACH
const removerDuplicados4 = (array) => {
    let newArray = []
    array.forEach ((elemento) => {
        if ( !newArray.includes (elemento) ) {
            newArray.push (elemento)
        }
    } )
    return newArray
}
console.log(`array removiendo duplicados con forEach ${removerDuplicados4(arrayConDuplicados)}`)


// 4) Creá la función montoTotal, que tome como parámetro un array de objetos. La función debe retornar un solo valor, con el monto total de todos los clientes, retornado con la siguiente frase: `Todos los clientes adeudan un total de: ${total}`.

let clientes = [
    {
        nombre: "Luciano",
        deuda: 10000,
        clientePreferencial: true
    },
    {
        nombre: "Andrea",
        deuda: 5000,
        clientePreferencial: false
    },
    {
        nombre: "Germán",
        deuda: 8000,
        clientePreferencial: false
    },
    {
        nombre: "Agustina",
        deuda: 12000,
        clientePreferencial: true
    }
]
const montoTotal = ( listaDeClientes ) => {
    return `Todos los clientes adeudan en total ${ listaDeClientes.reduce ( ( sumatoriaDeuda, cliente ) => {
        return sumatoriaDeuda + cliente.deuda
    }, 0 ) }`
}
console.log(montoTotal(clientes))

// 5) Cree la función descuento, que otorgue un 5% de descuento a los usuarios que sean clientes preferenciales.
// Retorne el array con todos los clientes, sean preferenciales o no, para poder apreciar el descuento de aquellos que si lo deben recibir.

// Ejemplo de llamada de función:
// descuento(clientes)
// Ejemplo del retorno de la función: 
const clientesPreferenciales = [
    {
        nombre: "Luciano",
        deuda: 10000,
        clientePreferencial: true
    },
    {
        nombre: "Andrea",
        deuda: 5000,
        clientePreferencial: false
    },
    {
        nombre: "Germán",
        deuda: 8000,
        clientePreferencial: false
    },
        {
        nombre: "Agustina",
        deuda: 12000, 
        clientePreferencial: true
    }
]

const descuentoClientes = (listaDeClientes) => {
    return listaDeClientes.map ( ( cliente ) => {
        if ( cliente.clientePreferencial ) {
            cliente.deuda -= cliente.deuda * 0.05
        }
        return cliente
    } )
}
console.log( descuentoClientes (clientesPreferenciales) )


// 6) Crear una función buscarCliente que tome como parámetros un array y el nombre del cliente. La función debe retornar la información completa de ese cliente.

// Ejemplo de llamada de función:
// buscarCliente("Andrea")
// ejemplo de retorno de la función:
// { nombre: Andrea, deuda: 5000, clientePreferencial: false}

const buscarCliente = (listaDeClientes, nombreDeCliente ) => {
    return listaDeClientes.find ( ( cliente ) => {
        return cliente.nombre === nombreDeCliente
    } )
}
console.log ( buscarCliente ( clientesPreferenciales, "Luciano" ) )