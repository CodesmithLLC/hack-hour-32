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
    let num_arr= [];
    while(num!= 0){
        num_arr.push(num%10);
        num = (num - num%10)/10;
    }
    console.log(num_arr);
    let str = '';
    for(let i = num_arr.length-1;i>-1;i-=1){
      if(i%3==2){
        if(num_arr[i]==1){
          str +='One'
        }
        if(num_arr[i]==2){
          str +='Two'
        }
        if(num_arr[i]==3){
          str +='Three'
        }
        if(num_arr[i]==4){
          str +='Four'
        }
        if(num_arr[i]==5){
          str +='Five'
        }
        if(num_arr[i]==6){
          str +='Six'
        }
        if(num_arr[i]==7){
          str +='Seven'
        }
        if(num_arr[i]==8){
          str +='Eight'
        }
        if(num_arr[i]==9){
          str +='Nine'
        }
        str+='Hundred';
      
      }
      if(i%3==1 && num_arr[i] != 1){
        if(num_arr[i]==2){
          str +='Twenty'
        }
        if(num_arr[i]==3){
          str +='Thirty'
        }
        if(num_arr[i]==4){
          str +='Forty'
        }
        if(num_arr[i]==5){
          str +='Fifty'
        }
        if(num_arr[i]==6){
          str +='Sixty'
        }
        if(num_arr[i]==7){
          str +='Seventy'
        }
        if(num_arr[i]==8){
          str +='Eighty'
        }
        if(num_arr[i]==9){
          str +='Ninety'
        }
        
      
      }
      if(i%3==1 && num_arr[i] == 1){
        if(num_arr[i-1] == 0){
          str+='Ten';
          
        }
        if(num_arr[i-1] == 1){
          str+='Eleven';
          
        }
        if(num_arr[i-1] == 2){
          str+='Twelve';
          
        }
        if(num_arr[i-1] == 3){
          str+='Thirteen';
        }
        if(num_arr[i-1] == 4){
          str+='Fourteen';
        }
        if(num_arr[i-1] == 5){
          str+='Fifteen';
        }
        if(num_arr[i-1] == 6){
          str+='Sixteen';
        }
        if(num_arr[i-1] == 7){
          str+='Seventeen';
        }
        if(num_arr[i-1] == 8){
          str+='Eighteen';
        }
        if(num_arr[i-1] == 9){
          str+='Nineteen';
        }
        num_arr[i-1] =0;
      }
      if(i%3==0){
        if(num_arr[i]==1){
          str +='One'
        }
        if(num_arr[i]==2){
          str +='Two'
        }
        if(num_arr[i]==3){
          str +='Three'
        }
        if(num_arr[i]==4){
          str +='Four'
        }
        if(num_arr[i]==5){
          str +='Five'
        }
        if(num_arr[i]==6){
          str +='Six'
        }
        if(num_arr[i]==7){
          str +='Seven'
        }
        if(num_arr[i]==8){
          str +='Eight'
        }
        if(num_arr[i]==9){
          str +='Nine'
        }
        if(i == 3){
          str+='Thousand';
        }
        if(i == 6){
          str+='Million';
        }
        if(i == 9){
          str+='Billion';
        }
        if(i == 12){
          str+='Trillion';
        }
        if(i == 15){
          str+='Quadrillion';
        }
        if(i==18){
            str+='Quintillion';
        }
      
      }
    }
    console.log(str);
}

module.exports = numToWords;
