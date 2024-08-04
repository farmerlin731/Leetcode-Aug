//First Idea:
//Should we compute all the element?
//Solu from leetcode:All the element @ new array, and sort it at the same time.
//Sole matches my first idea.. we don't neew do compute all elements .

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var rangeSum = function (nums, n, left, right) {
  const mod = 10 ** 9 + 7;

  //The following usage for constructing is not valid.
  // const heap = new MinPriorityQueue({ priority: (x) => x[0] });
  const minHeap = new MinPriorityQueue((x) => x[0]);

  nums.forEach((num, i) => minHeap.enqueue([num, i]));

  let sum = 0;
  for (let j = 1; j <= right; j++) {
    const [val, i] = minHeap.dequeue();
    if (j >= left) sum = (sum + val) % mod;
    if (i < n - 1) minHeap.enqueue([val + nums[i + 1], i + 1]);
  }

  return sum;
};

var rangeSumInLeetcode = function (nums, n, left, right) {
  const mod = 10 ** 9 + 7;
  const minHeap = new MinPriorityQueue({ priority: (x) => x[0] });

  nums.forEach((num, i) => minHeap.enqueue([num, i]));

  let sum = 0;
  for (let j = 1; j <= right; j++) {
    const [val, i] = minHeap.dequeue().element;
    if (j >= left) sum = (sum + val) % mod;
    if (i < n - 1) minHeap.enqueue([val + nums[i + 1], i + 1]);
  }

  return sum;
};

let nums = [1, 2, 3, 4],
  n = 4,
  left = 1,
  right = 5;

console.log(rangeSum(nums, n, left, right));
