var AccountReader = require('../src/AccountReader.js');
var {numberMap} = require('../src/NumberUtils');

describe("Account Reader", () => {

  describe("_appendToCurrentAccount", () => {
    it("should update the current account", () => {
      const accountReader = new AccountReader();
      const line = "abcdefghijkl"
      const chunkLine = (line, currentAccount) => ["abc", "def", "ghi", "jkl"]
      const result = accountReader._appendToCurrentAccount([], line, chunkLine)
      expect(result).toEqual(["abc", "def", "ghi", "jkl"])
    })
  })

  describe("_updateAccounts", () => {
    it("should update the accounts array", () => {
      const accountReader = new AccountReader();
      accountReader._convertStringsToNumbers = (currentAccount) => [1,2,3,4,5,6,7,8,9,0]
      const accounts = [[0,9,8,7,6,5,4,3,2,1]]
      const currentAccount = ("foo");
      const result = accountReader._updateAccounts(currentAccount, accounts)
      expect(result).toEqual([[0,9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9,0]])
    })
  })

  describe("_convertStringsToNumbers", () => {
    it("should convert strings to numbers", () => {
      const accountReader = new AccountReader();
      const current = [...Object.keys(numberMap)];
      const result  =  accountReader._convertStringsToNumbers(current);
      expect(result).toEqual([1,2,3,4,5,6,7,8,9,0]);
    });
  });

  describe("_checkForEmptyFirstLine", () => {
    it("should return empty line when first line is blank", () => {
      const accountReader = new AccountReader();
      const result = accountReader._checkForEmptyFirstLine("");
      expect(result).toBe("                           ")
    })

    it("should return line when first line isn't empty", () => {
      const accountReader = new AccountReader();
      const result = accountReader._checkForEmptyFirstLine("abc");
      expect(result).toBe("abc")
    })
  })
});

