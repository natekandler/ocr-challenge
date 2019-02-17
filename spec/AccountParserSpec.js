var AccountParser = require('../src/AccountParser.js');

describe("Account Parser", () => {

  it("chunks a line into sets of three", () => {
    const parser = new AccountParser();
    const line = "abcdefghijklmnopqrstuvwxyz1"
    const expected = parser.chunkLine(line)
    console.log(expected)
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
});