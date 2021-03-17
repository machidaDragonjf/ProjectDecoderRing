const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

// Checks the shift value if meets conditions 
describe("Caeser", () => {
    it(" Should return false if  Shift is equal to 0 ", () => {
      

        
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 0, false)

        expect(actual).to.eql(false);
    });
  });
  
  describe("Caeser", () => {
    it("Should return false if value if Shift is less than -25 ", () => {
      

        const expected = "false";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", -28, false)

        expect(actual).to.eql(false);
    });
  });
  describe("Caeser", () => {
    it("Should return false if value if Shift is greater than 25 ", () => {
      

        
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 28, false)

        expect(actual).to.eql(false);
    });
  });

  describe("Caeser", () => {
    it("Should return false if value of Shift is undefined", () => {
      

        
        const actual = caesar("BPQA qa I amkzmb umaaiom!", shift = undefined, false)

        expect(actual).to.eql(false);
    });
  });
  describe("Caeser", () => {
    it("Should return correct ciphered message for thinkful ", () => {
      

        
        const actual = caesar("thinkful", 3); //> 'wklqnixo
        

        expect(actual).to.eql('wklqnixo');
    });
  });

  describe("Caeser", () => {
    it("Should return correct ciphered message for BPQA qa I amkzmb umaaiom! " , () => {
      

        
      const actual =  caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
       // const actual = caesar("wklqnixo", -3, false); 

        expect(actual).to.eql('this is a secret message!');
    });
  });

  describe("Caeser", () => {
    it("Should return correct ciphered message for thinkful with no shift value " , () => {
      

        
        const actual =  caesar("thinkful"); //> false

        expect(actual).to.eql(false);
    });
  });

  

  describe("Caeser", () => {
    it("Should return correct ciphered message for This is a secret message! changed to decoded " , () => {
      

      const actual = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
        

        expect(actual).to.eql('bpqa qa i amkzmb umaaiom!');
    });
  });

  describe("Caeser", () => {
    it("Should return false for input sent in with value less that -26 " , () => {
      

       const actual =  caesar("thinkful", -26); //> false
        

        expect(actual).to.eql(false);
    });
  });
