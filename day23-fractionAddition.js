//First Idea:
//Regular Expression ?
//Oh,, u can't compute the number directly.. because it won't be fraction.

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

  const result = expression
    .match(/[+-]?\d+\/\d+/g)
    .map((num) => num.split("/"))
    .reduce(
      ([sumC, sumM], [child, mom]) => {
        let x = sumC * mom + child * sumM;
        let y = sumM * mom;
        let maxFactor = Math.abs(gcd(x, y));
        return [x / maxFactor, y / maxFactor];
      },
      [0, 1]
    );

  return `${result[0]}/${result[1]}`;
};

// let expression = "-1/2+1/2+1/3";
let expression = "1/3-1/2";

console.log(fractionAddition(expression));
