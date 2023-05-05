const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");

const result = document.querySelector("#res");

const SubmitBTN = document.querySelector("#submit");

function validatePass() {
     if (pass1.value === pass2.value) {
          result.innerText = "Success";
     } else {
          result.innerText = "Password Mismatched";
     }
}

SubmitBTN.addEventListener('click', validatePass);