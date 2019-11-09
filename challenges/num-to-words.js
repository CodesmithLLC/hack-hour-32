// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92 120 000 000 000 000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */




function numToWords(num) {
    if (typeof num === 'number') {
        const digits = {
            0: 'Zero',
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine',
            10: 'Ten',
            11: 'Eleven',
            12: 'Twelve',
            13: 'Thirteen',
            14: 'Fourteen',
            15: 'Fifteen',
            16: 'Sixteen',
            17: 'Seventeen',
            18: 'Eighteen',
            19: 'Nineteen'
        }
        const tens = {
            20: 'Twenty',
            30: 'Thirty',
            40: 'Forty',
            50: 'Fifty',
            60: 'Sixty',
            70: 'Seventy',
            80: 'Eighty',
            90: 'Ninety'
        }
        const hundreds = {
            100: 'OneHundred',
            200: 'TwoHundred',
            300: 'ThreeHundred',
            400: 'FourHundred',
            500: 'FiveHundred',
            600: 'SixHundred',
            700: 'SevenHundred',
            800: 'EightHundred',
            900: 'NineHundred'
        }

        // check length
        const numStr = String(num)
        const nStrArr = numStr.split('');

        for (let n in digits) {
            // console.log(typeof n)
            if (numStr === n) return digits[n]; // if num === key, return word
        }
        for (let n in hundreds) {
            // console.log(typeof n)
            if (numStr === n) return hundreds[n]; // if num === key, return word
        }

        // if digits Obj keys doesn't contain num
        if (numStr.length === 3 && !Object.keys(digits).includes(numStr)) {
            if (num % 100 !== 0) {
                const r1 = num % 100;
                console.log(r1)
                if (r1 % 10 !== 0) {
                    for (let key in digits) {


                    }
                }

            }

        }

        //    // console.log(numStr)

        //    let commaCount = 0;
        //    for(let i = numStr.length-1; i>=0; i-=1){

        //    }

    }
}

//console.log(numToWords(121))

module.exports = numToWords;
