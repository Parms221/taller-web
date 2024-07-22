
function alCargar() {
    // getElementsById -> obtener el elemento por el IDs
    const errorElement = document.getElementById('error-message')

    const searchParams = new URLSearchParams(window.location.search);

    const error = searchParams.get('error')

    // null -> no existe

    if (error != null && error == "BadCredentials") {
        errorElement.innerHTML = "<b>Error: </b> Usuario y/o contraseña incorrectos"
    }


}


// va a ejecutarse cuando la pagina este lista
document.onload = alCargar()