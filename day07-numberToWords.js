//Fist idea:
//Group the number by thousands (3 digits).
//And then look the solution @ leetcode. XD
//https://leetcode.com/problems/integer-to-english-words/solutions/488861/javascript-recursive/?envType=daily-question&envId=2024-08-07
//The hardest point I feel is the edge case.

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const map19 = [
    null,
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const mapTens = [
    null,
    null,
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const mapExpo = {
    "10e8": "Billion",
    "10e5": "Million",
    "10e2": "Thousand",
    "10e1": "Hundred",
  };

  function helper(n) {
    if (n == 0) return [];
    if (n <= 19) return [map19[n]];
    if (n <= 99) return [mapTens[~~(n / 10)], ...helper(n % 10)];

    for (const level of Object.keys(mapExpo)) {
      if (n / level >= 1) {
        return [...helper(~~(n / level)), mapExpo[level], ...helper(n % level)];
      }
    }
  }

  return helper(num).join(" ") || "Zero";
};

console.log(numberToWords(100));
// console.log(numberToWords(1314520));
