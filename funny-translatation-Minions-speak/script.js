'use strict';

const translateBTN = document.getElementById('btn');
const inputText = document.getElementById('input');
const outputText = document.getElementById('output');


let setUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
     return setUrl + "?" + "text=" + text
}

function clickHandler() {
     let text = inputText.value;
     fetch(getTranslationURL(text))
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