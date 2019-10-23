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
    let numeralString = '';

    if (n <= 0) { return numeralString };

    if (n >= 1000) {
        numeralString += 'M';
        n -= 1000;
    } else if (n >= 900) {
        numeralString += 'CM';
        n -= 900;
    } else if (n >= 500) {
        numeralString += 'D';
        n -= 500;
    } else if (n >= 400) {
        numeralString += 'CD';
        n -= 400;
    } else if (n >= 100) {
        numeralString += 'C';
        n -= 100;
    } else if (n >= 90) {
        numeralString += 'XC';
        n -= 90;
    } else if (n >= 50) {
        numeralString += 'L';
        n -= 50;
    } else if (n >= 40) {
        numeralString += 'XL';
        n -= 40;
    } else if (n >= 10) {
        numeralString += 'X';
        n -= 10;
    } else if (n >= 9) {
        numeralString += 'IX';
        n -= 9;
    } else if (n >= 5) {
        numeralString += 'V';
        n -= 5;
    } else if (n >= 4) {
        numeralString += 'IV';
        n -= 4;
    } else if (n >= 1) {
        numeralString += 'I';
        n -= 1;
    }

    return numeralString + romanNumeral(n);
}

module.exports = romanNumeral;
