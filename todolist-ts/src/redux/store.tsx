import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import todo from "./todo";


export const store = configureStore({
    reducer: {
        todo,
    },
    devTools: true
});

export const useStoreDispatch = () => useDispatch <typeof store.dispatch>() //for server work
export type RootState = ReturnType<typeof store.getState>
