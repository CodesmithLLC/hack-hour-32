/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

//console.log(`is substring `, isSubstring('hello', 'llohe'))

function stringRotation(s1, s2) {
  // unequal lengths ==> false
  if (s1.length !== s2.length) return false;
  // loop over s2
  for (let i = 0; i < s2.length; i++) {
    let s2One = s2.slice(0, s2.length - 1);
    // console.log('s21 ', s2One)
    let s2Two = s2.slice(s2.length - 1);
    //console.log('s22 ', s2Two)
    // reconstruct s2
    s2 = s2Two + s2One; // concat a char of s2 to other part of s2
    console.log(`s2 `, s2)

    console.log(`=========== ${i}th iteration =====`)
    if (isSubstring(s1, s2) === true) {
      console.log(s1, ' and ', s2)
      return true;
    }
  }
  return false;

}

//console.log(stringRotation("hello", "ollhe")) // F
//console.log(`should be true`, stringRotation("hello", "hello")) // T
console.log(`stringRot 1 should be true : `, stringRotation("hello", "llohe")) // T
//console.log(`stringRot 2 should be false: `, stringRotation("hello", "he")) // F

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
