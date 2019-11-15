/*
 * we've got a list of stock prices over the course of some interval
 * how do we figure out what the maximum possible profit over the course of a day is?
 * this can be done in O(n) time
 */

const maxProfit = (prices)=>{
  // set two variables, profit [set to 0] and lowest val [set to first index in array];
    let profit = 0
    let lowestVal = prices[0];

    
    for (let i = 0; i < prices.length; i++){
      // with each iteration, declare a newProfit.
        let newProfit = prices[i]-lowestVal;
        console.log(`New Profit on iteration number ${i}: ${newProfit}`);
        // Build two comparisons: one for newProfit v profit, and one for prices[i] v lowestVal.
        
        if(newProfit > profit){
          profit = newProfit;
          console.log(`Update: Profit change.`)
        }

        if (prices[i]<lowestVal){
        lowestVal = prices[i];
        }
      }

      return profit
    }

//const mondayPrices = [1, 2, 100, -4, 200, 10]
//console.log(maxProfit(mondayPrices)); //=> 204