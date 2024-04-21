import Task from './Task';
import task from "./Task";
class LocalStorage {
    constructor(private listTasks:Task[]) {
        this.listTasks = [];

    }
    // on recuper la tache du formulaire et on l'ajoute dans le localStorage
    public static createTask(task: { date: string; level: string; titre: string; description: string; id: number }):void {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }
    // recupérer toutes les taches

    public static getAllTasks():Task[] {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        return tasks;
    }

    //supprimer une tache
    public static deleteTask(id:number):void {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = tasks.filter((task:Task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    public static deleteAllTask():void {
        localStorage.removeItem("tasks");

    }
    public static updateTask(task:Task):void {
    }


}

export default LocalStorage;