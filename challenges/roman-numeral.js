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

function romanNumeral(n, output) {
    let roman = ''
    if(output){ roman = output };
    if(n - 10000 >= 0){ roman += '(X)'; return romanNumeral(n - 10000, roman) }
    else if(n - 9000 >= 0){ roman += 'M(X)'; return romanNumeral(n - 9000, roman) }
    else if(n - 5000 >= 0){ roman += '(V)'; return romanNumeral(n - 5000, roman) }
    else if(n - 1000 >= 0){ roman += 'M'; return romanNumeral(n - 1000, roman) }
    else if(n - 900 >= 0){ roman += 'CM'; return romanNumeral(n - 900, roman) }
    else if(n - 500 >= 0){ roman += 'D'; return romanNumeral(n - 500, roman) }
    else if(n - 400 >= 0){ roman += 'CD'; return romanNumeral(n - 400, roman) }
    else if(n - 100 >= 0){ roman += 'C'; return romanNumeral(n - 100, roman) }
    else if(n - 90 >= 0){ roman += 'XC'; return romanNumeral(n - 90, roman) }
    else if(n - 50 >= 0){ roman += 'L'; return romanNumeral(n - 50, roman) }
    else if(n - 40 >= 0){ roman += 'XL'; return romanNumeral(n - 40, roman) }
    else if(n - 10 >= 0){ roman += 'X'; return romanNumeral(n - 10, roman) }
    else if(n - 9 >= 0){ roman += 'IX'; return romanNumeral(n - 9, roman) }
    else if(n - 5 >= 0){ roman += 'V'; return romanNumeral(n - 5, roman) }
    else if(n - 4 >= 0){ roman += 'IV'; return romanNumeral(n - 4, roman) }
    else if(n - 1 >= 0){ roman += 'I'; return romanNumeral(n - 1, roman) }
    else{ return roman };
}

console.log(romanNumeral(30049))

module.exports = romanNumeral;
