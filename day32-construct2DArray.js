//First Idea:
//Use 'slice' to solve it.
//First, u need to check if m*n is equal to the length of arrOri.

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return [];
  const ans = [];
  for (i = 0; i < m * n; i += n) {
    ans.push(original.slice(i, i + n));
  }
  return ans;
};

// let original = [1, 2, 3, 4],
//   m = 2,
//   n = 2;

let original = [1, 2],
  m = 1,
  n = 1;

console.log(construct2DArray(original, m, n));
