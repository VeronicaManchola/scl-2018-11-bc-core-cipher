window.onload = () => {
    document.getElementById("page2").style.display="none";
}

function hidePage2(){
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
}

let letterToNumberCipher;
let newNumberCipher;
let newLetterCipher;

let letterToNumberDecipher;
let newNumberDecipher;
let newLetterDecipher;

let substractionResultUpperCase;
let substractionResultLowerCase;

let boxToCipher;
let boxToDecipher;
let offset;
let newResultCipher;
let newResultDecipher;

document.getElementById("cipherBtn").addEventListener("click",() => {
    boxToCipher = document.getElementById("textToCipher").value;
    offset = parseInt(document.getElementById("offsetBox").value);
    newResultCipher = window.cipher.encode(boxToCipher,offset);
    document.getElementById("textToDecipher").value = newResultCipher;
});

document.getElementById("decipherBtn").addEventListener("click",() => {
    boxToDecipher = document.getElementById("textToDecipher").value;
    offset = parseInt(document.getElementById("offsetBox").value);
    newResultDecipher = window.cipher.decode(boxToDecipher,offset);
    document.getElementById("textToCipher").value = newResultDecipher;
});