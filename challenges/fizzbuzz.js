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
    if (num === undefined || typeof num !== "number") {
        return 'Please enter a valid number.'
    }

    if (num < 0) {
        return 'Please enter a number that is greater than 0.'
    }

    const fizzbuzzed = [];

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzzed.push("fizzbuzz");
        } else if (i % 3 === 0) {
            fizzbuzzed.push("fizz");
        } else if (i % 5 === 0) {
            fizzbuzzed.push("buzz");
        } else {
            fizzbuzzed.push(i);
        }
    }

    return fizzbuzzed;
}

console.log(fizzbuzz(16));
console.log(fizzbuzz(-2))
console.log(fizzbuzz('Hi'));
console.log(fizzbuzz(undefined));

module.exports = fizzbuzz;
