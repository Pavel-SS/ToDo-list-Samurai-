import { v1 } from 'uuid';
import { TodoListType, FilterValuesType } from '../App';

type FirstActionType = {
    type: '';

}
type SecondActionType = {
    type: ''
}

type ActionType = FirstActionType | SecondActionType ;

export const tasksReducer = (state: Array<TodoListType>, action: ActionType) => {
    switch (action.type){
        case '':
            return state
        
        case '': 
            return state
        
        default:
            throw new Error ("I don't understand this type")
    }
}

export const FirstAC = (todolistID: string) : FirstActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id: todolistID
    }
}
export const SecondAC = (title: string) : SecondActionType => {
    return {
        type: 'ADD-TODOLIST',
        title: title
    }
}
