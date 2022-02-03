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
   const todolistId = '74c2fc86-7ad7-4a24-a40a-725ea62c69a5'
   useEffect(() => {
    todolistAPI.deleteTodos(todolistId).then((res)=>{
        setState(res.data)
    })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   const todolistId = '34a'
   const title = "New Todolist 111111"
   useEffect(() => {
    todolistAPI.updateTodos(todolistId, title).then((res)=>{
        setState(res.data)
    }) 
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
