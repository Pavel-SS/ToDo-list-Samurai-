import axios, {AxiosResponse}  from "axios";
import { BaseResponseTodoType, CreatedBaseResType, GetTodoType } from "./todolist-api";

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
export type GetTaskResponseType = {
    totalCount: number,
    error:string | null,
    items: TaskType[]
}
export type PostTaskResponseType <T = {}> = {
    resultCode: number
    messages: Array<string>,
    data: {
        item: T
    }
}
export type CreatedBaseTaskResType = PostTaskResponseType<{item: TaskType}>
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true,
    headers: {
        'API-KEY': '9ae64b0c-5b04-4282-b441-a5689edb342c'
    }
})

export const taskAPI  = {
    getTask:(todolistId: string)=>{
        return instance.get<GetTaskResponseType>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask:(todolistId: string, title: string)=>{
        return instance.post<
        CreatedBaseTaskResType,
        AxiosResponse<CreatedBaseTaskResType>,
        {title:string}
        >(`/todo-lists/${todolistId}/tasks`, {title})        
    },
    deleteTask:(todolistId: string, taskId: string)=>{
        return instance.delete<BaseResponseTodoType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask:(todolistId: string, taskId: string, title: string)=>{
        return instance.put<BaseResponseTodoType>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}