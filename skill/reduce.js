/*
 * @Author: Bean.Ding
 * @Date: 2020-07-14 16:04:54
 * @LastEditTime: 2020-07-14 16:55:53
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
console.log(mergeArrays(...[[1, 2, 3], [4, 5], [6]]));
