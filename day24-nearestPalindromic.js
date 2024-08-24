//https://leetcode.com/problems/find-the-closest-palindrome/solutions/5683826/90-54-faster-solution-efficient-nearest-palindrome-finder-in-javascript
//https://leetcode.com/problems/find-the-closest-palindrome/solutions/5675172/o-1-beats-100-c-java-python-go-rust-javascript

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (numberStr) {
  let number = BigInt(numberStr);
  if (number <= 10n) return (number - 1n).toString();
  if (number === 11n) return "9";

  let length = numberStr.length;
  let leftHalf = BigInt(numberStr.slice(0, (length + 1) / 2));

  let palindromeCandidates = [
    generatePalindromeFromLeft(leftHalf - 1n, length % 2 === 0),
    generatePalindromeFromLeft(leftHalf, length % 2 === 0),
    generatePalindromeFromLeft(leftHalf + 1n, length % 2 === 0),
    BigInt(10n ** BigInt(length - 1)) - 1n,
    BigInt(10n ** BigInt(length)) + 1n,
  ];

  let nearestPalindrome = 0n;
  let minDifference = BigInt(Number.MAX_SAFE_INTEGER);

  for (let candidate of palindromeCandidates) {
    if (candidate === number) continue;
    let difference =
      candidate > number ? candidate - number : number - candidate;
    if (
      difference < minDifference ||
      (difference === minDifference && candidate < nearestPalindrome)
    ) {
      minDifference = difference;
      nearestPalindrome = candidate;
    }
  }

  return nearestPalindrome.toString();
};

function generatePalindromeFromLeft(leftHalf, isEvenLength) {
  let palindrome = leftHalf;
  if (!isEvenLength) leftHalf = leftHalf / 10n;
  while (leftHalf > 0n) {
    palindrome = palindrome * 10n + (leftHalf % 10n);
    leftHalf = leftHalf / 10n;
  }
  return palindrome;
}
