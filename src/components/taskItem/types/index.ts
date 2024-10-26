import { ITaskStore } from '../../../store/types';

export interface ITask {
    task: ITaskStore,
    subTasks: ITaskStore[],
}

export interface IObjectTask {
    title: string;
    text: string;
}