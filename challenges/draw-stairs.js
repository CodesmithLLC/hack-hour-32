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
    // loop from i to n
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i); // num of spaces = n-i 
        let char = '*'.repeat(i);   // num of * is i
        console.log(spaces + char); // print concatenated string
    }
    // don't need to return anything
}

drawStairs(3);

//  * (2 spaces)
// ** (1 space)
//*** (0 space)
module.exports = drawStairs;
