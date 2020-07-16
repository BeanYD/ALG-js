/*
 * @Author: Bean.Ding
 * @Date: 2020-07-15 14:59:58
 * @LastEditTime: 2020-07-16 09:52:13
 * @LastEditors: Bean.Ding
 */ 

 import { Node } from './node';

 export default class BinarySearchTree {
     constructor(compareFn = defaultCompare) {
         this.compareFn = compareFn;
         this.root = null;
     }

     insert(key) {
         if (this.root == null) {
             this.root = new Node(key);
         } else {
             this.insertNode(this.root, key);
         }
     }

     insertNode(node, key) {
         if (this.compareFn(key, node.key) === this.compareFn.LESS_THAN) {
             if (node.left == null) {
                 node.left = new Node(key);
             } else {
                 this.insertNode(node.left, key);
             }
         } else {
             if (node.right == null) {
                 node.right = new Node(key);
             } else {
                 this.insertNode(node.right, key);
             }
         }
     }
 }