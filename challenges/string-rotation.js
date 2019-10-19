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
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;

  // For loop and invokation of isSubtring in the loop
  // for (let i = 0; i < s1.length; i++) {
  //   const lastChar = s2.slice(-1);
  //   s2 = s2.slice(0, -1);
  //   s2 = lastChar + s2;

  //   // if (isSubstring(s1, s2)) return true;
  //   if (s1.includes(s2)) return true;
  // }
  // return false;

  // Double the initial string then check if target string is inside initial string
  // if (s1.length === s2.length) {
  // if (isSubstring(s1 + s1, s2)) return true;
  if ((s1 + s1).includes(s2)) return true;
  return false;
  // }
}

console.log(stringRotation('hello', 'llohe'));
console.log(stringRotation('hello', 'ollhe'));
console.log(stringRotation('hello', 'hello'));
console.log(stringRotation('hello', 'he'));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
