import Task from "./Task.js";
import LocalStorage from "./LocalStorage.js";

// Fonction pour afficher toutes les tâches
const displayTasks = (tasks: Task[]) => {
    let ul = document.getElementById("tasksList");
    ul.innerHTML = ""; // Effacer la liste actuelle avant d'afficher les tâches
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.classList.add("task");
        li.dataset.taskId = String(task.id); // Ajout de l'ID de la tâche comme attribut dataset
        li.innerHTML = `
            <h3>${task.titre} <span>-${task.level}</span></h3>
            <p>Date d'échéance: ${task.date}</p>
            <p>${task.description}</p>
            <button class="delete-btn">Supprimer</button>
            <button class="edit-btn">Modifier</button>
        `;
        ul?.appendChild(li);

        // ajoute la classe selon le niveau de priorité
        if (task.level === "high") {
            li.classList.add("high");
        } else if (task.level === "medium") {
            li.classList.add("medium");
        } else {
            li.classList.add("low");
        }
    });
};

// Fonction pour ajouter une nouvelle tâche
document.getElementById("taskForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    let titre = document.getElementById("taskTitle")?.value;
    let description = document.getElementById("taskDescription")?.value;
    let date = document.getElementById("taskDueDate")?.value;
    let level = document.getElementById("taskPriority")?.value;
    let task = new Task(titre, description, date, level);
    task.createTask();
    displayTasks(LocalStorage.getAllTasks());
});

// Gestionnaire d'événement pour le bouton "Supprimer"
document.getElementById("tasksList")?.addEventListener("click", (e) => {
    if (e.target?.classList.contains("delete-btn")) {
        let taskId = e.target.parentElement.dataset.taskId;
        LocalStorage.deleteTask(parseInt(taskId));
        displayTasks(LocalStorage.getAllTasks());
    }
});

// Gestionnaire d'événement pour le formulaire de filtrage
document.getElementById("applyFilter")?.addEventListener("click", () => {
    let filterPriority = document.getElementById("filterPriority")?.value;
    let filterDate = document.getElementById("filterDate")?.value;
    let filteredTasks = LocalStorage.getAllTasks().filter(task => {
        if (filterPriority !== "all" && task.level !== filterPriority) {
            return false;
        }
        if (filterDate && task.date !== filterDate) {
            return false;
        }
        return true;
    });
    displayTasks(filteredTasks);
});

// Fonction pour initialiser l'affichage des tâches au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    displayTasks(LocalStorage.getAllTasks());
});
