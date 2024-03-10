const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");




function btnEncriptar(){

    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value ="";
    mensaje.style.backgroundImage="none";

}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo [i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
   

}

function btnDesincriptar(){

    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value ="";
}

function desencriptar(stringDesincriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesincriptada = stringDesincriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesincriptada.includes(matrizCodigo[i][1])){
            stringDesincriptada = stringDesincriptada.replaceAll(matrizCodigo [i][1],matrizCodigo[i][0])
        }
    }
    return stringDesincriptada
}

