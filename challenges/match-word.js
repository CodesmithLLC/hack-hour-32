// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a wording are "closed". Write a function that 
//takes a wording and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let word = '';
  const store = [];

  for (let i = 0; i < str.length; i += 1) {
    if (/^[a-zA-Z]/.test(str[i])) {
      word += str[i];
      if (str[i + 1] === undefined) store.push(word.toLowerCase());
    } 
    else if (word && !/^[a-zA-Z]/.test(str[i])) {
      store.push(word.toLowerCase());
      word = '';
    }
  }
  
  const compare = [];
  for (let i = 0; i < store.length; i += 1) {
    const reversedString = store[i].split('').reverse().join('');
    if (reversedString !== compare[compare.length - 1]) compare.push(store[i]);
    else if (reversedString === compare[compare.length - 1]) compare.pop();
  }

  if (compare.length) return false;
  else return true;
}

// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
// console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord(''));


module.exports = matchWord;
