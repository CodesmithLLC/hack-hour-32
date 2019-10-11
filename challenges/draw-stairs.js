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

function drawStairs(n, i = 0) {
  const step = '*';
  const space = ' ';
 
  while (n+1 > 0) {
	// draw code
	if (i !== 0) {
	  console.log(space.repeat(n)+step.repeat(i));
	}
	return drawStairs(n-1, i+1);
  }
}

//drawStairs(6);

module.exports = drawStairs;
