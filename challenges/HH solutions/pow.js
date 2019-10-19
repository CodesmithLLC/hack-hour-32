/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 // Recursive solution 
function pow(base, power) {
    //base case: power is one, return base to calculate previous calls
    if(power === 0){
        return 1;
    }
    //recursive case: power is greater than one, return base times pow(base, power - 1)
    return base * pow(base, power - 1)
}