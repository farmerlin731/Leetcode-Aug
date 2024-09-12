//First Idea:
//Create a set from 'allowed', and check the words if follow the rule.
//Oh,,, need to remember the usage of 'every'.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const setAllow = new Set([...allowed]);
  console.log(setAllow);

  let count = 0;

  for (let i = 0; i < words.length; i++) {
    console.log(`round:${i} - ${words[i]}`);

    for (let j = 0; j < words[i].length; j++) {
      const char = words[i][j];
      if (!setAllow.has(char)) {
        console.log(`error:${char}`);
        count++;
        break;
      }
    }
  }

  return words.length - count;
};

const countConsistentStringsFromSolu = (allowed, words) => {
  let set = new Set(allowed);
  return words.reduce((a, w) => {
    return w.split("").every((l) => set.has(l)) ? ++a : a;
  }, 0);
};

// let allowed = "ab",
//   words = ["ad", "bd", "aaab", "baa", "badab"];

let allowed = "fstqyienx",
  words = [
    "n",
    "eeitfns",
    "eqqqsfs",
    "i",
    "feniqis",
    "lhoa",
    "yqyitei",
    "sqtn",
    "kug",
    "z",
    "neqqis",
  ];

console.log(countConsistentStrings(allowed, words));
