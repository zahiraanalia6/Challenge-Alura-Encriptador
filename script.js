function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoEncriptado = document.getElementById("texto-encriptado");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        textoEncriptado.value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoEncriptado = document.getElementById("texto-encriptado");

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        textoEncriptado.value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    }
}

function copiar() {
    let mensaje = document.getElementById("texto-encriptado");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto Copiado");
}
