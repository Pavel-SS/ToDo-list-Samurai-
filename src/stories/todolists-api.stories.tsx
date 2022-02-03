import React, {useEffect, useState} from 'react'
import { todolistAPI } from '../api/todolist-api'

export default {
   title: 'API'
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
       // здесь мы будем делать запрос и ответ закидывать в стейт.
       // который в виде строки будем отображать в div-ке
       todolistAPI.getTodos().then((res)=>{
            setState(res.data)
        })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   const title = "New Todolist"
   useEffect(() => {
        todolistAPI.createTodos(title).then((res)=>{
            setState(res.data)
        })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   const todolistId = '144a24bd-fe49-459d-9e05-cd1c6ef8c34a'
   useEffect(() => {
    todolistAPI.deleteTodos(todolistId).then((res)=>{
        setState(res.data)
    })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
// export const UpdateTodolistTitle = () => {
//    const [state, setState] = useState<any>(null)
//    useEffect(() => {
//    }, [])

//    return <div> {JSON.stringify(state)}</div>
// }
