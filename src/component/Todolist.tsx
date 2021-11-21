import React from "react";
import { FilterWords } from "../App";
export type TasksType = {
	id: number
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TasksType>
  remove: (idT:number) => void
  filters: (value: FilterWords) => void
}

export function TodoList(props: PropsType) {
          return(
            <div>
              <h3>{props.title}</h3>
              <div>
                <input/>
                <button>+</button>
              </div>
              <ul>
                {props.tasks.map(item=>{
                  return(
                    <li key ={item.id}>
                      <button onClick={()=>props.remove(item.id)}>X</button>
                      <input type="checkbox" 
                      checked={item.isDone} />
                      <span>{item.title}</span>
                      
                    </li>
                  )
                })}
              </ul>
              <div>
                <button onClick={()=>props.filters('All')}>All</button>
                <button onClick={()=>props.filters('Active')}>Active</button>
                <button onClick={()=>props.filters('Completed')}>Completed</button>
              </div>
            </div>
        
          )
        }