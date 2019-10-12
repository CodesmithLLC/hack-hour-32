/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    if(mean(array)== mode(array)){
        return true;
    }
    return false;
}

function mean(array){
    let m = 0;
    for(let i =0; i< array.length; i++){
        m+= array[i];
    }
    m = m/array.length;
    return n;
}

function mode(array){
    let obj = {}
    for(let i = 0; i< array.length; i++){
        if(obj[array[i]]== undefined){
            obj[array[i]] = 1;
        }
        else{obj[array[i]] = obj[array[i]] + 1;
        }
    }
    console.log(obj);
    let mode_num = 0;
    let keys = Object.keys(obj);
    console.log(keys);
    let m = 0;
    for(let i = 0; i< keys.length; i++){
     
      if(obj[keys[i]] >= mode_num) {
        m = i;
      }
    }
   return keys[m];    

}



module.exports = modemean;
