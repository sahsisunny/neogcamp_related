const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const addBTN = document.querySelector("#addition");
const subBTN = document.querySelector("#subtraction");
const multiBTN = document.querySelector("#multiply");
const divBTN = document.querySelector("#division");

const result = document.querySelector("#result");

function getData() {
     const number1 = Number(num1.value);
     const number2 = Number(num2.value);
}

function add() {
     const number1 = Number(num1.value);
     const number2 = Number(num2.value);
     result.innerHTML = number1 + number2;
}
function sub() {
     const number1 = Number(num1.value);
     const number2 = Number(num2.value);
     result.innerHTML = number1 - number2;
}
function multi() {
     const number1 = Number(num1.value);
     const number2 = Number(num2.value);
     result.innerHTML = number1 * number2;
}
function div() {
     const number1 = Number(num1.value);
     const number2 = Number(num2.value);
     result.innerHTML = number1 / number2;
}

addBTN.addEventListener('click', add)
subBTN.addEventListener('click', sub)
multiBTN.addEventListener('click', multi)
divBTN.addEventListener('click', div)