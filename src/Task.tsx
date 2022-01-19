import React, { ChangeEvent } from 'react';
import { TaskType } from './TodolistRedux';
import { EditableSpan } from './EditableSpan';
import { Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

export type TaskPropsType = {
    todolistId: string
    task: TaskType
    removeTaskAC: (taskId: string, todolistId: string) => void
    changeTaskStatusAC: (taskId: string, newIsDoneValue: boolean, todolistId: string) => void
    changeTaskTitleAC: (taskId: string, newValue: string, todolistId: string) => void
}

export const Task = React.memo(({
    todolistId,
    task,
    removeTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC
}:TaskPropsType) => {
    const dispatch = useDispatch();

    const onClickHandler = () => dispatch(removeTaskAC(task.id, todolistId))
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        dispatch(changeTaskStatusAC(task.id, newIsDoneValue, todolistId))
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        const action = changeTaskTitleAC(task.id, newValue, todolistId);
                        dispatch(action)
                    }
    return (
        <div key={task.id} className={task.isDone ? "is-done" : "" }>
            <Checkbox checked={task.isDone} color="primary" onChange={onChangeHandler} />

            <EditableSpan value={task.title} onChange={onTitleChangeHandler} />
            <IconButton onClick={onClickHandler}>
                <Delete />
            </IconButton>
        </div>
    )
})
