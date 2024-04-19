/// CRUD

import Task from "./Task.js";
import LocalStorage from "./LocalStorage.js";
    // ON PAGE LOAD RÉCUPÉRER TOUTES LES TACHES DANS LE LOCALSTORAGE
            LocalStorage.getAllTasks();
    // CAPTER L'ÉVÉNEMENT AJOUTER UNE TACHE AJOUTE PREVENT DEFAULT
    let form = document.getElementById("taskForm");
    // @ts-ignore
    form.addEventListener("submit", (e:Event) => {
        e.preventDefault();
        let titre = (<HTMLInputElement>document.getElementById("taskTitle")).value;
        let description = (<HTMLInputElement>document.getElementById("taskDescription")).value;
        let date = (<HTMLInputElement>document.getElementById("taskDueDate")).value;
        let level = (<HTMLInputElement>document.getElementById("taskPriority")).value;
       // on recupère les valeurs du formulaire
        let task = new Task(titre, description, date, level);
        // on ajoute la tache dans le localStorage
        task.createTask();



    });



    // CAPTER L'ÉVENEMENT JE MODIFIE UNE TACHE






    // CAPTER L'ÉVÉNEMENT JE SUPPRIME UNE TACHE


// J'APPLIQUE UN FILTRE


// JE FAIS UNE RECHERCHE
