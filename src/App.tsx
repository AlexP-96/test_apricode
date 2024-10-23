import React from 'react';
import { observer } from 'mobx-react-lite';
import { TaskList } from './components/taskList';
import { TaskDetails } from './components/taskDetails';
import './App.css';

const App = observer(() => {
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
