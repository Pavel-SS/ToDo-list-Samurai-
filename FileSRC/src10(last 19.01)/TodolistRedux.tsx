import React, {ChangeEvent} from 'react';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import { Button, Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { TodolistType } from './App';
import { AppRootState } from './state/store';
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from './state/tasks-reducer';
import { changeTodolistFilterAC, removeTodolistAC, changeTodolistTitleAC } from './state/todolists-reducer';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
   
}

export function TodolistRedux(props: PropsType) {

    const  getTodolist = useSelector<AppRootState, TodolistType>(state => state.todolists.filter(todo => todo.id === props.id)[0])
    let getTasks = useSelector<AppRootState, Array<TaskType>>(state=> state.tasks[props.id])

    const dispatch = useDispatch();

    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.id))
    }

    const removeTodolist = () => {
        const action = removeTodolistAC(props.id);
        dispatch(action);
    }
    const changeTodolistTitle = (title: string) => {
        const action = changeTodolistTitleAC(props.id, title);
        dispatch(action)
    }

    const onAllClickHandler = () => dispatch(changeTodolistFilterAC("all", props.id));
    const onActiveClickHandler = () => dispatch(changeTodolistFilterAC("active", props.id));
    const onCompletedClickHandler = () => dispatch(changeTodolistFilterAC("completed", props.id));
         
    if (getTodolist.filter === "active") {
       getTasks = getTasks.filter(t => t.isDone === false);
    } 
    if (getTodolist.filter === "completed") {
        getTasks = getTasks.filter(t => t.isDone === true);
    }

    return <div>
        <h3> <EditableSpan value={getTodolist.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                getTasks.map(t => {
                    const onClickHandler = () => dispatch(removeTaskAC(t.id, props.id))
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        dispatch(changeTaskStatusAC(t.id, newIsDoneValue, props.id))
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        // props.changeTaskTitle(t.id, newValue, props.id);
                        const action = changeTaskTitleAC(t.id, newValue, props.id);
                        dispatch(action)
                    }
                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            checked={t.isDone}
                            color="primary"
                            onChange={onChangeHandler}
                        />

                        <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                        <IconButton onClick={onClickHandler}>
                            <Delete />
                        </IconButton>
                    </div>
                })
            }
        </div>
        <div>
            <Button variant={ getTodolist.filter === 'all' ? 'outlined' : 'text' }
                    onClick={onAllClickHandler}
                    color={'success'}
            >All
            </Button>
            <Button variant={ getTodolist.filter === 'active' ? 'outlined' : 'text' }
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={ getTodolist.filter === 'completed' ? 'outlined' : 'text' }
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
}
