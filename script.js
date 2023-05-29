const textArea = document.querySelector(".cajatexto");
const mensaje = document.querySelector (".mensaje");
const muneco = document.querySelector (".contenedormuneco");
const parrafo = document.querySelector (".contenedor-parrafo");
const btnCopiar = document.querySelector(".btn-copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    muneco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    }

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
        
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    muneco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    }

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
        
    }
    return stringDesencriptado
}

btnCopiar.addEventListener("click", copiar = () => {
var contenido = mensaje.value;
navigator.clipboard.writeText(contenido);
console.log("Mensaje copiado");
})