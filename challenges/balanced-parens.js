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
    input = input.replace(/[a-z0-9]/gi,"")
    console.log(input)
    input = input.split("");
    let stack = [];
    for(let i = 0; i < input.length; i++){
        
        if(input[i] == "(" || input[i] == "[" || input[i] == "{"){
            stack.push(input[i]);
        }
        else if(input[i] == "]" ){
            if(stack[stack.length-1] != "["){
                return false;
            }
            else{
                stack.pop();
            }
        }
         else if(input[i] == ")" ){
            if(stack[stack.length-1] != "("){
                return false;
            }
            else{
                stack.pop();
            }
        }
         else if(input[i] == "}"){
            if(stack[stack.length-1] != "{"){
                return false;
            }
            else{
                stack.pop();
            }
        }
        }
    return true;
    }

module.exports = balancedParens;
