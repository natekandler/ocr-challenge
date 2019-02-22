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
      switch(counter) {
        case 1:
          line = this._checkForEmptyFirstLine(line, counter);
          currentAccount = this._appendToCurrentAccount(currentAccount, counter, line, chunkLine);
          counter += 1;
          break
        case 2:
          currentAccount = this._appendToCurrentAccount(currentAccount, counter, line, chunkLine);
          counter += 1;
          break;
        case 3:
          currentAccount = this._appendToCurrentAccount(currentAccount, counter, line, chunkLine);
          accounts = this._updateAccounts(currentAccount, accounts)
          currentAccount = []
          counter += 1;
          break;
        default:
          counter = 1;
      }
    }
    return accounts;
  }

  _appendToCurrentAccount(currentAccount, line, chunkLine){
    currentAccount = chunkLine(line, currentAccount);
    return currentAccount
  }

  _updateAccounts(currentAccount, accounts) {
    let number =  this._convertStringsToNumbers(currentAccount);
    return  [...accounts, number];
  }

  _checkForEmptyFirstLine(line) {
    if(Boolean(line) === false){
      // return empty line of expected input length
      return " ".repeat(27);
    }
    return line;
  }

  _convertStringsToNumbers(currentAccount) {
    return currentAccount.map(str => numberMap[str])
  }
}

module.exports = AccountReader;