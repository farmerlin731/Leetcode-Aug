//First Idea:
//Check the nums of 1's, and use 'Sliding Window' to find the minimum of 0's.
//Apend the array for 'circular'.
//Oh.. u don't need to append array, just modify the index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);

  let minSwap = 0;
  for (let i = 0; i < sum; i++) {
    if (nums[i] == 0) minSwap++;
  }

  let curSwap = minSwap;
  nums = [...nums, ...nums.slice(0, sum)];
  for (let i = 1; i < nums.length - sum; i++) {
    if (nums[i - 1] == nums[i + sum - 1]) continue;
    if (nums[i - 1] == 1) {
      curSwap++;
    } else {
      curSwap--;
      minSwap = Math.min(minSwap, curSwap);
    }
  }

  return minSwap;
};

// let nums = [0, 1, 1, 1, 0, 0, 1, 1, 0];
// let nums = [0, 1, 0, 1, 1, 0, 0];
let nums = [1, 1, 0, 0, 1];

console.log(minSwaps(nums));
