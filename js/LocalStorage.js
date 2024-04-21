var LocalStorage = /** @class */ (function () {
    function LocalStorage(listTasks) {
        this.listTasks = listTasks;
        this.listTasks = [];
    }
    // on recuper la tache du formulaire et on l'ajoute dans le localStorage
    LocalStorage.createTask = function (task) {
        var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    // recupérer toutes les taches
    LocalStorage.getAllTasks = function () {
        var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        return tasks;
    };
    //supprimer une tache
    LocalStorage.deleteTask = function (id) {
        var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = tasks.filter(function (task) { return task.id !== id; });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    LocalStorage.deleteAllTask = function () {
        localStorage.removeItem("tasks");
    };
    LocalStorage.updateTask = function (task) {
    };
    return LocalStorage;
}());
export default LocalStorage;
