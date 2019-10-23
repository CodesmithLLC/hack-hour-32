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
    if(typeof(n) === "number"){
        let numeralObj = {
            'M': 1000,
            'CM': 900,
            'D': 500, 
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4, 
            'I':1,
        }
        let finalAnswer = ''
        for(key in numeralObj){
            while(n >= numeralObj[key]){
                finalAnswer += key;
                n -= numeralObj[key];
                
            }
        }
        return finalAnswer
    
    } else if(typeof(n) === "string"){
        let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let numeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        let finalAnswer = 0
    for(let i = 0; i <= number.length; i++){
        while(n.indexOf(numeral[i]) === 0){
            finalAnswer = finalAnswer + number[i];
            n = n.replace(numeral[i], '')
        }
    }
        return finalAnswer
    }
}

module.exports = romanNumeral;
