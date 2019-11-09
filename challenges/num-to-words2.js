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
    let numStr=num+""; //num Str is so much better
    let result;
    if(num===undefined){ return}
    //let's try this recursively 
    let places=1; //starting in 1s place
    //this counts the tens places and goes to a map, the key to the map is the number of tens places and the value is the decade
    //if key is for exampke 2, then we are at the 00 place, and the number at that place isanother key 
    let placeMap={ //1.5 is between 10 and 20
        1: {1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten"},
        1.5: {1:"Eleven",2:"Twelve",3:"Thirteen",4:"Fourteen",5:"Fifteen",6:"Sixteen",7:"Seventeen",8:"Eigheen",9:"Nineteen"},
        2: [{
            ///zero cases
            // 0:"ten",
            // 1:"" special case for 1s places resolved
            2: "Twen",3:"Thir",4:"For",5:"Fif",6:"Six",7:"Seven",8:"Eight",9:"Nine"

        },"ty"], //for example, 22 is going to be (placeMap[2])[0].2+ (placeMap[2])[1]  //Two Concat with "ty" array maped value that contains an object in the first leement and a string appendage in the second
        3: "Hundred",
         4: "Thousand",5:"Thousand", 6:"Thousand",
         7: "Million", 8: "Million", 9: "Million",
         10: "Billion",  11: "Billion",  12: "Billion",
         13: "Trillion", 14: "Trillion",15: "Trillion",
    }
    
    //if ones place
    if(num/10<=1 ){
        if(num===0){    return "Zero" }
        else if(num===1){     return "One"   }
        else if(num===2){      return "Two"  }
        else if(num===3){     return "Three" }
        else if(num===4){     return "Four" }
        else if(num===5){     return "Five"}
        else if(num===6){      return "Six"  }
        else if(num===7){      return "Seven"   }
        else if(num===8){      return "Eight" }
        else if(num===9){      return "Nine" }
        else if(num===10){ return "Ten"}
    }
//handle tens places
            places=numStr.length;
           for(let i=0;i<numStr.length;i++){
               //append the keyvalues, places is i
               let digit=Number(numStri[i]);
               let incrementPlaces=places%3; //the remainder determines if begining is tens, we use this for the "Four" and use the places for the "Billion"
                if(incrementPlaces===1){
                    result+=placeMap[incrementPlaces][digit];
                }
                else if(incrementPlaces===2 && (Number)(numStr.substring(i,i+2))>10 && (Number)(numStr.substring(i,i+2))<20){
                    //case manage 11121314 etc have a special mapping
                    result+=placeMap[1.5][digit];
                }
                else if(incrementPlaces===2){
                    //special mapping
                    result+=(placeMap[incrementPlaces])[0].digit+(placeMap[incrementPlaces])[1]; //"Twen"+"ty"
                }
                // else{
                //     //map append places starting append the front
                //     //
                //     //we care in increments of 3 places,
                    
                // }
                result+=placeMap[places];
               places--;

           }
        


return result;



      
}

module.exports = numToWords;
