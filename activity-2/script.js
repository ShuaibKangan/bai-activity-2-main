const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const count = document.getElementById("count");
const clearLastBtn = document.getElementById("clearLastBtn");
const firstTask = document.getElementById("firstTask");
const lastTask = document.getElementById("lastTask");
const nuke= document.getElementById("nuke");

// An empty array to hold all the tasks
const tasks = 
JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Draw every task on the screen from the tasks array
function render() {
  taskList.innerHTML = ""; // Clear the list first

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    deleteBtn.title = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(i, 1);
      saveTasks();
      render();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  count.textContent = tasks.length + " tasks";

  if (tasks.length > 0 ) {
    firstTask.textContent = tasks[0];
    lastTask.textContent = tasks[tasks.length - 1];
  } else {
    firstTask.textContent = "None";
    lastTask.textContent = "None";
  }
  
}

// Add a new task
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task === "") return;

  tasks.push(task);
  saveTasks();
  render();
  taskInput.value = "";
});

clearLastBtn.addEventListener("click", () => {
  if (tasks.length === 0) return;

  tasks.pop();  
  render();
});

nuke,addEventListener("click", () => {
  localStorage.clear() 
});
// Press Enter to add
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addBtn.click();
});

// Show the list when the page loads
render();
