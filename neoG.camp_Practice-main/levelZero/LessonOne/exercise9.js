/*
ex09: print your name 5 times
exercise
print your name 5 times by calling console.log()
use for loop to do this
BONUS (optional): Print the number with your name
syntax
for (intial CONDITION; exit CONDITION; change CONDITION) {
  // code block to be executed
}
understanding
anatomy of for loop
calling a function from the loop is running the mini-program multiple times

*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

const userName = readLineSunc.question('Enter your name: ');

function printName(name) {
     for (let i = 1; i <= 5; i++) {
          console.log(`${i}. ${name}`);
     }
}

printName(userName);