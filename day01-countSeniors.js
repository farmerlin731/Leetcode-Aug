//First Idea:
//Use regular expression to check the detail.

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniorsRegex = function (details) {
  let count = 0;
  const regex = /(\d{10})([MF])(\d{2})(\d{2})/;

  details.forEach((detail) => {
    let match = detail.match(regex);
    if (match && match[3] >= 60) count++;
  });

  return count;
};

var countSeniors = function (details) {
  return details.filter((el) => el.slice(-4, -2) > 60).length;
};

const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];

console.log(countSeniors(details));
