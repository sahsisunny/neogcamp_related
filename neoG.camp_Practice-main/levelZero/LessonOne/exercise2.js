/*
ex02: read the name of your user
challenge
A program to read input from your user. Output this name. Use readlineSync() for this.

add readlineSync() as a dependency
import it in your index.js
know how to read docs and use it. In programming, it is extremely important to read docs.
use a variable to store this name.
output this name.
understand
readlineSync() is a package. In programming, you can use code written by others via this system.

People share their code out in the open to help others. Using this we write bigger programs. This is called standing on the shoulder of giants. Think of this as someone who discovered fire and wheel and now we don't have to rediscover it every other generation.

Concept of variable: Think of it as keeping a placeholder in your room. Now in that place, you can keep a bat, a ball, or anything. Variables are placeholders inside the computer and nothing else.
*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

const name = readLineSunc.question('What is your name? \nName: ');

console.log(`Hello ${name}!`);

/*
# Output:
What is your name?
Name: Sunny Sahsi.
Hello Sunny Sahsi!
*/