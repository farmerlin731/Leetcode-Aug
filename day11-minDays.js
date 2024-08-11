//Too hard, see the solution directly XD.
//Can we find a position we need flip without brutal-force?
//The following solution do it !
//But a little weird Q_Q
//https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/819295/javascript-find-the-critical-points-and-check-o-mnk-k-number-of-critical-point

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  let numOfIsland = countIslands(copyIsland(grid));

  // '0' or more than '1'
  if (numOfIsland != 1) return 0;

  // situation of '1'
  for (let i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        grid[i][j] = 0;
        if (countIslands(copyIsland(grid)) != 1) return 1;
        grid[i][j] = 1;
      }
    }
  }

  return 2;
};

//Count num of islands @ leetcode's question 200 .
//A little modify, should use copied grid when check num.

var copyIsland = function (grid) {
  return JSON.parse(JSON.stringify(grid));
};

var countIslands = function (grid) {
  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[row].length ||
      grid[row][col] == "0"
    ) {
      return;
    }
    grid[row][col] = "0";
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
};

let grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
