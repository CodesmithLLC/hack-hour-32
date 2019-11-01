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
    str = str.toLowerCase()
    const alph = new Set (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    let word = '';
    const wordsArr = [];
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (alph.has(str[i])) {
            word += str[i];
        } else {
            if (word !== '') {
                wordsArr.push(word);
                word = '';
            }
        }
    }
    if (word !== '') {
        wordsArr.push(word);
    }
    for (let i = 0; i < wordsArr.length; i++) {
        if (stack[stack.length - 1] === wordsArr[i].split('').reverse().join('')) {
            stack.pop()
        } else {
            stack.push(wordsArr[i]);
        }
    }
    if (stack[0] === undefined) {
        return true;
    } else {
        return false;
    }
}


console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord(''));

module.exports = matchWord;
