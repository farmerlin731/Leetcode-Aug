//First Idea:
//Just need to check if the elements are equal.
//On.. the element maybe duplicate.

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqualShouldBeUnique = function (target, arr) {
  const set = new Set(target);

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) return false;
  }

  return true;
};

var canBeEqual = function (target, arr) {
  const hashMap = {};
  target.forEach((num) => (hashMap[num] = (hashMap[num] || 0) + 1));
  arr.forEach((num) => (hashMap[num] = (hashMap[num] || 0) - 1));
  for (const key in hashMap) {
    if (hashMap[key] != 0) return false;
  }
  return true;
};

let target = [1, 2, 3, 4],
  arr = [2, 4, 1, 3];
// let target = [1, 2, 2, 3];
// let arr = [1, 1, 2, 3];

console.log(canBeEqual(target, arr));
