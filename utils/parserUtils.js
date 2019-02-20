  const createPairsForParsing = (lineLength) => {
    let arr = [];
    let indexCounter = 0
    let last = 0
    for(let i = 0; i <=27; i++ ){
      if(i % 3 === 0 && i !== 0){
        arr[indexCounter] = [last, i]
        last = i
        indexCounter++
      } 
    }
    return arr;
  }

  module.exports = {createPairsForParsing}