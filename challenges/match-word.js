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

const testSting = 'for__if__rof__fi'
function matchWord(str) { 
       // testing with some symbols, will add more
    let reg1 = /-/gi;
    let reg2 = /_/gi;
    let tempString = str.replace(reg1, ' ')
    //We have the words trimmed and cleaned
    let tempString2 = tempString.replace(reg2, ' ').trim();
    const trimmedArray = tempString2.split(' ');
    //We are iteratig over each element and if we find another element with the same lenght we compare them
    // console.log(trimmedArray[0].charAt(1))
    console.log(trimmedArray)

    for (let i = 0; i<trimmedArray.length; i++) {
        if (trimmedArray[i].length === 0) {
            trimmedArray.splice(trimmedArray[i],1)
        }
        console.log(trimmedArray)
    }

    


 
    //reverse it
    //store it
    //look for the same (same string length = reversed to match)

}

console.log(matchWord(testSting))

module.exports = matchWord;



