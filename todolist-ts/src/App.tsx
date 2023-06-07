import React from 'react';
import './App.css';
import {Tasks} from "./Components/Tasks";
import {List} from "./Components/List";
import {useStoreDispatch} from "./redux/store";
import {addNewList} from "./redux/todo";


function App() {
    const dispatch = useStoreDispatch();

    return (
        <div className="App">

            <div className='list'>
                <List/>
                <div className='add-todo'>
                    <button onClick={() => dispatch(addNewList('new list'))}>+</button>
                    <span>New todolist</span>
                </div>
            </div>

            <div>
                <Tasks/>
            </div>
        </div>
    );
}

export default App;
