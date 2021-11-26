import React, { ChangeEvent, useState } from "react";
import { ButtonComponent } from "./component/ButtonComp";
import { TodoTask } from "./component/TodoTask";

type PropsTask = {
id: string
title: string
isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<PropsTask>
    add: (title:string)=>void
    remove: (idTask:string) => void
}

    export const TodoList = (props: PropsType) => {
        const [newTitleTask, setNewTitleTask] = useState('');

        const addNewTitleTask = () => {
            props.add(newTitleTask)
            setNewTitleTask('')
        }
        const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
            setNewTitleTask(event.currentTarget.value)
        }
        const removeTaskHandler = (id:string) => {
            props.remove(id)
        }
    return (
    <div>
        <div>
            <input  value ={newTitleTask} onChange={onChangeHandler}/>
            <button onClick={addNewTitleTask}>+</button>
        </div>
        <ul>
           {
               props.tasks.map(item => 
                <TodoTask key={item.id} 
                          title={item.title}
                          remove={removeTaskHandler}
                          tasks = {item.id}/>
                )
           }
            
        </ul>

        <ButtonComponent />
        <ButtonComponent />
        <ButtonComponent />

    </div>
    )
    }