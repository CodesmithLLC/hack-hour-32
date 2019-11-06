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
  let minStockPrice = Infinity;
  let maxStockPrice = 0;
  
  if(stock_prices_yesterday.length === 0) return 0;
  for(let i = 0; i < stock_prices_yesterday.length; i += 1) {
    minStockPrice = Math.min(minStockPrice, stock_prices_yesterday[i]);
    maxStockPrice = Math.max(maxStockPrice, stock_prices_yesterday[i] - minStockPrice);
  }
  return maxStockPrice;
}

const stockPrices1 = [2, 50, 1, 4, 7, 9, 100, 500, 25, 27, 50, 55]; // 499
const stockPrices2 = [2, 50, 4, 7, 9, 100, 500, 25, 27, 50, 55, 1]; // 498
const stockPrices3 = 25; 
console.log(bestProfit(stockPrices3));

module.exports = bestProfit;
