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
    let maxIndex = stock_prices_yesterday.indexOf(Math.max.apply(Math, stock_prices_yesterday));
    let minIndex = 0
    for(let i = 0; i < maxIndex; i++){
        if(stock_prices_yesterday[i] < stock_prices_yesterday[minIndex]){
            minIndex = stock_prices_yesterday.indexOf(stock_prices_yesterday[i])
        }
    }
    if(stock_prices_yesterday[maxIndex] < stock_prices_yesterday[minIndex] || stock_prices_yesterday.length === 0 || stock_prices_yesterday[maxIndex] === stock_prices_yesterday[minIndex]){
        return 0
    } else {
        return stock_prices_yesterday[maxIndex] - stock_prices_yesterday[minIndex]
    }
}
console.log(bestProfit([60, 50, 40, 30, 20, 10, 100, 80, 70]))
module.exports = bestProfit;
