/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    //palindromes ,same number of places
    //we will recursively check for duplicates until base case is zero and substring
    if(str===undefined || str===null){ return}
    if(str.length===1 || str.length==0){ return true}
    if(str.length===2){ 
        if(str[0]===str[1]){
            return true
        }
        else { return false}
    }
    else{
        //if more than 1 unique char then it is false
        let x=str[0]
        //if char exists oposite, get the substring
        let subStr=str.substring(1)
        let ind=subStr.indexOf(x)
        if(ind>=0){ return permPalin(subStr.substring(0,ind)+subStr.substring(ind+1)) }

        else{
            //if false, check another char
            let y=str[1]
            let subStr=str.substring(0,1)+str.substring(2)
            let inde=subStr.indexOf(y)
            //the substring without ind indeclude, symmetry
            if(inde>=0){ return permPalin(subStr.substring(0,inde)+subStr.substring(inde+1)) }
            else{ return false }
        }
    }

    return false
}



// console.log(permPalin('abab')) // => true)
// console.log(permPalin('cbaba')) // => true
// console.log(permPalin('cbac')) // => false)
// console.log(permPalin('a')) //  => true)
// console.log(permPalin('kaajjkklloowwss')) //  => true)
// console.log(permPalin('kaajjkklloowwssrt')) //  => false)
//  console.log(permPalin('4448')) //  => false)
module.exports = permPalin;