import React from 'react';
import { observer } from 'mobx-react-lite';
import { TaskItem } from '../../taskItem';
import TaskStore from '../../../store/TaskStore';
import './TaskList.css';

export const TaskList = observer(() => {
    return (
        <div>
            {
                TaskStore.tasks.map((task) => {
                    return (
                        <TaskItem
                            task={task}
                        />
                    );
                })
            }
            <button className='btn__add-todo'>
                Добавить задачу высшего уровня
            </button>
        </div>
    );
});
