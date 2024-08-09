//First Idea:
//Find the '5'.
//It's the middle of magic square.
//And then check the surrounding and the diagonal.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  if (grid.length < 3 || grid[0]?.length < 3) return 0;

  let count = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] == 5 && checkSurround(grid, i, j)) {
        count++;
      }
    }
  }
  return count;
};

function checkSurround(grid, i, j) {
  //check four edges
  if (
    grid[i - 1][j - 1] + grid[i - 1][j] + grid[i - 1][j + 1] != 15 ||
    grid[i + 1][j - 1] + grid[i + 1][j] + grid[i + 1][j + 1] != 15 ||
    grid[i - 1][j - 1] + grid[i][j - 1] + grid[i + 1][j - 1] != 15 ||
    grid[i - 1][j + 1] + grid[i][j + 1] + grid[i + 1][j + 1] != 15
  ) {
    return false;
  }

  //check num unique
  const set = new Set();
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if (grid[x][y] <= 0 || grid[x][y] >= 10) return false;
      set.add(grid[x][y]);
    }
  }

  if (set.size != 9) return false;

  return true;
}

let grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];

// let grid = [[8]];
console.log(numMagicSquaresInside(grid));
