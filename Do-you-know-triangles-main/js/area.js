// Selectors 
const base = document.querySelector('#base');
const height = document.querySelector('#height');
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

// function to find area
function findArea() {
     const heig = height.value;
     const bas = base.value;
     let area = 0.5 * bas * heig;
     area = area.toFixed(2);
     resultText.innerText = `The area of triangle is ${area} units`;
     showResultArea();

}

// function for validate the input
function validateInput() {
     if (height.value === '' || base.value === '' ||height.value <= 0 || base.value <= 0) {
          resultText.innerText = 'Please enter valid input';
          showResultArea();
     } else {
          findArea();
     }
}

checkBtn.addEventListener('click', validateInput);
backBtn.addEventListener('click', back);