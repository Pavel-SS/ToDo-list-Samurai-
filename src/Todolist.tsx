import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import { ButtonComponent } from './components/ButtonComponent';
import { Input } from './components/InputComponent';


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

    // const tsarchangeFilterHandler = (value: FilterValuesType) => {
    //     props.changeFilter(value)
    // }


    // Заменяются функцие  tsarFoolHandler
    // const onClickAllHandler = ()=>props.changeFilter('all');
    // const onClickActiveHandler = ()=>props.changeFilter('active');
    // const onClickCompletedHandler = ()=>props.changeFilter('completed')


    //tsarFoolHandler заменяет три функции onClickAllHandler onClickActiveHandler onClickCompletedHandler
    const tsarFoolHandler = (value: FilterValuesType) => {props.changeFilter(value)}
    
    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }


return <div>
    <h3>{props.title}</h3>
    <div>
        {/* <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/> */}
        <br/>
        <Input name={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
        <button onClick={addTaskHandler}>+</button>
    </div>
    <ul>
        {
            props.tasks.map(t => <li>
                <input type="checkbox" checked={t.isDone}/>
            
                <span>{t.title}</span>
                {/* <button onClick={() => removeTaskHandler(t.id)}>x</button> */}
                <ButtonComponent name={'x'} callBack={() => removeTaskHandler(t.id)} />
                {/*<button onClick={() => {props.removeTask(t.id)}}>x</button>*/}
            </li>)
        }
    </ul>
    <div>
        <button onClick={()=>tsarFoolHandler('all')}>All</button>
        <button onClick={()=>tsarFoolHandler('active')}>Active</button>
        <button onClick={()=>tsarFoolHandler('completed')}>Completed</button>
        
        
        {/* независимая компонента*/}
        <ButtonComponent name ={'all'} callBack={()=>tsarFoolHandler('all')}/>
        
        {/*<button onClick={changeFilterAllHandler}>All</button>*/}
        {/*/!*<button onClick={() => {props.changeFilter("all")}}>All</button>*!/*/}
        {/*<button onClick={changeFilterActiveHandler}>Active</button>*/}
        {/*/!*<button onClick={() => {props.changeFilter("active")}}>Active</button>*!/*/}
        {/*<button onClick={changeFilterCompletedHandler}>Completed</button>*/}
        {/*/!*<button onClick={() => {props.changeFilter("completed")}}>Completed</button>*!/*/}
    </div>
</div>
}

