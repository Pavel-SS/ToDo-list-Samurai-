
import { Dispatch } from 'redux'
import axios from 'axios'

import { setIsLoggedInAC } from '../features/TodolistsList/Login/auth-reducer';
import { handleServerAppError, handleServerNetworkError } from '../utils/error-utils';
import { authAPI } from '../api/todolists-api';

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialize: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialize: action.value}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    //  что бы избавить от дергания при логинизации
    isInitialize: boolean
}

export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppInitializedAC = (value: boolean) => ({type: 'APP/SET-INITIALIZED', value} as const)

export const initializeAppTC = () => async(dispatch:Dispatch) => {
    try{
        const res = await authAPI.me()
        if(res.data.resultCode===0){
            dispatch(setIsLoggedInAC(true));
        }else{
            handleServerAppError(res.data, dispatch)
        }
    }catch(e){
        if(axios.isAxiosError(e)){
            handleServerNetworkError(e, dispatch)
        }
    } finally{
        dispatch(setAppInitializedAC(true))
    }
}


export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppInitializedActionType = ReturnType<typeof setAppInitializedAC>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetAppInitializedActionType
