export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    //свойство status со  значение 'loading' и типом RequestStatusType
    //as  значит рассмотри значение как тип RequestStatusType
   status: 'idle' as RequestStatusType 
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
       //'APP/SET-STATUS' - Redux Ducks конвенция соглашения как нам готовить Redux
       //соглашение по написанию Redux
       case 'APP/SET-STATUS':
           return {...state, status: action.status}
       default:
           return state
   }
}
// action 
export const setAppStatusAC = (status:RequestStatusType) => ({
    type: 'APP/SET-STATUS',
    status
} as const)
export type setAppStatusAT = ReturnType<typeof setAppStatusAC>

type ActionsType = setAppStatusAT

