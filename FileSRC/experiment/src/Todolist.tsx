import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {






    const [title, setTitle] = useState('')
    console.log(title)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // if ((event.key === 'Control')|| event.key==='Enter'){
         if (event.ctrlKey) {
            addTaskHandler()
        }
    }

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    // const changeFilterAllHandler=()=>{
    //     props.changeFilter('all')
    // }
    //
    // const changeFilterActiveHandler=()=>{
    //     props.changeFilter('active')
    // }
    //
    // const changeFilterCompletedHandler=()=>{
    //     props.changeFilter('completed')
    // }

    const tsarchangeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }


return <div>
    <h3>{props.title}</h3>
    <div>
        <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
        <button onClick={addTaskHandler}>+</button>
    </div>
    <ul>
        {
            props.tasks.map(t => <li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => removeTaskHandler(t.id)}>x</button>
                {/*<button onClick={() => {props.removeTask(t.id)}}>x</button>*/}
            </li>)
        }
    </ul>
    <div>
        <button onClick={() => tsarchangeFilterHandler('all')}>All</button>
        <button onClick={() => tsarchangeFilterHandler('active')}>Active</button>
        <button onClick={() => tsarchangeFilterHandler("completed")}>Completed</button>


        {/*<button onClick={changeFilterAllHandler}>All</button>*/}
        {/*/!*<button onClick={() => {props.changeFilter("all")}}>All</button>*!/*/}
        {/*<button onClick={changeFilterActiveHandler}>Active</button>*/}
        {/*/!*<button onClick={() => {props.changeFilter("active")}}>Active</button>*!/*/}
        {/*<button onClick={changeFilterCompletedHandler}>Completed</button>*/}
        {/*/!*<button onClick={() => {props.changeFilter("completed")}}>Completed</button>*!/*/}
    </div>
</div>
}

