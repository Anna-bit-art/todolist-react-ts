import React, {FC, useState} from 'react';
import './App.css';
import {Tasks} from "./Components/Tasks";
import {v1} from "uuid";
import {RootState, useStoreDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import {List} from "./Components/List";

export type FilterValuesType = 'all' | 'completed' | 'active';
export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}



function App() {

    // let initialTasks = todoLists.filter(el => activeList && el.id === activeList.id)[0].id;
    // let [activeTasks, setActiveTasks] = useState(tasks[initialTasks]);

    // function changeTasks(id: string) {
    //     setActiveTasks(tasks[id]);
    //     let title = todoLists.filter(el => el.id === id);
    //     if (title && title.length === 1) {
    //         setActiveList(title[0]);
    //     }
    // }
    //
    // function removeTask(id: string, todoListId: string) {
    //     tasks[todoListId] = tasks[todoListId].filter(el => el.id !== id);
    //     setTasks({...tasks});
    //     changeTasks(todoListId);
    // }
    //
    // function addTask(title: string, todoListId: string) {
    //     let task = {id: v1(), title: title, isDone: false, date: new Date()};
    //     let filteredTasks = tasks[todoListId];
    //     tasks[todoListId] = [task, ...filteredTasks];
    //     setTasks({...tasks});
    //     changeTasks(todoListId);
    // }
    //
    // function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
    //     let task = tasks[todoListId].find(el => el.id === taskId);
    //     if (task) {
    //         task.isDone = isDone;
    //         setTasks({...tasks});
    //     }
    //     changeTasks(todoListId);
    // }
    //
    // function changeFilter(value: FilterValuesType, todoListId: string) {
    //     let todoList = todoLists.find(el => el.id === todoListId);
    //     if (todoList) {
    //         todoList.filter = value;
    //         setTodoLists([...todoLists]);
    //     }
    //     changeTasks(todoListId);
    // }
    //
    // function removeTodoList(todoListId: string) {
    //     setTodoLists(todoLists.filter(el => el.id !== todoListId));
    //
    //     delete tasks[todoListId];
    //     setTasks({...tasks});
    // }

    return (
        <div className="App">

            <div className='list'>
                <List />
            </div>

            <div>
                <Tasks />
            </div>
        </div>
    );
}

export default App;
