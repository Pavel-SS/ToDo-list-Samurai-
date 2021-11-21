import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TodoList } from './component/Todolist';

export type FilterWords = "All" | "Active" | "Completed";

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "HTML & CSS", isDone: true },
    { id: v1(), title: "JavaScript", isDone: true },
    { id: v1(), title: "React", isDone: false }
  ])

  //функция удаления таски
  const removeTask = (idT:string) => {
    let filteredTasks = tasks.filter(item => item.id !== idT)
    setTasks(filteredTasks);
  }
  // функция добавления таски
  const addTask = () =>{
    let newTask =  { id: v1(), title: "XXXXX", isDone: false };
    let newTaskList = [newTask, ...tasks];
    setTasks(newTaskList);
  }

  let [filters, setFilter] = useState<FilterWords>("All")
// функция переключения между выполненными и не выполненными тасками
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
        add = {addTask}
        filters = {fiterStatusTask}
      />
    </div>
  )

}



export default App;