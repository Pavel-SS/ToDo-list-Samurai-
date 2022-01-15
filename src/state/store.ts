
import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';
import { combineReducers, createStore } from "redux";
// import { TasksStateType, TodolistType } from '../AppWithRedux';

// объединяя  reducer-ы с помощью  combineReducers,
// мы задаем структуру нашего единственного объекта-состояния
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

// непосредственно создаем  store
export const store = createStore(rootReducer);

// а это, чтобы можно было в консоли браузера обращаться к  store в любой момент
//@ts-ignore
window.store = store;