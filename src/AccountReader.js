const fs = require('fs');
const readline = require('readline');
const AccountParser = require('./AccountParser')
var NumberUtils = require('./NumberUtils')

class AccountReader {
  constructor() {
    this.accountNumber = [];
    this.accounts = []
    this.accountParser = new AccountParser();
  }

  async processLineByLine(filename) {
    const fileStream = fs.createReadStream(filename);
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    let counter = 1
    for await (const line of rl) {
      if(counter < 4){
        this._createNumbersFromRows(line, counter)
        counter += 1
      } else {
        const number = this._convertStringsToNumbers();
        this.accounts = [...this.accounts, number]
        counter = 1
      }

    }
    return this.accounts;
  }

  _createNumbersFromRows(line, counter) {
    const {chunkLineIntoThrees} = this.accountParser;
    switch(counter) {
      case 1:
         this.accountNumber = chunkLineIntoThrees(line)
        break;
      case 2:
        this.accountNumber = chunkLineIntoThrees(line, this.accountNumber)
        break;
      case 3:
        this.accountNumber = chunkLineIntoThrees(line, this.accountNumber)
        break;
      case 4:
        this.accountNumber = chunkLineIntoThrees(line, this.accountNumber)
        break;
      default:
        return
    }
  }

  _convertStringsToNumbers() {
    const {numberMap} = NumberUtils;
    return this.accountNumber.map(str => numberMap[str])
  }
}

module.exports = AccountReader;