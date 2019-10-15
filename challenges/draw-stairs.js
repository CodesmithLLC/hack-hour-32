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
    if (n <= 0 || n > 100) return 'error'
    let space = ' '
    let star = '*'
    let spacecounter = n - 1
    let starcounter = 1
    let result = ''
    for (let i = 0 ; i < n; i++) {
        console.log(space.repeat(spacecounter).concat(star.repeat(starcounter)))
        spacecounter--
        starcounter++       
    }
    return result

}


console.log(drawStairs(5))
module.exports = drawStairs;

