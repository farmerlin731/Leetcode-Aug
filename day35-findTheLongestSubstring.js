//First Idea:
//Substring -> Sliding Window(2-pointer)?
//Point: When single vowel, u should shorten it or be longer?
//Oh,, bitMask? -> point:The same mask means u can calculate the max-lengh.
//https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/2898302/python-javascript-efficient-solution-with-detailed-explanation

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const vowelMap = { a: 1, e: 2, i: 4, o: 8, u: 16 };
  const maskMap = new Map([[0, -1]]); // '0':'-1' means there is no vowel when length be zero.
  let curMask = 0;
  let maxLength = 0;

  for (let i in s) {
    const char = s[i];
    if (vowelMap[char]) curMask ^= vowelMap[char];

    if (maskMap.has(curMask)) {
      maxLength = Math.max(maxLength, i - maskMap.get(curMask));
    } else {
      maskMap.set(curMask, i);
    }
  }
  // console.log(maskMap);
  // console.log(maxLength);
  return maxLength;
};

let s = "eleetminicoworoep";
// let s = "leetcodeisgreat";

console.log(findTheLongestSubstring(s));
