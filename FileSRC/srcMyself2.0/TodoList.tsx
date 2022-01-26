import React, { ChangeEvent, useState } from "react";
import { v1 } from "uuid";
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

        //Хук состаяния кнопок переклюающимися между выполненными делами 
        const [filterComletedTasks, setFilterCompletedTasks] = useState(
            [
                {id: v1(), name: 'All'},
                {id: v1(), name: 'Active'},
                {id: v1(), name: 'Completed'},
            ])
        
        //функция фильтрации task взависмости от выполнености
        const filterTaskIsDone = (name: string) => {
            setNewTitleTask(name)
        }
        let newListTaskAfterFilter = props.tasks;

        filterComletedTasks.map(item=> {
              if(item.name ==="Active"){
              return props.tasks.filter(i => !i.isDone)
           }
           if(item.name ==="Completed"){
              return props.tasks.filter(i => i.isDone)
           }
           if(item.name ==="All"){
              return props.tasks
           }
        })


        //функция добавления  task    
        const addNewTitleTask = () => {
            props.add(newTitleTask)
            setNewTitleTask('')
        }
        //функция добавления task по нажатию на экранную кнопку  
        const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
            setNewTitleTask(event.currentTarget.value)
        }
        //функция удаления task из списка
        const removeTaskHandler = (id:string) => {
            props.remove(id)
        }
        return (
            <div>
                <div>
                    <input value={newTitleTask} onChange={onChangeHandler} />
                    <button onClick={addNewTitleTask}>+</button>
                </div>
                <ul>
                    {
                    props.tasks.map(item =>
                        <TodoTask 
                            key={item.id} 
                            title={item.title} 
                            remove={removeTaskHandler} 
                            tasks={item.id}
                            isDone={item.isDone} />
                    )
                    }

                </ul>
                {
                    filterComletedTasks.map(item =>
                    <ButtonComponent 
                        id={item.id} 
                        name={item.name}
                        filter={filterTaskIsDone}/>
                    )
                }

            </div>
        )
}