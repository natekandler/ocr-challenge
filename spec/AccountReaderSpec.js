var AccountReader = require('../src/AccountReader.js');
var {numberMap} = require('../src/NumberUtils');

describe("Account Reader", () => {

  describe("processLineByLine", ()=>{
    it("should parse a row of 1s", () => {
      const accountReader = new AccountReader()
      const expected = ['111111111']
      accountReader.processLineByLine('testFixtures/ones.txt')
        .then( result => {
          expect(result).toEqual(expected)
        })
        .catch(e => console.log("ERROR  ", e))
    })

    it("should parse file correctly", () => {
      const accountReader = new AccountReader()
      accountReader.processLineByLine('testFixtures/Accounts.txt')
        .then( result => {
          expect(result).toEqual([ '123456789', '123456789', '123456789' ])
        })
        .catch(e => console.log("ERROR  ", e))
    })

    it("should parse test case one correctly", () => {
      const accountReader = new AccountReader()
      const expected = ['00000000','111111111','22222222',
                        '33333333','444444444','55555555',
                        '66666666','77777777','88888888',
                        '99999999']
      accountReader.processLineByLine('testFixtures/caseOne.txt')
        .then( result => {
          expect(result).toEqual(expected)
        })
        .catch(e => console.log("ERROR  ", e))
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

