import axios from 'axios'

 const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '4d0524f8-ac75-4061-8829-77c9b9ae1d87'
    }
})



export const todolistAPI = {
   getTodolist() {
    return instance.get<TodolistType[]>('todo-lists')
   },
   createTodolist(title:string){
    return instance.post<ResponseType[]>('todo-lists', {title})
   },
   deleteTodolist(todolistId:string){
    return instance.delete<ResponseType[]>( `todo-lists/${todolistId}`)
   },
   updateTodolistTitle(todolistId:string, title:string){
    return instance.put<ResponseType[]>(`todo-lists/${todolistId}`, {title})
   }
}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}