var AccountParser = require('../src/AccountParser.js');

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
    const line = "abcdefghijklmnopqrstuvwxyz1"
    const firstPass = parser.chunkLineIntoThrees(line)
    const expected = parser.chunkLineIntoThrees(line, firstPass)
    
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
  
});