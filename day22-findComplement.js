//First Idea:
//Find the number of bits, and let the MAX_NUM minor input.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let ori = num;
  let bits = 0;
  while (num > 0) {
    bits++;
    num >>= 1;
  }

  //   console.log(bits);
  //   console.log();
  return 2 ** bits - 1 - ori;
};

let num = 1;
console.log(findComplement(num));
