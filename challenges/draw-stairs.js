/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let m = 1;
  while (n > 0) {
    console.log(' '.repeat(n - 1) + '*'.repeat(m))
    n -= 1;
    m += 1;
  }
}

module.exports = drawStairs;
