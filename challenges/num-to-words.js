// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

// if (num[i] + num[i + 1] === '') string += '';

function numToWords(num) {
    if (typeof num !== 'number') return 'Argument is NaN';
    if (num === 0) return 'Zero';
    if (num.length % 3 === 0) let placement = 3;
    if ((num.length + 1) % 3 === 0) let placement = 2;
    if ((num.length + 2) % 3 === 0) let placement = 1;
    num = num.toString();
    let string = ''
    let toggle = false;
    const singleOrTriple = {
        0: null,
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }
    const double = {
        0: null,
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
    }
    for (let i = 0; i < num.length; i++) {
        if (placement === 3) {
            placement = 2;
            string += (singleOrTriple[num[i]] ? singleOrTriple[num[i]] + 'Hundred' : '') + (double[num[i+1]] ? (num[i+1] === 1 ? ) : '')
            + singleOrTriple[num[i+2]]
        } else if (placement === 2) {
            placement = 1;
        } else if (placement === 1) {
            placement = 3;
        }
    }

}

module.exports = numToWords;































// if (num.length === 1) {
//     if (num[i] + num[i + 1] === '1') string += 'One';
//     if (num[i] + num[i + 1] === '2') string += 'Two';
//     if (num[i] + num[i + 1] === '3') string += 'Three';
//     if (num[i] + num[i + 1] === '4') string += 'Four';
//     if (num[i] + num[i + 1] === '5') string += 'Five';
//     if (num[i] + num[i + 1] === '6') string += 'Six';
//     if (num[i] + num[i + 1] === '7') string += 'Seven';
//     if (num[i] + num[i + 1] === '8') string += 'Eight';
//     if (num[i] + num[i + 1] === '9') string += 'Nine';
// } else if (i === num.length - 2 && num[i] === '1') {
//     if (num[i] + num[i + 1] === '10') string += 'Ten';
//     if (num[i] + num[i + 1] === '11') string += 'Eleven';
//     if (num[i] + num[i + 1] === '12') string += 'Twelve';
//     if (num[i] + num[i + 1] === '13') string += 'Thirteen';
//     if (num[i] + num[i + 1] === '14') string += 'Fourteen';
//     if (num[i] + num[i + 1] === '15') string += 'Fifteen';
//     if (num[i] + num[i + 1] === '16') string += 'Sixteen';
//     if (num[i] + num[i + 1] === '17') string += 'Seventeen';
//     if (num[i] + num[i + 1] === '18') string += 'Eighteen';
//     if (num[i] + num[i + 1] === '19') string += 'Nineteen';
// } else {

// }