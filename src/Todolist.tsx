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
    const [error, setError] = useState<string | null>(null)


    const addTask = () => {
        if(title.trim() !== ''){
         props.addTask(title.trim());
         setTitle("");   
        }else{
         setError('error')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    
    const onCheckboxHandler = (id:string, event: ChangeEvent<HTMLInputElement>) =>{
        props.changeStatus(id, event.currentTarget.checked)
    }
   
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error ? style.error : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={style.errorMessage}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={(event: ChangeEvent<HTMLInputElement>)=> onCheckboxHandler(t.id, event)}/>
                        <span className={t.isDone ? style.opacityTask : ''}>{t.title}</span>
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
