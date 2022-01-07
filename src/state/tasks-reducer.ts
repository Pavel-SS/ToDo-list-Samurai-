import { v1 } from 'uuid';
import { TaskStateType } from '../App';
import {AddTodoListActionType} from './todolist-reducer';

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
type ChangeStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskID: string
    isDone: boolean
    todolistID: string
}

type ChangeTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskID: string
    title: string
    todolistID: string
}

type ActionType = RemoveActionType | AddActionType | ChangeStatusActionType | ChangeTitleActionType | AddTodoListActionType;

export const tasksReducer = (state: TaskStateType, action: ActionType) => {
    switch (action.type){
        case 'REMOVE-TASK':
            return {...state, [action.todolistID]: state[action.todolistID].filter(task=>task.id !== action.taskID)}
        
        case 'ADD-TASK': 
            return {...state, [action.todolistID]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistID]]}
        case 'CHANGE-TASK-STATUS': 
            return {...state, [action.todolistID]: state[action.todolistID].map(task => task.id === action.taskID ? {...task, isDone: action.isDone} : task)} 
        case 'CHANGE-TASK-TITLE':
            return {...state, [action.todolistID]: state[action.todolistID].map(task => task.id === action.taskID ? {...task, title: action.title}: task)}
        case 'ADD-TODOLIST':
            const stateCopy = {...state};
                stateCopy[action.ID] = [];
            return stateCopy;
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

export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string): ChangeStatusActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        taskID,
        isDone,
        todolistID
    }
}

export const changeTaskTitleAC = (taskID: string, title: string, todolistID: string): ChangeTitleActionType => {
    return {
        type: 'CHANGE-TASK-TITLE',
        taskID,
        title,
        todolistID
    }
}