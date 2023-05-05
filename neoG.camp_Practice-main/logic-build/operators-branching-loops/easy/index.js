// ~~~~~~~~~~~~~~~~~~~~~ EASY ~~~~~~~~~~~~~~~~~~

// Q1
/*
let num1 = 5;
let num2 = 13;
let num3 = 7;
let num4 = 21;
let num5 = 48;

let res = num1 + num2 + num3 + num4 + num5;
console.log(`Result: ${res}`);
*/

//Q2
/*
const read = require("readline-sync");
const num = read.question("Enter the Number: ");
function checkOddEven(number) {
     if (number % 2 == 0) {
          console.log(`${number} is Even`);
     } else {
          console.log(`${number} is Odd`);
     }
}
checkOddEven(num);
*/

// Q3
/*
let num1 = 129;
let num2 = 251;

function getMaximum(n1, n2) {
     if (n1 > n2) {
          console.log(`${n1} is greater then ${n2}`);
     } else {
          console.log(`${n2} is greater then ${n1}`);
     }
}
getMaximum(num1, num2);
*/

// Q4
/*
let num1 = 8;
let num2 = 23;
let num3 = 17;

function getMaximum(n1, n2, n3) {
     if (n1 > n2 && n1 > n3) {
          console.log(`${n1} is greater then ${n2} and ${n3}`);
     } else if (n2 > n3 && n2 > n1) {
          console.log(`${n2} is greater then ${n1} and ${n3}`);
     } else {
          console.log(`${n3} is greater then ${n1} and ${n2}`);
     }
}
getMaximum(num1, num2, num3);
*/

// Q5
/*
let num1 = 35;
let num2 = 29;
let num3 = 46;

function getMinimum(n1, n2, n3) {
     if (n1 < n2 && n1 < n3) {
          console.log(`${n1} is lower then ${n2} and ${n3}`);
     } else if (n2 < n3 && n2 < n1) {
          console.log(`${n2} is lower then ${n1} and ${n3}`);
     } else {
          console.log(`${n3} is lower then ${n1} and ${n2}`);
     }
}
getMinimum(num1, num2, num3);
*/

//Q6
/*
const read = require("readline-sync");
let monthNum = Number(read.question("Enter the month number: "));

function checkMonth(num) {
     if (num > 0 && num <= 12) {
          if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
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

checkMonth(monthNum);
*/

// ~~~~~~~~~~~~~~~~~~~~~ EASY ~~~~~~~~~~~~~~~~~~

//Q1
/*
function FizzBuzz() {
     for (let i = 1; i <= 100; i++) {
          if (i % 3 == 0 && i % 5 == 0) {
               console.log("FizzBuzz");
          } else if (i % 3 == 0) {
               console.log("Fizz");
          } else if (i % 5 == 0) {
               console.log("Buzz");
          } else {
               console.log(i);
          }
     }
}
FizzBuzz()
*/

// Q2
/*
let line = 5
function printTriangle(num) {
     for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= i; j++) {
               process.stdout.write("*");
          }
          process.stdout.write("\n");
     }
}
printTriangle(line);
*/

// Q3
/*
const read = require("readline-sync");
let num = Number(read.question("Enter the Number: "));

function printTable(num) {
     for (let i = 1; i <= 12; i++) {
          console.log(`${num} x ${i} = ${num * i}`);
     }
}
printTable(num);
*/

// Q4
