/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(base===undefined){
        return;
    }
    if(power===undefined){//must apply L-Hopital's rule 0^0
        return;
    }
    if(power==0){
        return 1;
    }
    else if(power==1){
        return base;
    }
    // else if(0<power && power<1){

    // }
    else if(power<0){
        ///2 fractions
        //if(power<0){
            return 1/(base)*pow(base,power+1)
       // }
    }
    else{
        //if(power>0)
        //{
            return base*power(base,power-1);
       // }
    }

}
console.log(pow(3,-2));

module.exports = pow;
