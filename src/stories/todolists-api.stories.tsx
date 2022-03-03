import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { todolistAPI } from '../api/todolist-api'

export default {
   title: 'API'
}
const settings = {
   withCredentials: true,
   headers: {
      'API-KEY': '4d0524f8-ac75-4061-8829-77c9b9ae1d87'
  }
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
       // здесь мы будем делать запрос и ответ закидывать в стейт.
       // который в виде строки будем отображать в div-ке
       todolistAPI.getTodolist().then(res=> {
         setState(res.data)
      })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const title = 'Axios';
      todolistAPI.createTodolist(title)
      .then(res=>{setState(res.data)})
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '777348dd-9b6d-4b05-8025-45acfe6e3540';
      todolistAPI.deleteTodolist(todolistId)
      .then(res=>{setState(res.data)})
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = '777348dd-9b6d-4b05-8025-45acfe6e3540';
    const title = 'React!!'
      todolistAPI.updateTodolistTitle(todolistId,title)
      .then(res=>setState(res.data))
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

