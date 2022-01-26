import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList';
import {v1} from 'uuid';


function App() {
let [tasks, setTasks] = useState([
  {id:v1(), title:'Learn HTML', isDone:true},
  {id:v1(), title:'Learn HTML2', isDone:true},
  {id:v1(), title:'Learn HTML3', isDone:true},
  {id:v1(), title:'Learn HTML4', isDone:true}
])

const addTask = (titleTask:string) => {
  const newTask = {id: v1(), title: titleTask, isDone: false};
  setTasks([newTask, ...tasks]);
}
const removeTask = (idTask:string) => {
  let filterTask = tasks.filter(item=> item.id !== idTask)
  setTasks(filterTask)
} 
  return (
   <TodoList
      title = ""
      tasks = {tasks}
      add = {addTask}
      remove = {removeTask}
   />
  )
}

export default App;