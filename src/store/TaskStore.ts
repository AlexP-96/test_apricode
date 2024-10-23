import { makeAutoObservable } from "mobx";

class Task {
    id = Date.now();
    title = "Новая задача";
    text = "Текст задачи";
    subTasks = [];
    isExpanded = true;
    isSelected = false;

    constructor(title = "Новая задача", text = "Текст задачи") {
        makeAutoObservable(this);
        this.title = title;
        this.text = text;
    }

}

class TaskStore {
    tasks = [];
    selectedTask = null;

    constructor() {
        makeAutoObservable(this);
    }


}

const taskStore = new TaskStore();
export default taskStore;