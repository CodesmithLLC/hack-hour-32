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
  const letters = {
    1000000000: "Billion",
    1000000: "Million",
    1000: "Thousand",
    100: "Hundred",
    90: "Ninety",
    80: "Eighty",
    70: "Seventy",
    60: "Sixty",
    50: "Fifty",
    40: "Fourty",
    30: "Thirty",
    20: "Twenty",
    19: "Nineteen",
    18: "Eighteen",
    17: "Seventeen",
    16: "Sixteen",
    15: "Fifteen",
    14: "Fourteen",
    13: "Thirteen",
    12: "Twelve",
    11: "Eleven",
    10: "Ten",
    9: "Nine",
    8: "Eight",
    7: "Seven",
    6: "Six",
    5: "Five",
    4: "Four",
    3: "Three",
    2: "Two",
    1: "One",
    0: "Zero"
  };
  let result = "";
  let digitsArray = [];
  let numSplitReversed = num
    .toString()
    .split("")
    .reverse();

    console.log(numSplitReversed);
    if (num <= 20) {
        result += letters[num];
    }
    console.log(numSplitReversed.length);


  else if ((numSplitReversed.length = 2)) {
    digitsArray.push(letters[numSplitReversed[1] + "0"]);
    digitsArray.push(letters[numSplitReversed[0]]);
    console.log(digitsArray);
  }

  else if ((numSplitReversed.length = 3)) {
    digitsArray.push(letters[numSplitReversed[2] + "00"]);
    digitsArray.push(letters[numSplitReversed[1]]);
    digitsArray.push(letters[numSplitReversed[0]]);
    console.log(digitsArray);
  }

  return result;
}
console.log(numToWords(567));
module.exports = numToWords;
