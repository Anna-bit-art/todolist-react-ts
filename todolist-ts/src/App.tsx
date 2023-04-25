import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'completed' | 'active';
type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todoList1 = v1();
    let todoList2 = v1();

    let [todoLists, setTodoLists] = useState <Array<TodoListType>>([
        { id: todoList1, title: 'What to learn?', filter: 'active' },
        { id: todoList2, title: 'What to buy?', filter: 'completed' }
    ])
    let [tasks, setTasks] = useState({
        [todoList1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: true },
            { id: v1(), title: 'Redux', isDone: false },
            { id: v1(), title: 'GraphQL', isDone: false }
        ],
        [todoList2]: [
            { id: v1(), title: 'Iphone', isDone: false },
            { id: v1(), title: 'Amazon book', isDone: true },
        ]
    })

    function removeTask(id: string, todoListId: string) {
        tasks[todoListId] = tasks[todoListId].filter(el => el.id !== id);
        setTasks({...tasks});
    }
    function addTask(title: string, todoListId: string) {
        let task = { id: v1(), title: title, isDone: false };
        let filteredTasks = tasks[todoListId];
        tasks[todoListId] = [task, ...filteredTasks];
        setTasks({...tasks});
    }
    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        let task = tasks[todoListId].find(el => el.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks});
        }
    }
    function changeFilter (value: FilterValuesType, todoListId: string) {
      let todoList = todoLists.find(el => el.id === todoListId);
      if (todoList) {
          todoList.filter = value;
          setTodoLists([...todoLists]);
      }
    }
    function removeTodoList (todoListId: string) {
        setTodoLists(todoLists.filter(el => el.id !== todoListId));

        delete tasks[todoListId];
        setTasks({...tasks});
    }

    return (
        <div className="App">

            { todoLists.map(el => {

                let filteredTask = tasks[el.id];
                if (el.filter === 'completed') {
                    filteredTask = filteredTask.filter(el => el.isDone);
                }
                if (el.filter === 'active') {
                    filteredTask = filteredTask.filter(el => !el.isDone);
                }

                return <Todolist key={el.id} title={el.title}
                                 id={el.id}
                                 tasks={filteredTask}
                                 removeTask={removeTask}
                                 addTask={addTask}
                                 changeStatus={changeStatus}
                                 changeFilter={changeFilter}
                                 removeTodoList={removeTodoList}
                                 filter={el.filter}
                />
            })}
        </div>
    );
}

export default App;
