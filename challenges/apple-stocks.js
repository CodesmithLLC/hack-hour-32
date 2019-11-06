/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {

  // Edge cases
  if (stock_prices_yesterday.length < 1) return 0;

  let low = Number.POSITIVE_INFINITY;
  let high = Number.NEGATIVE_INFINITY;

  let highTime;
  let lowTime;

  stock_prices_yesterday.forEach( (price, i) => {
	// Re-assign high and low;
	if (price < low) {
	  low = price;
	  lowTime = i;
	}
	if (price > high) {
	  high = price;
	  hightime = i;
	}
  });

  if (high - low < 0) return 0;

  return high - low;

}

//const prices = [500, 550, 400, 480, 600, 530];

//console.log(bestProfit(prices));

module.exports = bestProfit;
