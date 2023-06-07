import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";
import {dataLists, dataTasks} from "./data";


export type ITodo = {
    id: string
    title: string
}
export type Item = {
    id: string
    title: string,
    isDone: boolean
}
export type Task = {
    id: string,
    title: string,
    items: Array<Item>
}
interface ITodoListsState {
    currentTodo: ITodo,
    list: Array<ITodo>,
    currentTasks: Task,
    tasks: Array<Task>
}
const initialCurrent: ITodoListsState = {
    currentTodo: {id: '', title: ''},
    list: [],
    currentTasks: {id: '', title: '', items: []},
    tasks: []
}
const initialState: ITodoListsState | undefined = {
    currentTodo: dataLists[0],
    list: dataLists,
    currentTasks: dataTasks[0],
    tasks: dataTasks
}


const counterSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        changeCurrent: (state, action) => {
            state.currentTodo = state.list.find( (el: { id: string }) => el.id === action.payload) ?? initialCurrent.currentTodo;
            state.currentTasks = state.tasks.find( (el:{id:string} ) => el.id === action.payload) ?? initialCurrent.currentTasks;
        },
        addNewList: (state, action) => {
            let newTodo: ITodo = {id: v1(), title: action.payload };
            let newTodoTasks: Task = {id: newTodo.id, title: newTodo.title, items: []}
            state.list = [newTodo, ...state.list] || initialCurrent;
            state.tasks = [newTodoTasks, ...state.tasks];
        },
        addTask: (state, action) => {
            let newTask = {id: v1(), title: action.payload, isDone: false};
            state.currentTasks = {
                ...state.currentTasks,
                items: [newTask, ...state.currentTasks.items]
            };
        },
        removeTask: (state, action) => {
            state.currentTasks.items = state.currentTasks.items.filter(el => el.id !== action.payload);
        },
        changeStatus: (state, action) => {
            state.currentTasks.items = state.currentTasks.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isDone: !item.isDone,
                    };
                }
                return item;
            });
        }
    },
});

export const { changeCurrent, addNewList, addTask, removeTask, changeStatus } = counterSlice.actions;
export default counterSlice.reducer;




