//First Idea:
//A little different from '3sum'.
//Maybe after sorting... and then ? XD
//OS: After saw the solu: Think about recursion(dfs) can simplify ur logic.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  //solu
  const result = [];
  candidates.sort((a, b) => a - b);
  helper(target, 0, []);
  return result;

  function helper(curTarget, start, set) {
    if (curTarget < 0) return;
    if (curTarget == 0) return result.push(set);

    for (let i = start; i < candidates.length; i++) {
      //Skip the same num in the same layer.
      if (i != start && candidates[i] == candidates[i - 1]) continue;
      if (candidates[i] > curTarget) break;
      helper(curTarget - candidates[i], i + 1, [...set, candidates[i]]);
    }
  }
};

// let candidates = [10, 1, 2, 7, 6, 1, 5],
//   target = 8;
let candidates = [2, 5, 2, 1, 2],
  target = 5;

console.log(combinationSum2(candidates, target));
