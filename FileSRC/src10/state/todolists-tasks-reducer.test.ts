import {TaskStateType, TodoListType } from '../App';
import { tasksReducer } from './tasks-reducer';
import { todoListsReducer,  addTodoListAC } from './todolist-reducer';

test ('ids should be equals', ()=> {
    const startTasksState: TaskStateType = {};
    const startTodolistState: Array<TodoListType> = [];

    const action = addTodoListAC('new todolist');
    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todoListsReducer(startTodolistState, action)

    const keys = Object.keys(endTasksState);
    const idFormTasks = keys[0];
    const idFormTodolists = endTodolistsState[0].id;

    expect(idFormTasks).toBe(action.ID);
    expect(idFormTodolists).toBe(action.ID);
})