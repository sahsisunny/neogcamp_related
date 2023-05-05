'use strict';

const translateBTN = document.getElementById('btn');
const inputText = document.getElementById('input');
const outputText = document.getElementById('output');

const characterSelection = document.getElementById('select');


// function to set text from select option
function setText(character) {
     if (character === 'minion') {
          return "https://api.funtranslations.com/translate/minion.json"
     } else if (character === 'yoda') {
          return "https://api.funtranslations.com/translate/yoda.json"
     } else if (character === 'pirate') {
          return "https://api.funtranslations.com/translate/pirate.json"
     }
}

function getTranslatationURL(text) {
     return setText(characterSelection.value) + "?" + "text=" + text
}

function clickHandler() {
     let text = inputText.value;
     fetch(getTranslatationURL(text))
          .then(response => response.json())
          .then(json => {
               var translatedText = json.contents.translated;
               outputText.innerText = translatedText;
          })
          .catch(errorHandler)
}

function errorHandler(error) {
     console.log("error occured", error);
     alert("something wrong with server! try again after some time")
}

// event listener for translate button
translateBTN.addEventListener('click', clickHandler);