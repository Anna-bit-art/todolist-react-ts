import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    id: string
    tasks: Array<TaskType> // tasks: TaskType[]
    filter: FilterValuesType
    removeTask: (id: string, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeFilter: (value: FilterValuesType, todoListId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
}


export function Todolist(props: PropsType) {

    let [title, setTitle] = useState('');
    let [error, setError] = useState<string | null>(null);

    const onChangeNewTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.code === 'Enter') {
            addTask();
        }
    }
    const addTask = () => {
        if(title.trim() !== ''){
            props.addTask(title, props.id);
            setTitle('')
        } else {
            setError('Field is required');
        }
    }
    const onAllClickHandler = () => props.changeFilter('all', props.id);
    const onActiveClickHandler = () => props.changeFilter('active', props.id);
    const onCompletedClickHandler = () => props.changeFilter('completed', props.id);
    const removeTodoList = () => props.removeTodoList(props.id);

    let filteredTask = props.tasks;
    if (props.filter === 'completed') {
        filteredTask = filteredTask.filter(el => el.isDone);
    }
    if (props.filter === 'active') {
        filteredTask = filteredTask.filter(el => !el.isDone);
    }

    return (
        <div className='todolist'>
            <h3>{props.title}</h3>
            {/*<button onClick={removeTodoList}>x</button>*/}
            <div>
                <input value={title} type={'text'}
                       onChange={onChangeNewTaskTitleHandler}
                       onKeyPress={onKeyPressHandler}
                       placeholder=' + Add New Task'
                       className={error ? 'error' : ''}
                />
                {/*<button onClick={addTask}>+</button>*/}
                {error && <div className='error-message'>{error}</div>}
            </div>

            <div className='filters'>
                <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>
            </div>


            <ul>
                {filteredTask.map(el => {
                    const onRemoveHandler = () => {props.removeTask(el.id, props.id)}
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatus(el.id, e.currentTarget.checked, props.id)}
                        return <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <input type="checkbox" checked={el.isDone} onChange={onChangeStatusHandler} />
                            <span>{el.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    }
                )}
            </ul>
        </div>
    )
}
