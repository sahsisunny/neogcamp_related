const inputText = document.querySelector("#text")
const outputText = document.querySelector("#res-text")

const redBTN = document.querySelector("#red")
const greenBTN = document.querySelector("#green")
const blueBTN = document.querySelector("#blue")


function setColorRed() {
     const text = inputText.value;
     outputText.innerHTML = text;
     outputText.style.color = "red";
}
function setColorGreen() {
     const text = inputText.value;
     outputText.innerHTML = text;
     outputText.style.color = "green";
}
function setColorBlue() {
     const text = inputText.value;
     outputText.innerHTML = text;
     outputText.style.color = "blue";
}

redBTN.addEventListener('click', setColorRed)
greenBTN.addEventListener('click', setColorGreen)
blueBTN.addEventListener('click', setColorBlue)