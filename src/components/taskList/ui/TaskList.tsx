import React from 'react';
import { observer } from 'mobx-react-lite';
import { TaskItem } from '../../taskItem';

export const TaskList = observer(() => {
    return (
        <div>
            <TaskItem />
        </div>
    );
});
