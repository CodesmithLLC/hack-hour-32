// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    str = str.toLowerCase();
    let stack = [];
    let tempWord = "";
    for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122){
        if(tempWord != ""){
          let top = stack[stack.length -1];
          // console.log(reverseStr(top), tempWord);
            if(reverseStr(top)!== tempWord){
              stack.push(tempWord);
              tempWord = "";
            }
            else{
              stack.pop();
              tempWord = "";
            }
        }
      }
      else{
        tempWord += str[i];
        if(i === str.length -1){
          let top = stack[stack.length -1];
          // console.log(reverseStr(top), tempWord);
          if(reverseStr(top) === tempWord){
            stack.pop();
          }
        }
      }
    }
    return stack.length === 0;
  }
  
  
  function reverseStr(str){
    if(!str) return "";
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
  }
  
  module.exports = matchWord;