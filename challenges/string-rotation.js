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

function rotateString(arr) {  
  for (let i = 0; i < arr.length; i++) {
    let placeholder1 = arr[i];
    let placeholder2 = arr[arr.length -1];

    arr[i] = placeholder2;
    arr[arr.length - 1] = placeholder1;
  }

  return arr;
}

// console.log(rotateString(['h', 'e', 'l', 'l', 'o']));
// console.log(rotateString(['o', 'h', 'e', 'l', 'l']));


function stringRotation(s1, s2) {
  const strArr1 = [...s1];
  const strArr2 = [...s2];
  // console.log(strArr1);
  // console.log(strArr2);

  let strLength = s1.length;
  let correctChecks = 0;

  while (strLength > 0) {
    for (let i = 0; i < s1.length; i++) {
      if (strArr1[i] === strArr2[i]) {
        correctChecks++;
        // console.log(correctChecks);
      }
    }
    if (correctChecks === strLength) {
      return true;
    } else {
      correctChecks = 0;
      rotateString(strArr2)     
      console.log(rotateString(strArr2))
      }
      strLength--;
      // console.log(strLength);
    }

  return false;
}

// console.log(stringRotation("hello", "llohe"));
// console.log(stringRotation("hello", "hlloe"));
// console.log(stringRotation("hello world", "llo worldhe"))


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
