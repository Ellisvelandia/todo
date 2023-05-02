const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value;

  const listItem = document.createElement("li");
  const deleteItem = document.createElement("p");
  deleteItem.classList.add("delete");
  deleteItem.innerText = "x";
  listItem.innerText = todoText;
 

  todoList.appendChild(listItem);
  listItem.appendChild(deleteItem);
  todoInput.value = "";

  deleteItem.addEventListener("click", deleteTodo);
}

function deleteTodo() {
  const listItem = this.parentNode;
  const todoList = listItem.parentNode;
  todoList.removeChild(listItem);
}
