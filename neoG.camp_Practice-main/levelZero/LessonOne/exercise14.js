/*
ex14: club everything to make the game
challenge
use question list
and function to put together a quiz
understand
all programs are made up of mini functions and data structures
learning to break a program into parts and then sewing them together is the real learning
*/

// ############ My Solution ############

// importing readlineSync module to take input from user
const readLineSunc = require('readline-sync');

// Global variable to store the score
let score = 0;

console.log("~~~~~~~[ Welcome to the quiz game! ]~~~~~~~\n~~~~~[ Total number of questions: 5 ]~~~~~\n");

// List of questions
const questionList = [
     { question: "1. Is my hometown Bokaro? \nAnswer: ", answer: "no" },
     { question: "2. Is my age 22? \nAnswer: ", answer: "yes" },
     { question: "3. Is my name Sunny Sahsi? \nAnswer: ", answer: "yes" },
     { question: "4. Is my favourite color blue? \nAnswer: ", answer: "no" },
     { question: "5. Is my favourite food pizza? \nAnswer: ", answer: "yes" }
]
// Function to check the answer
function checkAnswer(question, answer) {
     const inputAns = readLineSunc.question(question);
     if (inputAns === answer) {
          score = score + 1;
          console.log("You are Right👍");
          console.log(`Your current score is ${score}`);

     } else {
          score = score - 1;
          console.log("You are Wrong👎");
          console.log(`Your current score is ${score}`);
     }
}

// Loop to iterate over the questionList
for (let i = 0; i < questionList.length; i++) {
     checkAnswer(questionList[i].question, questionList[i].answer);
     console.log("-------------------------------------------------------------------");
}
// Print the final score
console.log(`Your score is ${score}`);

/*
# Output:
~~~~~~~[ Welcome to the quiz game! ]~~~~~~~
~~~~~[ Total number of questions: 5 ]~~~~~

1. Is my hometown Bokaro?
Answer: no
You are Right👍
Your current score is 1
-------------------------------------------------------------------
2. Is my age 22?
Answer: yes
You are Right👍
Your current score is 2
-------------------------------------------------------------------
3. Is my name Sunny Sahsi?
Answer: yes
You are Right👍
Your current score is 3
-------------------------------------------------------------------
4. Is my favourite color blue?
Answer: no
You are Right👍
Your current score is 4
-------------------------------------------------------------------
5. Is my favourite food pizza?
Answer: yes
You are Right👍
Your current score is 5
-------------------------------------------------------------------
Your score is 5
*/
 