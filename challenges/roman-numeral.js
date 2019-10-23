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
    const m = ["", "M", "MM","MMM"];
    const c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

    let thousands = m[Math.floor(n / 1000)];
    let hundreds = c[Math.floor((n % 1000)/ 100)];
    let tens = x[Math.floor((n % 100) / 10)];
    let ones = i[Math.floor((n % 10))] || "";

    return thousands + hundreds + tens + ones

}

module.exports = romanNumeral;
