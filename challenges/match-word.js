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
  let testStr = str;
  let testArr = [];
  let testObj = {};
  let testTruth = false;
  const wordContainer = [];

  if (str === '') return true;

  testStr = testStr.replace(/[^\w\s]/gi, ' ');
  testStr = testStr.replace(/_/gi, ' ');
  testStr = testStr.trim();
  testStr = testStr.toLowerCase();

  testArr = testStr.split(' ');

  // testObj = Object.assign({}, testArr);
  for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] !== '') testObj[testArr[i]] = testArr[i];
  }

  for (let key in testObj) {
    console.log(key);
    console.log(testObj[key]);
    const reverse = testObj[key]
      .split('')
      .reverse()
      .join('');
    //
    console.log(reverse);

    if (reverse === wordContainer[wordContainer.length - 1]) {
      wordContainer.pop();
      testTruth = true;
    } else {
      wordContainer.push(testObj[key]);
      testTruth = false;
    }
  }

  console.log('TEST'.toLowerCase());
  console.log(testStr);
  console.log(testArr);
  console.log(testObj);
  return testTruth;
}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;
