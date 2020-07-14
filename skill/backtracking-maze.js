/*
 * @Author: Bean.Ding
 * @Date: 2020-07-14 11:07:53
 * @LastEditTime: 2020-07-14 11:25:54
 * @LastEditors: Bean.Ding
 */ 
// 迷宫老鼠问题
function findPath(maze, x, y, solution) {
    const n = maze.length;

    if (x === n - 1 && y === n - 1) {
        solution[x][y] = 1;
        return true;
    }
    console.log(x,y);
    
    if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
        solution[x][y] = 1;
        // 横向移动到下一个位置
        if (findPath(maze, x + 1, y, solution)) {
            return true;
        }
        // 纵向移动到下个位置
        if (findPath(maze, x, y + 1, solution)) {
            return true;
        }

        solution[x][y] = 0;
        return false;
    }

    return false;
}

function ratInAMaze(maze) {  
    const solution = [];
    for (let i = 0; i < maze.length; i++) {
        solution[i] = [];
        for (let j = 0; j < maze[i].length; j++) {
            solution[i][j] = 0;
        }
    }

    if (findPath(maze, 0, 0, solution)) {
        return solution;
    }

    return 'NO PATH FOUND';
}


const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
];
console.log(ratInAMaze(maze));


