// Selectors 
const perpendicular = document.querySelector('#perpendicular');
const base = document.querySelector('#base');
const checkBtn = document.querySelector('#check');
const backBtn = document.querySelector('#back');
const inputArea = document.querySelector('.input-area');
const outputArea = document.querySelector('.show');
const resultText = document.querySelector('#result-text');


// Function for Show resultArea and hide inputArea
function showResultArea() {
     inputArea.classList.add('hide');
     outputArea.style.display = 'block';
}

// function for click on back button
function back() {
     outputArea.style.display = 'none';
     inputArea.classList.remove('hide');
}

let hypotenuse = 0;
// function to find hypotenuse
function findHypo() {
     const perp = perpendicular.value;
     const bas = base.value;
     hypotenuse = Math.sqrt(perp * perp + bas * bas);
     hypotenuse = hypotenuse.toFixed(2);
     resultText.innerText = `The length of hypotenuse is ${hypotenuse} units`;
     showResultArea();

}

// function for validate the input
function validateInput() {
     if (perpendicular.value === '' || base.value === '' || perpendicular.value <= 0 || base.value <= 0) {
          resultText.innerText = 'Please enter valid input';
          showResultArea();
     } else {
          findHypo();
     }
}

checkBtn.addEventListener('click', validateInput);
backBtn.addEventListener('click', back);