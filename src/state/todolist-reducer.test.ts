import { todoListsReducer, removeTodoListAC, addTodoListAC,  changeTitleTodoListAC, changeFilterTodoListAC} from './todolist-reduce';
import { v1 } from 'uuid';
import { TodoListType, FilterValuesType } from "../App";

//Remove
test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
 
    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
 
    const endState = todoListsReducer(startState, removeTodoListAC(todolistId1))
 
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
 });
 

 //Add
 test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const newTodoListTitle = 'New TodoList';

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, addTodoListAC(newTodoListTitle))
 
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodoListTitle);
 })

 // Change title
 test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const newTodoListTitle = 'New TodoList';

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, changeTitleTodoListAC(todolistId2, newTodoListTitle))
 
    expect(endState[0].title).toBe('What to learn');
    expect(endState[1].title).toBe(newTodoListTitle);
 })


//Change filter
 test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const newFilter: FilterValuesType = 'completed';

    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListsReducer(startState, changeFilterTodoListAC(todolistId2, newFilter))
 
    expect(endState[0].filter).toBe('all');
    expect(endState[1].filter).toBe(newFilter);
 })