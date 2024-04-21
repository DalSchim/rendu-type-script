
interface ITask {
    titre: string;
    description: string;
    date: string;
    level: string;

    createTask(): void;
    deleteTask(): void;
    modifyTask(): void;
}

export default ITask;
