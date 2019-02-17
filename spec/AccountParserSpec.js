var AccountParser = require('../src/AccountParser.js');

describe("Account Parser", function() {
  it("returns true", function() {
    const parser = new AccountParser();
    expect(parser.chunkLine()).toBe(true);
  });
});