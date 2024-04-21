
import ITask from './ITask.js';
import LocalStorage from './LocalStorage.js';
import localStorage from "./LocalStorage.js";

class Task implements ITask{
    id:number;
    constructor(private _titre:string, private _description:string, private _date:string, private _level:string){
        this.id = Date.now();
    }

    // recupérer les informations du localStorage et ajoue une tache
    createTask():void {
        console.log("createTask");
        console.log(this.titre)
        LocalStorage.createTask({
            id: this.id,
            titre: this._titre,
            description: this._description,
            date: this._date,
            level: this._level
        });

    }

    deleteTask(){
        LocalStorage.deleteTask(this.id);
    }

    modifyTask(){

    }

    get titre():string {
        return this._titre;
    }



    get description():string {
        return this._description;
    }



    get date():string {
        return this._date;
    }



    get level():string {
        return this._level;
    }







}

export default Task;