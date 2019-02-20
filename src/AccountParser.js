const {createPairsForParsing} = require("../utils/parserUtils");

class AccountParser {
 
  chunkLine(line, arr=[]) {
    const pairs = createPairsForParsing(27)
    pairs.forEach((item, index) => {
      const itemAtIndex = arr[index] || ""
      let segment = line.slice(item[0], item[1]);
      segment = segment.length === 3 ? segment : `${segment} `
      arr[index] = itemAtIndex.concat(segment) 
    })
    return arr;
  }

}

module.exports = AccountParser;