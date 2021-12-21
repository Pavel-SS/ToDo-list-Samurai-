import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import AddItemForm from './AddItemForm';
import EdinableSpan from './EdinableSpan';
import {Button, ButtonGroup} from '@mui/material';
type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, changeTitle: string, todoListID: string) => void
    changeTodoTitle: (changeTitle: string, todoListID: string) => void
}

function TodoList(props: PropsType) {

    const addTask = (title:string) => {
        props.addTask(title, props.id)
    }
    
    const setAllFilterValue = () => props.changeFilter("all", props.id)
    const setActiveFilterValue = () => props.changeFilter("active", props.id)
    const setCompletedFilterValue = () => props.changeFilter("completed", props.id)
    const getBtnClass = (filter: FilterValuesType) => props.filter=== filter ? "active" : "" ;
    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoTitle(newTitle, props.id)
    }
    
    const tasksJSX = props.tasks.map(task => {
        const getClasses = () => task.isDone ? "is-done": "" ;
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)
        const removeTask = () => props.removeTask(task.id, props.id)
        const changeTaskTitle = (newTitle: string) => {
            props.changeTaskTitle(task.id, newTitle, props.id)
        }
        return (
            <li key={task.id} className={getClasses()}>
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={changeStatus}
                />
                <EdinableSpan title={task.title} titleChange={changeTaskTitle}/>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })

    return(
        <div>
            <h3>
                <EdinableSpan title={props.title} titleChange={changeTodoListTitle}/>
                
                <button onClick={()=>props.removeTodoList(props.id)}>x</button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <ButtonGroup size={'small'} 
                variant={'contained'} 
                color={'primary'}
                disableElevation>
                    
                    <Button className={getBtnClass("all")} onClick={setAllFilterValue}>
                        All
                    </Button>
                    <Button className={getBtnClass("active")}
                    onClick={setActiveFilterValue}>
                        Active
                    </Button>
                    <Button className={getBtnClass("completed")}
                    onClick={setCompletedFilterValue}>
                        Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default TodoList;