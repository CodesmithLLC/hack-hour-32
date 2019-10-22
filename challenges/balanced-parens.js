/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
//balanced brackets..
//we assume inputs are all brackets or undefined
if(input===undefined){
    return;
}
if(input.length===1){
    return false; //cannot be balanced
}
else if(input.length==0){
    return true; //base case
}
else if(input.length==2){
    if((input.charAt(0)==='[' && input.charAt(input.length-1)===']') || (input.charAt(0)==='(' &&  input.charAt(input.length-1)===')') || (input.charAt(0)==='{' && input.charAt(input.length-1)==='}')){
        return true;
    }
}
else{
    //recursive case
    if((input.charAt(0)==='[' && input.charAt(input.length-1)===']') || (input.charAt(0)==='(' &&  input.charAt(input.length-1)===')') || (input.charAt(0)==='{' && input.charAt(input.length-1)==='}')){
        return balancedParens(input.substring(1,input.length-1));
    }
    else if(input.charAt(0)!=='{' && input.charAt(0)!=='[' && input.charAt(0)!=='('){
        //substring until next 
        return balancedParens(input.substring(1));
    }
    else if(input.charAt(input.length-1)!=='}' && input.charAt(input.length-1)!==']' && input.charAt(input.length-1)!==')'){
        return balancedParens(input.substring(0,input.length-1));
    }
    else{
        return false;
    }
}
}

module.exports = balancedParens;



//console.log(balancedParens('()')); // true
// console.log(balancedParens('[({})]'));   // true)
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true)
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false