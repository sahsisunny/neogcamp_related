
     } else {
          console.log(`${n3} is lower then ${n1} and ${n2}`);
     }
}
getMinimum(num1, num2, num3);
*/

//Q6
const read = require("readline-sync");
let monthNum = Number(read.question("Enter the month number: "));

function checkMonth(num) {
     if (num > 0 && num <= 12) {
          if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num11 == 12) {
               console.log("31 Days");
          } else if (num == 2) {
               console.log("28/29 Days");
          } else {
               console.log("30 Days");
          }
     } else {
          console.log("Enter valid month number!!");
     }
}