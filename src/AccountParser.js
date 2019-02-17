class AccountParser {

  chunkLineIntoThrees(line, arr=[]) {
    // TODO: look into a way to dynamically generate these pairs
    // handles the specification for lines of 27 but is brittle
    const pairs = [[0,3], [3,6], [6,9], [9,12],[12,15], [15,18], [18,21], [21,24], [24,27]]

    pairs.forEach((item, index) => {
      arr[index] = line.slice(item[0], item[1]).concat(arr[index] || "")
    })
    return arr;
  }

}

module.exports = AccountParser;