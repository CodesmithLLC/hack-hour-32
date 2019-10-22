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
    const newBalanced = [];
    const count1 = 0;
    const count2 = 0;
    const count3 = 0;
    // const balanced = {
    //     '(' : ')'
    // }
    const paired = ['(',')']
    for (let i=0; i<input.length; i++){
        if (input[i] === paired[0] &&)
    }
    // for (let i=0; i<input.length; i++){
    //     if (input[i] == '[' || input[i] == '{' || input[i] == '('){
    //         newBalanced.push(input[i]);
    //         if (input[i] == ']' || )
    //     }else if (){

    //     }
    // }
    // const balancedPair = ['{','}','[',']','(',')']
    // for (let i=0; i<input.length; i++){
    //     for (let keys in balanced){
    //         if (input[i]=== keys){
    //             count1++
    //             if (input.includes(balanced[keys])){

    //             }
    //         }else{

    //         }
    //     }
    // }
    // for (let i=0; i<input.length; i++){
    //     for (let keys in balanced){
    //         if (input[i] === keys){
    //             for (let j=i+1; j<input.length; j++){
    //                 if (input)
    //             }
    //         }
    //     }
    // }
}
console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}')); // false
module.exports = balancedParens;
