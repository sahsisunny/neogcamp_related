/*
ex03: welcome your user
challenge
A program to take a string. And add "Welcome" to it. Then console it.

understand
manipulating a string,
using + to concatenate
*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

const inputName = readLineSunc.question('What is your name? \nName: ');

let outputString = "Welcome " + inputName;        // Manipulating a string using + to concatenate

console.log(outputString);

/*
# Output:
What is your name?
Name: Sunny Sahsi.
Welcome Sunny Sahsi!
*/