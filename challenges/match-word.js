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
  // remove all non alpha-numeric chars
  str = str.replace(/[^a-z0-9+]+/gi, ' ');

  // remove all leading & trailing spaces
  str = str.trim();


  const open = [];
  let openPush = true;

  const close = [];
  let closePush = false;


  for (let i = 0; i < str.length; i++) {
	if (str[i] === ' ') {
	  openPush = false;
	}
	
	if (openPush) {
	  open.push(str[i]);
	}
	   

	if (!openPush && str[i].toLowerCase() === open[open.length-1].toLowerCase()) {
	  closePush = true;
	}

	if (closePush) {
	  close.push(str[i]);
	}

  }

  const a = open.join('').toLowerCase();
  const b = close.reverse().join('').toLowerCase();

  console.log(a);
  console.log(b);

  if (a == b) {
	return true;
  } else {
	return false;
  }

}

//console.log( matchWord('__END_DNE-----') );
//console.log( matchWord('__ENDDNE__') );
//console.log( matchWord('IF()()fi[]') );
//console.log( matchWord('for__if__rof__fi') );
//console.log( matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw') );
//console.log( matchWord('') );


module.exports = matchWord;
