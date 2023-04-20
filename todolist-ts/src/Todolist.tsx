import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType> // tasks: TaskType[]
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('');

    const onChangeNewTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle('');
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }
    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeNewTaskTitleHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>

            <ul>
                {props.tasks.map(el => {
                    const onRemoveHandler = () => {props.removeTask(el.id)}
                        return <li key={el.id}>
                            <input type="checkbox" checked={el.isDone} readOnly={true}/>
                            <span>{el.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    }
                )}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}
