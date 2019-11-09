// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 
 * 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> * 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'

 * numToWords(92120000000000000) -> 
 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  if(num < 1) return "Zero";
  let returnStr = "";
  let thousCount = 0;
  let ones = ['One','Two', 'Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  let tens = ['Twenty','Thrity','Forty','Fifty','Sixty','Seventy','Eighty',"Ninty"];
  let thousand = ["",'Thousand','Million','Billion','Trillion', 'Quadrillion','Quintillion'] ;
  while(num > 0){
    let current = num % 1000;
    if(current > 0){
      let currentStr = "";
      let h = Math.floor(current / 100);
      let t = Math.floor((current - h * 100) / 10);
      let o = Math.floor((current - h * 100 - t * 10));
      if(h > 0){
        currentStr += ones[h - 1];
        currentStr += "Hundred"
      }
      if(t > 1){
        currentStr += tens[t - 2];
        if(o > 0)
          currentStr += ones[o - 1];
      }
      else{
        if(t === 1){
          currentStr += ones[t * 10 + o - 1];
        }
        else {
          if(o > 0)
            currentStr += ones[o - 1];
        }
      }
      returnStr = currentStr + thousand[thousCount] + returnStr;  
    }
    thousCount ++;
    num = Math.floor(num / 1000);
  }
  return returnStr;
}

console.log(numToWords(4235))
console.log(numToWords(11))
console.log(numToWords(12))
console.log(numToWords(13))
console.log(numToWords(14))
console.log(numToWords(15))
console.log(numToWords(16))
console.log(numToWords(17))
console.log(numToWords(18))
console.log(numToWords(19))
console.log(numToWords(20))
console.log(numToWords(21))
console.log(numToWords(22))
console.log(numToWords(23))
console.log(numToWords(35))
console.log(numToWords(56))
console.log(numToWords(78))
console.log(numToWords(99))
console.log(numToWords(86))
console.log(numToWords(34))
module.exports = numToWords;
