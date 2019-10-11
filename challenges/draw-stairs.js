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
    //
    if(n<=0){
        return "";
    }
    else{
        while(n>=1){
            let result="";
            for(let i=1;i<=n;i++){
                result+="*";
            }
            if(n==1){
                return result;
            }
            else{
                return drawStairs(n-1)+"\n"+result; //call stack
            }
            
        }
    }
    
}


module.exports = drawStairs;
console.log(drawStairs(6));