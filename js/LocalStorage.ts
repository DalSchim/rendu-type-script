import Task from './Task';
class LocalStorage {
    constructor(private listTasks:Task[]) {
        this.listTasks = [];
    }

    // on recuper la tache du formulaire et on l'ajoute dans le localStorage

    public static createTask(task: { date: string; level: string; titre: string; description: string; id: number }):void {
        console.log("createTask");
        console.log(task);
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(task);
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }

    // recupérer toutes les taches

    public static getAllTasks():Task[] {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        return tasks;
    }


    public static deleteTask(task:Task):void {

    }

    public static deleteAllTask():void {

    }

    public static updateTask(task:Task):void {

    }
 
}

export default LocalStorage;