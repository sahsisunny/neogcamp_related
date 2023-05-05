/*
ex05: print right/wrong if greater than 25
challenge
Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

understand
branching of code, i.e. only one branch runs based on a CONDITION
*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

const inputAns = readLineSunc.question('am i older than 25? \nAnswer: ');

inputAns === 'yes' ? console.log("you are Right") : console.log("you are Wrong");

/*
# Output:
am i older than 25?
Answer: yes
you are Right
*/