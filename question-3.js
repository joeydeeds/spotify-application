/* changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

function changePossibilities(total, coins) {
  // copy the coins and remove the first one
  const copy = coins.slice(0)
  const coin = copy.shift()

  // if coin is undefined or total is less than 0, we missed the target. return 0
  // else add 1 to the solution since it matched
  if (total < 0 || !coin) {
    return 0
  } else if (total === 0) {
    return 1
  } else {
    // 1. we need to check the total and remainder of coins
    // 2. reduce the total by coin to see if hits 0, it's a match
    return (
      changePossibilities(total, copy) +
      changePossibilities(total - coin, coins)
    )
  }
}

module.exports = changePossibilities
