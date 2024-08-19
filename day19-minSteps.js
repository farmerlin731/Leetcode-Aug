//Fist Idea:
//Prime Factorization ?
//Oh,, DP is a suitable solution for this problem!

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  const dp = new Array(n + 1).fill(0);
  // const primeArr = [2, 3, 5, 7, 11, 13, 17, 19];
  const primeArr = [];

  for (let i = 2; i <= n; i++) {
    let sPrime = smallestPrimeFactor(i, primeArr);
    if (sPrime == 1) {
      primeArr.push(i);
      dp[i] = i;
    } else {
      dp[i] = dp[i / sPrime] + sPrime;
    }
  }

  return dp[n];
};

function smallestPrimeFactor(n, arr) {
  for (const prime of arr) {
    if (prime > Math.sqrt(n)) break;
    if (n % prime == 0) return prime;
  }
  return 1;
}

let n = 9;
console.log(minSteps(n));
