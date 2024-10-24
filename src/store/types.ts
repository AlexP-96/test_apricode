export interface ITaskStore {
    id: string;
    title: string;
    text: string;
    selectedTask: boolean | null;
    subTask: []
}