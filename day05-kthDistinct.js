//First Idea:
//Brutal Force - Make a dictionary, delete the element 'count != 1'.
//The key is ordered ?

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const hashMap = {};
  let count = 0;

  for (const s of arr) hashMap[s] = (hashMap[s] || 0) + 1;
  for (const key in hashMap) {
    if (hashMap[key] === 1) count++;
    if (count === k) return key;
  }

  return "";
};

let arr = ["d", "b", "c", "b", "c", "a"],
  k = 2;

// let arr = ["a", "b", "a"],
//   k = 3;

console.log(kthDistinct(arr, k));
