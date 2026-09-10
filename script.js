function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    const taskList = document.getElementById("taskList");


    // Create task
    const li = document.createElement("li");


    // Task text
    const span = document.createElement("span");

    span.textContent = taskText;


    // Complete task when clicked
    span.onclick = function () {

        span.classList.toggle("completed");

    };


    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";


    deleteButton.onclick = function () {

        li.remove();

        updateEmptyMessage();

    };


    // Add elements
    li.appendChild(span);

    li.appendChild(deleteButton);

    taskList.appendChild(li);


    // Clear input
    input.value = "";

    updateEmptyMessage();
}


// Show/hide empty message

function updateEmptyMessage() {

    const taskList = document.getElementById("taskList");

    const emptyMessage = document.getElementById("emptyMessage");

    if (taskList.children.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }
}
