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
  let romanNum = '';
  
  if (n === 0) {
    return romanNum;
  }

  if (n >= 1000) {
    romanNum += 'M'
    n -= 1000
  }
  else if (n >= 900) {
    romanNum += 'CM'
    n -= 900
  }
  else if (n >= 500) {
    romanNum += 'D'
    n -= 500
  }
  else if (n >= 400) {
    romanNum += 'CD'
    n -= 400
  }
  else if (n >= 100) {
    romanNum += 'C'
    n -= 100
  }
  else if (n >= 90) {
    romanNum += 'XC'
    n -= 90
  }
  else if (n >= 50) {
    romanNum += 'L'
    n -= 50
  }
  else if (n >= 40) {
    romanNum += 'XL'
    n -= 40
  }
  else if (n >= 10) {
    romanNum += 'X'
    n -= 10
  }
  else if (n >= 9) {
    romanNum += 'IX'
    n -= 9
  }
  else if (n >= 5) {
    romanNum += 'V'
    n -= 5
  }
  else if (n >= 4) {
    romanNum += 'IV'
    n -= 4
  }
  else if (n >= 1) {
    romanNum += 'I'
    n -= 1
  }

  return romanNum + romanNumeral(n)

}

console.log(romanNumeral(287))

module.exports = romanNumeral;
