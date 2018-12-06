window.cipher = {
  encode: (boxToCipher,offset) => {
    let letterToNumberCipher;
    let newNumberCipher;
    let newLetterCipher;
    let resultCipher="";

    for(let i=0; i<boxToCipher.length; i++){
      

      if(boxToCipher === "ñ" || boxToCipher === "Ñ"){
        resultCipher += boxToCipher
      }
      while (offset < 0){
        offset = offset + 26
      }
      letterToNumberCipher = boxToCipher.charCodeAt(i);
      if(letterToNumberCipher === 32){
        newLetterCipher = String.fromCharCode(letterToNumberCipher);
        resultCipher += newLetterCipher
      }else if(letterToNumberCipher >= 65 && letterToNumberCipher <= 90){
        newNumberCipher = ((letterToNumberCipher - 65 + offset) % 26 + 65);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }else if(letterToNumberCipher >= 97 && letterToNumberCipher <= 122){
        newNumberCipher = ((letterToNumberCipher - 97 + offset) % 26 + 97);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }else if(letterToNumberCipher >= 48 && letterToNumberCipher <= 57){
        newNumberCipher = ((letterToNumberCipher - 48 + offset) % 10 + 48);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }else if(letterToNumberCipher >= 33 && letterToNumberCipher <= 47){
        newNumberCipher = ((letterToNumberCipher - 33 + offset) % 15 + 33);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }
    }
    return resultCipher;
  },
    
  decode: (boxToDecipher,offset) => {
    let letterToNumberDecipher;
    let newNumberDecipher;
    let newLetterDecipher;
    let substractionResult;
    let resultDecipher="";

    for(let i=0; i<boxToDecipher.length; i++){

      if(boxToDecipher === "ñ" || boxToDecipher === "Ñ"){
        resultDecipher += boxToDecipher
      }
      while (offset < 0){
        offset = offset + 26
      }
      letterToNumberDecipher = boxToDecipher.charCodeAt(i);
      if(letterToNumberDecipher === 32){
        newLetterDecipher = String.fromCharCode(letterToNumberDecipher);
        resultDecipher += newLetterDecipher
      }else if(letterToNumberDecipher >= 65 && letterToNumberDecipher <= 90){        
        substractionResult = (letterToNumberDecipher - 65 - offset)
        while (substractionResult < 0){
          substractionResult = substractionResult + 26
        }
        newNumberDecipher = substractionResult % 26 + 65
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }else if(letterToNumberDecipher >= 97 && letterToNumberDecipher <= 122){
        substractionResult = (letterToNumberDecipher - 97 - offset)
        while (substractionResult < 0){
          substractionResult = substractionResult + 26
        }
        newNumberDecipher = substractionResult % 26 + 97;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }else if(letterToNumberDecipher >= 48 && letterToNumberDecipher <= 57){
        substractionResult = (letterToNumberDecipher - 48 - offset);
        while (substractionResult < 0){
          substractionResult = substractionResult + 10
        }
        newNumberDecipher = substractionResult % 10 + 48;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }else if(letterToNumberDecipher >= 33 && letterToNumberDecipher <= 47){
        substractionResult = (letterToNumberDecipher - 33 - offset);
        while (substractionResult < 0){
          substractionResult = substractionResult + 15
        }
        newNumberDecipher = substractionResult % 15 + 33;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }
    }
    return resultDecipher;
  }
};