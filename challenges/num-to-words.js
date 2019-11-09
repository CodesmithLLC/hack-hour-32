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

function numToWords(num) {
    if (num === 0) {
        return 'Zero';
    }
    if (num === 1) {
        return 'One'
    }``
    if (num === 2) {
        return 'Two'
    }
    if (num === 3) {
        return 'Three'
    }
    if (num === 4) {
        return 'Four'
    }
    if (num === 5) {
        return 'Five'
    }
    if (num === 6) {
        return 'Six'
    }
    if (num === 7) {
        return 'Seven'
    }
    if (num === 8) {
        return 'Eight'
    }
    if (num === 9) {
        return 'Nine'
    }
    if (num === 10) {
        return 'Ten'
    }
    if (num === 11) {
        return 'Eleven'
    }
    if (num === 12) {
        return 'Twelve'
    }
    if (num === 13) {
        return 'Thirteen'
    }
    if (num === 14) {
        return 'Fourteen'
    }
    if (num === 15) {
        return 'Fifteen'
    }
    if (num > 15 && num < 20) {
        if (num === 18) {
            return 'Eighteen'
        }
        return numToWords(num-10) + 'teen'
    } 
    if (num === 20) {
        return 'Twenty'
    }
    if (num > 20 & num < 30) {
        return 'Twenty' + numToWords(num-20)
    }


}


console.log(numToWords(28))
module.exports = numToWords;
