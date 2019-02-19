var AccountReader = require('../src/AccountReader.js');
var {numberMap} = require('../src/NumberUtils');

describe("Account Reader", () => {

  describe("processLineByLine", ()=>{
    it("should parse file correctly", () => {
      const accountReader = new AccountReader()
      accountReader.processLineByLine('Accounts.txt')
        .then( result => {
          expect(result).toEqual([ '123456789', '123456789', '123456789' ])
        })
    })
  })
 
  

  describe("_convertStringsToNumbers", () => {
    it("should convert strings to numbers", () => {
      const accountReader = new AccountReader()
      const current = [...Object.keys(numberMap)];
      const result  =  accountReader._convertStringsToNumbers(current);
      expect(result).toBe("1234567890");
    });
  });
});

