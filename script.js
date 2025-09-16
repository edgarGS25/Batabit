let flechaDerechaCurrency = document.querySelector(".arrow-right-currency")
let flechaIzquierdaCurrency = document.querySelector(".arrow_left-currency")
let tablasContainer = document.querySelector(".main-tables-container")
flechaDerechaCurrency.addEventListener("click", moverDerecha)
flechaIzquierdaCurrency.addEventListener("click", moverIzquierda)

function moverDerecha(){
    tablasContainer.scrollBy({
        left: 300,
        behavior: "smooth"
    })
    flechaDerechaCurrency.style.display = "none"
    flechaIzquierdaCurrency.style.display = "inline-block"
}

function moverIzquierda(){
    tablasContainer.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    flechaDerechaCurrency.style.display = "inline-block"
    flechaIzquierdaCurrency.style.display = "none"
}

let contenedorPlanes = document.querySelector(".plans-container--slider")
let flechaDerechaPlans1 = document.querySelector(".arrow-right-plans")
let flechaDerechaPlans2 = document.querySelector(".arrow-right-2-plans")
let flechaIzquierdaPlans1 = document.querySelector(".arrow-left-plans")
let flechaIzquierdaPlans2= document.querySelector(".arrow-left-2-plans")

flechaDerechaPlans1.addEventListener("click", moverDerecha2)
flechaIzquierdaPlans2.addEventListener("click", moverIzquierda2)

flechaIzquierdaPlans1.addEventListener("click", moverIzquierda3)
flechaDerechaPlans2.addEventListener("click", moverDerecha3)

function moverDerecha2(){
    contenedorPlanes.scrollBy({
        left: 300,
        behavior: "smooth"
    })

    flechaDerechaPlans1.style.display = "none"
    flechaIzquierdaPlans2.style.display = "inline-block"
}

function moverIzquierda2(){
    contenedorPlanes.scrollBy({
        left: -150,
        behavior: "smooth"
    })

    flechaDerechaPlans1.style.display = "inline-block"
    flechaIzquierdaPlans2.style.display = "none"
}
function moverDerecha3(){
    contenedorPlanes.scrollBy({
        left: 150,
        behavior: "smooth"
    })

    flechaDerechaPlans2.style.display = "none"
    flechaIzquierdaPlans1.style.display = "inline-block"
}

function moverIzquierda3(){
    contenedorPlanes.scrollBy({
        left: -300,
        behavior: "smooth"
    })

    flechaDerechaPlans2.style.display = "inline-block"
    flechaIzquierdaPlans1.style.display = "none"
}
