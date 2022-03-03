import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
       'API-KEY': '4d0524f8-ac75-4061-8829-77c9b9ae1d87'
   }
 }
 const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '4d0524f8-ac75-4061-8829-77c9b9ae1d87'
    }
})
export const todolistAPI = {
   getTodolist() {
    return instance.get('todo-lists')
   },
   createTodolist(title:string){
    return instance.post('todo-lists', {title})
   },
   deleteTodolist(todolistId:string){
    return instance.delete( `todo-lists/${todolistId}`)
   },
   updateTodolistTitle(todolistId:string, title:string){
    return instance.put(`todo-lists/${todolistId}`, {title})
   }
}
