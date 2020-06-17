/*
 * @Author: Bean.Ding
 * @Date: 2020-06-16 09:46:54
 * @LastEditTime: 2020-06-17 18:54:06
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
        return biTree;
    }
}

let myTree = new TreeCode();
// console.log(myTree.createTree());

/**
 * 
 * 前序遍历：先访问根节点，再遍历左子树，再遍历右子树
 * 中序遍历：先遍历左子树，再访问根节点，再遍历右子树
 * 后序遍历：先遍历左子树，再遍历右子树，再访问根节点
 * 
 * 注意点：
 * 1.以根访问顺序决定是什么遍历
 * 2.左子树都是优先右子树
 */

// 前序递归遍历：
function PreOrderTraverse(biTree) {
    if (biTree == null) {
        return;
    } 
    console.log(biTree.data);
    PreOrderTraverse(biTree.left);
    PreOrderTraverse(biTree.right);
}
// console.log('前序递归遍历');
// PreOrderTraverse(myTree.createTree(), result);

// 中序递归遍历：
function InOrderTraverse(biTree) {  
    if (biTree == null) return;
    InOrderTraverse(biTree.left);
    console.log(biTree.data);
    InOrderTraverse(biTree.right);
}
// console.log('中序递归遍历')
// InOrderTraverse(myTree.createTree());

// 后序递归遍历：
function PostOrderTraverse(biTree) {  
    if (biTree == null) return;
    PostOrderTraverse(biTree.left);
    PostOrderTraverse(biTree.right);
    console.log(biTree.data);
}
// console.log('后续递归遍历')
// PostOrderTraverse(myTree.createTree());

// 前序非递归遍历
function PreOrderTraverse1(biTree) {  
    if (biTree == null) return null;
    let stack = [];
    let result = [];

    while (stack.length > 0 || biTree != null) {
        while (biTree != null) {
            result.push(biTree.data);
            stack.push(biTree);
            biTree = biTree.left;
        }
        let node = stack.pop();
        biTree = node.right;
    }

    console.log(result);
    return result;
}
// console.log('前序非递归遍历');
// PreOrderTraverse1(myTree.createTree());

function PreOrderTraverse2(biTree) {  
    if (biTree == null) return null;
    let stack = [];
    let result = [];
    stack.push(biTree);
    while(stack.length > 0) {
        let node = stack.pop();        
        result.push(node.data);
        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }

    console.log(result);
    return result;
}


// 中序非递归遍历
function InOrderTraverse1(biTree) {  
    if (biTree == null) return null;
    let stack = [];
    let result = [];
    while (stack.length > 0 || biTree != null) {
        while (biTree != null) {
            stack.push(biTree);
            biTree = biTree.left;
        }
        let node = stack.pop();
        result.push(node.data);
        biTree = node.right;
    }

    console.log(result);
    return result;
}
// console.log('中序非递归遍历')
// InOrderTraverse1(myTree.createTree());

// 后序非递归遍历
function PostOrderTraverse1(biTree) {  
    if (biTree == null) return null;
    let stack = [];
    let result = [];
    let lastVisit = null;
    while (stack.length > 0 ||  biTree != null) {
        while (biTree != null) {
            stack.push(biTree);
            biTree = biTree.left;
        }

        // 先不弹出，看是否为根节点，根节点必须在右节点弹出后弹出
        let node = stack[stack.length - 1];
        if (node.right == null || node.right == lastVisit) {
            stack.pop();
            result.push(node.data);
            lastVisit = node;
        } else {
            biTree = node.right;
        }
    }

    console.log(result);
    return result;
}
// console.log('后续非递归遍历')
// PostOrderTraverse1(myTree.createTree());

// DFS 深度搜索-从上到下
// 从上往下

function dfs(biTree, result) {  
    if (biTree == null) return;
    result.push(biTree.data);
    dfs(biTree.left, result);
    dfs(biTree.right, result);
}

function preorderTraversal(biTree) {  
    let result = [];
    dfs(biTree, result);
    console.log(result);
    return result;
}
// console.log('DFS深度搜索-从上到下(递归)');
// preorderTraversal(myTree.createTree());

// DFS 深度搜索-从下向上（分治法）
function divideAndConquer(biTree) {  
    let result = [];
    if (biTree == null) return result;
    let left = divideAndConquer(biTree.left);
    let right = divideAndConquer(biTree.right);
    result.push(biTree.data);
    result.push(...left);
    result.push(...right);
    return result;
}
function preorderTraversal1(biTree) {  
    var result = divideAndConquer(biTree);
    console.log(result);
    return result;
}
// console.log('DFS 深度搜索-从下向上（分治法）');
// preorderTraversal1(myTree.createTree());

function DepthFirstSearch(biTree) {  
    let stack = [];
    stack.push(biTree);

    while (stack.length > 0) {
        let node = stack.pop();
        console.log(node.data);
        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }
}

// BFS 层次遍历
function BreadthFirstSearch(biTree) {  
    let queue = [];
    let result = [];
    queue.push(biTree);
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.data);
        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    console.log(result);
    return result;
}

// console.log('广度优先非递归遍历')
// BreadthFirstSearch(myTree.createTree());