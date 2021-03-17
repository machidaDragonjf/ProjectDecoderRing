// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    console.log("shift value is " + shift);

    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }
    if (encode === true) {
      shift = shift * 1;
    }
    if (encode === false) {
      shift = shift * -1;
    }

    input = input.toLowerCase();
    let letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < input.length; i++) {
      myLetter = input[i];
      if (myLetter === " ") {
        result += myLetter;
        continue;
      }
      if (myLetter === "!" || myLetter === "?" || myLetter === ".") {
        result += myLetter;
        continue;
      }

      let value = letters.indexOf(myLetter);
      value = value + shift;
      if (value > 25) {
        value = value - 26;
      }
      if (value < 0) {
        value = value + 26;
      }
      result += letters[value];
    }

    console.log(result);

    return result;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
