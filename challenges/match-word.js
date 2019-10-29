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
if(str===undefined){
    return false;
}
if(str.length===0){
    return false;
}
str=str.toLowerCase();
str=str.trim();
console.log(str);
if(str.length>=0){
    if(str.length==1 && str[0]==='-' || str.length===1 && str[0]==='_'){ return true;}
    else if(str.length===0 || str.length===2 && str.charAt(0)===str.charAt(str.length-1)){
        return true;
    }
   else if(str.charAt(0)==='_' || str.charAt(0)==='-'){
        return matchWord(str.slice(1));
    }
    else if(str.charAt(str.length-1)==='_' || str.charAt(str.length-1)==='-'){
        return matchWord(str.slice(0,str.length-1));
    }
    else if(str.charAt(0)===str.charAt(str.length-1)){
        return matchWord(str.slice(1,str.length-1));
    }
  
    
}
}

module.exports = matchWord;
console.log(matchWord('__END_DNE-----'));