// Sellectors

const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");

const teellmeBTN = document.querySelector("#tell-me");
const resetBTN = document.querySelector("#reset");

const resultText = document.querySelector("#result-text");

const inputArea = document.querySelector(".input-area");
const outputArea = document.querySelector(".output-area");



// function show output
function showOutput(message) {
     outputArea.style.display = "block";
     resultText.innerText = message;
}

// function for reset
function reset() {
     window.location.reload();
}

// function for calculate profit and loss
function calculateProfitAndLoss(initialPriceValue, quantityValue, currentPriceValue) {
     var profit = (currentPriceValue - initialPriceValue) * quantityValue;
     var loss = (initialPriceValue - currentPriceValue) * quantityValue;

     var profitPercentage = (profit / (initialPriceValue * quantityValue)) * 100;
     var lossPercentage = (loss / (initialPriceValue * quantityValue)) * 100;

     profitPercentage = profitPercentage.toFixed(2);
     lossPercentage = lossPercentage.toFixed(2);

     if (currentPriceValue > initialPriceValue) {
          showOutput(`You gained ₹${profit} and the profit percentage is ${profitPercentage}%`);
          resultText.style.color = "green";
     }
     else if (currentPriceValue < initialPriceValue) {
          showOutput(`You lost ₹${loss} and the loss percentage is ${lossPercentage}%`);
          resultText.style.color = "red";
     }
     else {
          showOutput(`No pain no gain and no gain no pain`);
          resultText.style.color = "darkblue";
     }
}

// functoin for submitHandler
function submitHandler() {
     const initialPriceValue = Number(initialPrice.value);
     const quantityValue = Number(quantity.value);
     const currentPriceValue = Number(currentPrice.value);

     calculateProfitAndLoss(initialPriceValue, quantityValue, currentPriceValue);
}
// function for validation
function validation() {
     if (initialPrice.value === "" || quantity.value === "" || currentPrice.value === "" || initialPrice.value <= 0 || quantity.value <= 0 || currentPrice.value <= 0) {
          showOutput("Please enter valid values");
          resultText.style.color = "red";
     } else {
          submitHandler();

     }
}


// Event Listeners
teellmeBTN.addEventListener("click", validation);
resetBTN.addEventListener("click", reset);
