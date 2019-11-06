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



// ***** O(1) Time ***** //
function bestProfit(stock_prices_yesterday) {
    if (!Array.isArray(stock_prices_yesterday)) return 0;
    const highestPrice = Math.max(...stock_prices_yesterday);
    const highestPriceIndex = stock_prices_yesterday.indexOf(Math.max(...stock_prices_yesterday));
    const relevantData = stock_prices_yesterday.slice(0, highestPriceIndex);
    const lowestPrice = Math.min(...relevantData);
    if (lowestPrice >= highestPrice) return 0;
    return highestPrice - lowestPrice;
}


console.log('Should be "0", actual is >> ', bestProfit([500, 200, 300, 100]))
console.log('Should be "500", actual is >> ', bestProfit([100, 200, 600, 100]))
console.log('Should be "800", actual is >> ', bestProfit([500, 200, 300, 1000]))

module.exports = bestProfit;
