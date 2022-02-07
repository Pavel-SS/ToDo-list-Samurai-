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
   const [title, setTodoTitle] = useState<string>('')
   // const title = "New Todolist"
   // useEffect(() => {
   //    todolistAPI.createTodos(title).then((res)=>{
   //       setState(res.data)
   //    })
   // }, [])
   const createTodo = () => {
      todolistAPI.createTodos(title).then((res)=>{
         setState(res.data)
      })
   }
   return <div> 
            {JSON.stringify(state)}
            <div>
                <input 
                  placeholder={title} 
                  value={title} 
                  onChange={(e)=> {setTodoTitle(e.currentTarget.value)}}
               />
               <button onClick={createTodo}>create</button>
            </div>
         </div>
}


export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   const [todolistId, setTodolistID] = useState<string>('')

   // const todolistId = '83957d07-f885-412e-b7e1-811923784c27'
   // useEffect(() => {
   //    todolistAPI.deleteTodos(todolistId).then((res)=>{
   //       setState(res.data)
   //    })
   // }, [])
   const delTodo = () => {
      todolistAPI.deleteTodos(todolistId).then((res)=>{
         setState(res.data)
      })
   }
   return <div> 
            {JSON.stringify(state)}
            <div>
               <input 
                  placeholder={todolistId} 
                  value={todolistId} 
                  onChange={(e)=> {setTodolistID(e.currentTarget.value)}}
               />
               <button onClick={delTodo}>del</button>
            </div>
         </div>
}


export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   const [todolistId, setTodolistID] = useState<string>('')
   const [title, setTodoTitle] = useState<string>('')

   // useEffect(() => {
   //  todolistAPI.updateTodos(todolistId, title).then((res)=>{
   //      setState(res.data)
   //  }) 
   // }, [])
   const updateTodo = () => {
      todolistAPI.updateTodos(todolistId, title).then((res)=>{
         setState(res.data)
      })
   }
   return <div>    
            {JSON.stringify(state)}
            <div>
                <input placeholder='insert id' value = {(todolistId).toString()} onChange = {(e) => {setTodolistID(e.currentTarget.value)}}/>
               <br/>
               <input placeholder='insert new title' value = {title} onChange = {(e) => {setTodoTitle(e.currentTarget.value)}}/>
        
               <button onClick={updateTodo}>change</button>
            </div>
         </div>
}
