import React from "react";


type PropsType = {
    title: string
    remove: (idTask:string) => void
    tasks: string
}

export const TodoTask = (props: PropsType) => {
    return (
        <li>
            <input type="checkbox" />
            <span>{props.title}</span>
            <button onClick={()=>props.remove(props.tasks)}>X</button>
        </li>
    )
}