// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
if(num==undefined || num<1 || Array.isArray(num) || num instanceof Object){
    //if typeof is not num like object or array, we also return undefined
    return num;
}
let result=[];
    for(let i=1;i<=num;i++){
        //we must make these XOR statements to not overprint, switch cases
        //to handle negatives we go in reverse, but here we start at 1
        if(i%3==0 && i%5==0){
            result.push('fizzbuzz');
            
        }
        else if(i%3==0){
            result.push('fizz');
        }
        else if(i%5==0){
            result.push('buzz');
        }
        else{
            result.push(i);
        }

    }
    console.log(result);
return result;
}

console.log(fizzbuzz(66));

console.log(fizzbuzz(-6));
console.log(fizzbuzz('15'));
console.log(fizzbuzz([1,2,3,"L"]));
console.log(fizzbuzz({1:2}));
module.exports = fizzbuzz;
