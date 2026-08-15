let tasks = [];

// Add Task
function addTask() 
{
    let input = document.getElementById("taskInput");

    let taskText = input.value.trim();

    if (taskText === "") 
    {
        alert("Please enter a task!");

        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    input.value = "";

    displayTasks();
}

// Display Tasks
function displayTasks(taskArray = tasks) 
{
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    taskArray.forEach(function(task, index) 
    {
        let li = document.createElement("li");

        li.className = "task";

        if (task.completed) 
        {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <button class="check-btn" onclick="completeTask(${index})"></button>

            <span class="task-text">${task.text}</span>

            <button class="delete-btn" onclick="deleteTask(${index})">🗑</button>
        `;

        taskList.appendChild(li);

    });

    updateSummary();
}

// Complete Task
function completeTask(index) 
{
    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}


// Delete Task
function deleteTask(index) 
{
    tasks.splice(index, 1);

    displayTasks();
}


// Show All
function showAll()
{
    displayTasks(tasks);
}

// Show Pending
function showPending() 
{
    let pending = tasks.filter(function(task) 
    {
        return task.completed === false;
    });

    displayTasks(pending);
}

// Show Completed
function showCompleted() 
{
    let completed = tasks.filter(function(task) 
    {
        return task.completed === true;
    });

    displayTasks(completed);
}


// Update Summary
function updateSummary() 
{
    let total = tasks.length;

    let completed = tasks.filter(function(task) 
    {
        return task.completed === true;
    }).length;

    let pending = total - completed;

    document.getElementById("totalTasks").innerText = total;

    document.getElementById("pendingTasks").innerText = pending;

    document.getElementById("completedTasks").innerText = completed;
}


// Clear Completed Tasks
function clearCompleted() 
{
    tasks = tasks.filter(function(task) 
    {
        return task.completed === false;
    });

    displayTasks();
}