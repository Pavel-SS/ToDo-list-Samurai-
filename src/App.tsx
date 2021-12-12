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
            {
                todoLists.map(tl => {
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
                })
            }
            
        </div>
    );
}

export default App;
