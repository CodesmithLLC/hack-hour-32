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
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
    }

    if (n >= 5000) return "Please enter a number under 5000.";

    const numToArr = n.toString().split('');
    // mutate each digit to their corresponding full digit value (place-wise)
    for (let i = 0; i < numToArr.length; i++) {
        if (numToArr[i] !== "0") {
            numToArr[i] = numToArr[i] + '0'.repeat(numToArr.length - (i + 1));
        }
    }

    let translated = numToArr.reduce((acc, curVal) => {
        for (let key in romanNumerals) {
            // console.log(curVal);
            // console.log(key);
            if (curVal === key) {
                acc.push(romanNumerals[key]);
                return acc;
            } else if (curVal === '0') {
                return acc;
            } else if (curVal.length === 4 && parseInt(curVal[0]) <= 4) {
                acc.push("M".repeat(parseInt(curVal[0])));
                return acc;
            } else if (curVal.length === 3 && parseInt(curVal[0]) < 4) {
                acc.push("C".repeat(parseInt(curVal[0])));
                return acc;
            } else if (curVal.length === 2 && parseInt(curVal[0]) < 4) {
                acc.push("X".repeat(parseInt(curVal[0])));
                return acc;
            } 
        }
    }, [])

    // console.log(translated);
    let converted = translated.join('');
    // console.log(converted);
    return converted;
}

module.exports = romanNumeral;

function romanNumeral(n) {
    const numerals = {
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
    }
    let result = '';

    for (const letter in numerals) {
      let numberTimes = Math.floor(n / numerals[letter]);
      if (numberTimes >= 1) {
        result += letter.repeat(numberTimes);
        n = n - (numberTimes * numerals[letter]);
      }
    }
    return result;
  }

//   console.log(romanNumeral(83));

function romanNumberal(n) {}

// fellow approach

// const romanNumeral = n => {
//     let map = [
//       1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
//       40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
//     ];
     
//     let value = '';
//     for (let i = 0; n > 0 && i < map.length; i += 2) {
//       while (n >= map[i]) {
//         value += map[i + 1];
//         n -= map[i];
//       }
//     }
//     return value;
// }