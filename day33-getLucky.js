//First Idea:
//Just Follow the steps..

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let sum = "";
  //Transfer to number.
  for (let i = 0; i < s.length; i++) {
    sum += (s.charCodeAt(i) - 96).toString();
  }
  //Do rotate.
  for (let j = 0; j < k; j++) {
    sum = sum
      .split("")
      .reduce((acc, cur) => acc + +cur, 0)
      .toString();
    // console.log(`${j}:${sum}`);
  }
  return sum;
};

let s = "leetcode",
  k = 2;

console.log(getLucky(s, k));
