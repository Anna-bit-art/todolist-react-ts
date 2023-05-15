import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";

const data = [
    {id: v1(), title: 'Learning'},
    {id: v1(), title: 'Grocery list'},
    {id: v1(), title: 'Daily action plan'}
]

// ****************************************************************
export type ITodolist = {
    id: string
    title: string
}

interface ITodoListsState {
    current: ITodolist;
    list: Array<ITodolist>
}

const initialCurrent: ITodolist = {
    id: '',
    title: ''
}

const initialState: ITodoListsState | undefined = {
    current: data[0],
    list: data
}


const counterSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        changeCurrent: (state, action) => {
            state.current = state.list.find( (el: { id: string }) => el.id === action.payload) || initialCurrent;
        },
    },
});

export const { changeCurrent } = counterSlice.actions;
export default counterSlice.reducer;










// ****************************************************************

// for server work
// export const getTodoLists = createAsyncThunk(
//     'getTodoLists', // action name
//     async () => {
//         const response = await getTodoListsApi()
//
//         return await response.json()
//     }
// )


// extraReducers: (builder: any) => {
//     builder.addCase ( getTodoLists.fulfilled, (state: any, action: any) => {
//         state.list = action.payload
//         state.current = action.payload[0]
//     })
// },
