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

 console.log('hi')

function numToWords(num) {
 let map = {
   Quadrillion: 1000000000000000,
   Trillion: 1000000000000,
   Billion: 1000000000,
   Million: 1000000,
   Thousand: 1000,
   Hundred: 100,
   Ninty: 90,
   Eighty: 80,
   Seventy: 70,
   Sixty: 60,
   Fifty: 50,
   Forty: 40,
   Thirty: 30,
   Twenty: 20,
   Nineteen: 19,
   Eighteen: 18,
   Seventeen: 17,
   Sixteen: 16,
   Fifteen: 15,
   Fourteen: 14,
   Thirteen: 13,
   Twelve: 12,
   Eleven: 11,
   Ten: 10,
   Nine: 9,
   Eight: 8,
   Seven: 7, 
   Six: 6,
   Five: 5,
   Four: 4,
   Three: 3,
   Two: 2, 
   One: 1,
 };

let string = '';

if (num > 1000 )
for (let key in map) {
  while(num >= map[key] && Number.isInteger(num)) {
    string = key + string;
    console.log(string)
    num = num / map[key];
  }
}
console.log(num)
if (num )



console.log(string);

}

// loop through cache divide by num
// continue until number is less than 1
// prepend in front of string
// multiply by 100 = 999
// loop through and divide, 99
// append to back of string until number is 0


console.log(numToWords(43))
console.log(2.99/2);
console.log('hi');


module.exports = numToWords;