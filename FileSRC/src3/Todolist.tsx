import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask:(title:string)=>void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {

    const [newTitleTask, setNewTitleTask] = useState('')

    const addTaskHandler = () =>{
        if(newTitleTask.trim() !== ''){
            props.addTask(newTitleTask)
        }
        setNewTitleTask('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitleTask(event.currentTarget.value)
    }
    const onKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter'){
            if(newTitleTask.trim() !== ''){
            props.addTask(newTitleTask)
        }
        setNewTitleTask('')
        }
    }


    const changeClickHandler = (value:FilterValuesType) => {props.changeFilter(value)}
    // const allClickHandler = () =>{props.changeFilter("all")};
    // const activeClickHandler =() =>{props.changeFilter("active")};
    // const completedClickHandler =() =>{props.changeFilter("completed")};
    const removeTaskHandler = (id:string) => {
        props.removeTask(id)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitleTask} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>
            +
            </button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => removeTaskHandler(t.id)}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={()=>changeClickHandler('all')}>
                All
            </button>
            <button onClick={()=>changeClickHandler('active')}>
                Active
            </button>
            <button onClick={()=>changeClickHandler('completed')}>
                Completed
            </button>
        </div>
    </div>
}
