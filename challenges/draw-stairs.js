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
    let returnArr = [];
    for(let i = 0; i < n; i++){
        let newString = "";
        for(let j = 0; j < i + 1; j++){
            newString += "*";
        }
        returnArr.push(newString);
        for(let k = 0; k < returnArr.length - 1; k++){
            returnArr[k] = " " + returnArr[k];
        }
    }
    return returnArr.join('\n');
}
console.log(drawStairs(3));


module.exports = drawStairs;
