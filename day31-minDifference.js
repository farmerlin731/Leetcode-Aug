//Concept:
//SoluA: Sort them, and compare the difference between n[i] & n.at(-4+i)
//SoluB: Find 4 max & min, and compate the difference.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) return 0;
  const max4 = findMax4(nums);
  const min4 = findMin4(nums);
  let ans = Infinity;
  for (let i = 0; i < 4; i++) {
    ans = Math.min(max4[i] - min4[i], ans);
  }
  return ans;
};

function findMax4(nums) {
  const result = [];
  const tmpNums = [...nums];
  for (let count = 0; count < 4; count++) {
    let max = Math.max(...tmpNums);
    tmpNums.splice(tmpNums.indexOf(max), 1);
    result.push(max);
  }
  return result;
}

function findMin4(nums) {
  const result = [];
  const tmpNums = [...nums];
  for (let count = 0; count < 4; count++) {
    let min = Math.min(...tmpNums);
    tmpNums.splice(tmpNums.indexOf(min), 1);
    result.unshift(min);
  }
  return result;
}

// let nums = [1, 5, 0, 10, 14, 2, 7, 6];
// let nums = [1, 5, 0, 10, 14];
let nums = [5, 3, 2, 4];

console.log(minDifference(nums));
