const inputText = document.querySelector("#text")
const outputText = document.querySelector("#res-text")

const h1BTN = document.querySelector("#h1")
const h2BTN = document.querySelector("#h2")
const h3BTN = document.querySelector("#h3")


function becomeh1() {
     const text = inputText.value;
     outputText.innerHTML = "<h1>" + text + "</h1>";
     console.log(text);
}
function becomeh2() {
     const text = inputText.value;
     outputText.innerHTML = "<h2>" + text + "</h2>";
     console.log(text);
}
function becomeh3() {
     const text = inputText.value;
     outputText.innerHTML = "<h3>" + text + "</h3>";
     console.log(text);
}

h1BTN.addEventListener('click', becomeh1)
h2BTN.addEventListener('click', becomeh2)
h3BTN.addEventListener('click', becomeh3)