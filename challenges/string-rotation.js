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
  let firstCharOfS1 = 0;
  const rotatedS2 = [];
  if(s1.length !== s2.length) return false;
  
  for (let i = 0; i < s2.length; i++) {
    if(s2[i] === s1[0]) {
      firstCharOfS1 = i;
      break;
    }
  }
 
  for (let j = firstCharOfS1; j < s2.length; j++) {
    rotatedS2.push(s2[j]);
  }
  
  for (let k = 0; k < firstCharOfS1; k++) {
    rotatedS2.push(s2[k]);
  }
  
  if(s1 === rotatedS2.join('')) {
    return true;
  }
  
  return isSubstring(s1,rotatedS2.join(''));
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
