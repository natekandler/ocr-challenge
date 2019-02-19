const fs = require('fs');
const readline = require('readline');
const AccountParser = require('./AccountParser')
var { numberMap } = require('./NumberUtils')

class AccountReader {
  constructor() {
    this.accountParser = new AccountParser();
  }

  async processLineByLine(filename) {
    const fileStream = fs.createReadStream(filename);
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    const {chunkLineIntoThrees} = this.accountParser;

    let currentAccount = []
    let accounts = []

    let counter = 1
    // TODO: refactor this out into different method
    for await (let line of rl) {
     
      if(counter < 4){
        if(counter === 1 && Boolean(line) === false){line = "                           "}
        currentAccount = chunkLineIntoThrees(line, currentAccount)
        counter += 1
      } else {
        let number = this._convertStringsToNumbers(currentAccount);
        accounts = [...accounts, number]
        //accounts = [...accounts, currentAccount]
        currentAccount = []
        counter = 1
      }

    }
    return accounts;
  }

  _convertStringsToNumbers(currentAccount) {
    return currentAccount.map(str => numberMap[str]).join("")
  }
}

module.exports = AccountReader;