//First Idea:
//Sort them, and compute the difference?
//Don't need to use regex, instead u can just use 'split' .

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const timeMinVers = timePoints.map((time) => {
    const [hour, minute] = time.split(":");
    return hour * 60 + +minute;
  });

  timeMinVers.sort((a, b) => a - b);
  timeMinVers.push(timeMinVers[0] + 1440);

  let minDiff = Infinity;
  for (let i = 1; i < timeMinVers.length; i++) {
    minDiff = Math.min(minDiff, timeMinVers[i] - timeMinVers[i - 1]);
  }
  return minDiff;
};

// let timePoints = ["23:59", "00:00"];
let timePoints = ["00:00", "23:59", "00:00"];

console.log(findMinDifference(timePoints));
