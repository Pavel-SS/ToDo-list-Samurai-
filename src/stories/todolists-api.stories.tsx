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
   const todolistId = '1ae96fb1-a5ba-41d6-9540-535ee8584e84'
   useEffect(() => {
      todolistAPI.deleteTodos(todolistId).then((res)=>{
         setState(res.data)
      })
   }, [])
   return <div> {JSON.stringify(state)}</div>
}


export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   const todolistId = '83957d07-f885-412e-b7e1-811923784c27'
   const title = "Ho-ho"
   useEffect(() => {
    todolistAPI.updateTodos(todolistId, title).then((res)=>{
        setState(res.data)
    }) 
   }, [])
   return <div> {JSON.stringify(state)}</div>
}
