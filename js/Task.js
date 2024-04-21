import LocalStorage from './LocalStorage.js';
var Task = /** @class */ (function () {
    function Task(_titre, _description, _date, _level) {
        this._titre = _titre;
        this._description = _description;
        this._date = _date;
        this._level = _level;
        this.id = Date.now();
    }
    // recupérer les informations du localStorage et ajoue une tache
    Task.prototype.createTask = function () {
        console.log("createTask");
        console.log(this.titre);
        LocalStorage.createTask({
            id: this.id,
            titre: this._titre,
            description: this._description,
            date: this._date,
            level: this._level
        });
    };
    Task.prototype.deleteTask = function () {
        LocalStorage.deleteTask(this.id);
    };
    Task.prototype.modifyTask = function () {
    };
    Object.defineProperty(Task.prototype, "titre", {
        get: function () {
            return this._titre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: false,
        configurable: true
    });
    return Task;
}());
export default Task;
