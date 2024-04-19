var LocalStorage = /** @class */ (function () {
    function LocalStorage(listTasks) {
        this.listTasks = listTasks;
        this.listTasks = [];
    }
    // on recuper la tache du formulaire et on l'ajoute dans le localStorage
    LocalStorage.createTask = function (task) {
        console.log("createTask");
        console.log(task);
        var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(task);
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    // recupérer toutes les taches
    LocalStorage.getAllTasks = function () {
        var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        return tasks;
    };
    LocalStorage.deleteTask = function (task) {
    };
    LocalStorage.deleteAllTask = function () {
    };
    LocalStorage.updateTask = function (task) {
    };
    return LocalStorage;
}());
export default LocalStorage;
