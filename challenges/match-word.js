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
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let firstWord = [];
  let lastWord = [];

  let strArr = str.toLowerCase().split("");
  while (strArr) {
    if (alphabet.indexOf(strArr[0]) === -1) {
      strArr.splice(0, 1);
      console.log(strArr);
    }
    if (alphabet.indexOf(strArr[strArr.length - 1]) === -1) {
      strArr.splice(strArr.length - 1, 1);
      console.log(strArr);
    } else break;
  }

  for (let i = 0; i < strArr.length; i++) {
    if (alphabet.indexOf(strArr[i]) === -1) {
      firstWord = strArr.splice(0, i);
      console.log(firstWord);
      console.log(strArr);
      break;
    }
    console.log(strArr.length);
    lastWord = strArr.splice(
      strArr.length - firstWord.length,
      firstWord.length
    );
    console.log(lastWord);
  }
  if ((lastWord = firstWord.reverse())) {
    return true;
  } else {
    return false;
  }
}
console.log(matchWord("for__if__rof__fi"));

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true
module.exports = matchWord;
