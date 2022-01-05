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
type ChangeActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskID: string
    isDone: boolean
    todolistID: string
}

type ActionType = RemoveActionType | AddActionType | ChangeActionType;

export const tasksReducer = (state: TaskStateType, action: ActionType) => {
    switch (action.type){
        case 'REMOVE-TASK':
            return {...state, [action.todolistID]: state[action.todolistID].filter(task=>task.id !== action.taskID)}
        
        case 'ADD-TASK': 
            return {...state, [action.todolistID]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistID]]}
        case 'CHANGE-TASK-STATUS': 
            return {...state, [action.todolistID]: state[action.todolistID].map(task => task.id === action.taskID ? {...task, isDone: action.isDone} : task)} 
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

export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string): ChangeActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        taskID,
        isDone,
        todolistID
    }
}