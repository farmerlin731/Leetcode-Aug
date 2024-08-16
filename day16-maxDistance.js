//First Idea:
//Pick up the min of index'0' and the max of index'-1'.
//such easy?
//Oh,, need to consider the same position. XD

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let global = [arrays[0].at(0), arrays[0].at(-1)]; // min & max
  let result = 0;

  for (let i = 1; i < arrays.length; i++) {
    let cur = [arrays[i].at(0), arrays[i].at(-1)];
    result = Math.max(result, global[1] - cur[0], cur[1] - global[0]);
    global = [Math.min(global[0], cur[0]), Math.max(global[1], cur[1])];
  }

  return result;
};

var maxDistanceWrongVersion = function (arrays) {
  let globalMax = -Infinity;
  let globalMin = Infinity;

  arrays.forEach((arr) => {
    globalMax = Math.max(globalMax, arr[arr.length - 1]);
    globalMin = Math.min(globalMin, arr[0]);
  });

  return globalMax - globalMin;
};

// let arrays = [
//   [1, 2, 3],
//   [4, 5],
//   [1, 2, 3],
// ];

let arrays = [
  [1, 4],
  [0, 5],
];

let global = [arrays[0].at(0), arrays[0].at(-1)]; // min & max
let result = 0;

for (let i = 1; i < arrays.length; i++) {
  let cur = [arrays[i].at(0), arrays[i].at(-1)];
  result = Math.max(result, global[1] - cur[0], cur[1] - global[0]);
  global = [Math.min(global[0], cur[0]), Math.max(global[1], cur[1])];
}

console.log("haha", result);
