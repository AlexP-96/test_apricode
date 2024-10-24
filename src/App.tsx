import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TaskList } from './components/taskList';
import { TaskDetails } from './components/taskDetails';
import './App.css';
import TaskStore from './store/TaskStore';

const App = observer(() => {
    console.log('Эта панель недоступна для глаз, простых смертных!');
    useEffect(() => {
        TaskStore.defaultVisibleTasks();
    }, []);

    return (
        <div className='app-container'>
            <div className='sidebar'>
                <TaskList />
            </div>
            <div className='details'>
                <TaskDetails />
            </div>
        </div>
    );
});

export default App;
