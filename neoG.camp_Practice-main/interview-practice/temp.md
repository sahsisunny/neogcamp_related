# Sample Q1

## Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

### In VanilaJS

#### HTML Code

```html
<!DOCTYPE html>
<html lang="en">

<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Sample Q1</title>
</head>

<body>
     <section class="container">
          <input type="number" id="num1" placeholder="Enter 1st Number">
          <input type="number" id="num2" placeholder="Enter 2nd Number">
          <button id="addition">+</button>
          <button id="subtraction">-</button>
          <button id="multiply">*</button>
          <button id="division">/</button>
          <p id="result"></p>
     </section>

     <script src="./script.js"></script>
</body>

</html>
```

#### JS Code

```js
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
```



