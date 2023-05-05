/*
ex08: function to check the answer
challenge
Your function should take a question and the right answer.
Ask your user to answer the question.
check the answer and increment score (global variable)
tell your user whether the answer was correct or not
understand
A function can do multiple things
sometimes, the output can be a change in the global variable
looking back
Up until now, we have a function() which is kind of a mini-program to do everything which we need to do.

If you look back now, console.log(), readlineSync() are all just functions isn't it?

What we need now is a way to run this mini-program again and again. And each time with a different question/answer pair.

To do this we need to understand a few things.

*/

// ############ My Solution ############

const readLineSunc = require('readline-sync');

let score = 0;

function checkAnswer(question, answer) {
     const inputAns = readLineSunc.question(question);
     if (inputAns === answer) {
          score = score + 1;
          console.log("You are Right");
     } else {
          console.log("You are Wrong");
     }
}

console.log("~~~~~~~[ Welcome to the quiz game! ]~~~~~~~\n~~~~~[ Total number of questions: 5 ]~~~~~\n");

checkAnswer("1. Is my hometown Bokaro? \nAnswer: ", "no");
checkAnswer("2. Is my age 22? \nAnswer: ", "yes");
checkAnswer("3. Is my name Sunny Sahsi? \nAnswer: ", "yes");
checkAnswer("4. Is my favourite color blue? \nAnswer: ", "no");
checkAnswer("5. Is my favourite food pizza? \nAnswer: ", "yes");

console.log(`Your score is ${score}`);


/*
# Output:
~~~~~~~[ Welcome to the quiz game! ]~~~~~~~
~~~~~[ Total number of questions: 5 ]~~~~~

1. Is my hometown Bokaro?
Answer: no
You are Right
2. Is my age 22?
Answer: yes
You are Right
3. Is my name Sunny Sahsi?
Answer: yes
You are Right
4. Is my favourite color blue?
Answer: no
You are Right
5. Is my favourite food pizza?
Answer: yes
You are Right

Your score is 5
*/