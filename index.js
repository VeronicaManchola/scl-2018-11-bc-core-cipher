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

document.getElementById("cipherBtn").addEventListener("click",() => {
    boxToCipher = document.getElementById("textToCipher").value;
    offset = parseInt(document.getElementById("offsetBox").value);
    newResultCipher = cipher.encode(boxToCipher,offset);
    document.getElementById("textToDecipher").value = newResultCipher;
});

document.getElementById("decipherBtn").addEventListener("click",() => {
    boxToDecipher = document.getElementById("textToDecipher").value;
    offset = parseInt(document.getElementById("offsetBox").value);
    newResultDecipher = cipher.decode(boxToDecipher,offset);
    document.getElementById("textToCipher").value = newResultDecipher;
});

document.getElementById("copyDecipherBtn").addEventListener("click",() => {
    let copied = document.getElementById("textToDecipher");
    copied.select();
    document.execCommand('copy');
});

document.getElementById("copyCipherBtn").addEventListener("click",() => {
    let copied = document.getElementById("textToCipher");
    copied.select();
    document.execCommand('copy');
});

document.getElementById("cleanCipher").addEventListener("click",() => {
    document.getElementById("textToCipher").value = "";
});

document.getElementById("cleanDecipher").addEventListener("click",() => {
    document.getElementById("textToDecipher").value = ""
});