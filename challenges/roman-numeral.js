/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n, str="") {
    
    if(n-1000 >= 0){
        str+="M";
        n=n-1000
    }
    else if(n-900 >= 0){
        str+="CM";
        n=n-900;
    }
    else if(n-500 >= 0){
        str += "D";
        n = n-500;
    }
    else if(n-400 >= 0){
        str += "CD";
        n = n-400
    }
    else if(n-100 >= 0){
        str += "C";
        n=n-100;
    }
    else if(n-90 >=0){
        str+="XC";
        n = n-90;

    }
    else if(n-50 >=0){
        str += "L";
        n = n-50;
    }
    else if(n-40 >=0){
        str +="XL";
        n = n-40;
    }
    else if(n-10>= 0){
        str +="X";
        n = n-10;
    }
    else if(n-9>=0){
        str+="IX";
        n=n-9;
    }
    else if(n-5>=0){
        str+="V";
        n=n-5;
    }
    else if(n-4>=0){
        str+="IV";
        n=n-4;
    }
    else if(n-1==0){
        str+="I";
        return str;
        
    }
    else if(n == 0){
        return str;
    }
    return romanNumeral(n,str);
}
module.exports = romanNumeral;
