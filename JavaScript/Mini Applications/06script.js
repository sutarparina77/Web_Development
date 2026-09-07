// State
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

// Save to localStorage
function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks
function render() {

    const list = document.getElementById("todo-list");

    const filtered = tasks.filter(t => {

        if (filter === "active")
            return !t.done;

        if (filter === "completed")
            return t.done;

        return true;
    });

    if (filtered.length === 0) {

        list.innerHTML =
            '<li class="empty">No tasks to show &#128591;</li>';

    } else {

        list.innerHTML = filtered.map(t => `
            <li class="todo-item ${t.done ? "completed" : ""}"
                data-id="${t.id}">

                <button class="check-btn">
                    ${t.done ? "&#10003;" : ""}
                </button>

                <span class="task-text">${t.text}</span>

                <button class="delete-btn">&#10005;</button>

            </li>
        `).join("");
    }

    // Stats
    const done = tasks.filter(t => t.done).length;

    document.getElementById("stats-text").textContent =
        `${tasks.length} tasks - ${done} completed`;
}


// Add task
function addTask() {

    const input = document.getElementById("task-input");

    const text = input.value.trim();

    if (!text)
        return;

    tasks.push({
        id: Date.now(),
        text,
        done: false
    });

    input.value = "";

    save();
    render();
}


// Event: Add button
document.getElementById("add-btn")
    .addEventListener("click", addTask);


// Event: Enter key
document.getElementById("task-input")
    .addEventListener("keydown", e => {

        if (e.key === "Enter")
            addTask();

    });


// Event: Click on list (delegation)
document.getElementById("todo-list")
    .addEventListener("click", e => {

        const item = e.target.closest(".todo-item");

        if (!item)
            return;

        const id = Number(item.dataset.id);

        // Complete / uncomplete task
        if (
            e.target.classList.contains("check-btn") ||
            e.target.classList.contains("task-text")
        ) {

            tasks = tasks.map(t =>
                t.id === id
                    ? { ...t, done: !t.done }
                    : t
            );
        }

        // Delete task
        if (e.target.classList.contains("delete-btn")) {

            tasks = tasks.filter(t => t.id !== id);
        }

        save();
        render();

    });


// Filter buttons
document.querySelectorAll(".filter-btn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            document
                .querySelectorAll(".filter-btn")
                .forEach(b => b.classList.remove("active"));

            btn.classList.add("active");

            filter = btn.dataset.filter;

            render();

        });

    });


// Clear completed
document.getElementById("clear-completed")
    .addEventListener("click", () => {

        tasks = tasks.filter(t => !t.done);

        save();
        render();

    });


// Initial render
render();