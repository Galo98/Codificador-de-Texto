
var botonencriptar = document.querySelector(".encriptar");
var resultado = document.querySelector(".texto-arreglado");

botonencriptar.onclick = encriptar;

/*funcion para traer el texto ingresado en textarea*/ 
function traerTexto() {
    var textoEntrante = document.querySelector(".texto-entrante");
    return textoEntrante.value;
}

/* Funcion que ejecuta la encriptacion*/

function encriptar() {
    ocultarSeccionMuñeco();
    resultado.textContent = encriptarIngreso(traerTexto());
}