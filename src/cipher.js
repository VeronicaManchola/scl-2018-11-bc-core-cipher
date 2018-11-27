//window.cipher = {
  //encode: () => {
    let initialLetter = "A";
    let offset = 7;

    let letterToNumber = initialLetter.charCodeAt(0);
    let newNumber = letterToNumber + offset;

    let newLetter = String.fromCharCode(newNumber);

    console.log(newLetter); 
//}
//};
//   decode: () => {
//     /* Acá va tu código */
//   }
// };
