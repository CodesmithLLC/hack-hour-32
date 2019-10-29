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
	if (str.length === 0) {return true;}
	str = str.toLowerCase();
	str = str.replace(/[^a-z]/g, ' ');
  let newArray = str.split(' ').filter( el => el != '');

// ------------------------

  let object = {};
  let stack = [];

  newArray.forEach( el => {
    if ( !Object.keys(object).includes(el) && !Object.values(object).includes(el) ) {
      object[el] = el.split('').reverse().join('');
      stack.push(el);
    } else if (object[stack[stack.length - 1]] === el) {
      stack.pop();
    } else {
      stack.push(el);
    }
  });
  return stack.length === 0;
}

module.exports = matchWord;
