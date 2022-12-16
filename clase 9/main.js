const newNote = document.querySelector("#new-note")
const formNotas = document.querySelector(".form-notas")
const span = document.querySelector("span")
const inputNombre = document.querySelector("#input-nombre")
const inputMensaje = document.querySelector("#input-mensaje")

let notas = []

newNote.onclick = (event) => {
    console.log(event)
    formNotas.style.display = "flex"
}

span.onclick = () => {
    formNotas.style.display = "none"
}

// al querer enviar un formulario, utilizamos el evento submit por sobre el mismo formulario
// utilizamos preventDefault para cancelar eventos predeterminados del navegador
// al intentar enviar un formulario, se genera esto, que no es deseado
// podemos acceder a los valores que se desprenden de los inputs de texto o de cualquier otro tipo
// a través del método value, puedo acceder al valor de un input
// ejemplo: elemento.value

const notasAHtml = ( array ) => {
    const contenedorNotas = document.querySelector(".contenedor-notas")
    const arrReducido = array.reduce( (acc, element) => {
        return acc + `
            <div class="comentario">
                <h2>
                    ${element.nombre}
                </h2>
                <p>
                    ${element.mensaje}
                </p>                
            </div>
        `
    }, "")
    contenedorNotas.innerHTML = arrReducido
}

formNotas.onsubmit = ( event ) => {
    event.preventDefault()
    if( inputNombre.value === "" || inputMensaje === "") {
        alert("Debe llenar los campos para poder enviar el formulario")
    } else {   
        notas.push({
            nombre: inputNombre.value,
            mensaje: inputMensaje.value
        })
        formNotas.reset()
        formNotas.style.display = "none"
        notasAHtml(notas)
    }
}


// si intento ver los valores que contiene, siempre va a ser vacío, los cambios del array se pueden percibir dentro del evento
console.log(notas)

