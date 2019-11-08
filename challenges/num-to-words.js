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
    function calc (num){
      const ones = ['','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen','Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
      const tens = ['Zero', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy','Eighty','Ninety']
      if (num / 10 < 1) {
          return ones[num]
      }
      if (num / 20 < 1) {
          return teens[num % 10]
      }
      if (num / 100 < 1) {
          return tens[Math.floor(num / 10)] + calc(num - (Math.floor(num / 10) * 10))
      }
      if (num / 1000 < 1) {
          return ones[Math.floor(num / 100)] + 'Hundred' + calc(num - (Math.floor(num / 100) * 100))
      }
      if (num / 1000000 < 1) {
          return calc(Math.floor(num / 1000)) + 'Thousand' + calc(num % 1000)
      }
      if (num / 1000000000 < 1) {
          return calc(Math.floor(num / 1000000)) + 'Million' + calc(num % 1000000)
      }
      if (num / 1000000000000 < 1) {
          return calc(Math.floor(num / 1000000000)) + 'Billion' + calc(num % 1000000000)
      }
      if (num / 1000000000000000 < 1) {
          return calc(Math.floor(num / 1000000000000)) + 'Trillion' + calc(num % 1000000000000)
      }
      if (num / 1000000000000000000 < 1) {
          return calc(Math.floor(num / 1000000000000000)) + 'Quadrillion' + calc(num % 1000000000000000)
      }
      }
       if (calc(num) === '') {
        return 'zero'
    } else {
      return calc(num)
    }
      
  }

module.exports = numToWords;
