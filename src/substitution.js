// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false; 
    if (encode) {
      input = input.toLowerCase();
      realAlphabet = "abcdefghijklmnopqrstuvwxyz";
      realAlphabet = realAlphabet.split("");
      if (!alphabet) {
        return false;
      }
      if (alphabet.length !== 26) {
        return false;
      }
      
      input = input.split("");

      let result = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        }
        for (let x = 0; x < realAlphabet.length; x++) {
          if (input[i] === realAlphabet[x]) {
            let index = realAlphabet.indexOf(realAlphabet[x]);
            result += alphabet[index];
          }
        }
      }
      return result;
    }
    if (!encode) {

      realAlphabet = "abcdefghijklmnopqrstuvwxyz";
      realAlphabet = realAlphabet.split("");
      input = input.split("")
     
      if (!alphabet) {
        return false;
      }
      if (alphabet.length !== 26) {
        return false;
      }
      let result = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        }
        else {
        for (let x = 0; x < alphabet.length; x++) {
          
          if (input[i] === alphabet[x]) {
            let index = alphabet.indexOf(alphabet[x]);
            result += realAlphabet[index];
          }
        }
      }
    }
  
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
