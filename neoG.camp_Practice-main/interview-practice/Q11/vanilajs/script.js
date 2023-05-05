const inputPass = document.querySelector("#pass");
const msgtext = document.querySelector("#message");
const submitBTN = document.querySelector("#btn");
let pass = "";

function getValue() {
     pass = inputPass.value;
     if (pass.length < 10) {
          msgtext.innerHTML = "error";
          submitBTN.style.disabled = true;
          inputPass.style.backgroundColor = "red";
     } else {
          msgtext.innerHTML = "success";
          inputPass.style.backgroundColor = "green";
     }
}

function onchangeFun(event) {
     pass = inputPass.value;
     if (pass.length < 10) {
          inputPass.style.backgroundColor = "red";
          submitBTN.disabled = true;
     } else {
          inputPass.style.backgroundColor = "green";
          submitBTN.disabled = false;
     }
}

submitBTN.addEventListener('click', getValue);

