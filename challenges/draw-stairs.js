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

function drawStairs(n, firstElement) {
    let max = n;
    let firstElement = n - (n - 1);
    let incremntedElement = firstElement + 1;
    let numOfSpaces = Math.abs(n - 1);
    let asterikSign = "*";
    let space = " ";
    let row = space.repeat(numOfSpaces) + asterikSign.repeat(n);
    console.log(row);
    updatedArray.push(row);
    if (firstElement === max) {
        console.log(updatedArray);
    } else {
        return drawStairs(max, incrementedElement);
    }
}


module.exports = drawStairs;
