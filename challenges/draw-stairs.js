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
	function createSpaces(n) {
		let spaceArray = [];
		for (let i = 0; i < n; i++) {
			spaceArray.push(' ');
		}
    	return spaceArray;
	}

    spaceArray = createSpaces(n);
	for (let i = n; i > 0; i--) {
		spaceArray[n - 1] = '*';
	}
	console.log(spaceArray.join(''));
}

// drawStairs(5);


module.exports = drawStairs;


