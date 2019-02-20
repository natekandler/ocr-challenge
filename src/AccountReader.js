const fs = require('fs');
const readline = require('readline');
const AccountParser = require('./AccountParser')
var { numberMap } = require('./NumberUtils')

class AccountReader {
  constructor() {
    this.accountParser = new AccountParser();
  }

  async processAccountNumberFile(filename) {
    const { chunkLine } = this.accountParser;
    const fileStream = fs.createReadStream(filename);
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    
    let currentAccount = []
    let accounts = []
    let counter = 1

    for await (let line of rl) {
      if(counter < 4){
        line = this._checkForEmptyFirstLine(line, counter);
        currentAccount = chunkLine(line, currentAccount);
        counter += 1;
      } else {
        let number = this._convertStringsToNumbers(currentAccount);
        accounts = [...accounts, number];
        currentAccount = [];
        counter = 1;
      }

    }
    return accounts;
  }

  _checkForEmptyFirstLine(line, counter) {
    if(counter === 1 && Boolean(line) === false){
      return " ".repeat(27);
    }
    return line;
  }

  _convertStringsToNumbers(currentAccount) {
    return currentAccount.map(str => numberMap[str]).join("")
  }
}

module.exports = AccountReader;