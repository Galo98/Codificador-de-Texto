var botoncopiar = document.querySelector(".boton-copiar");

botoncopiar.onclick = copiar;

function copiar() {
    var copiado = resultado.value;
    navigator.clipboard.writeText(copiado);
    resultado.textContent = "";
    mostrarSeccionMuñeco();
}