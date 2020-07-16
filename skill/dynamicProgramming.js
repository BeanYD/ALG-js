/*
 * @Author: Bean.Ding
 * @Date: 2020-07-14 17:12:22
 * @LastEditTime: 2020-07-15 11:21:02
 * @LastEditors: Bean.Ding
 */

function minCoinChange(coins, amount) {
    const cache = []; // {1}
    const makeChange = (value) => { // {2}
        if (!value) { // {3}
            return [];
        }
        if (cache[value]) {  // {4}
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) { // {5}
            const coin = coins[i];
            newAmount = value - coin; // {6}
            if (newAmount >= 0) {
                console.log('递归 begin ' + newAmount);
                newMin = makeChange(newAmount); // {7}
                console.log('递归 end');
            }
            if (
                newAmount >= 0 && // {8}
                (newMin.length < min.length - 1 || !min.length) && // {9}
                (newMin.length || !newAmount) // {10}
            ) {
                min = [coin].concat(newMin); // {11} 
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[value] = min); // {12}
    };
    return makeChange(amount); // {13}
}

// console.log(minCoinChange([1, 5, 10, 25], 36));
// console.log(minCoinChange([1, 3, 4], 6));

// 1-n之间总共多少种二叉树
/**
 * G[0] = 1;
 * G[1] = 1;
 * ...
 * G[n - 1] = G[0] * G[n - 2] + G[1] * G[n - 3] + ... + G[n - 2] * G[0];
 * G[n] = G[0] * G[n - 1] + G[1] * G[n - 2] + ... + G[n - 1] * G[0];
 * 
 * 
 * 
 * G[n] = G[i - 1] * G[n - i] (i = 1; i <= n; 累加和)
 */

 let numTrees = function (n) {  
     let G = new Array(n + 1).fill(0);
     G[0] = 1;
     G[1] = 1;

     for (let i = 2; i < n + 1; i++) {
         for (let j = 1; j < i + 1; j++) {
             G[i] = G[i] + G[j - 1] * G[i - j];
         }
     }

     return G[n];
 }

/**
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 */

 /**
  * nums = [-2,1,-3,4,-1,2,1,-5,4]
  * 动态规划分解：遍历nums时，在一定包含nums[i]这个元素的情况下，往前的数组的连续子数组最大值
  * i = 0 nums = [-2]   最大值-2
  * i = 1 nums = [-2, 1] 最大值1
  * i = 2 nums = [-2, 1, -3] 最大值-2
  */

 var maxSubArray = function(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] = nums[i] + nums[i - 1];
            console.log(nums[i - 1], nums[i]);
            
        }
        max = Math.max(max, nums[i]);
        console.log(max);
    }

    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));