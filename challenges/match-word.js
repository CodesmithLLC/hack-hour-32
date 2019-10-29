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
    const stack = [];
    let spaceBetween = false;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i ++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
        str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            if (stack[stack.length - 1] !== str[i]) {
                stack.push(str[i]);
                spaceBetween = false;
            }
            if (stack[stack.length -1] === str[i] && spaceBetween === true) {
                stack.pop();
            } 
        } else {
            spaceBetween = true;
        }
    }
    return stack.length > 0 ? false: true;
}

module.exports = matchWord;
