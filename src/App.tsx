import React, { useState } from 'react';

import './App.css';
import { TodoList } from './component/Todolist';

export type FilterWords = "All" | "Active" | "Completed";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: "HTML & CSS", isDone: true },
    { id: 2, title: "JavaScript", isDone: true },
    { id: 3, title: "React", isDone: false }
  ])
  const removeTask = (idT:number) => {
    let filteredTasks = tasks.filter(item => item.id !==idT)
    setTasks(filteredTasks);
  }


  let [filters, setFilter] = useState<FilterWords>("All")

  const fiterStatusTask = (value:FilterWords) => {
    setFilter(value)
  }
  let taskForTodoList = tasks;

//  if (filters === 'Active' ){
//    taskForTodoList = tasks.filter(i => !i.isDone)
//  }
//  if (filters  === 'Completed'){
//    taskForTodoList = tasks.filter(i => i.isDone)
//  }
taskForTodoList = filters === 'Active' ?  tasks.filter(i => !i.isDone): filters === 'Completed' ? tasks.filter(i => i.isDone) : tasks;

  return (
    <div className="App">
      <TodoList 
        title = "What to Learn" 
        tasks = { taskForTodoList }
        remove = {removeTask}
        filters = {fiterStatusTask}
      />
    </div>
  )

}



export default App;