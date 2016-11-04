/*
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
/* Brute Force O(n2) time
var getMaxProfit = function (input) {
  var maxProfit = 0;
  //go through every time
  for (var i=0; i<input.length; i++) {
    //for every time, go through every other time
    for (var j=0; j<input.length; j++) {
      //for each pair, find the earlier and later times
      var earlierTime = Math.min(i, j);
      var laterTime = Math.max(i, j);

      //use those to find earlier and later prices
      var earlierPrice = input[earlierTime];
      var laterPrice = input[laterTime];

      //see what our profit would be if we bought at min price and sold at current price
      var potentialProfit = laterPrice - earlierPrice;

      //update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }
  return maxProfit;
}
*/
/*O(n) time and O(1) space.. we only loop through once
Let’s think about some edge cases. What if the stock value stays the same? What if the stock value goes down all day?
If the stock price doesn't change, the max possible profit is 0. Our function will correctly return that. So we're good.
But if the value goes down all day, we’re in trouble. Our function would return 0, but there’s no way we could break even if the price always goes down.
*/
stockPricesYesterday = [9,7,5,3,1];
var getMaxProfit = function (input) {
  if (input.length < 2) {
    throw new Error('getting a profit requires at least 2 prices');
  }
  // we'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  var maxProfit = input[1] - input[0];
  var minPrice = input[0];

  // start at the second (index 1) time
  // we can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // if we started at index 0, we'd try to buy /and/ sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be /negative/--we'd return 0!
  for (var i = 1; i < input.length; i++) {
    var currentPrice = input[i];
    // see what our profit would be if we bought at the
    // min price and sold at the current price
    var potentialProfit = currentPrice - minPrice;
    // maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    // update minPrice so its the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }
  console.log(maxProfit)
  return maxProfit
}
getMaxProfit(stockPricesYesterday);
