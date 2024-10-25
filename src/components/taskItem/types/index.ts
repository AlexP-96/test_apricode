import { ITaskStore } from '../../../store/types';

export interface ITask {
    task: ITaskStore
}

export interface IObjectTask {
    title: string;
    text: string;
}