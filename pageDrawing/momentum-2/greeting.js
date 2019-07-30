const greeting = document.getElementById("greeting");
const nameForm = document.getElementById("nameForm");
const input = nameForm.querySelector("input");
const toDoFormS = document.querySelector(".toDoForm")

const CURRENT_USER = "currentUser";
const CLASS_SHOWING = "showing"

function checkUser() {
    const currentUser = localStorage.getItem(CURRENT_USER);
    if (currentUser === null) {
        askName();
    } else {
        doGreeting(currentUser);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    userName = input.value;
    doGreeting(userName);
    saveName(userName);
}

function askName() {    
    nameForm.classList.add(CLASS_SHOWING);
}

function doGreeting(userName) {
    nameForm.classList.remove(CLASS_SHOWING);
    greeting.classList.add(CLASS_SHOWING);
    toDoFormS.classList.add(CLASS_SHOWING);
    greeting.innerText = `Hello, sexy ${userName}!`
}

function saveName(userName) {
    localStorage.setItem(CURRENT_USER, userName);
    input.value = '';
}

function init() {
    checkUser();
    nameForm.addEventListener("submit", handleSubmit);
}

init();