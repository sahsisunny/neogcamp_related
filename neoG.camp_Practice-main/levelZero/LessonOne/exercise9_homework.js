/*
homework: star pattern
challenge
a program to take input number from user and print stars like this. The below pattern will be printed when the user enters 5.

*
**
***
****
*****

BONUS (optional): Can you print this inverted? Like 5 stars > 4 stars > 3...?

understanding
double loop: HINT
struggling to form programs when you don't know-how
looking around the internet to understand the logic

*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

const inputNum = Number(readLineSunc.question('Enter the number: '));

function printStar(num) {
     for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= i; j++) {
               process.stdout.write('*');         // because console.log() prints the output in a new line
          }
          console.log();
     }
}

printStar(inputNum);

/*
# Output:
Enter the number: 5
*
**
***
****
*****
*/