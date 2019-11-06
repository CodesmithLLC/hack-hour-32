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
 *  Return 0 if no profit is possible OR if arr is invalid.
 */

function bestProfit(stock_prices_yesterday) {
    let arr = stock_prices_yesterday;
    if (!arr || arr.length < 2) return 0;


    const max = Math.max(...arr);
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.indexOf(max)) {
            // console.log(arr[arr.length - 1])
            arr = arr.slice(0, arr.indexOf(max));
            //console.log(arr)
            min = Math.min(...arr);
            // console.log(`min: `, min, `profits:`, max - min);

        }
    }
    return max - min;

}

const a = [20, 100, 200, 400, 50, 30];
//const a = [100, 200]
console.log(bestProfit(a))

module.exports = bestProfit;
