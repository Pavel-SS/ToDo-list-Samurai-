export function sum(state:number, num:number){
    return state + num
}

export function sub(state:number, num:number){
    return state - num
}


export function mult(state:number, num:number){
    return state * num
}
export function divider(state:number, num:number){
    return state / num
}

//1. Что на старте // 570$
//2. Тип действия // 'sum'
//3. Доп параметры(коэффициенты или надбавки к ЗП)// 330$

//Создадим некий объект который будет описывать действия
export type ActionType = {
    type:'sum'| 'sub'| 'mult' | 'divider',
    payload: number
}

export const actionCreator = (type:string, payload:number)=> ({
    type,
    payload
})

export const salaryReducer = (state: number, action: ActionType): number => {
    switch(action.type){
        case 'sum':
            return state + action.payload
        default:
            return state
    }
}