import React, {
    useEffect,
    useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import './TaskItem.css';
import {
    IObjectTask,
    ITask,
} from '../types';
import TaskStore from '../../../store/TaskStore';

export const TaskItem = observer(({ task }: React.PropsWithChildren<ITask<IObjectTask>>) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [checked, setChecked] = useState(false);
    const [editing, setEditing] = useState(false);

    const handlerOpenEdit = () => {
        setEditing(true);
    };
    const handlerChecked = (e: React.MouseEvent<HTMLElement>) => {
        setIsExpanded(!isExpanded);
    };
    const handlerCloseEdit = () => {
        setEditing(false);
    };
    const handlerDeleteTask = () => {
        // TODO
    };

    const addTask = () => {
        TaskStore.addTask();
        setEditing(false);
    };

    return (
        <div className='task'>
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
                <div>

                </div>
            </div>
            {editing && (
                <div className='item__edit'>
                    <input
                        type='text'
                        placeholder='Заголовок задачи'
                        onChange={(e) => {TaskStore.titleHandler(e.target.value);}}
                    />
                    <textarea
                        placeholder='Текст задачи'
                        rows={3}
                        onChange={(e) => {TaskStore.textHandler(e.target.value);}}
                    />
                    <button
                        onClick={addTask}
                    >Сохранить
                    </button>
                    <button
                        onClick={handlerCloseEdit}
                    >Отмена
                    </button>
                </div>
            )}
        </div>
    );
});
