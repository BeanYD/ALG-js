/*
 * @Author: Bean.Ding
 * @Date: 2020-06-16 15:09:56
 * @LastEditTime: 2020-06-17 18:53:41
 * @LastEditors: Bean.Ding
 */ 
function TreeCode() {  
    let BiTree = function (ele) {  
        this.data = ele;
        this.left = null;
        this.right = null;
    }

    this.createTree = function () {  
        let biTree = new BiTree('A');
        biTree.left = new BiTree('B');
        biTree.right = new BiTree('C');
        // biTree.left.left = new BiTree('D');
        // biTree.left.left.left = new BiTree('G');
        // biTree.left.left.right = new BiTree('H');
        biTree.right.left = new BiTree('E');
        biTree.right.right = new BiTree('F');
        biTree.right.left.right = new BiTree('I');
        // biTree.right.right.right = new BiTree('J');
        return biTree;
    }
}

let myTree = new TreeCode();

// 递归查询二叉树深度
var maxDepth = function (root) {  
    if (root == null) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);    
    return Math.max(leftDepth, rightDepth) + 1;
}

// 二叉树深度
var maxDepth1 = function(root) {
    if (root === null) return 0;
    let queue = [root];
    let level = 0;

    while(queue.length > 0) {
        let len = queue.length;
        console.log(len);
        
        while(len > 0) { //把当前level的queue队列清空，同时把节点左右子节点push
            let first = queue.shift(); // 左出
            if( first.left) queue.push(first.left); // 左子节点入队列
            if( first.right) queue.push(first.right); //右子节点入队列

            len--;
        }
        level++;
    }
    return level;
};

// console.log(maxDepth1(myTree.createTree()));

let postOrderTraverse = function (root) {
    if (root == null) return null;
    let stack = [];
    let result = [];
   	let lastNode = null;
    while (stack.length > 0 || root != null) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        
        let node = stack[stack.length - 1];
        if (node.right == null || node.right == lastNode) {
            stack.pop();
            result.push(node.data);
            lastNode = node;
        } else {
            root = node.right;
        }
    }
    
    return result;
}  

console.log(postOrderTraverse(myTree.createTree()));
