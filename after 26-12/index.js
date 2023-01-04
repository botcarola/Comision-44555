// modo oscuro

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
    if ( body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo claro"

    } else {
        botonModos.textContent = "Modo oscuro"
    }
}

// DOM FORM

const form = document.querySelector("#form-card")

// DOM input

const inputNombre = document.querySelector("#input-nombre")
const inputNTarjeta = document.querySelector("#input-ntarjeta")
const inputExpiracion = document.querySelector("#input-expiracion")
const inputCodigoSeguridad  = document.querySelector("#input-codigo")

// DOM creditcard

const nombreCard = document.querySelector("#nombre-card")
const numeroCard = document.querySelector("#numero-card")
const expiracionCard = document.querySelector("#expiracion-card")
const codigoCard = document.querySelector("#codigo-card")

// evento oninput
// oninput registra cada uno de los movimientos del usuario dentro del campo

inputNombre.oninput = () => {
    if ( inputNombre.value === "" || inputNombre.value.length < 4 ) {
        nombreCard.textContent = "Profe Coderhouse"
        inputNombre.style.border = "2px solid red"
    } else {
        nombreCard.textContent = inputNombre.value
        inputNombre.style.border = "1px solid green"
    }
}

inputNTarjeta.oninput = () => {
if ( inputNTarjeta.value.length > 16 || inputNTarjeta.value === "" ) {
        numeroCard.textContent = "#### #### #### ####"   
        inputNTarjeta.style.border = "1px solid red"
    } else {
        numeroCard.textContent = espaciarNumeroTarjeta(inputNTarjeta.value)
        inputNTarjeta.style.border = "1px solid green"
    }
}

const espaciarNumeroTarjeta = ( valor ) => {
    const espaciado = [...valor]
    espaciado.splice(4,0, " ")
    espaciado.splice(9, 0, " ")
    espaciado.splice(14, 0, " ")
    return espaciado.join("")
}

console.log(expiracionCard)

inputExpiracion.oninput = () => {
    const anioActual = new Date().getFullYear()
    
    if ( inputExpiracion.value === "" || inputExpiracion.value.length > 4 ){
        expiracionCard.textContent = "**/**"  
        inputExpiracion.style.border = "1px solid red"      
    } else if ( inputExpiracion.value.slice(0, 2) > 12 || inputExpiracion.value.slice(0, 2) < 1 || inputExpiracion.value.slice(2) < String(anioActual).slice(2) ) {
        expiracionCard.textContent = "**/**"
        inputExpiracion.style.border = "1px solid red"  
    } else {
        expiracionCard.textContent = validarExpiracion(inputExpiracion.value)
        inputExpiracion.style.border = "1px solid green"  
    }
}

const validarExpiracion = ( valor ) => {
    const expiracion = [...valor]
    expiracion.splice(2, 0, "/")
    return expiracion.join("")
}

inputCodigoSeguridad.oninput = () => {
    if (inputCodigoSeguridad.value.length > 4 || inputCodigoSeguridad.value === "") {
        inputCodigoSeguridad.style.border = "1px solid red"
        codigoCard.textContent = "****"
    } else {
        codigoCard.textContent = inputCodigoSeguridad.value
        inputCodigoSeguridad.style.border = "1px solid green"
    }
}

// envío de formulario

const datosCarola = {
    nombreApellido: "Carola Lala",
    nTarjeta: 4554221155444455,
    expiracion: 0125,
    cSeguridas: 2233
}

form.onsubmit = ( e ) => {
    e.preventDefault()

    if(  datosCarola.nombreApellido === inputNombre.value ){
        alert("Ya se procesó su compra. Muchas gracias!")
    } else {
        alert("No se pudo proceder con su compra")
    }
}