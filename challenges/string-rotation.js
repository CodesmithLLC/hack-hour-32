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
  // if (s1.length !== s2.length) return false;
  // if (s1 === s2) return true;
  // for (let i = 0; i < s2.length; i++) {
  //   if (s1[0] === s2[i]) {
  //     let tempArr = s2.split('');
  //     while (s1[0] !== tempArr[0]) {
  //       tempArr.push(tempArr[0]);
  //       tempArr.shift();
  //     }
  //     s2 = tempArr.join('');
  //     if (s1 === s2) {
  //       return true;
  //     }
  //   }
  // }
  // return false;


  let s1Concat = s1 + s1;
  if (isSubstring(s1Concat, s2) && s1.length === s2.length) return true;
  return false;
}


console.log(isSubstring('hello', 'llohe'));
console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "he"))
console.log(stringRotation("hello", "ollhe"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
