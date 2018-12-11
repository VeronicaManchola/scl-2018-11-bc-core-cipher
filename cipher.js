window.cipher = {
  encode: (boxToCipher,offset) => {
    let letterToNumberCipher;
    let newNumberCipher;
    let newLetterCipher;
    let resultCipher="";

    //Recorre la longitud del string dado
    for(let i=0; i<boxToCipher.length; i++){
      
      //Verifica si el caracter es ñ o Ñ, y de ser asi, lo agrega al resultado
      if(boxToCipher[i] === "ñ" || boxToCipher[i] === "Ñ"){
        resultCipher += boxToCipher[i]
      }
      //Convierte la letra a número ASCII
      letterToNumberCipher = boxToCipher.charCodeAt(i);
      /*Cifra espacios. Verifica si el número es 32, de ser asi, lo convierte a espacio de nuevo 
      y lo agrega al resultado*/
      if(letterToNumberCipher === 32){
        newLetterCipher = String.fromCharCode(letterToNumberCipher);
        resultCipher += newLetterCipher
      }
      /*Cifra mayúsculas. Confirma si el numero ASCII esta entre 65 y 90. Completa la formula 
      para obtener el nuevo ASCII y lo convierte de nuevo a letra para luego agregarlo al resultado*/
      else if(letterToNumberCipher >= 65 && letterToNumberCipher <= 90){
        //Verifica si el offset es negativo, de ser asi, le agrega 26 hasta ser positivo
        while (offset < 0){
          offset = offset + 26
        }
        newNumberCipher = ((letterToNumberCipher - 65 + offset) % 26 + 65);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }
      /*Cifra minúsculas. Confirma si el numero ASCII esta entre 97 y 122. Completa la formula 
      para obtener el nuevo ASCII y lo convierte de nuevo a letra para luego agregarlo al resultado*/
      else if(letterToNumberCipher >= 97 && letterToNumberCipher <= 122){
        //Verifica si el offset es negativo, de ser asi, le agrega 26 hasta ser positivo
        while (offset < 0){
          offset = offset + 26
        }
        newNumberCipher = ((letterToNumberCipher - 97 + offset) % 26 + 97);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }
      /* Cifra números. Confirma si el numero ASCII esta entre 33 y 64. Completa la formula 
      para obtener el nuevo ASCII y lo convierte de nuevo a número para luego agregarlo al resultado*/
      else if(letterToNumberCipher >= 33 && letterToNumberCipher <= 64){
        //Verifica si el offset es negativo, de ser asi, le agrega 15 hasta ser positivo
        while (offset < 0){
          offset = offset + 32
        }
        newNumberCipher = ((letterToNumberCipher - 33 + offset) % 32 + 33);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }
    }
    //Retorna el resultado
    return resultCipher;
  },
    
  decode: (boxToDecipher,offset) => {
    let letterToNumberDecipher;
    let newNumberDecipher;
    let newLetterDecipher;
    let substractionResult;
    let resultDecipher="";

    //Recorre la longitud del string dado
    for(let i=0; i<boxToDecipher.length; i++){

      //Verifica si el caracter es ñ o Ñ, y de ser asi, lo agrega al resultado
      if(boxToDecipher[i] === "ñ" || boxToDecipher[i] === "Ñ"){
        resultDecipher += boxToDecipher[i]
      }
      //Convierte la letra a número ASCII
      letterToNumberDecipher = boxToDecipher.charCodeAt(i);
      /*Descifra espacios. Verifica si el número es 32, de ser asi, lo convierte a espacio de nuevo 
      y lo agrega al resultado*/
      if(letterToNumberDecipher === 32){
        newLetterDecipher = String.fromCharCode(letterToNumberDecipher);
        resultDecipher += newLetterDecipher
      }
      /*Descifra mayúsculas. Confirma si el numero ASCII esta entre 65 y 90. Completa la fórmula 
      para obtener el nuevo ASCII y lo convierte de nuevo a letra para luego agregarlo al resultado*/
      else if(letterToNumberDecipher >= 65 && letterToNumberDecipher <= 90){
        //Verifica si el offset es negativo, de ser asi, le agrega 26 hasta ser positivo
        while (offset < 0){
          offset = offset + 26
        }
        //Resta del ASCII menos 65, menos el offset        
        substractionResult = (letterToNumberDecipher - 65 - offset)
        //Verifica si la resta anterior es menor a 0, de ser asi, suma 26 hasta ser positivo
        while (substractionResult < 0){
          substractionResult = substractionResult + 26
        }
        //Continuación de fórmula para el descifrado
        newNumberDecipher = substractionResult % 26 + 65
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }
      /*Descifra minúsculas. Confirma si el numero ASCII esta entre 97 y 122. Completa la fórmula 
      para obtener el nuevo ASCII y lo convierte de nuevo a letra para luego agregarlo al resultado*/
      else if(letterToNumberDecipher >= 97 && letterToNumberDecipher <= 122){
        //Verifica si el offset es negativo, de ser asi, le agrega 26 hasta ser positivo
        while (offset < 0){
          offset = offset + 26
        }
        //Resta del ASCII menos 97, menos el offset
        substractionResult = (letterToNumberDecipher - 97 - offset)
        //Verifica si la resta anterior es menor a 0, de ser asi, suma 26 hasta ser positivo
        while (substractionResult < 0){
          substractionResult = substractionResult + 26
        }
        //Continuación de fórmula para el descifrado
        newNumberDecipher = substractionResult % 26 + 97;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }
      /*Descifra números. Confirma si el numero ASCII esta entre 48 y 57. Completa la fórmula 
      para obtener el nuevo ASCII y lo convierte de nuevo a número para luego agregarlo al resultado*/
      else if(letterToNumberDecipher >= 48 && letterToNumberDecipher <= 57){
        //Verifica si el offset es negativo, de ser asi, le agrega 10 hasta ser positivo
        while (offset < 0){
          offset = offset + 10
        }
        
        substractionResult = (letterToNumberDecipher - 48 - offset);
        //Verifica si la resta anterior es menor a 0, de ser asi, suma 10 hasta ser positivo
        while (substractionResult < 0){
          substractionResult = substractionResult + 10
        }
        //Continuación de fórmula para el descifrado
        newNumberDecipher = substractionResult % 10 + 48;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }
      /*Descifra caracteres especiales. Confirma si el numero ASCII esta entre 48 y 57. Completa la fórmula 
      para obtener el nuevo ASCII y lo convierte de nuevo a caracter para luego agregarlo al resultado*/
      else if(letterToNumberDecipher >= 33 && letterToNumberDecipher <= 47){
        //Verifica si el offset es negativo, de ser asi, le agrega 15 hasta ser positivo
        while (offset < 0){
          offset = offset + 15
        }
        //Resta del ASCII menos 33, menos el offset
        substractionResult = (letterToNumberDecipher - 33 - offset);
        //Verifica si la resta anterior es menor a 0, de ser asi, suma 15 hasta ser positivo
        while (substractionResult < 0){
          substractionResult = substractionResult + 15
        }
        //Continuación de fórmula para el descifrado
        newNumberDecipher = substractionResult % 15 + 33;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }
    }
    //Retorna el resultado
    return resultDecipher;
  }
};