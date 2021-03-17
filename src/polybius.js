// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polyGrid = {
      1: ["a", "b", "c", "d", "e"],
      2: ["f", "g", "h", "(i/j)", "k"],
      3: ["l", "m", "n", "o", "p"],
      4: ["q", "r", "s", "t", "u"],
      5: ["v", "w", "x", "y", "z"],
    };

    /*
 !!!1 split string into seperate characters 
 2.go through each character one at a time 
 3. As we move through each character we will look them up in the grid. 
 loop through all 5 arrays and search for index of letter 
 put it in the right format then save to string 
 search for next letter repeat process 
polyGrid[1].indexOf('z')   //array that contaibns a,b,c,d,e
add coordinates to string variable
 return string

*/
    let result = "";

    console.log("input string is ", input);
    if (encode) {
      console.log("encode function");

      input = input.split("");

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        }
        if (input[i] === "j" || input[i] === "i") {
          result += 42;
        }

        let letter = input[i];
        for (let x = 1; x < 6; x++) {
          if (polyGrid[x].includes(letter)) {
            let value = polyGrid[x].indexOf(letter) + 1;
            result += `${value}${x}`;
          }
        }
      }
      return result;
    }

    if (!encode) {
      let count = 0;
      input = input.split("");
      console.log(input);

      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          count = count + 1;
        }
      }

      if (count % 2 !== 0) {
        return false;
      }

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        } else {
          let col = input[i];
          let row = input[i + 1];
          let letter = polyGrid[row][col - 1];
          result += letter;
          i++;
        }
      }

      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
