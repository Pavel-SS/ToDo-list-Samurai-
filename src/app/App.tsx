import React, { useEffect } from 'react';
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { useDispatch } from 'react-redux';
import { useAppSelector } from './store'
import { initializeAppTC } from './app-reducer'
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import { Menu } from '@mui/icons-material';
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import { Login } from '../features/TodolistsList/Login/Login'
import CircularProgress from '@mui/material/CircularProgress';
import { logoutTC } from '../features/TodolistsList/Login/auth-reducer';

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const dispatch = useDispatch();

    const status = useAppSelector((state) => state.app.status)
    const isInitialize = useAppSelector(state => state.app.isInitialize)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    
    const logOutHandler = () => {
        dispatch(logoutTC())
    }
    useEffect(()=>{
        dispatch( initializeAppTC() )
    },[])

    if(!isInitialize){
        return (
        <div
            style={{position:'fixed', top:'30%', textAlign:'center', width:'100%'}}
        >
            <CircularProgress/>
        </div>)
    }
    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    { isLoggedIn && <Button color="inherit" onClick={logOutHandler}>Log out</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path='/' element = {<TodolistsList/>} />
                    <Route path='/login' element = {<Login/>} />
                    <Route path='/404' element = {<h1>404: PAGE NOT FOUND</h1>} />
                    <Route path='*' element = {<Navigate to='/404'/>} />
                </Routes>
            </Container>
        </div>
    )
}

export default App
