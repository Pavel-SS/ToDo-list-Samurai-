import { TodoListType, FilterValuesType } from "../App";
import {v1} from "uuid";



export type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
} 
export type AddTodoListActionType = {
    type: 'ADD-TODOLIST', 
    title: string
} 
export type ChangeTodoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE', 
    id: string, 
    title: string
} 
export type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER', 
    id: string, 
    filter: FilterValuesType
} 

type ActionType = RemoveTodoListActionType | AddTodoListActionType  | ChangeTodoListTitleActionType | ChangeTodoListFilterActionType

export const todoListsReducer = (state: Array<TodoListType>, action: ActionType) => {
    switch (action.type){
        case 'REMOVE-TODOLIST':{ 
            return state.filter(t => t.id !== action.id)
        
        }
        case 'ADD-TODOLIST':{ 
            return [...state, {
                id: v1(),
                title: action.title,
                filter: "all"
            }]
        
        }
        case 'CHANGE-TODOLIST-TITLE': {
           return state.map(tl => tl.id === action.id ? action : tl);
        }

        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(tl => tl.id === action.id ? action : tl);
        }

        default:
            throw new Error ('Id')
    }
}

export const removeTodoListAC = (todolistID: string) :RemoveTodoListActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id: todolistID
    }
}

export const addTodoListAC = (title: string): AddTodoListActionType => {
    return {
        type: 'ADD-TODOLIST', 
        title: title
    }
}
export const changeTitleTodoListAC = (id:string, title: string): ChangeTodoListTitleActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE', 
        id: id, 
        title: title
    }
}
export const changeFilterTodoListAC = (id:string, filter: FilterValuesType): ChangeTodoListFilterActionType => {
    return {
        type: 'CHANGE-TODOLIST-FILTER', 
        id: id, 
        filter: filter
    }
}