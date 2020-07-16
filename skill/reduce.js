/*
 * @Author: Bean.Ding
 * @Date: 2020-07-14 16:04:54
 * @LastEditTime: 2020-07-15 09:01:11
 * @LastEditors: Bean.Ding
 */ 
const mergeArraysConcat = function (...arrays) {  
    return arrays.reduce( function (p, n, i, array) {  
        console.log(p, n, i, array);
        return p.concat(n);
    });
};

console.log(mergeArraysConcat(...[[1, 2, 3], [4, 5], [6]]));


const mergeArrays = (...arrays) => [].concat(...arrays);

// ...[[1, 2, 3], [4, 5], [6]] 等价于 [1, 2, 3], [4, 5], [6]
console.log(mergeArrays(...[[1, 2, 3], [4, 5], [6]]));
