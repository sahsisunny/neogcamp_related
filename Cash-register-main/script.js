const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");

const cashGivenArea = document.querySelector(".cash-given-area");
const outputArea = document.querySelector(".change-return");

const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", validateAmount);
nextButton.addEventListener("click", nextButtonHandler);

function nextButtonHandler() {
     let billAmt = Number(billAmount.value);
     if (billAmt > 0) {
          cashGivenArea.style.display = "flex";
          cashGivenArea.style.flexDirection = "column";
          cashGivenArea.style.alignItems = "center";
          nextButton.style.display = "none"
          message.style.display = "none";

     } else {
          showMessage("Please enter valid bill amount");
          message.style.color = "red";
     }
}

// Function for validating amount entered and calling calculateChange function for calculating change to be returned
function validateAmount() {
     let billAmt = Number(billAmount.value);
     let cashGvn = Number(cashGiven.value);
     if (cashGvn >= billAmt) {
          const amountToBeReturned = cashGvn - billAmt;
          calculateChange(amountToBeReturned);
          outputArea.style.display = "block";
          message.style.display = "none";


     } else {
          showMessage("Do you wanna wash plates?");
          outputArea.style.display = "none";

     }
}


// Function for calculating change
function calculateChange(amountToBeReturned) {
     for (let i = 0; i < availableNotes.length; i++) {
          const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
          amountToBeReturned %= availableNotes[i];
          noOfNotes[i].innerText = numberOfNotes;
     }
}



// Function for showing message
function showMessage(msg) {
     message.style.display = "block";
     message.innerHTML = msg;
}

