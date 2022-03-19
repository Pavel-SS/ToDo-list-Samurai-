import React from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import LinearProgress from '@mui/material/LinearProgress';
// You can learn about the difference by reading this guide on minimizing bundle size.
// https://mui.com/guides/minimizing-bundle-size/
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import { RequestStatusType } from './app-reducer';
import { useAppSelector } from './store';


function App() {

   
    // const status = useSelector<AppRootStateType, RequestStatusType>( state => state.app.status)
    //Аналог того что сверху,но useSelector<AppRootStateType> заменен на useAppSelector, для более оптимального написания кода 
    const status = useAppSelector<RequestStatusType>( state => state.app.status)
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
                {status === 'idle' && <LinearProgress color='secondary'/>}
            </AppBar>
            <Container fixed>
                <TodolistsList/>
            </Container>
        </div>
    )
}

export default App
