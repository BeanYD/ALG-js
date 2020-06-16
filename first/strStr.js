/*
 * @Author: Bean.Ding
 * @Date: 2020-06-16 08:57:21
 * @LastEditTime: 2020-06-16 09:20:04
 * @LastEditors: Bean.Ding
 */ 

 function strStr(haystack, needle) {  
     if (needle.length === 0) {
         return 0;
     }

     var i, j;
     for (i = 0; i < haystack.length - needle.length + 1; i++) {
         for (j = 0; j < needle.length; j++) {
             if (haystack[i+j] != needle[j]) {
                 break;
             }
         }

         if (needle.length === j) {
             return i;
         }
     }


     return -1;
 }

console.log(strStr("aabbcc", "abbc"));
;