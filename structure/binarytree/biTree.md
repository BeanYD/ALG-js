<!--
 * @Author: Bean.Ding
 * @Date: 2020-06-16 15:11:13
 * @LastEditTime: 2020-06-16 15:11:26
 * @LastEditors: Bean.Ding
--> 
## 二叉树知识点

$注意事项：$

$1.以根访问顺序决定是什么遍历$

$2.左子树都是优先右子树$

- 前序遍历：先访问根节点，再遍历左子树，再遍历右子树

      

    ![1](./asset-bitree/1.png)

    - 递归遍历

    - ```javascript
        let preOrderTraverse = function (root, result) {
              if (root == null) return;
          result.push(root.data);
            let left = preOrderTraverse(root.left, result);
            let right = preOrderTraverse(root.right, result);
        }
        let result = function (root) {
            let result = [];
            preOrderTraverse(root, result);
            return result;
        }
      ```
      
    - 非递归遍历

    - ```javascript
        let preOrderTraverse = function (root) {
              if (root == null) return null;
          let result = [];
            let stack = [];
            // 更换节点
            while (stack.length > 0 || root != null) {
                // 遍历左子树
                while (root != null) {
                    stack.push(root);
                    result.push(root.date);
                    root = root.left;
                }
                let node = root.pop();
                root = node.right;
            }
            
            return result;
        }
      ```
      
    - 

- 中序遍历：先遍历左子树，再访问根节点，再遍历右子树

    ![2](./asset-bitree/2.png)

    - 递归遍历

    - ```javascript
        let inOrderTraverse = function (root, result) {
              if (root == null) return;
          let left = inOrderTraverse(root.left, result);
            result.push(root.data);
            let right = inOrderTraverse(root.right, result);
        }
        
        let retult = function (root) {
            let result = [];
            inOrderTraverse(root, result);
            return result;
        }
      ```
      
    - 非递归遍历

    - ```javascript
        let inOrderTraverse = function (root) {
              if (root == null) return null;
          
            let stack = [];
            let result = [];
            
            while (stack.length > 0 || root != null) {
                while (root != null) {
                    stack.push(root);
                    root = root.left;
                }
                
                let node = stack.pop();
                result.push(node.data);
                root = node.right;
            }
            
            return result;
        }
      ```
      
    - 

- 后序遍历：先遍历左子树，再遍历右子树，再访问根节点

    ![3](./asset-bitree/3.png)

    - 递归遍历

    - ```javascript
      let postOrderTraverse = function (root, result) {
            if (root == null) return;
        let left = postOrderTraverse(root.left, result);
          let right = postOrderTraverse(root.right, result);
          result.push(root.data);
      }
      
      let result = function (root) {
          let result = [];
          postOrderTraverse(root, result);
          return result;
      }
      ```
      
    - 非递归遍历

    - ```javascript
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
      ```
      
    - 

- DFS 深度搜索-从上到下

    - ```javascript
        
        ```

    - 

- DFS 深度搜索-从下向上（分治法）

    - ```javascript
        
        ```

    - 

- BFS 层次遍历

    - ```javascript
        
        ```

    - 

    - 