const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2");
const submitBTN = document.getElementById("btn");

let pass1="";
let pass2="";

function validate() {
     pass1 = password1.value;
     pass2 = password2.value;
     console.log(pass2);
     console.log(pass1);
     if (pass1 === pass2) {
          // disabled btn
          submitBTN.disabled = false;
     } else {
          submitBTN.disabled = true;
     }
}


password1.addEventListener('change', (event) => pass1 = event.target.value);
password2.addEventListener('change', (event) => {
     pass2 = event.target.value;
     console.log(pass2);
     console.log(pass1);
     if (pass1 === pass2) {
          submitBTN.disabled = false;
     } else {
          submitBTN.disabled = true;
     }
});