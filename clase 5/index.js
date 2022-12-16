// DATOS PRIMITIVOS
// string
// number
// booleano

const edad = 28
const esProfesora = true
const mascotas = "Hideo Kojima" 

// ESTRUCTURAS QUE A MANIPULAR DATOS
// DATOS TIPO OBJETO
// mejora la manipulación de datos
// OBJETOS

// las llaves en un contexto de función ejercen como un bloque de sentencias
// ESTO NO ES UN OBJETO

const saludar = () => {

    return "Hola usuario"

}

 // para poder generar un objeto, precisamos de las llaves
 // 
console.log(typeof {})

// ESTO ES UN OBJETO LITERAL
// cuenta con llaves (eso expresa que es un objeto)
// para estructurar las colecciones precisamos claves: valor
// los objetos están compuestos por propiedades y métodos


const persona = {
    nombre: "Facundo",
    altura: 1.80,
    peso: 80,
    pelo: "Lacio",
    ojos: "Grandes",
    mascotas: true,
    id: 0,
}

const mesa = {
    patas: 4,
    color: "blanca",
    altura: 1.20,
    forma: "circular",
    material: "maneja"
}

const cliente = {
    nombre: "Roberto",
    apellido: "Gonzales",
    edad: 20,
    creditoHipotecario: true,
    cuentas: [ 21390923840984234, 20809094385 ],
    familia: true,
    deudas: true,
    miembrosFamiliares: {
        esposa: true,
        nombre: "Cecilia"
    }
}

// se pueden seguir añadiendo propiedades
// precisamos del identificador

cliente.mascota = true

cliente.hijos = {
    hija: "Pilagros",
    hijo: "Raúl"
}

console.log(cliente)

// para visualizar los datos, debemos usar el .

console.log(cliente.nombre)
console.log(cliente.edad)
console.log(cliente.apellido)
console.log(cliente.hijos.hijo)

// SE PUEDEN REASIGNAR VALORES DE LAS PROPIEDADES

cliente.nombre = "Felipe"
cliente.creditoHipotecario = false

console.log(cliente)

// CONST Y LET EN OBJETOS

let nombre = "Sol"
nombre = 1500

// let auto = {
//     marca: "fiat"
// }

// auto = 1500

const auto = {
    marca: "fiat"
}

// ESTO NO SE PUEDE, ES ILEGAL EN JS
// auto = {
//     marca: "peugeot"
// }

auto.marca = "peugeot"

console.log(auto)

// CÓMO SE COPIAN OBJETOS

const otroAuto = auto

console.log(otroAuto)

otroAuto.marca = "audi"
otroAuto.color = "Rojo"

console.log(auto)
console.log(otroAuto)

// MÉTODO DE COPIA DE OBJETO
// spread operator
// hace una copia que genera una nueva referencia, que no afecta al objeto COPIADO

const autoBienCopiado = {...auto}

autoBienCopiado.marca = "BMW"

console.log(auto)
console.log(otroAuto)
console.log(autoBienCopiado)

// INSTANCIAR OBJETOS A PARTIR DE FUNCIONES O DE CLASES
// LOS OBJETOS NO SOLO TIENEN PROPIEDADES, SINO QUE TAMBIÉN TIENEN OBJETOS

function Character ( nombre, vida, mana, damage, magicRes, armor ) {
    this.name = nombre;
    this.health = vida;
    this.mana = mana;
    this.damage = damage; 
    this.magicRes = magicRes;
    this.armor = armor;
    this.usePotion = () => {
        return 100
    }
}

const warrior = new Character("Warrior", 300, 0, 80, 50, 75)
const mage = new Character("Mage", 225, 150, 200, 20, 20)

// SI YO NO CUMPLO CON EL CONTRATO DE LA FUNCIÓN, TODOS LOS VALORES DE LAS PROPIEDADES DAN UNDEFINED

const bardo = new Character()

console.log(bardo)
console.log(warrior)

// INSTANCIAR OBJETOS CON ARROW FUNCTION
// NO LLEVA THIS

const personaje = ( nombre, vida, damage ) => {
    return ({
        nombre: nombre,
        vida: vida,
        damage: damage,
    })
}

const tank = personaje("Tank", 400, 30)

console.log(tank)

// CLASES

class Auto {
    constructor (marca, color, potencia, combustible){
        this.marca = marca;
        this.color = color;
        this.potencia = potencia;
        this.combustible = combustible;
    }
    velocidadMaxima() {
        return 300
    }   
}
const formulaUno = new Auto( "ferrari", "rojo", 600, "nafta" )

// se puede pasar el valor de una propiedad como argumento

const color = (color) => {
    return `El auto tiene un color ${color}` 
}
console.log(color(formulaUno.color))

console.log(formulaUno)

// para llamar al método de un objeto

console.log(formulaUno.velocidadMaxima())
console.table(formulaUno)

// 1) QUIERO QUE INSTANCIEN OBJETOS, ELIJAN LA MANERA, QUE LA INSTANCIA SE REFIERA A UN CLIENTE Y QUE CUENTE CON LAS SIGUIENTES PROPIEDADES:
// nombre, apellido, edad, numeroDeCuenta, direccion, email, tarjetaDeCredito, deuda
// - Instancien 5 objetos
// Que usen console.table para visualizar a cada uno de ellos.
// Método: Si tiene deuda (true), entonces que retorne, que lo llame el callcenter