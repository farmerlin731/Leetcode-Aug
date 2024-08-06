//First Idea:
//Huffman Encoding?
//Oh.. maybe easier. Each Level can use '8' number.

/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const charMap = {};
  for (const char of word) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  // console.log(charMap);
  let countArr = Object.values(charMap).sort((a, b) => b - a);

  // let tmpArr = countArr.splice(0, 8);
  // console.log(tmpArr);
  // console.log(countArr);

  let multplier = 1;
  let result = 0;
  while (countArr.length !== 0) {
    const layerSum = countArr.splice(0, 8).reduce((sum, cur) => sum + cur);
    result += layerSum * multplier++;
    console.log(`sum:${layerSum}, result:${result}`);
  }
  //   console.log(result);
  return result;
};

let word = "xyzxyzxyzxyz";
// let word = "aabbccddeeffgghhiiiiii";

console.log(minimumPushes(word));
