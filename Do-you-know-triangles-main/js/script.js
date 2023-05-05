// For inputs
const angleOne = document.querySelector('#angle1');
const angleTwo = document.querySelector('#angle2');
const angleThree = document.querySelector('#angle3');

// For button
const checkBtn = document.querySelector('#check');
const backBtn = document.querySelector('#back');

// For Area
const inputArea = document.querySelector('.input-area');
const outputArea = document.querySelector('.show');


// For result text
const resultText = document.querySelector('#result-text');


const tirangleOutput = document.querySelector('#myCanvas');


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

// Function for reset the input
function reset() {
     angleOne.value = '';
     angleTwo.value = '';
     angleThree.value = '';
}

// function to check if the triangle is valid or not
function checkTriangle() {
     const angle1 = Number(angleOne.value);
     const angle2 = Number(angleTwo.value);
     const angle3 = Number(angleThree.value);

     if (angle1 + angle2 + angle3 === 180) {
          resultText.innerText = 'Yay, the angles form a triangle';
          showResultArea();
          backBtn.innerHTML = 'Reset';
          reset();
     } else {
          resultText.innerText = "The angles do not form a triangle";
          backBtn.innerHTML = 'Back';
          showResultArea();
     }
}

// function for validate the input
function validateInput() {
     if (angleOne.value === '' || angleTwo.value === '' || angleThree.value === '' || angleOne.value <= 0 || angleTwo.value <= 0 || angleThree.value <= 0) {
          resultText.innerText = 'Please enter valid input';
          showResultArea();
          backBtn.innerHTML = 'Back';
     }
     else {
          checkTriangle();
     }
}





checkBtn.addEventListener('click', validateInput);
backBtn.addEventListener('click', back);