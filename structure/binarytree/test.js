/*
 * @Author: Bean.Ding
 * @Date: 2020-06-16 15:09:56
 * @LastEditTime: 2020-06-16 15:10:27
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
        biTree.left.left = new BiTree('D');
        biTree.left.left.left = new BiTree('G');
        biTree.left.left.right = new BiTree('H');
        biTree.right.left = new BiTree('E');
        biTree.right.right = new BiTree('F');
        biTree.right.left.right = new BiTree('I');
        biTree.right.right.right = new BiTree('J');
        return biTree;
    }
}

let myTree = new TreeCode();

// 二叉树深度
var maxDepth = function(root) {
    if (root == null) return 0;
    let deep = 0;
    let maxDepth = 0;
    let stack = [];
    while (stack.length > 0 || root != null) {
        while (root != null) {
            stack.push(root);
            root = root.left;
            deep++;
        }
        let node = stack.pop();
        root = node.right;

        maxDepth = maxDepth > deep ? maxDepth : deep;

        console.log(deep);
        if (root == null) {
            console.log("-1");
            deep--;
        }

    }

    return maxDepth;
};

console.log(maxDepth(myTree.createTree()));