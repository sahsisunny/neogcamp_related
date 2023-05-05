// Import modules
const readLineSunc = require('readline-sync');
const chalkk = require('chalk');

// Global variable to store the score
let score = 0;

// List of questions
const questionList = [
     { question: "1. Is my hometown Bokaro? \nAnswer: ", answer: false },
     { question: "2. Is my age 22? \nAnswer: ", answer: true },
     { question: "3. Is my name Sunny Sahsi? \nAnswer: ", answer: true },
     { question: "4. Is my favourite color blue? \nAnswer: ", answer: false },
     { question: "5. Is my favourite food pizza? \nAnswer: ", answer: true }
]

// Hicgh score list
const highScore = [
     { name: "Deepak Kumar", score: 3 },
     { name: "Neha Kashyap", score: 4 },
]

// Function for take user details  1
function userDeatils() {
     console.log(chalkk.bgGreen.bold("~~~~~~~[ Welcome to the quiz game! ]~~~~~~~\n~~~~~[ Total number of questions are: 5 ]~~~~~\n"));
     const userName = readLineSunc.question("Enter your name:  ");
     console.log(chalkk.bgYellow('Welcome ' + chalkk.bold(userName) + ' to the quiz'));
     console.log(chalkk.blue("Let's start the quiz\n"));
}

// Function to check the answer    2
function checkAnswer(question, answer) {
     const inputAns = readLineSunc.keyInYN(chalkk.yellow(question));
     if (inputAns === answer) {
          score++;
          console.log(chalkk.green("You are Right👍"));
          console.log(`Your current score is ${score}`);
     } else {
          console.log(chalkk.red("You are Wrong👎"));
          console.log(`Your current score is ${score}`);
     }
}

// Function to play the quiz  3
function playQuiz() {
     for (let i = 0; i < questionList.length; i++) {
          checkAnswer(questionList[i].question, questionList[i].answer);
          console.log();
     }
}

// Check the high score  4

function checkHighScore() {
     if ((score > highScore[0].score) || (score > highScore[1].score)) {
          console.log(chalkk.green.bold("Congratulation! You have beaten the high score 🎉🎉🎉"));
          console.log(chalkk.green.bold("Please send me the screenshot of your score 📸, I will update it in the high score list"));
          console.log('Your score is ' + chalkk.green.bold(score));

     } else {
          console.log(chalkk.red.bold("Sorry! You have not beaten the high score\n"));
          console.log('Your score is ' + chalkk.red.bold(score));
          console.log(chalkk.cyan.bold.underline("High score list:"));
          for (let i = 0; i < highScore.length; i++) {
               console.log(chalkk.green.bold(highScore[i].name + "\t : \t" + highScore[i].score));
          }
     }

}


// Calling the FUnction
userDeatils();
playQuiz();
checkHighScore();


/*
Link to the repl.it file output
https://replit.com/@SahsiSunny/ex15#index.js?embed=1&output=1
https://replit.com/@SahsiSunny/DoYouKnowMe?v=1
*/
