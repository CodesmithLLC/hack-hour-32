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
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = '';

  if (n <= 0) return undefined;

  if (isNaN(n)) return undefined;

  for (let key of Object.keys(romanNumerals)) {
    // console.log(Object.keys(romanNumerals))
    console.log(key);
    console.log(romanNumerals[key]);
    let times = Math.floor(n / romanNumerals[key]);
    n -= romanNumerals[key] * times;
    result += key.repeat(times);
  }

  return result;
}

console.log(romanNumeral(100));
console.log(romanNumeral(333));
console.log(romanNumeral(999));
console.log(romanNumeral(628));
console.log(romanNumeral(495));
console.log(romanNumeral(-1));
console.log(romanNumeral());
console.log(romanNumeral('asd'));
console.log(romanNumeral(0));

module.exports = romanNumeral;
