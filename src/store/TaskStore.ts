import { makeAutoObservable } from 'mobx';
import { ITaskStore } from './types';
import { v4 as uuidv4 } from 'uuid';

class TaskStore {
    tasks: ITaskStore[] = [];
    selectedTask = null;
    selectedId: string | null = null;
    title = 'загловок рыба1';
    text = 'текст рыба1';
    isOpen = false;
    store = {
        tasks: [],
        parentIds: {},
    };

    constructor() {
        makeAutoObservable(this);
    }

    openModal() {
        this.isOpen = true;
    }

    closeModal() {
        this.isOpen = false;
    }

    selectTask(id: string) {
        this.selectedId = id;
        this.showDetailsTask()
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
            });
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            this.title = '';
            this.text = '';
            this.isOpen = false;
        }
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    showDetailsTask(id = this.selectedId) {
        const result = {
            title: '',
            text: '',
        };

        this.tasks.filter((task) => {
            if (task.id === id) {
                result.title = task.title;
                result.text = task.text;
            }
        });
        return result;
    }
}

const taskStore = new TaskStore();
export default taskStore;