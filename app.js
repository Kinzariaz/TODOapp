let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter your task..");
        return;
    }

    tasks.push(taskText);
    displayTasks();
    input.value = "";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}


function deleteAllTasks() {
    tasks = [];
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    let html = "";

    tasks.forEach((task, index) => {
        html += `<li> 
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        </li>`;
    });

    taskList.innerHTML = html;
}