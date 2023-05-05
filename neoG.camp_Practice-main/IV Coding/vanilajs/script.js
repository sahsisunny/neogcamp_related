const inputText = document.querySelector('#input');
const outputText = document.querySelector('#output');
const button = document.querySelector('#submit');

function setOutputText() {
     let text = inputText.value;
     outputText.innerText = text + text.length;
}
button.addEventListener('click', setOutputText);