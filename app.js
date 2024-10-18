// Declaramos un array para almacenar las tareas
let tasks = [];

// Elementos del DOM
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Función para renderizar las tareas en el DOM
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => deleteTask(index));
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Función para agregar una tarea
function addTask(task) {
    if (task !== "") {
        tasks.push(task);
        saveToLocalStorage();
        renderTasks();
        taskInput.value = ""; // Limpiar input
    } else {
        alert("No puedes agregar una tarea vacía.");
    }
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    saveToLocalStorage();
    renderTasks();
}

// Al enviar el formulario, agregamos la tarea
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask(taskInput.value);
});
// Guardar las tareas en localStorage
function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Cargar las tareas desde localStorage
function loadFromLocalStorage() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

// Al cargar la página, cargar las tareas desde localStorage
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function addTask(task) {
    if (task !== "" && !tasks.includes(task)) {
        tasks.push(task);
        saveToLocalStorage();
        renderTasks();
        taskInput.value = "";
    } else {
        alert("Tarea inválida o duplicada.");
    }
}