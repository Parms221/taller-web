// variable global
let contador = 0;

function AlPresionaElBoton() {
    const textElement = document.getElementById('text-mostrar')
    textElement.innerHTML = contador
    contador = contador + 1
}


function alCargar() {
    const button = document.getElementById('btn-index')
    const titulo = document.getElementById('titulo')

    // añadiendo un evento
    // click
    // mouseover
    // mouseout
    button.addEventListener('click', AlPresionaElBoton)
    titulo.addEventListener('click', AlPresionaElBoton)


}


document.onload = alCargar()