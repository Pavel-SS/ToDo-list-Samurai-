import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers: {
        'API-KEY': '9ae64b0c-5b04-4282-b441-a5689edb342c'
    }
})
type GetTodoType = {
    addedDate: string
    id: string
    order: number
    title: string
}
type CreateTodoType = {
    resultCode: number
    messages: Array<string>
    data: {
      item: GetTodoType
    }
    fieldsErrors: Array<string>
}

type DelUpdateTodoType = {
    resultCode: number
    messages: Array<string>
    data: {}
    fieldsErrors: Array<string>
}
export const todolistAPI = {
    getTodos: () => {
       return instance.get<GetTodoType[]>('todo-lists')
    },
    createTodos: (title: string) => {
        return instance.post<CreateTodoType>('todo-lists', {title})
    },
    deleteTodos: (todolistId: string) => {
        return instance.delete<DelUpdateTodoType>(`todo-lists/${todolistId}`)
    },
    updateTodos: (todolistId: string, title: string) => {
        return instance.put<DelUpdateTodoType>(`todo-lists/${todolistId}`, {title} )
    }
}