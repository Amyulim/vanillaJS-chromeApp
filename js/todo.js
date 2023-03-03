const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

//this should be let. if it's empty, it will keep overriding from empty array
let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //remove the clicked one and update the array to localstorage
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  //const btn = document.createElement("button");
  const deletebtn = document.createElement("i");
  deletebtn.classList.add("gg-remove");
  deletebtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  //li.appendChild(btn);
  li.appendChild(deletebtn);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*function sayHello(item) {
    console.log("this is the turn of", item);
}*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //console.log(parsedToDos);

  //this is the same as the sayHello function. (item)==>~~~part
  // parsedToDos.forEach((item)=> console.log("this is the turn of", item));
  parsedToDos.forEach(paintToDo);
} else {
}
