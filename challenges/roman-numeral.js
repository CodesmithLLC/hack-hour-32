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
    // const obj ={
    //     1000: 'M',
    //     900: 'CM',
    //     500: 'D',
    //     400: 'CD',
    //     100: 'C',
    //     90: 'XC',
    //     50: 'L',
    //     40: 'XL',
    //     10: 'X',
    //     9: 'IX',
    //     5: 'V',
    //     4: 'IV',
    //     1: 'I'
    // }
    let result = '';
    const roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'].reverse()
    const number = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    // const resultNum = 0;
    if(n<=0) return result
    // for (let keys in obj){
    for (let i=0; i<roman.length; i++){
        // if (n >= keys){
            if (n>= number[i]){
            // result += obj[keys];
            result += roman[i]
            // n-= keys;
            n-=number[i]
            return result + romanNumeral(n)
        }
    }
}
console.log(romanNumeral(1503))
module.exports = romanNumeral;
