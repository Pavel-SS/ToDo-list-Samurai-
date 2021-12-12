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

function App() {
    //BLL:
    const todoListTitle: string = "What to learn"
    const initialState = [ // N3, false
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ]
    const [tasks, setTasks] = useState<Array<TaskType>>(initialState)
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const removeTask = (taskID: string) => {
        const upDatedTasks = tasks.filter(task => task.id !== taskID)
        setTasks(upDatedTasks)
    }
    const addTask = (newTaskTitle: string) => {
        // const newTaskTitle: string = "New task"
        const newTask: TaskType = {
            id: v1(),
            title: newTaskTitle,
            isDone: false
        }
        setTasks( [newTask, ...tasks])
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        const updatedTasks  = tasks.map(t => t.id === taskID ? {...t, isDone: isDone} : t )
        setTasks(updatedTasks)
    }

    let tasksForRender = tasks
    if(filter === "active"){
        tasksForRender = tasksForRender.filter(t=> t.isDone === false)
    }
    if(filter === "completed"){
        tasksForRender = tasksForRender.filter(t=> t.isDone === true)
    }

    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForRender}
                filter={filter}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
