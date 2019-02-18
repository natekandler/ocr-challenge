const zero  = " _ " +
              "| |" +
              "|_|" +
              "   " 

const one   = "   " +
              "  |" +
              "  |" +
              "   "

const two   = " _ " +
              " _|" +
              "|_ " +
              "   "

const three = " _ " +
              " _|" +
              " _|" +
              "   "

const four  = "   " +
              "|_|" +
              "  |" +
              "   "

const five  = " _ " +
              "|_ " +
              " _|" +
              "   "

const six   = " _ " +
              "|_ " +
              "|_|" +
              "   "

const seven = " _ " +
              "  |" +
              "  |" +
              "   "            

const eight = " _ " +
              "|_|" +
              "|_|" +
              "   "              
              
const nine  = " _ " +
              "|_|" +
              " _|" +
              "   " 

const numberMap = {
  "     |  |": 1,
  " _  _||_ ": 2,
  " _  _| _|": 3,
  "   |_|  |": 4,
  " _ |_  _|": 5,
  " _ |_ |_|": 6,
  " _   |  |": 7,
  " _ |_||_|": 8,
  " _ |_| _|": 9,
  " _ | ||_|": 0
}


module.exports = {
  zero, 
  one, 
  two, 
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  numberMap
};