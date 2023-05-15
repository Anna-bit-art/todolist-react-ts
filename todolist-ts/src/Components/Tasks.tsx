import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "../App";
import bin from "../img/icons8-delete-24.png";
import {RootState, useStoreDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {changeTitle} from "../redux/tasks";


// type PropsType = {
//     title: string
//     id: string
//     tasks: Array<TaskType> // tasks: TaskType[]
//     filter: FilterValuesType
//     removeTask: (id: string, todoListId: string) => void
//     addTask: (title: string, todoListId: string) => void
//     changeFilter: (value: FilterValuesType, todoListId: string) => void
//     changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
//     removeTodoList: (todoListId: string) => void
// }


export function Tasks() {

    // let [title, setTitle] = useState('');
    // let [error, setError] = useState<string | null>(null);
    //
    // const onChangeNewTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value);
    // }
    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.code === 'Enter') {
    //         addTask();
    //     }
    // }
    // const addTask = () => {
    //     if(title.trim() !== ''){
    //         props.addTask(title, props.id);
    //         setTitle('')
    //     } else {
    //         setError('Field is required');
    //     }
    // }
    // const onAllClickHandler = () => props.changeFilter('all', props.id);
    // const onActiveClickHandler = () => props.changeFilter('active', props.id);
    // const onCompletedClickHandler = () => props.changeFilter('completed', props.id);
    // const removeTodoList = () => props.removeTodoList(props.id);

    const dispatch = useStoreDispatch();
    const tasks = useSelector((state:RootState) => state.tasks.current.items);
    const title = useSelector((state:RootState) => state.tasks.current.title);
    const activeList = useSelector((state: RootState) => state.list.current.title);


    // let filteredTask = tasks;
    // if (filter === 'completed') {
    //     filteredTask = filteredTask.filter(el => el.isDone);
    // }
    // if (filter === 'active') {
    //     filteredTask = filteredTask.filter(el => !el.isDone);
    // }

    if (activeList !== title) {
        dispatch(changeTitle(activeList));
    }

    return (
        <div className='todolist'>
            <div className='title'>
                <h3>{title}</h3>
                <button>r</button>
                {/*<button onClick={removeTodoList}>x</button>*/}
            </div>

            <div>
                <input type={'text'}
                       // onChange={onChangeNewTaskTitleHandler}
                       // onKeyPress={onKeyPressHandler}
                       placeholder=' + Add New Task'
                       // className={error ? 'error' : ''}
                />
                {/*<button onClick={addTask}>+</button>*/}
                {/*{error && <div className='error-message'>{error}</div>}*/}
            </div>

            {/*<div className='filters'>*/}
            {/*    <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>*/}
            {/*    <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>*/}
            {/*    <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>*/}
            {/*</div>*/}


            <ul>
                {tasks.map(el => {

                    // const onRemoveHandler = () => {props.removeTask(el.id, props.id)}
                    // const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        // props.changeStatus(el.id, e.currentTarget.checked, props.id)}
                        return <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <input type="checkbox" checked={el.isDone} />
                            <span>{el.title}</span>
                            <button><img src={bin} alt='bin'/> </button>
                        </li>
                    }
                )}
            </ul>
        </div>
    )
}
