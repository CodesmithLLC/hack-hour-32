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
<<<<<<< HEAD
    for(let i = 1; i <= n; i++){
        console.log(' '.repeat(n-i) + '*'.repeat(i));
    }
}
drawStairs(6);
=======

}
>>>>>>> 4cfe6b9d1384f54a58f3bd1df15108e5bd5ff4d4


module.exports = drawStairs;
