// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

function fizzbuzz(num) {
    // create an empty array for results. 
    const resultArray = [];
    //loop up to the input num
    for (let i = 1; i <= num; i++){
    // for numbers divisible by BOTH 3 & 5, push to resultArray the string 'fizzbuzz'
        if (i % 3 === 0 && i % 5 === 0){
            resultArray.push('fizzbuzz')
        }
        //for numbers divisible by 3,instead push to resultArray  string 'fizz'
        else if (i % 3 === 0){
            resultArray.push('fizz')
        } 
        //for numbers divisible by 5, instead  push to resultArray  the string 'buzz'
        else if (i % 5 === 0){
            resultArray.push('buzz')
        } 
        // if i does not satisfy any of these requirements, push the value of i to the resultArray.  
        else {
            resultArray.push(i);
        }
    }
    // return the result array
    return resultArray;
    
    };
    // Test Cases
    console.log(fizzbuzz(16)); //=> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
    // console.log(fizzbuzz(10)); //=> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz']
    