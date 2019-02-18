var AccountParser = require('../src/AccountParser.js');
var numbers = require('../src/NumberMap')
describe("Account Parser", () => {

  it("chunks a line into sets of three", () => {
    const parser = new AccountParser();
    const line = "abcdefghijklmnopqrstuvwxyz1"
    const expected = parser.chunkLineIntoThrees(line)
    
    expect(expected[0]).toBe("abc");
    expect(expected[1]).toBe("def");
    expect(expected[2]).toBe("ghi");
    expect(expected[3]).toBe("jkl");
    expect(expected[4]).toBe("mno");
    expect(expected[5]).toBe("pqr");
    expect(expected[6]).toBe("stu");
    expect(expected[7]).toBe("vwx");
    expect(expected[8]).toBe("yz1");
  });

  it("should stack sets by index", () => {
    const parser = new AccountParser();
    const line = "abcdefghijklmnopqrstuvwxyz1";
    const firstPass = parser.chunkLineIntoThrees(line);
    const expected = parser.chunkLineIntoThrees(line, firstPass);
    
    expect(expected[0]).toBe("abcabc");
    expect(expected[1]).toBe("defdef");
    expect(expected[2]).toBe("ghighi");
    expect(expected[3]).toBe("jkljkl");
    expect(expected[4]).toBe("mnomno");
    expect(expected[5]).toBe("pqrpqr");
    expect(expected[6]).toBe("stustu");
    expect(expected[7]).toBe("vwxvwx");
    expect(expected[8]).toBe("yz1yz1");
  });

  it("should chunk with a blank line", () => {
    const parser = new AccountParser();
    const line = "abcdefghijklmnopqrstuvwxyz1";
    const blankLine = "                           ";
    const firstPass = parser.chunkLineIntoThrees(line);
    const secondPass = parser.chunkLineIntoThrees(line, firstPass);
    const expected = parser.chunkLineIntoThrees(blankLine, firstPass);
    
    expect(expected[0]).toBe("abcabc   ");
    expect(expected[1]).toBe("defdef   ");
    expect(expected[2]).toBe("ghighi   ");
    expect(expected[3]).toBe("jkljkl   ");
    expect(expected[4]).toBe("mnomno   ");
    expect(expected[5]).toBe("pqrpqr   ");
    expect(expected[6]).toBe("stustu   ");
    expect(expected[7]).toBe("vwxvwx   ");
    expect(expected[8]).toBe("yz1yz1   ");
  });

  it("should create numbers 1-9", () => {
    const line1 = "    _  _     _  _  _  _  _ ";
    const line2 = "  | _| _||_||_ |_   ||_||_|";
    const line3 = "  ||_  _|  | _||_|  ||_| _|";
    const line4 = "                           ";
  
    const parser = new AccountParser();
    const firstPass = parser.chunkLineIntoThrees(line1);
    const secondPass = parser.chunkLineIntoThrees(line2, firstPass)
    const thirdPass = parser.chunkLineIntoThrees(line3, secondPass)
    const expected = parser.chunkLineIntoThrees(line4, thirdPass);
    
    expect(expected[0]).toBe(numbers.one)
    expect(expected[1]).toBe(numbers.two)
    expect(expected[2]).toBe(numbers.three)
    expect(expected[3]).toBe(numbers.four)
    expect(expected[4]).toBe(numbers.five)
    expect(expected[5]).toBe(numbers.six)
    expect(expected[6]).toBe(numbers.seven)
    expect(expected[7]).toBe(numbers.eight)
    expect(expected[8]).toBe(numbers.nine)
  })
  
});