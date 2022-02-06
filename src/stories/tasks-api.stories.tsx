import React, {useEffect, useState} from "react";
import { taskAPI } from "../api/task-api";

export default {
   title: 'API-TASK'
}



export const GetTask = () => {   
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        const todolistId = 'fa6b9867-3665-4e47-9ba4-3f8df00c6dd9'
        taskAPI.getTask(todolistId).then((res) => {
            setState(res.data)
        })
    },[])

    return <div>{JSON.stringify(state)}</div>
}



export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        const todolistId = 'fa6b9867-3665-4e47-9ba4-3f8df00c6dd9',
              title = 'New Task';
        taskAPI.createTask(todolistId,title).then((res)=>{
            setState(res.data)
        })
    },[])
    return <div>{JSON.stringify(state)}</div>
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


// export const UpdateTask = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(()=>{

//     },[])

//     return <div>{JSON.stringify(state)}</div>
// }