/*
 * @Author: Bean.Ding
 * @Date: 2020-07-03 09:33:20
 * @LastEditTime: 2020-07-03 09:39:17
 * @LastEditors: Bean.Ding
 */ 
interface Person {
    name: string;
    age: number;
}

function printName(person: Person) {
    console.log(person.name);
    
}

const john = { name: 'John', age: 21 };
const mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);