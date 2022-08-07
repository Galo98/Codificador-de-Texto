var botonencriptar = document.querySelector(".encriptar");
var botondesencriptar = document.querySelector(".desencriptar");
var resultado = document.querySelector(".texto-arreglado");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

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

/* Funcion que ejecuta la desencriptacion */
function desencriptar() {
    ocultarSeccionMuñeco();
    resultado.textContent = desencriptarIngreso(traerTexto());
}
