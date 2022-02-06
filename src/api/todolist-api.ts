import axios, {AxiosResponse}  from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers: {
        'API-KEY': '9ae64b0c-5b04-4282-b441-a5689edb342c'
    }
})
export type GetTodoType = {
    addedDate: string
    id: string
    order: number
    title: string
}

export type BaseResponseTodoType< T = {} > = {
    resultCode: number
    messages: Array<string> 
    data: {
        item: T
    }
    fieldsErrors: Array<string>
}
export type CreatedBaseResType = BaseResponseTodoType<{item: GetTodoType}>;
export const todolistAPI = {
    getTodos: () => {
       return instance.get<GetTodoType[]>('todo-lists')
    },
    createTodos: (title: string) => {
        return instance.post
        <
        CreatedBaseResType, 
        AxiosResponse<CreatedBaseResType>,
        {title:string}
        >
        ('todo-lists', {title})
    },
    deleteTodos: (todolistId: string) => {
        return instance.delete<BaseResponseTodoType>(`todo-lists/${todolistId}`)
    },
    updateTodos: (todolistId: string, title: string) => {
        return instance.put
        <
        BaseResponseTodoType, 
        AxiosResponse<BaseResponseTodoType>, 
        {title:string}
        >
        (`todo-lists/${todolistId}`, {title} )
    }
}