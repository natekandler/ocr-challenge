# Initial thoughts when starting

## Things needed
- map of dash representation of numbers to integer
- text file with a couple of account numbers to check against
## Steps
- method that can chunk lines into 3 space segments
- method that will parse file line by line to build the numbers
- method that will take chunks of three and concat to build the actual number represented
  - first thought: add to an lines to an object maybe using key as index
  - first thought: one full account number will determined by modulo 4 on iteration

## First Step Taken
- build number map in file for comparison
  - this is needed and also will give me a better feel for how the linear representation of the number will be
