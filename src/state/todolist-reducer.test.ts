import { removeTodoListAC, addTodoListAC, changeTitleTodoListAC } from './../../FileSRC/src-Ls8/state/todolist-reduce';
import { todoListsReducer,  filterTodoListAC } from './todolist-reducer';
import { v1 } from 'uuid';
import { TodoListType, FilterValuesType } from '../App';

test ('correct todolist should be removed', () => {
    const todoListID_1 = v1();
    const todoListID_2 = v1();

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"},
    ]
    const endState = todoListsReducer(startState, removeTodoListAC(todoListID_1))
    
    expect (endState.length).toBe(1);
    expect (endState[0].id).toBe(todoListID_2);
})

test ('correct todolist should be add', () => {
    const todoListID_1 = v1();
    const todoListID_2 = v1();
    const newTodolistTitle = 'New TodoList' 
    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"},
    ]
    const endState = todoListsReducer(startState, addTodoListAC(newTodolistTitle))
    
    expect (endState.length).toBe(3);
    expect (endState[2].title).toBe(newTodolistTitle);
})

test ('correct todolist should be change title', () => {
    const todoListID_1 = v1();
    const todoListID_2 = v1();

    const newTodolistTitle = 'New TodoList' 
    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"},
    ]
    const endState = todoListsReducer(startState, changeTitleTodoListAC( todoListID_2, newTodolistTitle))
    
    expect (endState[0].title).toBe("What to learn");
    expect (endState[1].title).toBe(newTodolistTitle);
})

test ('correct todolist should be filter', () => {
    const todoListID_1 = v1();
    const todoListID_2 = v1();

    const newFilter: FilterValuesType = 'completed' 

    const startState: Array<TodoListType> = [
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"},
    ]
    const endState = todoListsReducer(startState, filterTodoListAC( todoListID_2, newFilter))
    
    expect (endState[0].filter).toBe("all");
    expect (endState[1].filter).toBe(newFilter);
})

