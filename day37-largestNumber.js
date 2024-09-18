//First Idea:
//Map to string, and sort them.
//But how to deal with the second bits? Q_Q
//Oh,, the usage of 'sort' is very cool...
//https://leetcode.com/problems/largest-number/solutions/53306/5-lines-solution-in-javascript

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  return nums
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("")
    .replace(/^0+/, "0");
};

let nums = [3, 30, 34, 5, 9];

console.log(largestNumber(nums));
