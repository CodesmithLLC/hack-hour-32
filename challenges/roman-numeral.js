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

    // check input type
    if (isNaN(n)) return NaN;
    // 0 ===> 'none'
    if (n === 0) return 'nulla';

    let res = ''; // empty string for concat
    const nums = [1, 5, 10, 50, 100, 500, 1000].reverse(),
        roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'].reverse();

    // iterate over arabic num
    for (let i = 0; i < nums.length; i++) {
        while (n % nums[i] < n) { // while remainder is less than n
            //console.log(`n%nums[i]: `, n % nums[i])
            res += roman[i]; // concat roman num to res string
            //console.log(`roman[i]: `, roman[i], ' res: ', res)
            // n = n - nums[i]
            //console.log(`n before decrementing: `, n, `nums[i]: `, nums[i])
            n -= nums[i] // n = n - num[i], loop again to convert remaining to roman
            //console.log(`decremented n: `, n)
        }
        //console.log(`==============`)
    }
    return res;
}
//console.log(romanNumeral(0)) // 'nulla'
//console.log(romanNumeral(3))
//console.log(romanNumeral(111)) // CXI
//console.log(romanNumeral(1234)) // MCCXXXIV

module.exports = romanNumeral;
