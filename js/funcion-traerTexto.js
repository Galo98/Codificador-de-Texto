var resultado = document.querySelector(".texto-arreglado");

/*funcion para traer el texto ingresado en textarea*/

function traerTexto() {
    var textoEntrante = document.querySelector(".texto-entrante");
    return textoEntrante.value;
}