const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('Accounts.txt'),
  crlfDelay: Infinity
});
// TODO: turn this into a class, add line arrays as attributes

let counter = 1
// TODO: possibly use numbered line objects that reset when counter resets
// build up four lines and then send them through parser
let line1 = []
let line2 = []
let line3 = []
let line4 = []
rl.on('line', (line) => {
  // TODO: use counter to split into lines of four
  // restart new array every time counter resets
  console.log(counter)
  
  console.log(`Line from file: ${line}`);
  if(counter < 4){
    // set lines 1-4 here as iteration happens
    counter += 1
  } else {
    // send lines 1-4 to parse function and create account number
    // reset lines 1-4 and start over
    counter = 1
  }
  
});
