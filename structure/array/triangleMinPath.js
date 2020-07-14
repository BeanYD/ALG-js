/*
 * @Author: Bean.Ding
 * @Date: 2020-07-14 17:48:06
 * @LastEditTime: 2020-07-14 17:49:12
 * @LastEditors: Bean.Ding
 */

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
//  
// 例如，给定三角形：
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

const minimumTotal = (triangle) => {
    const dp = new Array(triangle[triangle.length - 1].length);
    // base case 是最后一行
    for (let i = 0; i < dp.length; i++) {
        dp[i] = triangle[triangle.length - 1][i];
    }
    // 从倒数第二列开始迭代
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};
