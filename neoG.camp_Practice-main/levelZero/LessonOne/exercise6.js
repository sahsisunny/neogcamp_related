/*
ex06: increment score if the right answer
challenge
Ask your user if your hometown is Bokaro (or your city) and this time increment a variable based on the right answer.

Also, console the score this time.
*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

let score = 0;

const inputAns = readLineSunc.question('Is my hometown Bokaro? \nAnswer: ');

inputAns === 'yes' ? score = score + 1 : score = score;

console.log(`Your score is ${score}`);

/*
# Output:
Is my hometown Bokaro?
Answer: yes
Your score is 1
*/

