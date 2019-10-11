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
  let stairs = 1;
  //   let spaces = '';
  //   let stars = '';
  let staircase = '';
  for (let i = 0; i < n; i++) {
    // Prints spaces first
    // Stairs is the number of * in the given line
    for (let j = 0; j < n - stairs; j++) {
      //   console.log(' ');
      //   spaces += ' ';
      staircase += ' ';
    }

    // Prints stairs
    for (let j = 0; j < stairs; j++) {
      //   console.log('*');
      //   stars += '*';
      staircase += '*';
    }
    stairs++;
    // console.log(spaces);
    // console.log(stars);
    console.log(staircase);
    console.log('\n');
    // spaces = '';
    // stars = '';
    staircase = '';
  }
}

module.exports = drawStairs;

drawStairs(6);
