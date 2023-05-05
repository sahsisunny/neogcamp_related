/*
ex07: function to add two numbers
challenge
Take two numbers and add them. Put this entire thing in a function add() and return the result

syntax
function functionName(parameterOne, parameterTwo) {
  // processing
  return outputValue;
}
understand
a function is a repeating piece of the PROCESSING while INPUT and OUTPUT changes
Note the difference between parameters and arguments:
Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.

*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

const inputNum1 = Number(readLineSunc.question('Enter the first number: '));
const inputNum2 = Number(readLineSunc.question('Enter the second number: '));

function add(num1, num2) {
     return num1 + num2;
}

console.log(`The sum of ${inputNum1} and ${inputNum2} is ${add(inputNum1, inputNum2)}`);

/*
# Output:
Enter the first number: 5
Enter the second number: 6
The sum of 5 and 6 is 11
*/
