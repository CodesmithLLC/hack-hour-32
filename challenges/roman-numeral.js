/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */



 let RomanMap={
     1: 'I',
     4: 'IV',
     5: 'V',
     9: 'IX',
     10:'X',
     40: 'XL',
     50: 'L',
    90 : 'XC',
    100: 'C',
     400: 'CD',
     500:'D',
     900: 'CM',
     1000: 'M'
 }

 //only care about 1 5, 10 places and the previous places appended after or before(IV IX )in counter
 let places=[1,5,10,50, 100,500,1000]; //use this for previous places , we will use to track , they happen to be keys in the map 
//we know the manipulation of this array...use it to our advantage 
 //do we need 2 arrays to track 5s places for 9s? or use switch cases 
function romanNumeral(n) {
let result="";
//check for negatives , undefined etc 
let starting;
for(let i=places.length-1;i>=0;i--){
    //get the index so largest place holder to start concating the string 
    if(n/places[i]>1){
        //to determine the tens or decade places, largest starting index 10s position 
        starting=i; //this looop only happens once then breaks out
        break;
    }
}

function inner(starting){ //access to starting, we know the places...up until 1's (10^0) places
    //now that we know the places of the highest order we can concat their divided amount 
    let currentPlace=places[starting]; //current decimal place in romans 
    if(starting <0){
        console.log(result);
        return result;
    }
    if(n/currentPlace===4){
        //if it's a 4 we must add the previous 10's place appended and then the current 5 place(eg 50)
        result+=RomanMap[starting-1]+RomanMap[starting];//concat the next 10s or 100s before the next 50 or 500 together for a 4
        n-=currentPlace;
        console.log(n);
        console.log(result);
        return result+ inner(starting-2);
    }
    else if(n/currentPlace===9){
        result+=RomanMap[starting]+RomanMap[starting-2];
     
        n-=currentPlace;
        n-=places[starting-2];
        console.log(n);
        console.log(result);
        return result+inner(starting-3);
    }
    else if(n/currentPlace===2 || n/currentPlace===3){//2,3,
        //if it's a 2,3we concat the previous counter 
        let counter=n%currentPlace;
        while(counter>0){
            result+=RomanMap[places[starting-2]];
        }

        n-=currentPlace;
        n-=places[starting-2];
        console.log(n);
        console.log(result);
        return result+inner(starting-3);

    }
    else if(n%currentPlace===0){
        //67,8
        let counter=n%currentPlace;
        while(counter>0){
            result+=RomanMap[places[starting-1]];
        }
        n-=currentPlace;
        n-=places[starting-1];
        console.log(n);
        console.log(result);
        return result+inner(starting-2);

    }
    else{
        result+=RoamnMap[currentPlace];
        n=n-currentPlace;
        console.log(n);
        console.log(result);
    }

    //result+=RomanMap[currentPlace];
   // n-=currentPlace; //substract highest order n and go to next roman order
 
    // else{
    //     console.log(result);
    //     return result+inner(starting--);
    // }

 //r ecursively call innner
}
//recursively append... divide it by 10 modulus

console.log(n);
console.log(result);
return inner; //return function definition 
}

module.exports = romanNumeral;
console.log(romanNumeral(666));