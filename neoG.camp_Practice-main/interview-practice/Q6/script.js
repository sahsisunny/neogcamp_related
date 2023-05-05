const loaded = document.querySelector("#show");
const text = document.querySelector("#text");

function clickHandler() {
     text.style.display = "none";
}
loaded.addEventListener('click', clickHandler);