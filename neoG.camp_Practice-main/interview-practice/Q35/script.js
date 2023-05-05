const outputArea = document.querySelectorAll(".output")
const showBTN = document.querySelector("#show")

const obj1 = [
     {
          task: "Reading",
          completed: true
     },
     {
          task: "Teaching",
          completed: false
     },
     {
          task: "Coding",
          completed: true
     }
]
const mymap = new Map();
function showResult() {
     for (let i = 0; i < obj1.length; i++) {
          if (obj1[i].completed) {
               outputArea[i].innerText = obj1[i].task;
          }
     }
}

showBTN.addEventListener('click', showResult)

