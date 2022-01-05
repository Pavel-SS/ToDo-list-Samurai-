import { v1 } from 'uuid';
import { TodoListType, FilterValuesType } from '../App';

type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST';
    id: string
}
type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
}
type ChangeTodoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
type FilterTodoListActionType = {
    type: 'FILTER-TODOLIS'
    id: string
    filter: FilterValuesType
}
type ActionType = RemoveTodoListActionType | AddTodoListActionType | ChangeTodoListTitleActionType | FilterTodoListActionType;

export const todoListsReducer = (state: Array<TodoListType>, action: ActionType) => {
    switch (action.type){
        case 'REMOVE-TODOLIST':{
            return state.filter(tl => tl.id !== action.id);
        }
        case 'ADD-TODOLIST': { 
            return [...state, {
                id: v1(),
                title: action.title,
                filter: "all"
            }]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const newTitle = state.find(tl => tl.id === action.id)
            if ( newTitle) {
                newTitle.title = action.title
            }
            return [...state]
        }
        case 'FILTER-TODOLIS': {
            const newFilterList = state.find(tl=> tl.id === action.id);
            if (newFilterList){
                newFilterList.filter = action.filter
            }
             return [...state]
        }
        default:
            throw new Error ("I don't understand this type")
    }
}

export const removeTodoListAC = (todolistID: string) : RemoveTodoListActionType => {
    return {
        type: 'REMOVE-TODOLIST',
        id: todolistID
    }
}
export const addTodoListAC = (title: string) : AddTodoListActionType => {
    return {
        type: 'ADD-TODOLIST',
        title: title
    }
}

export const changeTitleTodoListAC = (todolistID: string, title: string): ChangeTodoListTitleActionType => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistID,
        title: title
    }
}

export const filterTodoListAC = (todolistID: string, filter: FilterValuesType): FilterTodoListActionType => {
    return {
        type: 'FILTER-TODOLIS',
        id: todolistID,
        filter: filter
    }
}