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
    if (!n || typeof n !== 'number' || n <= 0) return 'Please enter a valid number.';

    const block = '*';
    let space = ' ';
    let i = n - 1;
    let j = 1;
    while (j <= 6) {
        console.log(space.repeat(i) + block.repeat(j))
        i--;
        j++;
    }
}

// TESTS
// console.log(drawStairs(6));
// console.log(drawStairs(-5));
// console.log(drawStairs('hi'));

module.exports = drawStairs;
