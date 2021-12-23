import {sum,sub,mult,divider, salaryReducer,multAC} from './taskReducer';
test('sum', ()=>{
    //1. тестовые данные
    const a: number = 570,
        b: number = 330,
    //2. выполнение тестируемого кода
        result = sum(a,b)
    //3. проверка ожидаемого результата
    expect(result).toBe(900);

})
test('sub', ()=>{
    //1. тестовые данные
    const a: number = 570,
        b: number = 330,
    //2. выполнение тестируемого кода
        result = sub(a,b)
    //3. проверка ожидаемого результата
    expect(result).toBe(240);

})
test('mult', ()=>{
    //1. тестовые данные
    //2. выполнение тестируемого кода
    //3. проверка ожидаемого результата
    expect(mult(2,3)).toBe(6);

})
test('divider', ()=>{
    //1. тестовые данные
    const a: number = 10,
        b: number = 5,
    //2. выполнение тестируемого кода
        result = divider(a,b)
    //3. проверка ожидаемого результата
    expect(result).toBe(2);

})

test('reducerSum', ()=>{
    //1. тестовые данные
    //2. выполнение тестируемого кода
    //3. проверка ожидаемого результата
    expect(salaryReducer(570,{type:'sum', payload: 330})).toBe(900);
    expect(salaryReducer(570,{type:'sub', payload: 330})).toBe(240);
    expect(salaryReducer(70,{type:'mult', payload: 30})).toBe(2100);
    expect(salaryReducer(500,{type:'divider', payload: 2})).toBe(250);

})
test('reducerSub', ()=>{
    //1. тестовые данные
    //2. выполнение тестируемого кода
    //3. проверка ожидаемого результата
    expect(salaryReducer(570,{type:'sub', payload: 330})).toBe(240);

})
test('reducerMult', ()=>{
    //1. тестовые данные
    //2. выполнение тестируемого кода
    //3. проверка ожидаемого результата
    const actionMult =multAC('mult', 30);
    expect(salaryReducer(70, actionMult)).toBe(2100);

})
test('reducerDivider', ()=>{
    //1. тестовые данные
    //2. выполнение тестируемого кода
    //3. проверка ожидаемого результата
    expect(salaryReducer(500,{type:'divider', payload: 2})).toBe(250);

})