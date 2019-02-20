var AccountParser = require('../src/AccountParser.js');
var numbers = require('../src/NumberUtils')
describe("Account Parser", () => {

  it("chunks a line into sets of three", () => {
    const parser = new AccountParser();
    const line = "abcdefghijklmnopqrstuvwxyz1"
    const result = parser.chunkLine(line)
    const expected = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz1"]
    expect(result).toEqual(expected);
  });

  it("should stack sets by index", () => {
    const parser = new AccountParser();
    const line = "abcdefghijklmnopqrstuvwxyz1";
    const line2 = "123456789123456789123456789";
    const firstPass = parser.chunkLine(line);
    const result = parser.chunkLine(line2, firstPass);
    const expected = ["abc123", "def456", "ghi789", "jkl123", "mno456", "pqr789", "stu123", "vwx456", "yz1789"]

    expect(result).toEqual(expected);
  });


  it("should create numbers 1-9", () => {
    const line1 = "    _  _     _  _  _  _  _ ";
    const line2 = "  | _| _||_||_ |_   ||_||_|";
    const line3 = "  ||_  _|  | _||_|  ||_| _|";
    const {one, two, three, four, five, six, seven, eight, nine} = numbers;
  
    const parser = new AccountParser();
    const firstPass = parser.chunkLine(line1);
    const secondPass = parser.chunkLine(line2, firstPass)
    const result = parser.chunkLine(line3, secondPass)
    const expected = [one, two, three, four, five, six, seven, eight, nine]
    expect(result).toEqual(expected)
  })
  
});