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
//buy low sell high
//we only get one
if(!stock_prices_yesterday){ return;}
let min=Math.min(...stock_prices_yesterday)
let max=Math.max(...stock_prices_yesterday)
while(stock_prices_yesterday.indexOf(max)<stock_prices_yesterday.indexOf(min))
{
    stock_prices_yesterday=stock_prices_yesterday.slice(stock_prices_yesterday.indexOf(max));
    min=Math.min(...stock_prices_yesterday);
    max=Math.max(...stock_prices_yesterday);
}

return max-min;
}

module.exports = bestProfit;
console.log(bestProfit([1,2,5,11,6,2]));
console.log(bestProfit([9,1,2,3,1]));