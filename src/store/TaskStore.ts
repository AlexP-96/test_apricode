import { makeAutoObservable } from 'mobx';
import { ITaskStore } from './types';
import { v4 as uuidv4 } from 'uuid';

class TaskStore {
    tasks: ITaskStore[] = [];
    selectedTask = null;
    title = 'загловок рыба1';
    text = 'текст рыба1';

    constructor() {
        makeAutoObservable(this);
    }

    defaultVisibleTasks() {
        const tasks = localStorage.getItem('tasks');
        if (tasks === null) {
            this.tasks = [
                {
                    id: uuidv4(),
                    title: this.title,
                    text: this.text,
                    selectedTask: this.selectedTask,
                    subTask: [],
                },
            ];
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        } else {
            this.tasks = JSON.parse(tasks);
        }
    }

    titleHandler(title: string) {
        this.title = title;
    }

    textHandler(text: string) {
        this.text = text;
    }

    addTask() {
        if (this.title.trim().length) {
            this.tasks.push({
                id: uuidv4(),
                title: this.title,
                text: this.text,
                selectedTask: false,
                subTask: [],
            });
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            this.title = '';
            this.text = '';
        }
    }
}

const taskStore = new TaskStore();
export default taskStore;