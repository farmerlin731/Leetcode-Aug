//First Idea:
//Iterate it：
//Condition_A: bill[i] > 5*(i+1) -> false
//Conditoin_B: The dollar$5 nums, 5:+1 , 10:-1, 20:-1or-3
//Oh.. the above is wrong!there is $20, u can't use it for change!
//So just count the $5 & $10 u received!

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const cashCount = [0, 0, 0];
  for (const cash of bills) {
    // console.log(cash);

    if (cash == 5) {
      cashCount[0]++;
    } else if (cash == 10) {
      cashCount[0]--;
      cashCount[1]++;
    } else if (cash == 20) {
      if (cashCount[1] == 0) {
        cashCount[0] = cashCount[0] - 3;
      } else {
        cashCount[0]--;
        cashCount[1]--;
      }
    }
    // console.log(cashCount);

    if (!cashCount.every((e) => e >= 0)) return false;
  }
  return true;
};

// let bills = [5, 5, 5, 10, 20];
// let bills = [5, 5, 10, 10, 20];
let bills = [5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5];
console.log(lemonadeChange(bills));
