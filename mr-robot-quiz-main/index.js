// Import modules
const readLineSunc = require('readline-sync');
const chalkk = require('chalk');

// Global variable to store the score
let score = 0;

// List of questions
const questionList = [
     { question: "1. What is the First name of the main character in the series? \nAnswer: ", answer: "elliot" },
     { question: "2. What is the name of the company where Elliot works? \nAnswer: ", answer: "allsafe" },
     { question: "3. What is the name of the hacker group that Elliot is a part of? \nAnswer: ", answer: "fsociety" },
     { question: "4. How many episodes are there in the first season? \nAnswer: ", answer: "10" },
     { question: "5. Total number of seasons of Mr.Robot? \nAnswer: ", answer: "4" }
]
// Hicgh score list
const highScore = [
     { name: "Deepak Kumar", score: 3 },
     { name: "Neha Kashyap", score: 4 },
]

// Function for take user details  1
function userDeatils() {
     console.log(chalkk.bgGreen.bold("~~~~~~~[ Welcome to the Mr.Robot🤖 game! ]~~~~~~~\n~~~~~[ Total number of questions are: 5 ]~~~~~\n"));
     const userName = readLineSunc.question("Enter your name:  ");
     console.log(chalkk.bgYellow('Welcome ' + chalkk.bold(userName) + ' to the quiz'));
     console.log(chalkk.blue("Let's start the quiz\n"));
}

// Function to game rules
function gameRules() {
     console.log(chalkk.bgGreen.bold("~~~~~~~[ Game Rules ]~~~~~~~"));
     console.log(chalkk.bgYellow("1. There are total 5 questions in the quiz."));
     console.log(chalkk.bgYellow("2. For each correct answer you will get 1 point."));
     console.log(chalkk.bgYellow.bold("3. All answer should be in lower case.\n"));
}

// Function to check the answer    2
function checkAnswer(question, answer) {
     const inputAns = readLineSunc.question(chalkk.yellow(question));
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
gameRules();
playQuiz();
checkHighScore();


