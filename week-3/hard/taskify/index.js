// Enable drag-and-drop functionality
const columns = document.querySelectorAll('.column');

columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow dropping
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        const taskCardId = e.dataTransfer.getData('text/plain');
        const taskCard = document.getElementById(taskCardId);
        column.appendChild(taskCard);
        saveTasksToLocalStorage();
    });
});

// Load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskCard(task.name, task.description, task.priority, task.id); // Correct parameter
    });
}

// Create a task card and append to the "to-do" column
function createTaskCard(taskName, taskDescp, taskPriority, taskId) {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.setAttribute("draggable", "true");
    taskCard.id = taskId;

    taskCard.innerHTML = `
        <h4>${taskName}</h4>
        <p>${taskDescp}</p>
        <span class="tag ${taskPriority.toLowerCase()}">${taskPriority}</span>
    `;

    const todoColumn = document.getElementById("to-do");
    todoColumn.appendChild(taskCard);

    // Drag and drop events for the task card
    taskCard.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', taskCard.id);
    });
}

// Save tasks to local storage
function saveTasksToLocalStorage() {
    const tasks = [];
    const taskCards = document.querySelectorAll('.task-card');

    taskCards.forEach(taskCard => {
        tasks.push({
            id: taskCard.id,
            name: taskCard.querySelector('h4').innerText,
            description: taskCard.querySelector('p').innerText, // Added description
            priority: taskCard.querySelector('.tag').innerText
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.querySelectorAll(".add-new-task").forEach((button) => {
    button.addEventListener("click", () => {
        const taskName = prompt("Enter the task name:");
        if (!taskName) {
            alert("Task name is required!");
            return;
        }

        const taskDescp = prompt("Enter Task Details: ") || "Enter task description here"; // Default value if empty

        const taskPriority = prompt("What is the priority of the task? (Urgent, Medium, Low)");
        const check = taskPriority?.toUpperCase(); // Optional chaining
        if (!check || !["URGENT", "MEDIUM", "LOW"].includes(check)) {
            alert("Please select a valid priority!");
            return;
        }

        const taskId = `task-${Date.now()}`; // Unique ID for drag-and-drop
        createTaskCard(taskName, taskDescp, taskPriority, taskId);

        saveTasksToLocalStorage();
        alert(`Task created: ${taskName} with priority ${taskPriority}`);
    });
});

// Load tasks when the page loads
loadTasksFromLocalStorage();
