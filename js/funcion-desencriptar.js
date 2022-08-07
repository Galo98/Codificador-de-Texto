var botondesencriptar = document.querySelector(".desencriptar");

botondesencriptar.onclick = desencriptar;

/* Funcion que ejecuta la desencriptacion */
function desencriptar() {
    ocultarSeccionMuñeco();
    resultado.textContent = desencriptarIngreso(traerTexto());
}

/* Funcion que desencripta el texto */
function desencriptarIngreso(texto) {
    var entrada = texto;
    var salida = "";

    for (var i = 0; i < entrada.length; i++){

                switch (entrada[i]){
            case "a":
                salida = salida + "a"
                i = i + 1;
                break;
            case "e":
                salida = salida + "e"
                i = i + 4;
                break;
            case "i":
                salida = salida + "i"
                i = i + 3;
                break;
            case "o":
                salida = salida + "o"
                i = i + 3;
                break;
            case "u":
                salida = salida + "u"
                i = i + 3;
                break;
            default:
                        salida = salida + entrada[i];
                break;
        }

    }
    return salida;
}