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

function stringRotation(s1, s2) {
//keep shifting until it equals the shifted string?
//if it matches return true
//else return false?
  if (!s1 || !s2) {
    return false;
  } 
  // for (let i = 0; i < s1.length; i++) {
  //   let lastLetter = s2.slice(s2.length - 1);
  //   s2 = s2.slice(0, -1) //this is what moves the string around
  //   s2 = lastLetter + s2; //put the letter back in

  //   if (s2.includes(s1)) {return true};
  // }
  // return false;

  if (s1.length === s2.length) {
    return (s1 + s1).includes(s2);
  }
  return false;
}

console.log(stringRotation("hello", "hello")) //true
console.log(stringRotation("hello", "llohe")) //true
console.log(stringRotation("hello", "he")) // false
console.log(stringRotation("hello", "ollhe")) //false

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
