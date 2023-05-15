import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import list from "./list";
import tasks from "./tasks";


export const store = configureStore({
    reducer: {
        list,
        tasks,
    },
    devTools: true
});

export const useStoreDispatch = () => useDispatch <typeof store.dispatch>() //for server work
export type RootState = ReturnType<typeof store.getState>
