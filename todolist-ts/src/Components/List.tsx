import React from "react";
import {RootState, useStoreDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {changeCurrent} from "../redux/list";


export function List() {
    const dispatch = useStoreDispatch();
    const list = useSelector((state: RootState) => state.list.list);
    const activeList = useSelector((state: RootState) => state.list.current);

    return (
        <ul>
            {list.map(el =>
                <li key={el.id}
                    onClick={() => dispatch(changeCurrent(el.id))}
                    className={activeList && activeList.id === el.id ? 'active-li' : ''}>
                    {el.title}
                </li>
            )}

        </ul>
    )
}
