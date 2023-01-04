//PASOS PARA IMPLEMENTAR UNA LIBRERÍA
// 1) INCLUIR EL SCRIPT CON EL CDN EN NUESTRO HTML
// 2) LEER LA DOCUMENTACIÓN PARA SABER COMO IMPLEMENTAR LA LIBRERÍA


// sweet alert
// LIBRERÍA QUE NOS PERMITE GENERAR MODALES
// RECIBE ARGUMENTOS PARA PODER VISUALIZAR INFORMACIÓN EN SUS MODALES
// son customizables

// Si le paso un solo argumento, que debe ser string, este sería el título

// swal("Hola")

// // si le paso dos argumentos, que deben ser strings, sería el primero el título y el segundo el subtítulo

// // swal("Haga click para continuar", "porfis")

// // si pasamos 3 argumentos, que deben ser strings, el tercer argumento debe definirse con los siguientes string: "warning", "error", "success" e "info"

// swal("Click", "para obtener más info", "info")

// // también podemos pasarle un objeto

// swal({
//   title: "Hola chicos",
//   text: "estamos aprendiendo librerías",
//   icon: "success",
//   button: "Genial"
// })

// // sweet alert utiliza promesas para dar seguimiento a la respueta del usuario

// swal("Haga click en el botón o fuera del modal")
// .then( respueta => {
//   swal(`El valor elegido por el usuario es: ${ respueta }`)
// })

// // como enviar un modal desde un envío de formulario (evento)

// const form = document.querySelector("form")

// form.onsubmit = (e) => {
//   e.preventDefault()
//   swal("Se ha enviado el formulario")
// }

// // podemos añadir más de un solo botón
// // usando la propiedad buttons: true

// swal({
//   buttons: true
// })

// // podemos customizar los mensaje que tengan los botones

// swal({
//   buttons: ["Me retiro", "Apuesto todo lo que tengo"]
// })

// // customizar con promesa 

// swal({
//   title: "Un pokemon apareció en tu camino, qué deseas hacer?",
//   buttons: {
//     cancel: "Tengo miedo",
//     catch: "Le tiro una masterball porque soy malo",
//     defeat: "Exterminado"
//   }
// })
// .then( valor => {
//   if ( valor === "catch") {
//     swal("Yo quiero ser siempre el mejor")
//   } else if ( valor === "defeat" ) {
//     swal("Ganaste 1 punto de experiencia")
//   } else {
//     swal("El pokemon te ha quitado 1000 pesos")
//   }
// })

// TOASTIFY

// ESTA LIBRERÍA NOS PERMITE IMPLEMENTAR NOTIFICACIONES EN NUESTROS PROYECTOS
// PRECISA DE INCORPORAR UN CDN PARA ESTILOS Y SCRIPT
// PARA PODER IMPLEMENTARLA, DEBEMOS UTILIZAR LA PALABRA RESERVADA Toastify()

const aguante = document.querySelector("#toasty")

console.log(aguante)

aguante.onclick = () => {
  console.log("asldjsajd")
  Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

// swiperjs
// esta librería me permite incoporar un carrousel
// hay muchos tipos con diferentes funcionalidades
// debo incoporar el html necesario, css para darle estilo y la iniciaalización desde js

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// luxon
// librería que nos permite manipular fechas en js

// para poder instanciar una fecha, debo utilizar luxon.dateTime y guardarlo en una variable con el nombre DateTime

const DateTime = luxon.DateTime

console.log(DateTime)

// DateTime.local nos permite instanciar una fecha

const fechaArbitraria = DateTime.local(2020, 10, 20)

console.log(fechaArbitraria)

// toString(), toLocaleString()

console.log(fechaArbitraria.toString())

// toLocaleString() visualiza la fecha local

console.log(fechaArbitraria.toLocaleString())

// .now()
// nos muestra la hora actual

console.log(DateTime.now())

// podemos crear fechas a través de objetos
// fromObject recibe como argumento dos objetos, en donde aclaramos fecha y hora en el primero y zona horaria y tipo de numeración en el segundo

const fechaPorObjeto = DateTime.fromObject(
  {
    day: 16,
    hour: 10,
    month: 2
  },
  {
    zona: "America/Buenos_Aires",
    numberingSystem: 'beng' // si añaden esto, probablemente cambie la forma de ser visualizada la fecha
  }
  )

  console.log(fechaPorObjeto)

console.log(fechaPorObjeto.toLocaleString())

// norma ISO

console.log(DateTime.fromISO("1995-05-25").toString())

// podemos acceder a las fechas con el uso de los siguientes métodos

console.log(DateTime.now().year) // extraemos el año
console.log(DateTime.now().month) // mes
console.log(DateTime.now().day) // día
console.log(DateTime.now().second) // segundos
console.log(DateTime.now().weekday) // día de la semaba
console.log(DateTime.now().zoneName) // nombre de zona
console.log(DateTime.now().daysInMonth) // día en el mes

// lista de pre-sets con distintos formatos de fecha

const fechaActual = DateTime.now()


console.log(fechaActual.toLocaleString(DateTime.DATE_SHORT)) // fecha corta
console.log(fechaActual.toLocaleString(DateTime.DATE_MED)) // fecha abreviada
console.log(fechaActual.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)) // fecha y día abreviados
console.log(fechaActual.toLocaleString(DateTime.DATE_FULL)) // FECHA COMPLETA
console.log(fechaActual.toLocaleString(DateTime.DATE_HUGE)) // FECHA COMPLETA CON DÍA DE LA SEMANA
console.log(fechaActual.toLocaleString(DateTime.TIME_SIMPLE)) // HORA Y MINUTOS

// los objetos de luxon son inmutables
// retornan nuevas instancias alteradas de ellos, cuando se genera una operación sobre estos objetos

// para sumar utilizamos el método plus
// recibe como argumento la cantidad de tiempo que se quiera implementar

const suma = fechaActual.plus({month: 467, days: 100})
console.log(suma.toLocaleString(DateTime.DATE_SHORT))

// para restar utilizamos el método minus

const resta = fechaActual.minus({days: 10})
console.log(resta.toLocaleString(DateTime.DATE_HUGE))
