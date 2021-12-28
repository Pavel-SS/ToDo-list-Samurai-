import { TodoListType } from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key:string]: any
}


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
        
        default:
            throw new Error ('Id')
    }
}