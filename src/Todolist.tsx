import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import AddItemForm from './AddItemForm';
import EdinableSpan from './EdinableSpan'
import { Button, ButtonGroup, Checkbox, IconButton, List, ListItem, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, changeTitle: string, todoListID: string) => void
    changeTodoTitle: (changeTitle: string, todoListID: string) => void
}

function TodoList(props: PropsType) {

    const addTask = (title:string) => {
        props.addTask(title, props.id)
    }
    
    const setAllFilterValue = () => props.changeFilter("all", props.id)
    const setActiveFilterValue = () => props.changeFilter("active", props.id)
    const setCompletedFilterValue = () => props.changeFilter("completed", props.id)
    // const getBtnClass = (filter: FilterValuesType) => props.filter=== filter ? "active" : "" ;
    const getBtnColor = (filter: FilterValuesType) => props.filter=== filter ? "#72e0ab" : "#1d5f6e" ;
    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoTitle(newTitle, props.id)
    }
    
    const tasksJSX = props.tasks.map(task => {
        const getClasses = () => task.isDone ? "is-done": "" ;
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)
        const removeTask = () => props.removeTask(task.id, props.id)
        const changeTaskTitle = (newTitle: string) => {
            props.changeTaskTitle(task.id, newTitle, props.id)
        }
        return (
            <ListItem key={task.id} 
                divider 
                disableGutters
                sx={{display: 'flex',
                    justifyContent: 'space-between',
                    }}>
                <Checkbox color={'primary'} 
                    checked={task.isDone}
                    onChange={changeStatus}
                />

                <EdinableSpan title={task.title} titleChange={changeTaskTitle} classSpan={getClasses()}/>
                <IconButton onClick={removeTask} sx={{color: '#1d5f6e'}}>
                    <Delete/>
                </IconButton>
            </ListItem>
        )
    })

    return(
        <div
            style={{display:'flex',
                justifyContent:'space-between',
                flexDirection:'column',
                minHeight:'300px',
                maxWidth:'223px'    
            }}    
        >
            <div>
                <Typography variant={'h6'} sx={{fontWeight: 700,
                    display:'flex',
                    justifyContent:'space-around' 
                }}>
                    <EdinableSpan title={props.title} titleChange={changeTodoListTitle}/>
                    <IconButton onClick={()=>props.removeTodoList(props.id)}
                        sx={{color: '#1d5f6e'}}>
                        <Delete />
                    </IconButton>
                </Typography>
                <AddItemForm addItem={addTask} />
            </div>
            
            <List>
                {tasksJSX}
            </List>
            <div>
                <ButtonGroup variant="contained"  color={'info'} size={'small'} aria-label="outlined primary button group" disableElevation>
                    <Button
                        //  color={getBtnColor("all")}
                         sx={{background: getBtnColor("all"), fontWeight: 700}}
                         onClick={setAllFilterValue}>
                             All
                    </Button>
                    <Button
                         sx={{background: getBtnColor("active"), fontWeight: 700}}
                         onClick={setActiveFilterValue}>
                             Active
                    </Button>
                    <Button 
                         sx={{background: getBtnColor("completed"), fontWeight: 700}}
                         onClick={setCompletedFilterValue}>
                        Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default TodoList;