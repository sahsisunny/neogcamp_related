const textRes = document.querySelector("#text");
const increaseBTN = document.querySelector("#increase");
const decreaseBTN = document.querySelector("#decrease");

let fontSize = 32;
function increase() {
     fontSize += 2;
     textRes.style.fontSize = `${fontSize}px`;
}
function decrease() {
     fontSize -= 2;
     textRes.style.fontSize = `${fontSize}px`;
}

increaseBTN.addEventListener('click', increase);
decreaseBTN.addEventListener('click', decrease);