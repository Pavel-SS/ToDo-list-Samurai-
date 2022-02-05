import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers: {
        'API-KEY': '9ae64b0c-5b04-4282-b441-a5689edb342c'
    }
})
export const todolistAPI = {
    getTodos(){
       return instance.get('todo-lists')
    },
    createTodos(title: string){
        return instance.post('todo-lists', {title})
    },
    deleteTodos(todolistId: string){
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodos(todolistId: string, title: string){
        return instance.put(`todo-lists/${todolistId}`, {title} )
    }
}