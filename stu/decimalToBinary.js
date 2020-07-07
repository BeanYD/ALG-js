/*
 * @Author: Bean.Ding
 * @Date: 2020-07-04 09:05:45
 * @LastEditTime: 2020-07-04 09:09:02
 * @LastEditors: Bean.Ding
 */ 
function decimalToBinary(decNumber) {  
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';

    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(decimalToBinary(1222));
