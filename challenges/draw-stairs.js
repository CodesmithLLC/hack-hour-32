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
    for (let i = 1; i <= n; i++) { // i starts with 1
        if (i <= n) { // first run i = 1 ; 
            const temp = [];
            for (j = n; j > 0; j--) { // j = 6
                if (j < i || i === n) { // if j is less than i
                    temp.push('*'); // put star
                } else { // if j is greater than i
                    temp.push(' '); // put space
                }
            } //  [i = 1, j = 6, 5, 4, 3, 2, 1]
            console.log(temp.join(''));
        }
        // if (i === n) {
        //     const temp = [];
        //     for (j = 0; j < i; j++) {
        //         temp.push('*');
        //     }
        //     console.log(temp.join(''));
        // }
    }
}

drawStairs(6)


module.exports = drawStairs;
