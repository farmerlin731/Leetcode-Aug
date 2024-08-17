//First Idea:
//A little like D.P ?
//Row & Col ... and each elements means the max score u can get at the position?
//https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/1372089/javascript-clear-explanation

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let pre = [...points[0]];
  let cur = new Array(pre.length);

  for (let i = 1; i < points.length; i++) {
    for (let j = 0, maxPlus = 0; j < points[0].length; j++) {
      cur[j] = Math.max(maxPlus - 1, pre[j]);
      maxPlus = cur[j];
      // console.log(maxPlus);
    }

    for (let j = points[0].length - 1, maxPlus = 0; j >= 0; j--) {
      cur[j] = Math.max(maxPlus - 1, cur[j]);
      maxPlus = cur[j];
      pre[j] = cur[j] + points[i][j];
    }

    // console.log(pre);
  }

  return Math.max(...pre);
};

// let points = [
//   [1, 2, 3],
//   [1, 5, 1],
//   [3, 1, 1],
// ];

let points = [
  [1, 5],
  [2, 3],
  [4, 2],
];

console.log(maxPoints(points));
