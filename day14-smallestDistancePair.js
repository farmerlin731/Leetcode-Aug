//First Idea:
//Sort, and then compute the distance?
//But the hint says u need to use binary search Q_Q
//In this solu, index 'i' means the distance 'd'.
//And the 'val' means 'how many' pairs is lower than 'k'.
//Get the deeper understanding of binary search!
//BS + Two Pointer!
//https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/1144793/javascript-runtime-beats-100-memory-beats-95

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);

  let lower = 0;
  let upper = nums[nums.length - 1] - nums[0];

  while (lower < upper) {
    let mid = ~~((lower + upper) / 2);
    let count = countLessThanDis(mid);
    if (count < k) {
      lower = mid + 1;
    } else {
      upper = mid;
    }
  }

  return lower;

  function countLessThanDis(dis) {
    let left = 0,
      right = 0,
      count = 0;

    while (left < nums.length - 1) {
      while (right < nums.length && nums[right] - nums[left] <= dis) {
        right++;
      }
      count += right - left - 1;
      left++;
    }

    return count;
  }
};

let nums = [1, 6, 1],
  k = 2;

console.log(smallestDistancePair(nums, k));
