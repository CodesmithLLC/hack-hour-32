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
    let roman = {
        1 : 'I',
        4 : 'IV',
        5 : 'V',
        9 : 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M'
    }
    function helper(number) {
        let result = ''
        if (number > 0 && number <= 3) {
            for (let i = 0; i < number; i++ ) {
                result += roman['1']
            }
        }
        if (number === 4) {
            result += roman['4']
        }
        if (number === 5) {
            result += roman['5']
        }
        if (number > 5 && number < 9) {
            result = helper(5) + helper(number - 5)
        }
        if (number === 9) {
            result += roman['9']
        }
        if (number === 10) {
            result = roman['10']
        }
        if (number > 10 && number < 40) {
            result = helper(10) + helper(number-10)
        }
        if (number === 40) {
            result = roman['40']
        }
        if (number > 40 && number < 50) {
            result = helper(40) + helper(number-40)
        }
        if (number === 50) {
            result = roman['50']
        }
        if (number > 50 && number < 90) {
            result = helper(50) + helper(number-50)
        }
        if (number === 90) {
            result = roman['90']
        }
        if (number > 90 && number < 100) {
            result = helper(90) + helper(number-90)
        }
        if (number === 100) {
            result = roman['100']
        }
        if (number > 100 & number < 400) {
            result = helper(100) + helper(number-100)
        }
        if (number === 400) {
            result = roman['400']
        }
        if (number > 400 && number < 500) {
            result = helper(400) + helper(number - 400)
        }
        if (number === 500) {
            result = roman['500']
        }
        if (number > 500 && number < 900) {
            result = helper(500) + helper(number - 500)
        }
        if (number === 900) {
            result = roman['900']
        }
        if (number > 900 && number < 1000) {
            result = helper(900) + helper(number-900)
        }
        if (number === 1000) {
            result = roman['1000']
        }
        if (number > 1000) {
            result = helper(1000) + helper(number-1000)
        }
        return result
    }
    console.log(helper(1962))
    return helper(n)


}

console.log(romanNumeral(512))

module.exports = romanNumeral;
