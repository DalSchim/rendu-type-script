/// CRUD
import Task from "./Task.js";
import LocalStorage from "./LocalStorage.js";
// ON PAGE LOAD RÉCUPÉRER TOUTES LES TACHES DANS LE LOCALSTORAGE
LocalStorage.getAllTasks();
// CAPTER L'ÉVÉNEMENT AJOUTER UNE TACHE AJOUTE PREVENT DEFAULT
var form = document.getElementById("taskForm");
// @ts-ignore
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var titre = document.getElementById("taskTitle").value;
    var description = document.getElementById("taskDescription").value;
    var date = document.getElementById("taskDueDate").value;
    var level = document.getElementById("taskPriority").value;
    // on recupère les valeurs du formulaire
    var task = new Task(titre, description, date, level);
    // on ajoute la tache dans le localStorage
    task.createTask();
    // on ajoute la tache dans le DOM
    task.displayTask();
    // on reset le formulaire
    form.reset();



});
// CAPTER L'ÉVENEMENT JE MODIFIE UNE TACHE
// CAPTER L'ÉVÉNEMENT JE SUPPRIME UNE TACHE
// J'APPLIQUE UN FILTRE
// JE FAIS UNE RECHERCHE
