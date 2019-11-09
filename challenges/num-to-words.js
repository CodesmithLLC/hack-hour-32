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
//input: number
//output: string
function numToWords(num) {
    let numArr = num.toString().split('')
    console.log(numArr)
    let numStr = '';
    console.log(numStr)
    const belowTen = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    const belowTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const belowMil = ['Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
    const x = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion']
    for(let i=numArr.length-1; i>=0; i--){
        if(numArr.legnth === 1){
            numStr += belowTen[numArr[numArr.length-1]];
        }
        // if(numArr.length === 2){

        // }
        // if(numArr.length === 3){

        // }
        // if(numArr.length ){
            
        // }
    }
    return numStr;
}
console.log(numToWords(0))
console.log(numToWords(43))
console.log(numToWords(2999))
console.log(numToWords(15))
// console.log(numToWords(0))
module.exports = numToWords;
