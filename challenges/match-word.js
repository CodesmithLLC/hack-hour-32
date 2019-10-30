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
  if (str.length = 0) return true;
  const exp = /[a-z]/ig;
  let string = '';
  //if character matches a-z, then while character is still a-z, reverse it and save
  for (let i = 0; i < str.length; i += 1) {
    console.log(str[i])
    if (exp.exec(str[i])) {
      string += str[i];
      console.log(str[i])
      console.log(string)
    } 
  }
  console.log(string)
  //if another instance of reversed word exists, then return true;
}

module.exports = matchWord;

console.log(matchWord('__END_DNE-----'))