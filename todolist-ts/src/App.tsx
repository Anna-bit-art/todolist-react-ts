import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";



export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {

    let [tasks, setTasks] = useState <Array<TaskType>>([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: true },
        { id: v1(), title: 'Redux', isDone: false },
        { id: v1(), title: 'GraphQL', isDone: false }
    ]);
    let [filter, setFilter] = useState <FilterValuesType>('all');

    function removeTask(id: string) {
        setTasks( tasks.filter(el => el.id !== id) );
    }

    function addTask(title: string) {
        let newTask = { id: v1(), title: title, isDone: false };
        setTasks([newTask, ...tasks]);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(el => el.id === taskId);
        if (task) { task.isDone = isDone }
        setTasks([...tasks]);
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
                      removeTask={removeTask}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      changeFilter={changeFilter}
                      filter={filter}
            />
        </div>
    );
}

export default App;
