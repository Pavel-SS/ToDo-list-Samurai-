import React from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnakbar';
import { useAppSelector } from './store';
// import { useSelector } from 'react-redux';
import { RequestStatusType } from './app-reducer';

// You can learn about the difference by reading this guide on minimizing bundle size.
// https://mui.com/guides/minimizing-bundle-size/
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/icons-material/Menu';
import LinearProgress from '@mui/material/LinearProgress';



function App() {
//useSelector хук принимает selector функцию для выбора данных из хранилища и другой функции , equalityFnчтобы сравнить их , прежде чем вернуться результатами и определить , когда , чтобы сделать , если данные из предыдущего и текущего состояния различны.
    //useSelector всегда принимает стэйт всего приложения, а мы потом уже достаем то что нам нужно
    //Типизация: первым параметром мы пишем типизацию стейта всего приложения, а вторым мы указываем возвращаемый тип

    // Один из вариантов для передачи 
    // const state = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)

    // Второй вариант более практичный
    //useAppSelector в сторе
 const state = useAppSelector<RequestStatusType>((state) => state.app.status)

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
                {state === 'loading' && <LinearProgress color="secondary"/>}
            <Container fixed>
                <TodolistsList/>
            </Container>
            <ErrorSnackbar/>
        </div>
    )
}

export default App
