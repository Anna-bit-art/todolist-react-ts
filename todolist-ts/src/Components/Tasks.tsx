import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import bin from "../img/icons8-delete-24.png";
import edit from "../img/icons8-edit-30.png";
import remove from "../img/icons8-delete-32 (2).png";

import {RootState, useStoreDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {addTask, removeTask, changeStatus} from "../redux/todo";


export type FilterValuesType = 'all' | 'completed' | 'active';

export function Tasks() {

    const dispatch = useStoreDispatch();
    const tasks = useSelector((state: RootState) => state.todo.currentTasks.items);
    const titleTask = useSelector((state: RootState) => state.todo.currentTasks.title);

    let [title, setTitle] = useState('');
    let [error, setError] = useState<string | null>(null);
    let [filter, setFilter] = useState<FilterValuesType>('all');

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }
    const onChangeTitleTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.code === 'Enter') {
            e.preventDefault();
            handlerAddTask();
        }
    }
    const handlerAddTask = () => {
        if (title.trim() !== '') {
            dispatch(addTask(title));
            setTitle('');

        } else {
            setError('Enter a name task');
        }
    }
    const handlerRemoveTask = (id: string) => {
        dispatch(removeTask(id));
    }
    const onChangeStatusHandler = (id: string) => {
        dispatch(changeStatus(id));
    }

    let filteredTask = tasks;
    if (filter === 'completed') {
        filteredTask = filteredTask.filter(el => el.isDone);
    }
    if (filter === 'active') {
        filteredTask = filteredTask.filter(el => !el.isDone);
    }

    return (
        <div className='todolist'>
            <div className='title'>
                <h3>{titleTask}</h3>
                <div className='options'>
                    <button><img alt='edit' src={edit}/></button>
                    <button><img alt='remove' src={remove}/></button>
                </div>
            </div>

            <div>
                <input type='text'
                       onChange={onChangeTitleTask}
                       onKeyPress={onKeyPressHandler}
                       placeholder=' + Add New Task'
                       className={error ? 'error' : ''}
                />
                <button className='add-task' onClick={handlerAddTask}>+</button>
                {error && <div className='error-message'>{error}</div>}
            </div>

            <div className='filters'>
                <button className={filter === 'all' ? 'active-filter' : ''} onClick={() => changeFilter('all')}>All
                </button>
                <button className={filter === 'active' ? 'active-filter' : ''}
                        onClick={() => changeFilter('active')}>Active
                </button>
                <button className={filter === 'completed' ? 'active-filter' : ''}
                        onClick={() => changeFilter('completed')}>Completed
                </button>
            </div>


            <ul>
                {filteredTask && filteredTask.map(el => {
                        return <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <input type="checkbox" checked={el.isDone} onChange={() => onChangeStatusHandler(el.id)}/>
                            <span>{el.title}</span>
                            <button onClick={() => handlerRemoveTask(el.id)}><img src={bin} alt='bin'/></button>
                        </li>
                    }
                )}
            </ul>
        </div>
    )
}

//TODO setTitle clean problem
