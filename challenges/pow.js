/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(base===undefined){
        return;
    }
    if(power===undefined || power===0){//must apply L-Hopital's rule 0^0
        return;
    }
    let result=1;
    while(power>0)
    {
        result*=base;
        power--;
    }
    return result;

}


module.exports = pow;
