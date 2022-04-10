// Events

function print() {
    console.log("Hello!");
}

const input = document.querySelector("input");

input.onkeydown = function () {
    console.log("rodei");
}

const h1 = document.querySelector("h1");

h1.addEventListener("click", () => console.log("Event Listener"));

