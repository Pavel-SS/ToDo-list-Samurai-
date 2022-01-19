
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';
import { addTodolistAC } from './state/todolists-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from './state/store';
import {TaskType, TodolistRedux } from './TodolistRedux';
import { useCallback } from 'react';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux () {
   console.log('AppRedux');

    const dispatch = useDispatch();
    const todolists = useSelector<AppRootState, Array<TodolistType>>(state=> state.todolists);
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)


    // function removeTask(id: string, todolistId: string) {
    //     dispatch(removeTaskAC(id, todolistId))
    // }

    // function addTask(title: string, todolistId: string) {
    //     dispatch(addTaskAC(title, todolistId))
    // }
    // function changeStatus(id: string, isDone: boolean, todolistId: string) {
    //     dispatch(changeTaskStatusAC(id, isDone, todolistId))
    // }

    // function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
    //   const action = changeTaskTitleAC(id, newTitle, todolistId);
    //   dispatch(action)
    // }


    // function changeFilter(value: FilterValuesType, todolistId: string) {
    //    const action = changeTodolistFilterAC(value, todolistId);
    //    dispatch(action)
    // }

    // function removeTodolist(id: string) {
    //    const action = removeTodolistAC(id);
    //    dispatch(action);
    // }

    // function changeTodolistTitle(id: string, title: string) {
    //     const action = changeTodolistTitleAC(id, title);
    //     dispatch(action)
    // }

   const addTodolist = useCallback((title: string) => {
        const action = addTodolistAC(title);
        dispatch(action);
    }, [dispatch]);

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            return <Grid item key={tl.id}>
                                <Paper style={{padding: "10px"}}>
                                    <TodolistRedux
                                        id={tl.id}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
