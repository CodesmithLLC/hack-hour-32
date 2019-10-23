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
  const cache = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    VI: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let roman = ''
  for (let key in cache) {
    while (n >= cache[key]) {
      roman += key;
      n -= cache[key];
    } 
  }
  return roman;
}

module.exports = romanNumeral;

console.log(romanNumeral(11))
