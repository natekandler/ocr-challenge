const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('Accounts.txt'),
  crlfDelay: Infinity
});
let counter = 1
rl.on('line', (line) => {
  // TODO: use counter to split into lines of four
  // restart new array every time counter resets
  console.log(counter)
  
  console.log(`Line from file: ${line}`);
  if(counter < 4){
    // send line into parse function in array
    counter += 1
  } else {
    // reset to start building new array
    counter = 1
  }
  
});
