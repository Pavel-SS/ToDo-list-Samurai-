import { v1 } from 'uuid';
import { TaskStateType } from '../App';

type RemoveActionType = {
    type: 'REMOVE-TASK'
    taskID: string
    todolistID: string

}
type AddActionType = {
    type: 'ADD-TASK'
    title: string 
    todolistID: string
}

type ActionType = RemoveActionType | AddActionType;

export const tasksReducer = (state: TaskStateType, action: ActionType) => {
    switch (action.type){
        case 'REMOVE-TASK':
            return {...state, [action.todolistID]: state[action.todolistID].filter(task=>task.id !== action.taskID)}
        
        case 'ADD-TASK': 
            return {...state, [action.todolistID]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistID]]}
        
        default:
            throw new Error ("I don't understand this type")
    }
}

export const removeTaskAC = (taskID: string, todolistID: string) : RemoveActionType => {
    return {
        type: 'REMOVE-TASK',
        taskID, 
        todolistID
    }
}
export const addTaskAC = (title: string, todolistID: string) : AddActionType => {
    return {
        type: 'ADD-TASK',
        title,
        todolistID
    }
}
