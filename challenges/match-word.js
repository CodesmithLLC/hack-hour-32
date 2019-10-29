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

const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

function matchWord(str) {
    str = str.toLowerCase();
    str = str.replace(/[^0-9a-zA-Z]/g, ' ');

    //console.log(`str: `, str)
    // // length is even
    // const mid = str.length / 2;
    //const f = str.split('').slice(0, mid) // 0-mid
    //const r = str.split('').slice(mid, str.length)

    //console.log('f: ', f, 'r: ', r)
    // if (f.join('') === r.reverse().join('')) return true;
    const stack = [];
    const words = str.split(' ').filter(ele => ele !== '');
    //console.log(`words: `, words)

    if (words.length % 2 !== 0) return false;
    for (let i = 0; i < words.length; i++) {
        if (!stack.includes(reverseStr(words[i]))) {
            stack.push(words[i]);
            //console.log(`stack`, stack)
        } else {
            stack.pop()
        }
    }
    //console.log(`stack: `, stack)
    // return boolean
    return stack.length === 0;
    // return false;
}

console.log(matchWord('')) // true 
console.log(matchWord('__END_DNE-----')) // true
console.log(matchWord('IF()()fi[]')) // true
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')) // true
console.log(matchWord('__ENDDNE__')) // false
console.log(matchWord('for__if__rof__fi')) // false

module.exports = matchWord;
