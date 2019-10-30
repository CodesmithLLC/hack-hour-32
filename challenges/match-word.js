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
    //split the str
    let splitStr = str.split('');
    
    //empty string for storage
    let empty = [];
    // console.log(str.match(/[a-z]/i))
    // console.log(typeof str.match(/[a-z]/i))
    //iterate through and check if it is a letter
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === str.match(/[a-z]/i)) { ///
            empty.push(splitStr[i])
        }
    }

    //iterate through empty
    for (let i = 0; i < empty.length; i++) {
        //pop and shift those letters
        if (empty[i] === empty[empty.length-1-i]) {
            empty.pop()
            empty.shift()
        }
    }
    
    //check the length of empty- if it is 0, return true, if not, return false
    if (empty.length === 0) {
        return true;
    } return false;
}

console.log(matchWord('__END_DNE-----')); //true
console.log(matchWord('__ENDDNE__')); //false

module.exports = matchWord;

// function matchWord(str) {
//     //check if there is a space in the middle
//         //if not, return false
    
//     //else trim everything with regexp
//     let newStr = str.replace(/[^A-Za-z]/g, '');
    
//     //check if the midway is the same going outside in
//     for (let i = 0; i < newStr.length; i++) { //should i cut it in half here?
//         if (newStr[i] === newStr[newStr.length - i]) {
//             if (i === Math.floor(newStr.length/2)) {
//                 return true;
//             } 
//         } 
//     } return false;
// }
