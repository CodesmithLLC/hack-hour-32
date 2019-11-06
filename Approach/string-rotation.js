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
  //last and first letter togethers
  let end = s1[s1.length-1]+s1[0];
  //unequal length
  if (s1.length!==s2.length) return false;

  for (let i = 0; i < s2.length-1; i++){
    //check two letters at a time
    let two = s2[i] + s2[i+1];
    //check two see if two consecutice letters are a substring of original string
    if(!(isSubstring(s1,two)) && !(isSubstring(end,two))) return false;
  }
  return true;
}

function stringRotation(s1, s2){
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
