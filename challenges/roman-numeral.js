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

function romanNumeral(n, output = '') {
    if (n === 0) return output;
    if (n >= 1000) {
        return romanNumeral(n - 1000, output += 'M');
    } else if (n >= 900) {
        return romanNumeral(n - 900, output += 'CM');
    } else if (n >= 500) {
        return romanNumeral(n - 500, output += 'D');
    } else if (n >= 400) {
        return romanNumeral(n - 400, output += 'CD');
    } else if (n >= 100) {
        return romanNumeral(n - 100, output += 'C');
    } else if (n >= 90) {
        return romanNumeral(n - 90, output += 'XC');
    } else if (n >= 50) {
        return romanNumeral(n - 50, output += 'L');
    } else if (n >= 40) {
        return romanNumeral(n - 40, output += 'XL');
    } else if (n >= 10) {
        return romanNumeral(n - 10, output += 'X');
    } else if (n >= 9) {
        return romanNumeral(n - 9, output += 'IX');
    } else if (n >= 5) {
        return romanNumeral(n - 5, output += 'V');
    } else if (n >= 4) {
        return romanNumeral(n - 4, output += 'IV');
    } else if (n >= 1) {
        return romanNumeral(n - 1, output += 'I');
    }
}

console.log(romanNumeral(1999))

module.exports = romanNumeral;
