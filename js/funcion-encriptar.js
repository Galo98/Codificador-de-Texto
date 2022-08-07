var botonencriptar = document.querySelector(".encriptar");

botonencriptar.onclick = encriptar;

/* Funcion que ejecuta la encriptacion*/

function encriptar() {
    ocultarSeccionMuñeco();
    resultado.textContent = encriptarIngreso(traerTexto());
}

/*Funcion que encripta el texto*/
function encriptarIngreso(texto) {
    var entrada = texto;
    var salida = "";

    for (var i = 0; i < entrada.length; i++){

                switch (entrada[i]){
            case "a":
                salida = salida + "ai";
                break;
            case "e":
                salida = salida + "enter";
                break;
            case "i":
                salida = salida + "imes";
                break;
            case "o":
                salida = salida + "ober";
                break;
            case "u":
                salida = salida + "ufat";
                break;
            default:
                        salida = salida + entrada[i];
                break;
        }

    }
    return salida;
}


