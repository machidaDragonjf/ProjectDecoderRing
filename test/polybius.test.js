
 const expect = require("chai").expect;
 const polybius = require("../src/polybius.js");
 
 
 describe("Polybius Encode", () => {
    it("Should encode a message by translating each letter to numbered pairs  " , () => {
      
       
      const actual = polybius("thinkful");
        

        expect(actual).to.eql("4432423352125413");
    });
  });



  
  
  describe("Polybius Encode", () => {
     it("Should translate chartacters i and j to 42 " , () => {
       
      const actual =  polybius("4432423352125413", false);
      
         
 
         expect(actual).to.eql("th(i/j)nkful");
     });
   });

     
  describe("Polybius Encode", () => {
    it("Should allow spaces to remian in string" , () => {
      
     const actual =  
     polybius("3251131343 2543241341", false); 
     
        

        expect(actual).to.eql("hello world");
    });
  });

  describe("Polybius Decode", () => {
    it("Translates number pairs into letters" , () => {
      
     const actual = polybius("thinkful"); 
 
    
     
        

        expect(actual).to.eql("4432423352125413");
    });
  });

  describe("Polybius Decode", () => {
    it("translates 42 to both I and J " , () => {
      
     const actual =  polybius("4432423352125413", false); 
 
    
     
        

        expect(actual).to.eql("th(i/j)nkful");
    });
  });

  describe("Polybius Decode", () => {
    it("Should leave space in string " , () => {
      
     const actual =   polybius("3251131343 2543241341", false); //> "hello world"
 
    
     
        

        expect(actual).to.eql("hello world");
    });
  });

 
  describe("Polybius Decode", () => {
    it("Should return false if total of char is odd " , () => {
      
     const actual =  polybius("44324233521254134", false);
    
     
        

        expect(actual).to.eql(false);
    });
  }); 