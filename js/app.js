var _a, _b, _c;
import Task from "./Task.js";
import LocalStorage from "./LocalStorage.js";
// Fonction pour afficher toutes les tâches
var displayTasks = function (tasks) {
    var ul = document.getElementById("tasksList");
    ul.innerHTML = ""; // Effacer la liste actuelle avant d'afficher les tâches
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.classList.add("task");
        li.dataset.taskId = String(task.id); // Ajout de l'ID de la tâche comme attribut dataset
        li.innerHTML = "\n            <h3>".concat(task.titre, " <span>-").concat(task.level, "</span></h3>\n            <p>Date d'\u00E9ch\u00E9ance: ").concat(task.date, "</p>\n            <p>").concat(task.description, "</p>\n            <button class=\"delete-btn\">Supprimer</button>\n            <button class=\"edit-btn\">Modifier</button>\n        ");
        ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
        // ajoute la classe selon le niveau de priorité
        if (task.level === "high") {
            li.classList.add("high");
        }
        else if (task.level === "medium") {
            li.classList.add("medium");
        }
        else {
            li.classList.add("low");
        }
    });
};
// Fonction pour ajouter une nouvelle tâche
(_a = document.getElementById("taskForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    var _a, _b, _c, _d;
    e.preventDefault();
    var titre = (_a = document.getElementById("taskTitle")) === null || _a === void 0 ? void 0 : _a.value;
    var description = (_b = document.getElementById("taskDescription")) === null || _b === void 0 ? void 0 : _b.value;
    var date = (_c = document.getElementById("taskDueDate")) === null || _c === void 0 ? void 0 : _c.value;
    var level = (_d = document.getElementById("taskPriority")) === null || _d === void 0 ? void 0 : _d.value;
    var task = new Task(titre, description, date, level);
    task.createTask();
    displayTasks(LocalStorage.getAllTasks());
});
// Gestionnaire d'événement pour le bouton "Supprimer"
(_b = document.getElementById("tasksList")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
    var _a;
    if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.classList.contains("delete-btn")) {
        var taskId = e.target.parentElement.dataset.taskId;
        LocalStorage.deleteTask(parseInt(taskId));
        displayTasks(LocalStorage.getAllTasks());
    }
});
// Gestionnaire d'événement pour le formulaire de filtrage
(_c = document.getElementById("applyFilter")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var _a, _b;
    var filterPriority = (_a = document.getElementById("filterPriority")) === null || _a === void 0 ? void 0 : _a.value;
    var filterDate = (_b = document.getElementById("filterDate")) === null || _b === void 0 ? void 0 : _b.value;
    var filteredTasks = LocalStorage.getAllTasks().filter(function (task) {
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
window.addEventListener("DOMContentLoaded", function () {
    displayTasks(LocalStorage.getAllTasks());
});
