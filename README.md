# Initial thoughts when starting
- To me the first problem is transposing four horizontal lines of 27 into 9 lines of 12 based on the index of the line (segments of three)
- The second problem is reading a file in line by line and keeping track of segments of four. Once this is accomplished, the first method can be used to create 3x3 numbers from these sections (3x4 if you count the blank line)
- lastly, the 3x3 numbers will need to be converted to integers. This should be easily accomplished with a map using the number as string as a key and the integer as a value


## Things needed
- map of dash representation of numbers to integer
- text file with a couple of account numbers to check against

## Possible Steps
- method that can chunk lines into 3 space segments
- method that will parse file line by line to build the numbers
- method that will take chunks of three and concat to build the actual number represented
  - first thought: add to an lines to an object maybe using key as index
  - first thought: one full account number will determined by modulo 4 on iteration

## Steps Taken
- built out what each number looks like as string
- built number map in file for comparison
  - I knew this was needed and it also gave me a better feel for the linear representation of the numbers
- created a method to chunk a line into three parts
  - after writing a test realized this should be able to take an array so it can chunk four lines into the same array
  - after writing a test to parse four lines that created actual numbers I realized I was concating them backward
- added a txt file with some account numbers to parse
- added a file reader to parse through file with account numbers line by line
- added counter on parser to determine what constitutes an account number
- added some TODOs on thoughts I had moving forward as I was about to run out of time
