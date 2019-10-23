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

function romanNumeral(n) {
    const obj ={
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    const roman = [I,IV,V,IX,X,XL,L,XC,C,CD,D,CM,M]
    const number = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    const resultNum = 0;
    while(n===resultNum){
        if (n=== ){
            resultNum+=
        }
    }
    // for (let keys in obj){
    //     if (n === keys){
    //         return obj[keys]
    //     }else if(n < keys){

    //     }
    // }

    // for (let i=0; i<number.length; i++){
    //     if (n === number[i]){
    //         return roman[i];
    //     }else if(n<number[i] && resultNum === n){
    //         number[i-1]
    //     }
    // }
}

module.exports = romanNumeral;
