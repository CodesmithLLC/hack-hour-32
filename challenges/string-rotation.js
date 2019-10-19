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

  if (s1 == s2) return true;

  const arr1 = s1.split("");
  const mid = arr1.length / 2;

  const rotationFront = arr1.slice(0, mid);
  const rotationBack = arr1.slice(mid, arr1.length);

  const rotated1 = rotationBack.concat(rotationFront).join("").toString();

  return rotated1 == s2; 
}

  /*
console.log(stringRotation("hello", "llohe"));
console.log(stringRotation("hello", "hello"));
console.log(stringRotation("hello", "he"));
console.log(stringRotation("hello", "ollhe"));
  */

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
