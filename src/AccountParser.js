const {createPairsForParsing} = require("../utils/parserUtils");

class AccountParser {
 
  chunkLine(line, arr=[]) {
    const pairs = createPairsForParsing(27)
    pairs.forEach((item, index) => {
      const itemAtIndex = arr[index] || ""
      arr[index] = itemAtIndex.concat(line.slice(item[0], item[1])) 
    })
    return arr;
  }

}

module.exports = AccountParser;