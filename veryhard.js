//VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

////Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you.

//Example 1:

//Input: coins = [1, 2, 5], amount = 11

//Output: 3

//Explanation: 11 = 5 + 5 + 1

//Example 2:

//Input: coins = [2], amount = 3

//Output: -1

let coinChange = function (coins, amount) {
  const table = new array(amount + 1).fill(infinity);
  table[0] - 0;
  for (let coin of coin) {
    for (let coin = 0; i < table.length; i++) {
      if (coin <= i) {
        let idx = i - coin;
        let pontentialAmt = table[idx] + 1;
        table[i] = Math.min(pontentialAmt, table[i]);
      }
    }
  }
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

console.log(coinChange([1, 2, 5]));
console.log(coinChange([2], 3));
