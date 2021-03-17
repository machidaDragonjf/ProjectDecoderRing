const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

// Checks the shift value if meets conditions 
describe("Substitution Error Check", () => {
    it(" Should return false if alphabet array is not present ", () => {
      

        
        const actual = substitution("jrufscpw", false); 

        expect(actual).to.eql(false);
    });
  });
  
  describe("Substitution Error Check", () => {
    it(" Should return false if substitution alphabet is not exactly 26 char ", () => {
      

        
        const actual = substitution("thinkful", "abcabca333333bcabcabcabcabcabcyz"); 
        expect(actual).to.eql(false);
    });
  });

  describe("Substitution Error Check", () => {
    it(" Should return false if substitution aplahabet does not contain unique chars ", () => {
      

        
        const actual = 
        substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); 

        expect(actual).to.eql(false);
    });
  });

describe("Substitution Encode Check", () => {
    it(" Should encode message correctly ", () => {
      

        
        const actual =   substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); 

        expect(actual).to.eql('jrufscpw');
    });
  });
  describe("Substitution Encode Check", () => {
    it(" Should work with any kind of unique characters ", () => {
      

        
        const actual =   substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 

        expect(actual).to.eql("message");
    });
  });
  describe("Substitution Encode Check", () => {
    it(" Should leave in spaces ", () => {
      

        
        const actual =   substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 

        expect(actual).to.eql('elp xhm xf mbymwwmfj dne');
    });
  });


describe("Substitution Decode Check", () => {
    it(" Should decode message correctly ", () => {
      

        
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);

        expect(actual).to.eql('thinkful');
    });
  });
  describe("Substitution Decode Check", () => {
    it(" Should work with any kind of unique characters ", () => {
      

        
        const actual =   substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); 

        expect(actual).to.eql("message");
    });
  });

  describe("Substitution Decode Check", () => {
    it(" Should preserve spaces and ignore capital letters ", () => {
      

        
        const actual =  substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
console.log(actual);
        expect(actual).to.equal('elp xhm xf mbymwwmfj dne');
    });
  });

