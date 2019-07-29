const greeting = document.getElementById("greeting");
const nameForm = document.getElementById("nameForm");
const input = nameForm.querySelector("input");

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
    nameForm.classList.add("showing");
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
    nameForm.classList.remove("showing");
}

function init() {
    checkUser();
    nameForm.addEventListener("submit", saveName);
}

init();