const greeting = document.getElementById("greeting");
const inputForm = document.getElementById("inputForm");
const input = document.querySelector("input");

const CURRENT_USER = "currentUser";

function checkUser() {
    const user = localStorage.getItem("currentUser");
    if (user === null) {
        askName();
    } else {
        doGreeting();
    }
}

function askName() {
    inputForm.classList.add("showing");
}

function doGreeting() {
    const user = localStorage.getItem("currentUser");
    greeting.innerText = `Hello, sexy ${user}!`
}

function saveName(event) {
    event.preventDefault();
    userName = input.value;
    localStorage.setItem(CURRENT_USER, userName);
    input.value = '';
    doGreeting();
    inputForm.classList.remove("showing");
}

function init() {
    checkUser();
    inputForm.addEventListener("submit", saveName);
}

init();