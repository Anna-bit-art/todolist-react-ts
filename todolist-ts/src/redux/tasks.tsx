import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";

const data = [
    { title: 'Learning', items:
                [{id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: true},
                {id: v1(), title: 'ReactJS', isDone: true},
                {id: v1(), title: 'React Native', isDone: false},
                {id: v1(), title: 'Redux', isDone: true},
                {id: v1(), title: 'GraphQL', isDone: false},
                {id: v1(), title: 'TypeScript', isDone: false}]
    },

    { title: 'Grocery list', items:
                [{id: v1(), title: 'Milk', isDone: false},
                {id: v1(), title: 'Fruits', isDone: true},
                {id: v1(), title: 'Vegetables', isDone: true},
                {id: v1(), title: 'Eggs', isDone: false},
                {id: v1(), title: 'Juice', isDone: false},
                {id: v1(), title: 'Fish', isDone: true},]
    },

    { title: 'Daily action plan', items:
                [{id: v1(), title: 'Pay bills', isDone: true},
                {id: v1(), title: 'Grocery shopping', isDone: false},
                {id: v1(), title: 'Exercise', isDone: false},
                {id: v1(), title: 'Work on a project', isDone: true},
                {id: v1(), title: 'Clean the house', isDone: true},
                {id: v1(), title: 'Call a friend or family member', isDone: true},
                {id: v1(), title: 'Plan upcoming events', isDone: false},
                {id: v1(), title: 'Read a book', isDone: false},
                {id: v1(), title: 'Buy a gift for a friend', isDone: true},
                {id: v1(), title: 'Write a thank-you note', isDone: false},
                {id: v1(), title: 'Learn a new language', isDone: true}]
    }
]


// ****************************************************************
export type Item = {
    id: string
    title: string,
    isDone: boolean
}
export type Task = {
    title: string,
    items: Array<Item>
}

interface ITasksState {
    current: Task,
    tasks: Array<Task>
}

const initialCurrent: Task = {
    title: '',
    items: []
}

const initialState: ITasksState | undefined = {
    current: data[0],
    tasks: data
}


const counterSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.current = state.tasks.find((el:{title:string}) => el.title === action.payload) || initialCurrent
        },
    },
});

export const {changeTitle} = counterSlice.actions;
export default counterSlice.reducer;




