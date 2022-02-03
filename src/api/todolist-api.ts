import axios from 'axios'

const settings = {
   withCredentials: true,
   headers: {
 // Не забываем заменить API-KEY на собственный
       'API-KEY': '94e07525-e3d8-4684-9588-6e9144ad8f90'
   }
}

export const todolistAPI = {
    getTodos(){
        const promise = axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists`, settings)
        return promise
    },

    createTodos(title:string){
        const promise = axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists`, title ,settings)
        return promise
    },

    deleteTodos(todolistId:string){
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    }
//    updateTodolist(todolistId: string, title: string) {
//        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: title}, settings)
//        return promise
//    }
}

