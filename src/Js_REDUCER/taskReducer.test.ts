import {sum,sub,mult,divider, salaryReducer} from './taskReducer';
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

test('reducer', ()=>{
    //1. тестовые данные
    //2. выполнение тестируемого кода
    //3. проверка ожидаемого результата
    expect(salaryReducer(570,{type:'sum', payload: 330})).toBe(900);

})