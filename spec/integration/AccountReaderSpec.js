var AccountReader = require('../../src/AccountReader.js');

describe("Account Reader", () => {
  describe("processAccountNumberFile", ()=>{
    it("should parse a row of 1s", () => {
      const accountReader = new AccountReader()
      const expected = [[1,1,1,1,1,1,1,1,1]]
      accountReader.processAccountNumberFile('testFixtures/ones.txt')
        .then( result => {
          expect(result).toEqual(expected)
        })
        .catch(e => console.log("ERROR  ", e))
    })

    it("should parse a row of 5s", () => {
      const accountReader = new AccountReader()
      const expected = [[5,5,5,5,5,5,5,5,5]]
      accountReader.processAccountNumberFile('testFixtures/fives.txt')
        .then( result => {
          expect(result).toEqual(expected)
        })
        .catch(e => console.log("ERROR  ", e))
    })

    it("should parse a row of 9s", () => {
      const accountReader = new AccountReader()
      const expected = [[9,9,9,9,9,9,9,9,9]]
      accountReader.processAccountNumberFile('testFixtures/nines.txt')
        .then( result => {
          expect(result).toEqual(expected)
        })
        .catch(e => console.log("ERROR  ", e))
    })

    it("should parse file correctly", () => {
      const accountReader = new AccountReader()
      accountReader.processAccountNumberFile('testFixtures/Accounts.txt')
        .then( result => {
          expect(result).toEqual([ [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9] ])
        })
        .catch(e => console.log("ERROR  ", e))
    })

    it("should parse test case one correctly", () => {
      const accountReader = new AccountReader()
      const expected = [[0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2],
                        [3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4],[5,5,5,5,5,5,5,5,5],
                        [6,6,6,6,6,6,6,6,6],[7,7,7,7,7,7,7,7,7],[8,8,8,8,8,8,8,8,8],
                        [9,9,9,9,9,9,9,9,9], [1,2,3,4,5,6,7,8,9]]
      accountReader.processAccountNumberFile('testFixtures/caseOne.txt')
        .then( result => {
          expect(result[0]).toEqual(expected[0])
          expect(result[1]).toEqual(expected[1])
          expect(result[2]).toEqual(expected[2])
          expect(result[3]).toEqual(expected[3])
          expect(result[4]).toEqual(expected[4])
          expect(result[5]).toEqual(expected[5])
          expect(result[6]).toEqual(expected[6])
          expect(result[7]).toEqual(expected[7])
          expect(result[8]).toEqual(expected[8])
          expect(result[9]).toEqual(expected[9])
          expect(result[10]).toEqual(expected[10])
        })
        .catch(e => console.log("ERROR  ", e))
    })
  })
});

