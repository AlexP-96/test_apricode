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

export const TaskItem: React.FC<React.PropsWithChildren<ITask>> = observer(({ task }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [checked, setChecked] = useState(false);

    const handlerOpenEdit = () => {
        console.log(TaskStore);
    };

    const handlerChecked = (e: React.MouseEvent<HTMLElement>) => {
        setIsExpanded(!isExpanded);
    };

    const handlerSelectTask = () => {
        TaskStore.selectTask(task.id);
    };

    const handlerDeleteTask = () => {
        TaskStore.deleteTask(task.id);
    };

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
                    onClick={handlerOpenEdit}
                >+
                </button>
                <button
                >✏️
                </button>
                <button
                    onClick={handlerDeleteTask}
                >🗑️
                </button>
                <input
                    type='checkbox'
                />
                {
                    <div>

                    </div>
                }
            </div>
            {TaskStore.isOpen && <Modal />}
        </div>
    );
});
