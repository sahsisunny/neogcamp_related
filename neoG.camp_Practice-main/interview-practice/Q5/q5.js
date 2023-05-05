const readLine = require("readline-sync");

// 1. Create a Variable
let name = [];
let unitTestMarks = [];
let preFinalMarks = [];
let finalMarks = [];
let fullMarks = [];
let sumOfAll = 0;
let average = 0;
let highestMark = 0;

// For taking input
function getInput() {
     for (let i = 0; i < 5; i++) {
          name.push(readLine.question(`Name ${i + 1}: `))
          unitTestMarks.push(readLine.question(`Unit Test Mark ${i + 1}: `));
          preFinalMarks.push(readLine.question(`Pre Final Mark ${i + 1}: `));
          finalMarks.push(readLine.question(`Final Mark ${i + 1}: `));
     }
}

// functio for sum of all marks
function sum(utm, pfm, fm) {
     for (let index = 0; index < 5; index++) {
          fullMarks.push(Number(utm[index]) + Number(pfm[index]) + Number(fm[index]));
     }
}

// function for average
function averageFun() {
     for (let i = 0; i <= fullMarks.length; i++) {
          sumOfAll += Number(finalMarks[0]);
     }
     average = sumOfAll / fullMarks.length
}

// function to check height marks
function checkHighestMarks() {
     for (let i = 0; i <= fullMarks.length; i++) {
          if (highestMark < fullMarks[i]) {
               highestMark = fullMarks[i];
          }
     }
}

// function for print name with marks
function printName() {
     for (let i = 0; i <= fullMarks.length; i++) {
          if (highestMark === fullMarks[i]) {
               console.log("Name: ", name[i]);
               console.log("Unit Test Marks: ", unitTestMarks[i]);
               console.log("Pre Final Marks: ", preFinalMarks[i]);
               console.log("Final Marks: ", finalMarks[i]);
               console.log("Full marks: ", fullMarks[i]);
               console.log("-----------------------------------------");
               console.log("Average Mark: ", average);
          }
     }
}

getInput()
sum(unitTestMarks, preFinalMarks, finalMarks);
averageFun();
checkHighestMarks();
printName();
