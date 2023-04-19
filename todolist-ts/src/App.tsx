import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";



export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {

    let [tasks, setTasks] = useState <Array<TaskType>>([
        { id: 1, title: 'CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
        { id: 4, title: 'Redux', isDone: false }
    ]);
    let [filter, setFilter] = useState <FilterValuesType>('all');

    function removeTask(id: number) {
        setTasks( tasks.filter(el => el.id !== id) );
    }

    function changeFilter (value: FilterValuesType) {
        setFilter(value);
    }

    let filteredTask = tasks;
    if (filter === 'completed') {
        filteredTask = tasks.filter(el => el.isDone);
    }
    if (filter === 'active') {
        filteredTask = tasks.filter(el => !el.isDone);
    }

    return (
        <div className="App">
            <Todolist title='What to learn?' tasks={filteredTask}
                      removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
