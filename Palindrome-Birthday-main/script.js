'use strict';

const inputDate = document.querySelector('#date');
const checkBtn = document.querySelector('#check');
const backBtn = document.querySelector('#back');
const result = document.querySelector('#result-text');

// For Area
const outputArea = document.querySelector('.show');

let date = {
     day: '',
     month: '',
     year: '',
};

// Function for Show resultArea and hide inputArea
function showResultArea(msg) {
     outputArea.style.display = 'block';
     result.innerText = msg;
}

// function for click on back button
function back() {
     window.location.reload();
}


// function to reverse the string
function reverseString(str) {
     return str.split('').reverse().join('');
}

// function to check palindrome
function isPalindrome(str) {
     const reverse = reverseString(str);
     return str === reverse;
}

// function to convert date to string
function convertDateToString(date) {
     let dateStr = { day: '', month: '', year: '' };
     if (date.day < 10) {
          dateStr.day = '0' + date.day;
     } else {
          dateStr.day = date.day.toString();
     }

     if (date.month < 10) {
          dateStr.month = '0' + date.month;
     } else {
          dateStr.month = date.month.toString();
     }

     dateStr.year = date.year.toString();
     return dateStr;
}

// function to get all date formats
function getAllDateFormats(date) {
     let dateStr = convertDateToString(date);

     let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
     let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
     let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
     let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
     let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
     let yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
     return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// function to check palindrome for all date formats
function checkPalindromeForAllDateFormats(date) {
     let listOfPalindromes = getAllDateFormats(date);
     let flag = false;
     for (let i = 0; i < listOfPalindromes.length; i++) {
          if (isPalindrome(listOfPalindromes[i])) {
               flag = true;
               break;
          }
     }
     return flag;
}

// function to check leap year
function isLeapYear(year) {
     if (year % 400 === 0) return true;
     if (year % 100 === 0) return false;
     if (year % 4 === 0) return true;
     return false;
}

// function to get next date
function getNextDate(date) {
     let day = date.day + 1;
     let month = date.month;
     let year = date.year;

     let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];        // 0 - 11

     if (month === 2) {
          // Check for Leap year
          if (isLeapYear(year)) {
               // Check for 29th Feb
               if (day > 29) {
                    day = 1;
                    month++;
               } else {
                    // Check for 28th Feb
                    if (day > 28) {
                         day = 1;
                         month++;
                    }
               }
          }
     } else {
          // Check if the day exceeds the max days in month
          if (day > daysInMonth[month - 1]) {
               day = 1;
               month++;
          }
     }
     // Check if month exceeds 12
     if (month > 12) {
          month = 1;
          year++;
     }
     return {
          day: day,
          month: month,
          year: year,
     };
}

// function getNextPalindromeDate
function getNextPalindromeDate(date) {
     var ctr = 0;
     var nextDate = getNextDate(date);

     while (1) {
          ctr++;
          var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
          if (isPalindrome) {
               break;
          }
          nextDate = getNextDate(nextDate);
     }
     return [ctr, nextDate];
}

// function to get previous date
function getPreviousDate(date) {
     let day = date.day - 1;
     let month = date.month;
     let year = date.year;

     let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];        // 0 - 11

     if (day === 0) {
          month--;
          if (month === 0) {
               month = 12;
               year--;
               day = 31;
          } else if (month === 2) {
               // Check for Leap year
               if (isLeapYear(year)) {
                    day = 29;
               } else {
                    day = 28;
               }
          } else {
               day = daysInMonth[month - 1];
          }
     }
     return {
          day: day,
          month: month,
          year: year,
     };
}

// function getPreviousPalindromeDate
function getPreviousPalindromeDate(date) {
     var ctr = 0;
     var previousDate = getPreviousDate(date);

     while (1) {
          ctr++;
          var isPalindrome = checkPalindromeForAllDateFormats(previousDate);
          if (isPalindrome) {
               break;
          }
          previousDate = getPreviousDate(previousDate);
     }
     return [ctr, previousDate];
}

// function to get nearest palindrome date
function getNearestPalindromeDate(date) {
     var [nextCtr, nextDate] = getNextPalindromeDate(date);
     var [prevCtr, prevDate] = getPreviousPalindromeDate(date);

     if (nextCtr > prevCtr) {
          return [prevCtr, prevDate];
     } else {
          return [nextCtr, nextDate];
     }
}


// function for input validation and click on check button
function inputValidation() {
     let date = inputDate.value;
     if (date === '' || date === null || date === undefined) {
          showResultArea('Please Enter a valid date');
          backBtn.style.display = 'none';
          
     } else {
          let listOfDate = date.split('-');
          date = {
               day: Number(listOfDate[2]),
               month: Number(listOfDate[1]),
               year: Number(listOfDate[0]),
          };
          var isPalin = checkPalindromeForAllDateFormats(date);

          if (isPalin) {
               showResultArea('Yay! Your birthday is a palindrome');
               checkBtn.style.display = 'none';

          } else {
               var [ctr, nextDate] = getNearestPalindromeDate(date);
               var [prevCtr, prevDate] = getPreviousPalindromeDate(date);
               showResultArea(`
               The Previous Palindrome date : ${prevDate.day}-${prevDate.month}-${prevDate.year},
               you missed it by ${prevCtr} days. and
               
               The Next Palindrome date : ${nextDate.day}-${nextDate.month}-${nextDate.year},
               just wait for it by ${ctr} days. 
               `);
               checkBtn.style.display = 'none';
               backBtn.style.display = 'block';


          }
     }
}





backBtn.addEventListener('click', back);
checkBtn.addEventListener('click', inputValidation);
