import React, {useEffect, useState} from "react";
import { taskAPI } from "../api/task-api";

export default {
   title: 'API-TASK'
}



export const GetTask = () => {   
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistID] = useState<string>('')
    // useEffect(()=>{
    //     const todolistId = 'bef144f2-e356-4a21-9556-9295e667d81d'
    //     taskAPI.getTask(todolistId).then((res) => {
    //         setState(res.data)
    //     })
    // },[])
    const getTask = () =>{
        taskAPI.getTask(todolistId).then((res) => {
            setState(res.data)
        })
    }
    return <div>
                {JSON.stringify(state)}
                <div>
                <input placeholder="insert id todolist" value={todolistId} onChange={(e)=>{setTodolistID(e.currentTarget.value)}}/>
                <button onClick={getTask}>get</button>
                </div>
            </div>
}



export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistID] = useState<string>('')
    const [title, setTaskTitle] = useState<string>('')
    // useEffect(()=>{
    //     const todolistId = 'fa6b9867-3665-4e47-9ba4-3f8df00c6dd9',
    //           title = 'New Task';
    //     taskAPI.createTask(todolistId,title).then((res)=>{
    //         setState(res.data)
    //     })
    // },[])
    const createTask = () => {
        taskAPI.createTask(todolistId,title).then((res)=>{
            setState(res.data)
        })
    }
    return <div>{JSON.stringify(state)}
                <div>
                    <input placeholder="insert id todolist" value={todolistId} onChange={(e)=>{setTodolistID(e.currentTarget.value)}}/>
                    <input placeholder="insert title task" value = {title} onChange={(e)=>{
                        setTaskTitle(e.currentTarget.value)
                    }}/>
                    <button onClick={createTask}>create</button>
                </div>
           </div>
}


export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        const todolistId = 'fa6b9867-3665-4e47-9ba4-3f8df00c6dd9',
              taskId = 'fa6b9867-3665-4e47-9ba4-3f8df00c6dd9';
        taskAPI.deleteTask(todolistId,taskId).then((res)=>{
            setState(res.data)
        })
    },[])

    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistID] = useState<string>('')
    const [taskId, setTaskID] = useState<string>('')
    const [title, setTaskTitle] = useState<string>('')
    // useEffect(()=>{

    // },[])
    const updateTask = () => {
        taskAPI.updateTask(todolistId,taskId,title).then((res)=>{
            setState(res.data)
        })
    }
    return <div>
                {JSON.stringify(state)}
                <input placeholder="insert id todolist" value={todolistId} onChange={(e)=>{setTodolistID(e.currentTarget.value)}}/>
                <input placeholder="insert id task" value={taskId} onChange={(e)=>{setTaskID(e.currentTarget.value)}}/>
                <input placeholder="insert new title" value={title} onChange={(e)=>{setTaskTitle(e.currentTarget.value)}}/>
                <button onClick={updateTask}>update</button>
           </div>
}


//ad3f7da4-eadd-4ef3-a4bf-b0d112400692