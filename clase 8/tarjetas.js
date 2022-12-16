// 1)

// function cardAHtml ( array ) {

//     const contenedor = document.querySelector(".container")

//     for ( let i = 0; i < array.length; i++) {

//         const card = document.createElement("div")
//         card.className = "card"
//         card.innerHTML = `
//             <div class="container-img">
//                 <img src=${array[i].img} alt=${array[i].name} >
//             </div>
//             <h2>
//                 ${array[i].name}
//             <h2>
//             <button>
//                 <3
//             </button>
//         `
//         contenedor.appendChild(card)    
//     }
// }

// cardAHtml(pokemon)

// 2) forEach

// function cardsHtml ( array ) {

//     const contenedor = document.querySelector(".container")

//     array.forEach( ( perrito ) => {
//         const card = document.createElement("div")
//         card.className = "card"
//         card.innerHTML = `
//             <div class="container-img">
//                 <img src=${perrito.img} alt=${pokemon.name}>
//             </div>
//             <h2>
//                 ${perrito.name}
//             </h2>
//             <button>
//                 ♥
//             </button>
//         `
//         contenedor.appendChild(card)
//     })

// }

// cardsHtml(pokemon)

// 3) innerHTML con reduce

// const cardAHtml = (array) => {
//     const contenedor = document.querySelector(".container")
//     const cardsReduce = array.reduce((acc, element) => {
//         return acc + `
//             <div class="card">
//                 <div class="container-img">
//                     <img src=${element.img} alt=${element.name}>
//                 </div>
//                 <h2>
//                     ${element.name}
//                 </h2>
//                 <button>
//                     ♥
//                 </button>
//         </div>
//         `
//     }, "")
    
//     contenedor.innerHTML = cardsReduce
// }

// cardAHtml(pokemon)

// 4) innerhtml con for y variable acumuladora

// function cardsHtml ( array ) {
//     let acc = ""
//     const contenedor = document.querySelector(".container")
//     for ( let i = 0; i < array.length; i++ ) {
//         acc += `
//             <div class="card">
//                 <div class="container-img">
//                     <img src=${array[i].img} alt=${array[i].name}>
//                 </div>
//                 <h2>
//                     ${array[i].name}
//                 </h2>
//                 <button>
//                     ♥
//                 </button>
//             </div>
//         `
//     }
//     contenedor.innerHTML = acc
// }

// cardsHtml(pokemon)

// 5) map con createElement, innerHTML y appendChild

function cardsHtml ( array ) {

    const contenedor = document.querySelector(".container")
    
    array.map( ( perrito ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="container-img">
                <img src=${perrito.img} alt=${pokemon.name}>
            </div>
            <h2>
                ${perrito.name}
            </h2>
            <button>
                ♥
            </button>
        `
        contenedor.appendChild(card)
    })    
}

cardsHtml(pokemon)


confirm("quiere ver ofertas?")