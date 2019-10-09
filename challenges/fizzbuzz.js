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
    // create array
    const arr = [];
    // create variable and initialize to 1
    let i = 1;
    // loop from 1 to num, push num i into array
    while (i <= num) {
        // if num is divisible by both 3 and 5, push 'fizzbuzz'
        if (i % 15 === 0) {
            arr.push('fizzbuzz');
        } else if (i % 3 === 0) { // if num is divisible by 3, push 'fizz'
            arr.push('fizz');
        } else if (i % 5 === 0) { //  'buzz' for nums divisible by 5
            arr.push('buzz');
        } else {        // else not divisible by 3, 5, 15
            arr.push(i);
        }
        // increment i
        i++;
    }
    // return array from 1 to num
    console.log(arr.length)
    return arr;
}

module.exports = fizzbuzz;
