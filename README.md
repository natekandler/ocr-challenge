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

## Steps
- built out what each number looks like as string
- built number map in file for comparison
  - this is needed and also will give me a better feel for how the linear representation of the number will be
- created a method to chunk a line into three parts
  - after writing a test realized this should be able to take an array so it can chunk four lines into the same array
  - after writing a test to parse four lines that created actual numbers I realized I was concating them backward
- added a txt file with some account numbers to parse
- added a file reader to parse through file with account numbers line by line
- added counter on parser to determine what constitutes an account number
- added some TODOs on thoughts I had moving forward as I was about to run out of time
