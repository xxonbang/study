const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");

const TODOLIST_LS = "toDoList";
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(TODOLIST_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "DEL";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveTodo();
}

function checkTodoList() {
    const loadedToDos = localStorage.getItem(TODOLIST_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(todo => {
            paintToDo(todo.text);
        });
    }
}

function init() {
    checkTodoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();