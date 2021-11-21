import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterWords } from "../App";
export type TasksType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TasksType>
  remove: (idT:string) => void
  add: (title:string) => void
  filters: (value: FilterWords) => void
}

export function TodoList(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle]= useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNewTaskTitle(e.currentTarget.value)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.ctrlKey && e.charCode === 13) {
        props.add(newTaskTitle); 
        setNewTaskTitle('')}
    };
    const addTaskClick = () => {
      props.add(newTaskTitle); 
      setNewTaskTitle('')
    };
    const onAllClickHandler = ()=>props.filters('All');
    const onActiveClickHandler = ()=>props.filters('Active');
    const onCompletedClickHandler = ()=>props.filters('Completed');
    
    return(
            <div>
              <h3>{props.title}</h3>
              <div>
                <input value ={newTaskTitle} 
                onChange={onChangeHandler} 
                onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskClick}>+</button>
              </div>
              <ul>
                {props.tasks.map(item=>{
                  const onRemoveHandler = () => {
                    props.remove(item.id)
                  }
                  return(
                    <li key ={item.id}>
                      <button onClick={onRemoveHandler}>X</button>
                      <input type="checkbox" 
                      checked={item.isDone} />
                      <span>{item.title}</span>
                    </li>
                  )
                })}
              </ul>
              <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
              </div>
            </div>
        
          )
        }