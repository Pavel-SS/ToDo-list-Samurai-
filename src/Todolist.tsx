import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import  style from './Todolist.module.css'
type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus:(id:string, value:boolean)=>void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    const [error, setError] = useState(false)


    const addTask = () => {
        if(title.trim()!== ''){
         props.addTask(title.trim());
         setTitle("");   
        }else{
         setError(true)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    // const onCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    //     props.changeStatus(event.currentTarget.checked)
    // }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error ? style.error : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={style.errorMessage}>Error</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const onCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) =>{
                        props.changeStatus(t.id, event.currentTarget.checked)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={onCheckboxHandler}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler } className={props.filter === 'all' ? style.styleButton : '' }>All</button>
            <button onClick={ onActiveClickHandler } className={props.filter === 'active' ? style.styleButton : '' }>Active</button>
            <button onClick={ onCompletedClickHandler } className={props.filter === 'completed' ? style.styleButton : '' }>Completed</button>
        </div>
    </div>
}
