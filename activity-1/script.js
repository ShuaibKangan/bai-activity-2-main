const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const count = document.getElementById("count");

const tasks = [];

function render() {
    taskList.innerHTML = "";
    //clears the list first.

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement("li");
    }
    //make a new list item for each task in the array.

    const taskText = document.createElement("span");
    taskText.textContent = task;
    //add the task text to the list item

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    //the delete button.

    deleteBtn.title = "Delete";
    /*when delete is clicked, remove the task 
     from the array and re-render the list.*/

     deleteBtn.addEventListener("click", () => {
        tasks.splice(i, 1);
        //removes 1 task at this "i" index.

        render(); /*redraws the screen with 
        the new list of tasks.*/
     }
    );

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    //updates the counter with the current legnth.
    count.textContent = tasks.length + " tasks";
}

addBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    /*removes whitespace from the 
    beginning and end of the string.*/

    if (task === "") return; /*Does nothing if no
    value has been entered.*/

    tasks.push(task);
    //adds the new task to the end of the array.

    render(); /*redraws the screen with the new 
    list of tasks.*/

    taskInput.value = "";
    /*clear the input field after the task has 
     been added.*/

});

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addBtn.click();
/* Pressing the Enter button in the input box clicks
the Add button for us. */
});

render();
/* Calls render() at the end so that the 
counter and list appears.*/


