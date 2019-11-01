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
    let ast = '*';
    let whiteSpace = ' ';
    let stair = '';
    for (let i = 1; i <= n; i++) {
        for (let s = n - i - 1; s >= 0; s--) {
            stair += whiteSpace;
        }
        for (let a = 1; a < i + 1; a++) {
            stair += ast;
        }
        console.log(stair);
        stair = '';
    }
}

drawStairs(100);


module.exports = drawStairs;
