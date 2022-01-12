
import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';
import { combineReducers, createStore } from "redux";
// import { TasksStateType, TodolistType } from '../AppWithRedux';


const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
});

// type AppRootState = {
//     todolists: Array<TodolistType>,
//     tasks: TasksStateType
// }

//  Автоматическое создание type
export type AppRootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;