import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TaskItem } from '../../taskItem';
import TaskStore from '../../../store/TaskStore';
import './TaskList.css';

export const TaskList: React.FC = observer(() => {
    useEffect(() => {
        TaskStore.defaultVisibleTasks();
    }, []);
    return (
        <div>
            {
                TaskStore.tasks.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            task={task}
                        />
                    );
                })
            }
            <button
                className='btn__add-todo'
                onClick={() => TaskStore.openModal()}
            >
                Добавить задачу легендарного уровня
            </button>
        </div>
    );
});
