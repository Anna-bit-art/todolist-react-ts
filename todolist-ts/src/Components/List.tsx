import React from "react";
import {RootState, useStoreDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {changeCurrent} from "../redux/todo";


export function List() {
    const dispatch = useStoreDispatch();
    const list = useSelector((state: RootState) => state.todo.list);
    const activeList = useSelector((state: RootState) => state.todo.currentTodo);

    return (
        <>
        <ul>
            {list.map(el =>
                <li key={el.id}
                    onClick={() => dispatch(changeCurrent(el.id))}
                    className={activeList && activeList.id === el.id ? 'active-li' : ''}>
                    {el.title}
                </li>
            )}

        </ul>
        </>
    )
}


//
// function removeTodoList(todoListId: string) {
//     setTodoLists(todoLists.filter(el => el.id !== todoListId));
//
//     delete tasks[todoListId];
//     setTasks({...tasks});
// }
