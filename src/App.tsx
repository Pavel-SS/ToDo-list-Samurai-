import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

// Create
// Read
// Update
// Delete
// CRUD
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all"|"active"|"completed"

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    //BLL
    const todoListID_1 =  v1();
    const todoListID_2 =  v1();

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to learn", filter: "all"},
        
    ])

    const [tasks, setTasks] = useState<TaskStateType>(
        {
            [todoListID_1] : [
                {id: v1(), title: "HTML", isDone: true},
                {id: v1(), title: "CSS", isDone: true},
                {id: v1(), title: "REACT", isDone: false},
            ],
            [todoListID_2] : [
                {id: v1(), title: "MILK", isDone: true},
                {id: v1(), title: "BEER", isDone: true},
                {id: v1(), title: "FISH", isDone: false},
            ],
        }
    )

    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        const updateTodoList = todoLists.map(tl => {
           return tl.id === todoListID ? {...tl, filter: filter} : tl
        })
        setTodoLists(updateTodoList)
    }
    const removeTask = (taskID: string, todoListID: string) => {
        const copyState = {...tasks}
        copyState[todoListID] = tasks[todoListID].filter(task => task.id !== taskID)
        setTasks(copyState)
    }
    const addTask = (newTaskTitle: string, todoListID: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: newTaskTitle,
            isDone: false
        }
        const copyState =  {...tasks}
        copyState[todoListID] = [newTask, ...tasks[todoListID]]
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        const copyState = {...tasks}
        copyState[todoListID] = tasks[todoListID].map(t => {
          return t.id === taskID ? {...t, isDone: isDone} : t
        })
        setTasks(copyState)
    }

    let tasksForRender = tasks
    if(filter === "active"){
        tasksForRender = tasksForRender.filter(t=> t.isDone === false)
    }
    if(filter === "completed"){
        tasksForRender = tasksForRender.filter(t=> t.isDone === true)
    }

    const todoListComponents = todoLists.map(tl => {
        return (
            <TodoList
            key = {tl.id}
            id = {tl.id}
            title={tl.title}
            tasks={tasksForRender}
            filter={filter}
            addTask={addTask}
            removeTask={removeTask}
            changeFilter={changeFilter}
            changeTaskStatus={changeTaskStatus}
            />
        )
    })

    //UI:
    return (
        <div className="App">
            {todoListComponents}
        </div>
    );
}

export default App;
