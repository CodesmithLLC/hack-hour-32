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
  let result=false;
  if(s1===undefined || s2===undefined){
    return false;
  }
  if(s1.length===0 || s2.length===0){
    return false;
  }
  if(s2.length>s1.legnth){
    //substring is not greater
    return false;
  }
  else if(s1.length===s2.length){
    //must be the same length to be a rotation, taking a substring and moving it
    let temp="";
    let pivotIndex=0; //the index that has the rotated parts about the substring
    for(let i=0;i<s2.length;i++){
      //check if a substring up until the point where it does not match the substring anymore, exit out, having stored the index of the pivoted rotation and the temp from 0 up until the index in which it is no longer a substring
      let substring2=s2.substring(0,i+1);
    
      if(isSubstring(s1,substring2)){
        //if substring store temp
        temp=substring2;
        pivotIndex=i; //store the pivotal index
      
      }
      else{
        //console.log(substring2);
        break; //if we find the index in which there is no substring there is no further rotation,
      }
    }
    console.log(temp);
    //we exit the loop and see if the other half of the s2 is also a substring

    //console.log(pivotIndex);
   //console.log(s2.substring(pivotIndex+1));
    if(isSubstring(s1,s2.substring(pivotIndex+1))){
      result=true;
    
      return result;
    }
  }

  return result;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
//console.log(stringRotation("hello", "llohe"));