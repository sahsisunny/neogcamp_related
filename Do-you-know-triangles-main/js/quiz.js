// For inputs
const quizForm = document.querySelector('.question-area');
const containerHeight = document.querySelector('.container');

// For button
const checkBtn = document.querySelector('#check');
const backBtn = document.querySelector('#back');

// For Area
const questionArea = document.querySelector('.question-area');
const outputArea = document.querySelector('.show');

// For result text
const resultText = document.querySelector('#result-text');


// Correct answer
const correctAnswers = ["180", "obtuse", "40", "180", "right"];


// Function for Show resultArea and hide inputArea
function showResultArea() {
     questionArea.classList.add('hide');
     outputArea.style.display = 'block';
     checkBtn.style.display = 'none';

}

// function for click on back button
function back() {
     window.location.reload();
}

// function for click on check button
function check() {
     let score = 0;
     let index = 0;
     const formResults = new FormData(quizForm);
     for (let value of formResults.values()) {
          if (value === correctAnswers[index]) {
               score++;
          }
          index++;
     }
     resultText.innerText = `Your score is ${score}/5`;
     containerHeight.style.height = '75vh';
     showResultArea();
}

checkBtn.addEventListener('click', check);
backBtn.addEventListener('click', back);