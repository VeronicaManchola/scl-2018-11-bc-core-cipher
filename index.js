//Al cargar, esconde el div designado como page2
window.onload = () => {
    document.getElementById("page2").style.display="none";
}

//Esconde pagina 1 y muestra la 2
document.getElementById("start").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
});

let boxToCipher;
let boxToDecipher;
let offset;
let newResultCipher;
let newResultDecipher;

//Toma los valores texto a cifrar y offset al click y devuelve el resultado a la caja de texto cifrado
document.getElementById("cipherBtn").addEventListener("click",() => {
    boxToCipher = document.getElementById("textToCipher").value;
    offset = parseInt(document.getElementById("offsetBox").value);
    newResultCipher = cipher.encode(boxToCipher,offset);
    document.getElementById("textToDecipher").value = newResultCipher;
});

//Toma los valores texto cifrado y offset al click y devuelve el resultado a la caja de texto descifrado
document.getElementById("decipherBtn").addEventListener("click",() => {
    boxToDecipher = document.getElementById("textToDecipher").value;
    offset = parseInt(document.getElementById("offsetBox").value);
    newResultDecipher = cipher.decode(boxToDecipher,offset);
    document.getElementById("textToCipher").value = newResultDecipher;
});

//Copia el texto que haya en la caja de texto descifrado
document.getElementById("copyCipherBtn").addEventListener("click",() => {
    let copied = document.getElementById("textToCipher");
    copied.select();
    document.execCommand('copy');
});

//Copia el texto que haya en la caja de texto cifrado
document.getElementById("copyDecipherBtn").addEventListener("click",() => {
    let copied = document.getElementById("textToDecipher");
    copied.select();
    document.execCommand('copy');
});

//Limpia la caja de texto descifrado
document.getElementById("cleanCipher").addEventListener("click",() => {
    document.getElementById("textToCipher").value = "";
});

//Limpia la caja de texto cifrado
document.getElementById("cleanDecipher").addEventListener("click",() => {
    document.getElementById("textToDecipher").value = ""
});