/*
 * @Author: Bean.Ding
 * @Date: 2020-07-13 16:55:28
 * @LastEditTime: 2020-07-13 17:49:19
 * @LastEditors: Bean.Ding
 */ 

// 给定两个数组，编写一个函数来计算它们的交集。
//  
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
//  
// 说明：
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
// 进阶：
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？


var intersect = function(nums1, nums2) {
    let minNums = nums1.length > nums2.length ? nums2 : nums1;
    let maxNums = nums1.length > nums2.length ? nums1 : nums2;
    let map = new Map();
    let result = new Array();
    for (let i = 0; i < minNums.length; i++) {
        if (map.has(minNums[i])) {
            let count = map.get(minNums[i]);
            count++;
            map.set(minNums[i], count);

        } else {
            map.set(minNums[i], 1);

        }
    }
    
    for (let i = 0; i < maxNums.length; i++) {
        if (map.has(maxNums[i])) {
            result.push(maxNums[i]);
            let count = parseInt(map.get(maxNums[i]));
            count--;
            
            if (count) {
                map.set(maxNums[i], count);
            } else {
                map.delete(maxNums[i]);
            }
        }
    }

    return result;
};

var intersect1 = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        intersect1(nums2, nums1);
    }
    let result = new Array();
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) > -1) {
            result.push(nums1[i]);
            nums2.splice(nums2.indexOf(nums1[i]), 1);
        }
    }

    return result;
};

console.log(intersect([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]));
