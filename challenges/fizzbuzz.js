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
  // create empty array to push values into
  const arr = [];
  // create a counter that starts at one and increments by one until num
  let counter = 1;
  // while counter is less than num do the following:
  while (counter <= num) {
  // check if counter is divisible by both 3 and 5, if so, push "fizzbuzz"
  // else, push counter
    if (counter % 3 === 0 && counter % 5 === 0) {
       arr.push('fizzbuzz');
  // check if counter is divisible by 3, if so, push "fizz"
    } else if (counter % 3 === 0) {
        arr.push('fizz');
  // check if counter is divisible by 5, if so, push "buzz"
    } else if (counter % 5 === 0) {
       arr.push('buzz');
    } else {
      arr.push(counter);
    }
  // increment counter by 1
    counter += 1;
  }
  // return array
  return arr;
}

module.exports = fizzbuzz;
