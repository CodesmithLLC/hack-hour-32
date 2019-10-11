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

case n - will draw n lines

line 1 = e=n-1 / s=1
line 2 = e=n-2 / s=2
line n = e=0 / s = n

*/



function drawStairs(n) {
    let numberOfDrawedStairs = 1;
    let emptySpace = ' ';
    let stair = '*';
    while (n>0) {
        console.log(emptySpace.repeat(n-1)+stair.repeat(numberOfDrawedStairs)) ;
        n--;
        numberOfDrawedStairs++;
    }
}

drawStairs(6)

module.exports = drawStairs;
