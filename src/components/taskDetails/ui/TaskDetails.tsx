import React from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '../../../store/TaskStore';

export const TaskDetails = observer(() => {
    return (
        <div>
            <h2>{TaskStore.showDetailsTask().title}</h2>
            <p>{TaskStore.showDetailsTask().text}</p>
        </div>
    );
});


