/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let arrA = []
    let arrB = []
    let finArr = []
    for(let i = 0; i < a +1; i++){
        if(a%i === 0){
            arrA.push(i)
        }
    }
    for(let i = 0; i < b+1; i++){
        if(b%i === 0){
            arrB.push(i)
        }
    }

    for(let i = 0; i<arrA.length; i++){
        for(let x = 0; x < arrB.length; x++){
            if(arrA[i] === arrB[x]){
                finArr.push(arrA[i])
            }
        }
    }
    
    return Math.max(...finArr)
}



module.exports = gcd;