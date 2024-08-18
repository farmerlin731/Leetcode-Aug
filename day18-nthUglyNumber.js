//First Idea:
//Think about the exponential.. but the way is wrong. XD
//https://leetcode.com/problems/ugly-number-ii/solutions/329484/heavily-commented-javascript-bottom-up-dp-solution

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n).fill(1);
  const counter = [0, 0, 0];

  for (i = 1; i < n; i++) {
    let multTwo = dp[counter[0]] * 2;
    let multThree = dp[counter[1]] * 3;
    let multFive = dp[counter[2]] * 5;
    dp[i] = Math.min(multTwo, multThree, multFive);

    if (dp[i] == multTwo) counter[0]++;
    if (dp[i] == multThree) counter[1]++;
    if (dp[i] == multFive) counter[2]++;
  }
  return dp[n - 1];
};

let n = 10;
console.log(nthUglyNumber(n));
