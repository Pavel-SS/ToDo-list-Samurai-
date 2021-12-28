import { TodoListType } from "../App";

type ActionType = {
    type: string
    [key:string]: any
}


export const todoListsReducer = (state: Array<TodoListType>, action: ActionType) => {
    switch (action.type){
        case 'REMOVE-TODOLIST':{ 
            return state.filter(t => t.id !== action.id)
        }
        default:
            throw new Error ('Id')
    }
}