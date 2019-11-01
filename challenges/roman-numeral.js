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
    let romanNumber = ''
    const value = n.toString();
    console.log(typeof value);
    if (n / 1000 >= 1) {
        for (let i = 1; i < n / 1000; i++) {
            romanNumber += 'M'
        }
        if (n % 1000 === 0) return romanNumber;
        n = n % 1000;
        console.log(n);
    }
    if (n % 900 < 100 && n / 100 >= 1) {
        romanNumber += 'CM'
        if (n % 900 === 0) return romanNumber;
        n -= 900;
        console.log(n);
    }
    if (n / 500 >= 1) {
        romanNumber += 'D'
        if (n % 500 === 0) return romanNumber;
        n -= 500;
        console.log(n);
    }
    if (n % 400 < 100 && n / 100 >= 1) {
        romanNumber += 'CD'
        if (n % 400 === 0) return romanNumber;
        n -= 400;
        console.log(n);
    }
    if (n / 100 >= 1) {
        for (let i = 0; i < n / 100; i++) {
            romanNumber += 'C'
        }
        if (n % 100 === 0) return romanNumber;
        n = n % 100;
        console.log(n);
    }
    if (n % 90 < 10 && n / 10 >= 1) {
        romanNumber += 'XC'
        if (n % 90 === 0) return romanNumber;
        n -= 90;
        console.log(n);
    }
    if (n / 50 >= 1) {
        romanNumber += 'L'
        if (n % 50 === 0) return romanNumber;
        n -= 50;
        console.log(n);
    }
    if (n % 40 < 10 && n / 10 >= 1) {
        romanNumber += 'XL'
        if (n % 40 === 0) return romanNumber;
        n -= 40;
        console.log(n);
    }
    if (n / 10 >= 1) {
        for (let i = 1; i < n / 10; i++) {
            romanNumber += 'X'
        }
        console.log(n);
        if (n % 10 === 0) return romanNumber;
        n = n % 10;
        console.log(n);
    }
    if (n % 9 < 1 && n / 1 >= 1) {
        romanNumber += 'IX'
        if (n % 9 === 0) return romanNumber;
        n -= 9;
        console.log(n);
    }
    if (n / 5 >= 1) {
        romanNumber += 'V'
        if (n % 5 === 0) return romanNumber;
        n -= 5;
        console.log(n);
    }
    if (n % 4 < 1 && n / 1 >= 1) {
        romanNumber += 'IV'
        if (n % 4 === 0) return romanNumber;
        n -= 4;
        console.log(n);
    }
    if (n / 1 >= 1) {
        for (let i = 0; i < n / 1; i++) {
            romanNumber += 'I'
        }
        if (n % 1 === 0) return romanNumber;
    }
    return romanNumber;
}

// console.log(399 % 100)
console.log(9 / 1 >= 1)
console.log(9 % 9 < 1)
// console.log('Should be "V", Actual is >> ', romanNumeral(5));
console.log('Should be "MCMLXIII", Actual is >> ', romanNumeral(1963));
// console.log('Should be "V", Actual is >> ', romanNumeral(5));
// console.log('Should be "V", Actual is >> ', romanNumeral(5));


module.exports = romanNumeral;
