import React from 'react';

import './App.css';
import { TasksType, TodoList } from './component/Todolist';

function App() {
  let tasks1: Array<TasksType> = [
    { id: 1, title: "HTML & CSS", isDone: true },
    { id: 2, title: "JavaScript", isDone: true },
    { id: 3, title: "React", isDone: false }
  ]
  let tasks2: Array<TasksType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "XXX", isDone: false },
    { id: 3, title: "Jentlments of fortune", isDone: true }
  ]

  return (
    <div className="App">
      <TodoList title = "What to Learn" tasks = { tasks1 }/>
      <TodoList title = "Movies" tasks = { tasks2 }/>
    </div>
  )

}



export default App;