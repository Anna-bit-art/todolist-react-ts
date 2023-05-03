import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active';
export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}


function App() {
    // ************************************data************************************************** //

    let todoList1 = v1();
    let todoList2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoList1, title: 'Learning', filter: 'active'},
        {id: todoList2, title: 'Grocery list', filter: 'completed'}
    ])
    let [tasks, setTasks] = useState({
        [todoList1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: true},
            {id: v1(), title: 'React Native', isDone: false},
            {id: v1(), title: 'Redux', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
            {id: v1(), title: 'TypeScript', isDone: false}
        ],
        [todoList2]: [
            {id: v1(), title: 'Milk', isDone: false},
            {id: v1(), title: 'Fruits', isDone: true},
            {id: v1(), title: 'Vegetables', isDone: true},
            {id: v1(), title: 'Eggs', isDone: false},
            {id: v1(), title: 'Juice', isDone: false},
            {id: v1(), title: 'Fish', isDone: true},
        ]
    })
// ****************************************************************************************** //

    let [activeList, setActiveList] = useState(todoLists[0]);
    let [activeTasks, setActiveTasks] = useState(tasks[todoList1]);

    function changeTasks(id: string) {
        setActiveTasks(tasks[id]);
        let title = todoLists.filter(el => el.id === id);
        if (title && title.length === 1) {
            setActiveList(title[0]);
        }
    }
    function removeTask(id: string, todoListId: string) {
        tasks[todoListId] = tasks[todoListId].filter(el => el.id !== id);
        setTasks({...tasks});
        changeTasks(todoListId);
    }
    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let filteredTasks = tasks[todoListId];
        tasks[todoListId] = [task, ...filteredTasks];
        setTasks({...tasks});
        changeTasks(todoListId);
    }
    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        let task = tasks[todoListId].find(el => el.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks});
        }
        changeTasks(todoListId);
    }
    function changeFilter(value: FilterValuesType, todoListId: string) {
        let todoList = todoLists.find(el => el.id === todoListId);
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists]);
        }
        changeTasks(todoListId);
    }
    function removeTodoList(todoListId: string) {
        setTodoLists(todoLists.filter(el => el.id !== todoListId));

        delete tasks[todoListId];
        setTasks({...tasks});
    }

    return (
        <div className="App">

            <div className='list'>
                <ul>
                    {todoLists.map(el =>
                        <li key={el.id} onClick={() => changeTasks(el.id)}
                            className={activeList.id === el.id ? 'active-li' : ''}>
                            {el.title}</li>
                    )}

                </ul>
            </div>

            <div>
                <Todolist title={activeList.title}
                          id={activeList.id}
                          tasks={activeTasks}
                          filter={activeList.filter}
                          removeTask={removeTask}
                          addTask={addTask}
                          changeFilter={changeFilter}
                          changeStatus={changeStatus}
                          removeTodoList={removeTodoList}/>
            </div>

        </div>
    );
}

export default App;
