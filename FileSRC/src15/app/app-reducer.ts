export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    //свойство status со  значение 'loading' и типом RequestStatusType
    //as  значит рассмотри значение как тип RequestStatusType
   status: 'idle' as RequestStatusType,
   error: null as string | null
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
   switch (action.type) {
       //'APP/SET-STATUS' - Redux Ducks конвенция соглашения как нам готовить Redux
       //соглашение по написанию Redux
       case 'APP/SET-STATUS':
           return {...state, status: action.status}
       case 'APP/SET-ERROR':
           return{...state, error: action.error}
       default:
           return state
   }
}
// action 
export const setAppStatusAC = (status:RequestStatusType) => ({
    type: 'APP/SET-STATUS',
    status
} as const)

export const setAppErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR',
    error
} as const)


export type setAppStatusAT = ReturnType<typeof setAppStatusAC>
export type setAppErrorAT = ReturnType<typeof setAppErrorAC>
type AppActionsType = setAppStatusAT | setAppErrorAT

