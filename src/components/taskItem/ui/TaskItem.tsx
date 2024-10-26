import React, {
    useEffect,
    useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import './TaskItem.css';
import { Modal } from '../../modal';
import {
    ITask,
} from '../types';
import TaskStore from '../../../store/TaskStore';

export const TaskItem: React.FC<React.PropsWithChildren<ITask>> = observer(({
    task,
    subTasks,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [checked, setChecked] = useState(false);

    const handlerChecked = (e: React.MouseEvent<HTMLElement>) => {
        setIsExpanded(!isExpanded);
    };

    const handlerSelectTask = (e: React.MouseEvent<HTMLElement>) => {
        TaskStore.selectTask(task.id);
    };

    const handlerDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        TaskStore.deleteTask(task.id);
    };

    const handlerEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        TaskStore.editTask(task.id);
    };

    const handlerAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        TaskStore.addSubTask(task.id);
    };
    console.log(task);
    return (
        <div
            className='task'
            onClick={handlerSelectTask}
        >
            <div
                className='item'
            >
                <button
                    onClick={handlerChecked}
                >
                    {isExpanded
                        ? '▼'
                        : '➤️'}
                </button>
                <span>
                    {task.title}
                </span>
                <button
                    className='item__add-btn'
                    onClick={handlerAddTask}
                >+
                </button>
                <button
                    onClick={handlerEditTask}
                >✏️
                </button>
                <button
                    onClick={handlerDeleteTask}
                >🗑️
                </button>
                <input
                    type='checkbox'
                />

            </div>
            {TaskStore.isOpen && <Modal
                task={task}
                subTasks={subTasks}
            />}
        </div>
    );
});
