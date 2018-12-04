window.cipher = {
  encode: (boxToCipher,offset) => {
    let letterToNumberCipher;
    let newNumberCipher;
    let newLetterCipher;
    let resultCipher="";

    for(let i=0; i<boxToCipher.length; i++){
      
      letterToNumberCipher = boxToCipher.charCodeAt(i);
      if(letterToNumberCipher === 32){
        newLetterCipher = String.fromCharCode(letterToNumberCipher);
        resultCipher += newLetterCipher
      }else if(letterToNumberCipher >= 65 && letterToNumberCipher <= 90){
        while (offset < 0){
          offset = offset + 26
        }
        newNumberCipher = ((letterToNumberCipher - 65 + offset) % 26 + 65);
        newLetterCipher = String.fromCharCode(newNumberCipher);
        resultCipher += newLetterCipher
      }else if(letterToNumberCipher >= 97 && letterToNumberCipher <= 122){
        while (offset < 0){
          offset = offset + 26
        }
        newNumberCipher = ((letterToNumberCipher - 97 + offset) % 26 + 97);
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
    let substractionResultUpperCase;
    let substractionResultLowerCase;
    let resultDecipher="";

    for(let i=0; i<boxToDecipher.length; i++){

      letterToNumberDecipher = boxToDecipher.charCodeAt(i);
      if(letterToNumberDecipher === 32){
        newLetterDecipher = String.fromCharCode(letterToNumberDecipher);
        resultDecipher += newLetterDecipher
      }else if(letterToNumberDecipher >= 65 && letterToNumberDecipher <= 90){
        while (offset < 0){
          offset = offset + 26
        }
        substractionResultUpperCase = (letterToNumberDecipher - 65 - offset)
        while (substractionResultUpperCase < 0){
          substractionResultUpperCase = substractionResultUpperCase + 26
        }
        newNumberDecipher = substractionResultUpperCase % 26 + 65
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
        
      }else if(letterToNumberDecipher >= 97 && letterToNumberDecipher <= 122){
        while (offset < 0){
          offset = offset + 26
        }
        substractionResultLowerCase = (letterToNumberDecipher - 97 - offset)
        while (substractionResultLowerCase < 0){
          substractionResultLowerCase = substractionResultLowerCase + 26
        }
        newNumberDecipher = substractionResultLowerCase % 26 + 97;
        newLetterDecipher = String.fromCharCode(newNumberDecipher);
        resultDecipher += newLetterDecipher
      }
    }
    return resultDecipher;
  }
};